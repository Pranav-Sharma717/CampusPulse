# CampusPulse — Keep Moving Forward
> **An AI-Powered Context-Aware Student Assistance Platform**  
> *Transforming Decision Fatigue into Verifiable Academic, Financial, and Career Momentum.*

---

## 📌 1. What is CampusPulse?

College students are inundated with fractured, siloed tools:
* **Google Calendar** tracks slots without understanding syllabus difficulty or urgency.
* **University LMS** lists due dates without factoring in available hours or cognitive fatigue.
* **Finance tools** track past expenses without calculating how budget deficits create academic anxiety.
* **Job boards** recommend opportunities without checking course schedule conflicts or prerequisite gaps.

This fragmentation produces acute **decision fatigue** and procrastination. Students spend more time deciding *what* to do next than actually doing it.

**CampusPulse** solves this by unifying a student's:
1. **Academic commitments** (assignments, midterms, lab reports, syllabus weights)
2. **Financial constraints** (weekly discretionary budget, burn rates, deficit predictions)
3. **Availability & Energy** (free calendar windows, mid-day focus alertness vs. late-night fatigue)
4. **Career aspirations** (verified skill profiles, hackathons, internships, scholarships)

The platform processes these multi-dimensional signals into **one single, explainable next best actionable step**.

---

## 🏗️ 2. System Architecture & Tech Stack

CampusPulse is engineered as an asynchronous, local-first full-stack application designed to run on a student laptop without requiring paid external APIs.

```
                           +----------------------------------------+
                           |           React 18 + Vite              |
                           |  TypeScript, Tailwind CSS, Recharts    |
                           +----------------------------------------+
                                              │
                                    HTTP / Reverse Proxy
                                              ▼
                           +----------------------------------------+
                           |          FastAPI Backend               |
                           |  Pydantic v2, JWT Auth, Lifespan Hooks  |
                           +----------------------------------------+
                                   │                    │
                    SQLAlchemy / Alembic          RAG & CAR Engine
                                   │                    │
              ┌────────────────────┴───────────┐        ▼
              ▼                                ▼  +----------------------+
+----------------------------+   +-------------+  | Local Ollama LLM     |
| PostgreSQL with pgvector   |   | SQLite      |  | (llama3.2 / Mistral) |
| (Production / Docker)      |   | (Fallback)  |  +----------------------+
+----------------------------+   +-------------+
```

### Technology Breakdown
* **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, FontAwesome 6.5, Recharts.
* **Backend**: Python 3.12+, FastAPI, Pydantic v2, SQLAlchemy 2.0, Alembic.
* **Database**: PostgreSQL 16 with `pgvector` extension; resilient zero-config SQLite fallback for local test execution.
* **Vector & Document Processing**: PyMuPDF (`fitz`), Sentence Transformers (`all-MiniLM-L6-v2`), Scikit-learn (cosine similarity).
* **LLM Engine**: Ollama running locally (`llama3.2`), with deterministic non-LLM algorithmic fallbacks.
* **Testing & DevOps**: `pytest`, `pytest-asyncio`, Docker Compose.

---

## 🚀 3. How to Run the Application

### Prerequisites
* **Python 3.11+** installed
* **Node.js v18+** & **npm** installed
* *(Optional)* **Docker Desktop** (for containerized PostgreSQL with pgvector)
* *(Optional)* **Ollama** installed locally (`ollama pull llama3.2`)

---

### Method A: Local Development Setup (Quickstart)

#### 1. Clone the repository
```bash
git clone https://github.com/Pranav-Sharma717/CampusPulse.git
cd CampusPulse
```

