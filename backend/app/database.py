import logging
from sqlalchemy import create_engine, text
from sqlalchemy.orm import declarative_base, sessionmaker
from backend.app.config import settings

logger = logging.getLogger("campuspulse.database")

Base = declarative_base()

def get_engine():
    db_url = settings.DATABASE_URL
    try:
        if db_url.startswith("postgresql"):
            # Test quick connection with short timeout
            engine = create_engine(
                db_url,
                pool_pre_ping=True,
                connect_args={"connect_timeout": 3}
            )
            with engine.connect() as conn:
                conn.execute(text("SELECT 1"))
            logger.info("Successfully connected to PostgreSQL database.")
            return engine, "postgresql"
    except Exception as e:
        logger.warning(
            f"Could not connect to PostgreSQL ({e}). Falling back to local SQLite database ({settings.SQLITE_FALLBACK_URL})."
        )
    
    # Fallback to SQLite
    engine = create_engine(
        settings.SQLITE_FALLBACK_URL,
        connect_args={"check_same_thread": False}
    )
    logger.info("Using SQLite database for local execution.")
    return engine, "sqlite"

engine, active_db_dialect = get_engine()
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
