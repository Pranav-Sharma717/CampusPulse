import os
from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "CampusPulse"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api"
    ENVIRONMENT: str = os.getenv("ENVIRONMENT", "development")
    
    # Database
    DATABASE_URL: str = os.getenv(
        "DATABASE_URL", 
        "postgresql+psycopg2://postgres:postgres@localhost:5432/campuspulse"
    )
    # SQLite fallback enabled for local environments / test runners if postgres is unreachable
    SQLITE_FALLBACK_URL: str = "sqlite:///./campuspulse.db"
    
    # Security
    SECRET_KEY: str = os.getenv("SECRET_KEY", "campuspulse_super_secret_jwt_key_2026_capstone")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24  # 24 hours
    
    # Ollama / LLM configuration
    OLLAMA_BASE_URL: str = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")
    OLLAMA_MODEL: str = os.getenv("OLLAMA_MODEL", "llama3.2")
    
    # Vector Embeddings
    EMBEDDING_MODEL_NAME: str = "all-MiniLM-L6-v2"
    EMBEDDING_DIMENSION: int = 384
    
    # Document storage
    UPLOAD_DIR: str = os.path.join(os.path.dirname(os.path.dirname(__file__)), "uploads")
    
    model_config = {
        "case_sensitive": True,
        "env_file": ".env",
        "extra": "ignore"
    }

settings = Settings()
