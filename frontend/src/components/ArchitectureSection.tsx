import React from 'react';

export const ArchitectureSection: React.FC = () => {
  return (
    <section id="architecture" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200 mb-3">
            <i className="fa-solid fa-network-wired"></i> Section 10 &bull; Technical Architecture
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            System Architecture &amp; Algorithmic Foundations
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Engineered as an asynchronous, privacy-preserving full-stack platform. Built to run locally on a student laptop.
          </p>
        </div>

        {/* Multi-Tier Flow Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-soft mb-12">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <i className="fa-solid fa-sitemap text-brand-600"></i> Visual Multi-Tier Architecture &amp; Data Pipeline
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-2 items-center text-xs">
            {/* Tier 1 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-brand-500 transition">
              <span className="font-mono text-[10px] text-brand-600 font-bold uppercase">Tier 01</span>
              <div className="my-2">
                <h4 className="font-bold text-slate-900">Frontend UI</h4>
                <p className="text-slate-500 text-[11px] mt-1">React 18 &bull; Vite &bull; Tailwind &bull; Recharts</p>
              </div>
              <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-400 font-mono">TypeScript SPA</div>
            </div>

            <div className="hidden md:flex items-center justify-center text-slate-400">
              <i className="fa-solid fa-arrow-right text-lg"></i>
            </div>

            {/* Tier 2 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-brand-500 transition">
              <span className="font-mono text-[10px] text-indigo-600 font-bold uppercase">Tier 02</span>
              <div className="my-2">
                <h4 className="font-bold text-slate-900">Backend API Gateway</h4>
                <p className="text-slate-500 text-[11px] mt-1">FastAPI &bull; Pydantic &bull; JWT Auth &bull; OpenAPI</p>
              </div>
              <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-400 font-mono">Python 3.12 Asynchronous</div>
            </div>

            <div className="hidden md:flex items-center justify-center text-slate-400">
              <i className="fa-solid fa-arrow-right text-lg"></i>
            </div>

            {/* Tier 3 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-brand-500 transition">
              <span className="font-mono text-[10px] text-teal-600 font-bold uppercase">Tier 03</span>
              <div className="my-2">
                <h4 className="font-bold text-slate-900">Intelligence Layer</h4>
                <p className="text-slate-500 text-[11px] mt-1">PyMuPDF RAG &bull; Ollama &bull; Scikit-learn Cosine</p>
              </div>
              <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-400 font-mono">CAR Ranking Algorithm</div>
            </div>

            <div className="hidden md:flex items-center justify-center text-slate-400">
              <i className="fa-solid fa-arrow-right text-lg"></i>
            </div>

            {/* Tier 4 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-brand-500 transition">
              <span className="font-mono text-[10px] text-emerald-600 font-bold uppercase">Tier 04</span>
              <div className="my-2">
                <h4 className="font-bold text-slate-900">Persistence Store</h4>
                <p className="text-slate-500 text-[11px] mt-1">PostgreSQL &bull; pgvector &bull; Alembic &bull; SQLAlchemy</p>
              </div>
              <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-400 font-mono">Relational + Vectors</div>
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
              <i className="fa-solid fa-calculator text-brand-600"></i> Context Ranking Formula
            </h4>
            <div className="font-mono text-xs bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-800 leading-relaxed mb-3">
              Score = w₁·Urgency + w₂·Importance + w₃·DurationFit + w₄·Energy + w₅·BudgetImpact
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Deterministic, explainable ranking matrix completely isolated from generative hallucinations. Provides verifiable coefficient contributions for viva presentation.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
              <i className="fa-solid fa-file-code text-teal-600"></i> Vector RAG Retrieval
            </h4>
            <div className="font-mono text-xs bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-800 leading-relaxed mb-3">
              Chunks &rarr; SentenceTransformers(384d) &rarr; pgvector HNSW Index
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Extracts high-yield lecture formulas and exam questions with verified slide page references and explicit acknowledgment of absent source passages.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
              <i className="fa-solid fa-laptop-code text-indigo-600"></i> Edge &amp; Laptop Deployment
            </h4>
            <div className="font-mono text-xs bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-800 leading-relaxed mb-3">
              Docker Compose &bull; Ollama 3.2 &bull; Zero Paid API Dependencies
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              100% locally runnable for college capstone demonstrations. Zero external credit cards or cloud bills required to test full functionality.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