#### 2. Setup and Start Backend
```powershell
# Create Python virtual environment
python -m venv backend\.venv

# Activate virtual environment
# On Windows:
backend\.venv\Scripts\activate
# On Linux/macOS:
# source backend/.venv/bin/activate

# Install backend dependencies
pip install -r backend\requirements.txt

# Start FastAPI backend
uvicorn backend.app.main:app --host 127.0.0.1 --port 8000 --reload
```
* **API Documentation (Swagger UI)**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
* **API Health Check**: [http://127.0.0.1:8000/api/health](http://127.0.0.1:8000/api/health)

#### 3. Setup and Start Frontend
In a new terminal:
```powershell
cd frontend

# Install frontend dependencies
npm install

# Start Vite dev server
npx vite --port 5173 --host 127.0.0.1
```
* **Web Application**: [http://127.0.0.1:5173/](http://127.0.0.1:5173/)

---

### Method B: Docker Compose (PostgreSQL with pgvector)

To run the complete production-grade stack including PostgreSQL with vector support:
```bash
docker compose up --build
```
* Frontend: `http://localhost:5173`
* Backend API: `http://localhost:8000`
* PostgreSQL: `localhost:5432`

---

### Running Automated Tests
```powershell
# Backend pytest suite:
backend\.venv\Scripts\pytest -v

# Frontend TypeScript & Vite production build:
cd frontend && npm run build
```

---

## 📊 4. Development Status

### ✅ Completed: Phase 1 (Audit & Architecture Foundation)
* [x] **Prototype Audit & Preservation**: Full inspection of the 3,174-line prototype; preserved original prototype at [`campuspulse.html`](./campuspulse.html).
* [x] **Modular Frontend Architecture**: Migrated HTML prototype into clean React 18 TypeScript components:
  * `TopNoticeBar`: Capstone banner with context and live API status.
  * `Navigation`: Responsive navigation bar with live backend database/LLM status badge.
  * `Hero`: High-impact landing page preserving typography and glassmorphic aesthetics.
  * `Dashboard`: 6-card unified dashboard (priority action, deadlines, budget, course cadence, opportunities, productivity metric).
  * `ProductivityCoach`: Prescriptive single-action card with algorithmic explanation dropdown.
  * `AcademicAssistant`: Tabbed assignment tracker, Ebbinghaus spaced-repetition plan generator, and adaptive schedule timeline.
  * `NotesSummarizer` (PDF Intelligence Studio): Drag-and-drop file ingestion, preloaded lecture decks, executive summaries, high-yield theorems, 3D interactive flip flashcards, and diagnostic mini-quiz with Web Audio chimes.
  * `FinanceAssistant`: Multi-tier budget breakdown, quick expense logger, weekend deficit warnings, and affordable substitution suggestions.
  * `OpportunityHub`: Category-filtered career radar (internships, hackathons, scholarships, contests) with verified skill matches and prerequisite radar.
  * `Marketplace`: Course-tailored peer resource discovery layer with direct senior contact and campus repro vouchers.
  * `ContextEngine`: Multi-dimensional scenario simulator (Exam Rush, Weekend Chill, Placement Prep).
  * `ArchitectureSection`: Educational multi-tier pipeline and mathematical formulas for viva examiners.
  * `SupervisorPitch`: Final-year capstone review notes, problem statement, UVP, and examiner Q&A.
  * `Modals`: Real 25:00 Pomodoro countdown timer with Web Audio 432Hz alpha tones, rescheduling dialog, and animated toast notification system.
* [x] **FastAPI Backend Gateway**: Initialized with modern lifespan event handlers, CORS configuration, Pydantic v2 `SettingsConfigDict`, and OpenAPI documentation.
* [x] **Database & Resilience Layer**: Configured SQLAlchemy engine with PostgreSQL (`pgvector`) support and zero-config local SQLite fallback for testing environments without active Docker daemons.
* [x] **Database Migrations**: Initialized Alembic migration environment (`backend/alembic`).
* [x] **Health Check Probe**: Implemented `/api/health` probing database connectivity and local Ollama server state.
* [x] **Frontend-to-Backend Bridge**: Configured Vite reverse proxy (`/api` -> `http://127.0.0.1:8000`) and validated end-to-end communication.
* [x] **Automated Testing**: 100% test pass rate in pytest; zero TypeScript compilation errors in frontend production build.

---

### ⏳ Upcoming: Phases 2 – 5

| Phase | Module | Objectives |
| :--- | :--- | :--- |
| **Phase 2** | **Core Application** | User authentication (JWT + bcrypt), student profile persistence, persistent assignment CRUD, finance transaction ledger, and database seeders. |
| **Phase 3** | **Intelligence Engine** | Explainable Context-Aware Ranking (CAR) algorithm, PyMuPDF vector RAG with pgvector embeddings, and content-based cosine similarity opportunity matcher. |
| **Phase 4** | **Complete UX** | Focus session history persistence, dynamic Recharts visualizations, and interactive peer marketplace listing creator. |
| **Phase 5** | **Validation & Defense** | End-to-end integration test suite, capstone viva demonstration walkthrough, and benchmark validation. |

---

## 💡 5. Novel Innovation: Beyond Generic Technology Integration

Many capstone projects merely string together APIs (e.g., "React + FastAPI + an LLM prompt"). CampusPulse introduces a fundamentally novel academic and engineering foundation:

### 🧠 The Cognitive-Financial Elasticity Index (CFEI) & Bi-Directional Decision Backpressure

#### 1. The Core Scientific Premise
Traditional task schedulers treat a student's available hour as an empty bucket: *an hour is an hour*. In reality, human cognitive capacity is elastic and heavily modulated by emotional and physical context:
* **Cognitive Drag from Financial Anxiety**: Research in behavioral economics (*Mullainathan & Shafir, 2013*) proves that financial stress consumes mental bandwidth, measurably dropping working memory and executive function. When a student has ₹120 left before the weekend, their cognitive capacity for complex mathematical proofs drops by up to 30%.
* **Task Friction Taxonomy**: Tasks have distinct friction profiles:
  $$\text{Task} = \langle \text{Cognitive Intensity}, \text{Executive Friction}, \text{Anxiety Index} \rangle$$
  Decomposing database relations into BCNF requires high cognitive energy and high executive focus. Applying for a scholarship requires low cognitive energy but high emotional anxiety. Reading summary bullets requires low cognitive energy.

#### 2. The Bi-Directional Backpressure Algorithm
Instead of separate tools, CampusPulse creates a **Bi-Directional Feedback Loop**:
1. When a student logs an expense that trips a weekend deficit warning, the **Finance Engine exerts backpressure on the Academic Engine**:
   * It throttles planned 90-minute heavy focus blocks into lighter 25-minute Pomodoro sprints.
   * It elevates high-yield campus meal alternatives (e.g., Central Mess South Indian deal, saving ₹120) directly to the top priority action, removing the cognitive drain of food decision-making.
2. When an assignment deadline enters the 72-hour critical horizon, the **Academic Engine exerts backpressure on the Opportunity and Marketplace Engines**:
   * It suppresses non-urgent internship job applications to eliminate FOMO-induced distraction.
   * It prioritizes course-specific second-hand textbook listings from seniors in the student's residential hostel block.

#### 3. Explainable Pareto-Optimal Action Surface
Rather than delegating decisions to a black-box generative LLM, CampusPulse computes an **Explainable Context-Aware Ranking (CAR)** score:

$$\text{CAR}(t) = w_1 \cdot \mathcal{U}(t) + w_2 \cdot \mathcal{I}(t) + w_3 \cdot \mathcal{D}(t, \text{Slot}) + w_4 \cdot \mathcal{E}(\text{Energy}, \text{Stress}) - w_5 \cdot \mathcal{F}(\text{Budget})$$

Where:
* $\mathcal{U}(t) = \exp(-\lambda \cdot \Delta t_{\text{deadline}})$ is non-linear deadline urgency.
* $\mathcal{I}(t)$ is normalized course syllabus mark weightage.
* $\mathcal{D}(t, \text{Slot})$ is duration-to-calendar gap compatibility.
* $\mathcal{E}$ is current self-reported cognitive alertness matched to task difficulty.
* $\mathcal{F}$ is financial friction penalty.

The LLM is strictly used as a conversational articulation layer to explain the deterministic ranking to the student in natural language, ensuring **zero hallucinations in critical deadlines**.

---

## 🔮 6. Scope of Innovation for Next Phase

In Phase 2 and Phase 3, we will implement this innovation through:
1. **Multi-Agent Slot Negotiation**: An internal trio of specialized software agents (Academic Agent, Budget Agent, Career Agent) that submit bids for the student's next available calendar slot based on utility functions.
2. **Offline Local RAG with Hallucination Verification**: PyMuPDF extraction paired with local pgvector embeddings that cites exact slide page numbers and explicitly declares when a concept is not present in the faculty's notes.
3. **Deterministic Spaced-Repetition Decay Tracking**: Dynamic study intervals calculated using the Ebbinghaus forgetting curve adjusted for past student quiz performance.

---

## 📄 License
This project is developed for final-year engineering capstone examination and academic research. Open-sourced under the MIT License.
