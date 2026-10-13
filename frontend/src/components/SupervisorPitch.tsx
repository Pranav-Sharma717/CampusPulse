import React from 'react';

export const SupervisorPitch: React.FC = () => {
  return (
    <section id="supervisor-pitch" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 mb-3">
            <i className="fa-solid fa-graduation-cap"></i> Section 12 &bull; Capstone Supervisor Review Notes
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Academic Project Defense &amp; Viva Reference Guide
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Key evaluation justifications prepared for final-year engineering project examination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Problem Definition & Novelty */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <i className="fa-solid fa-bullseye text-brand-600"></i> Core Problem &amp; Unique Value Proposition
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>The Problem:</strong> Existing tools suffer from <em>silo fragmentation</em>. A student uses Google Calendar for time, Todoist for tasks, Splitwise for money, and LinkedIn for jobs. None of these tools communicate. The cognitive overhead of choosing what to do next causes decision paralysis.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Our Novelty:</strong> CampusPulse introduces the <strong>Context-Aware Ranking (CAR)</strong> algorithm. We treat student decision-making as a multi-criteria optimization problem spanning academic proximity, financial reserves, and cognitive fatigue.
            </p>
          </div>

          {/* Card 2: Viva Q&A */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <i className="fa-solid fa-clipboard-question text-teal-600"></i> Common Supervisor Viva Questions &amp; Answers
            </h3>
            <div className="space-y-3 text-xs">
              <div>
                <strong className="text-slate-800 block">Q1: Why separate the ranking engine from the LLM?</strong>
                <span className="text-slate-600">
                  Because LLMs are non-deterministic and can hallucinate mathematical priorities. By using deterministic normalized weighted ranking for task ordering, we guarantee that critical submission deadlines can never be bypassed by generative drift.
                </span>
              </div>
              <div>
                <strong className="text-slate-800 block">Q2: How does the system protect student data privacy?</strong>
                <span className="text-slate-600">
                  CampusPulse executes entirely within the university boundary or on the student's laptop via local Ollama models and PostgreSQL pgvector, preventing academic records from leaking to proprietary third-party clouds.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
