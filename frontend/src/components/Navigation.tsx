import React from 'react';
import { HealthStatus } from '../types';

interface NavigationProps {
  health: HealthStatus | null;
  onOpenFocusTimer: (taskName?: string) => void;
  scrollTo: (id: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ health, onOpenFocusTimer, scrollTo }) => {
  return (
    <nav className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-slate-200/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-tealAccent-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <i className="fa-solid fa-graduation-cap text-lg"></i>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">
                  Campus<span className="text-brand-600">Pulse</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-brand-50 text-brand-700 border border-brand-200">
                  AI
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium -mt-1 tracking-tight">Keep Moving Forward.</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-600">
            <button onClick={() => scrollTo('dashboard')} className="px-3 py-2 rounded-lg hover:text-brand-600 hover:bg-slate-100 transition">Dashboard</button>
            <button onClick={() => scrollTo('productivity-coach')} className="px-3 py-2 rounded-lg hover:text-brand-600 hover:bg-slate-100 transition">AI Coach</button>
            <button onClick={() => scrollTo('academic-assistant')} className="px-3 py-2 rounded-lg hover:text-brand-600 hover:bg-slate-100 transition">Academics</button>
            <button onClick={() => scrollTo('notes-summarizer')} className="px-3 py-2 rounded-lg hover:text-brand-600 hover:bg-slate-100 transition">PDF Studio</button>
            <button onClick={() => scrollTo('finance-assistant')} className="px-3 py-2 rounded-lg hover:text-brand-600 hover:bg-slate-100 transition">Finance</button>
            <button onClick={() => scrollTo('opportunities')} className="px-3 py-2 rounded-lg hover:text-brand-600 hover:bg-slate-100 transition">Opportunities</button>
            <button onClick={() => scrollTo('marketplace')} className="px-3 py-2 rounded-lg hover:text-brand-600 hover:bg-slate-100 transition">Marketplace</button>
            <button onClick={() => scrollTo('context-engine')} className="px-3 py-2 rounded-lg hover:text-brand-600 hover:bg-slate-100 transition">Context AI</button>
            <button onClick={() => scrollTo('architecture')} className="px-3 py-2 rounded-lg hover:text-brand-600 hover:bg-slate-100 transition">Architecture</button>
          </div>

          {/* Action CTAs & Live Backend Health Badge */}
          <div className="flex items-center gap-2.5">
            {health && (
              <div
                className={`hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium border ${
                  health.status === 'healthy'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-amber-50 text-amber-700 border-amber-200'
                }`}
                title={`Database: ${health.database.dialect} (${health.database.status}) | LLM: ${health.llm.provider} (${health.llm.status})`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${health.status === 'healthy' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                <span>API: {health.database.dialect}</span>
              </div>
            )}

            <button
              onClick={() => onOpenFocusTimer()}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-200 rounded-xl transition shadow-sm"
            >
              <i className="fa-solid fa-stopwatch text-brand-600"></i>
              <span>Focus Mode</span>
            </button>
            
            <button
              onClick={() => scrollTo('dashboard')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 rounded-xl shadow-md shadow-brand-500/25 transition-all hover:scale-[1.02]"
            >
              <i className="fa-solid fa-gauge-high"></i>
              <span>View Dashboard</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
