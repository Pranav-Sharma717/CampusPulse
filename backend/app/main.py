from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.app.config import settings
from backend.app.database import engine, Base
from backend.app.api.health import router as health_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: ensure database schema tables exist
    Base.metadata.create_all(bind=engine)
    yield
    # Shutdown logic (if any)

# Create FastAPI instance with lifespan handler
app = FastAPI(
    title=settings.PROJECT_NAME,
    description="CampusPulse — Keep Moving Forward | Context-Aware Student Decision Support Engine",
    version=settings.VERSION,
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:3000", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(health_router, prefix=settings.API_V1_STR)

@app.get("/")
def root():
    return {
        "message": "Welcome to CampusPulse API — Keep Moving Forward.",
        "documentation": "/docs",
        "health_check": f"{settings.API_V1_STR}/health"
    }
