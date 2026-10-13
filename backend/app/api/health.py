from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text
from datetime import datetime, timezone
import httpx
from backend.app.database import get_db, active_db_dialect
from backend.app.config import settings

router = APIRouter(tags=["Health"])

@router.get("/health")
async def health_check(db: Session = Depends(get_db)):
    # Test database connectivity
    db_status = "connected"
    try:
        db.execute(text("SELECT 1"))
    except Exception as e:
        db_status = f"error: {str(e)}"
    
    # Test Ollama connectivity
    ollama_status = "offline"
    ollama_model_available = False
    try:
        async with httpx.AsyncClient(timeout=1.5) as client:
            resp = await client.get(f"{settings.OLLAMA_BASE_URL}/api/tags")
            if resp.status_code == 200:
                ollama_status = "online"
                models = resp.json().get("models", [])
                ollama_model_available = any(
                    m.get("name", "").startswith(settings.OLLAMA_MODEL) for m in models
                )
    except Exception:
        ollama_status = "offline"
    
    return {
        "status": "healthy" if db_status == "connected" else "degraded",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "project": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "environment": settings.ENVIRONMENT,
        "database": {
            "status": db_status,
            "dialect": active_db_dialect,
        },
        "llm": {
            "provider": "Ollama",
            "status": ollama_status,
            "configured_model": settings.OLLAMA_MODEL,
            "model_ready": ollama_model_available,
            "fallback_active": (ollama_status != "online")
        }
    }
