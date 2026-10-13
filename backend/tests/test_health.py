from fastapi.testclient import TestClient
from backend.app.main import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    data = response.json()
    assert "CampusPulse" in data["message"]
    assert "documentation" in data
    assert data["health_check"] == "/api/health"

def test_health_check():
    response = client.get("/api/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] in ["healthy", "degraded"]
    assert data["project"] == "CampusPulse"
    assert data["version"] == "1.0.0"
    assert "database" in data
    assert "llm" in data
    assert data["database"]["status"] == "connected"
