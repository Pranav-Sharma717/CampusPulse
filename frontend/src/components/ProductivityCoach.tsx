import React, { useState } from 'react';

interface ProductivityCoachProps {
  onOpenFocusTimer: (taskName?: string) => void;
  onOpenReschedule: () => void;
  onCompleteAction: () => void;
  headline: string;
  rationale: string;
}

export const ProductivityCoach: React.FC<ProductivityCoachProps> = ({
  onOpenFocusTimer,
  onOpenReschedule,
  onCompleteAction,
  headline,
  rationale,
}) => {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <section id="productivity-coach" className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200 mb-3">
            <i className="fa-solid fa-brain"></i> Section 03 &bull; AI Productivity Coach
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Single Prescriptive Next Action
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            No endless to-do lists. CampusPulse synthesizes LMS submissions, calendar gaps, and your energy level to give you exactly ONE actionable instruction right now.
          </p>
        </div>

        {/* The Prescriptive Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-indigo-800/40 relative overflow-hidden">
          {/* Subtle Glow Orb in Card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  Prescription Active &bull; High Confidence
                </span>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/15">
                Estimated Time: <strong>25 Minutes</strong>
              </span>
            </div>

            {/* Coach Headline */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              {headline}
            </h3>

            {/* Coach Rationale */}
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {rationale}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 pt-6 border-t border-white/10">
              <button
                onClick={() => onOpenFocusTimer('DBMS Assignment 3: Question 2')}
                className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-brand-500/30 transition flex items-center gap-2"
              >
                <i className="fa-solid fa-stopwatch"></i>
                <span>Start 25m Focus Block</span>
              </button>

              <button
                onClick={onCompleteAction}
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2"
              >
                <i className="fa-solid fa-check"></i>
                <span>Mark Completed</span>
              </button>

              <button
                onClick={onOpenReschedule}
                className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs sm:text-sm font-semibold transition flex items-center gap-2"
              >
                <i className="fa-solid fa-clock-rotate-left"></i>
                <span>Reschedule Slot</span>
              </button>

              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className="ml-auto text-xs font-medium text-brand-300 hover:text-white underline underline-offset-4 transition"
              >
                Why this task? &rarr;
              </button>
            </div>

            {/* Expandable Algorithmic Explanation */}
            {showExplanation && (
              <div className="mt-6 p-4 rounded-2xl bg-black/40 border border-white/10 text-xs text-slate-300 space-y-2 animate-fadeIn">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <i className="fa-solid fa-gears text-brand-400"></i> Context-Aware Decision Matrix Formulation:
                </p>
                <p>
                  1. <strong>Urgency Weight:</strong> Due tomorrow morning at 09:00 AM (Time remaining: 18.0h &rarr; Urgency = 0.94).
                </p>
                <p>
                  2. <strong>Academic Weight:</strong> CS302 Assignment 3 holds 15% of total course marks.
                </p>
                <p>
                  3. <strong>Duration Fit:</strong> You have a 45-minute open slot before your 2:00 PM Operating Systems lab.
                </p>
                <p>
                  4. <strong>Energy Factor:</strong> Mid-day cognitive state is optimal for relational algebra and BCNF decomposition.
                </p>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
