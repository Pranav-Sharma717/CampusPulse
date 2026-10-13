import React from 'react';

interface HeroProps {
  scrollTo: (id: string) => void;
  onOpenFocusTimer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollTo, onOpenFocusTimer }) => {
  return (
    <header id="hero" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-white via-indigo-50/40 to-slate-50 border-b border-slate-200/60">
      {/* Background Soft Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-60">
        <div className="absolute top-0 right-10 w-96 h-96 bg-brand-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-10 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-amber-200/25 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-brand-200 shadow-sm text-brand-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-600"></span>
            <span>CampusPulse &bull; <strong>Keep Moving Forward</strong></span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Stop Decision Fatigue.<br />
            <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-tealAccent-500 bg-clip-text text-transparent">
              One Intelligent Action at a Time.
            </span>
          </h1>

          {/* Value Pitch */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            CampusPulse is an AI-powered student assistance platform that reduces decision fatigue by understanding a student’s academic, financial, and personal context, then giving personalized recommendations, intelligent planning, and actionable guidance.
          </p>

          {/* Hero CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => scrollTo('dashboard')}
              className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-xl shadow-slate-900/10 hover:shadow-2xl transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Explore Student Dashboard</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </button>

            <button
              onClick={() => scrollTo('context-engine')}
              className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200 shadow-sm hover:border-slate-300 transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              <i className="fa-solid fa-microchip text-brand-600"></i>
              <span>Context Engine Demo</span>
            </button>

            <button
              onClick={() => scrollTo('notes-summarizer')}
              className="px-5 py-3.5 rounded-2xl bg-teal-50 hover:bg-teal-100/80 text-teal-800 font-bold text-sm border border-teal-200/80 transition-all flex items-center gap-2"
            >
              <i className="fa-solid fa-file-pdf text-teal-600"></i>
              <span>PDF Intelligence</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
