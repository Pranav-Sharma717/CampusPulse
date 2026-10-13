import React from 'react';
import { HealthStatus } from '../types';

interface TopNoticeBarProps {
  health: HealthStatus | null;
  scrollTo: (id: string) => void;
}

export const TopNoticeBar: React.FC<TopNoticeBarProps> = ({ health, scrollTo }) => {
  return (
    <div className="bg-gradient-to-r from-brand-900 via-indigo-950 to-slate-900 text-white text-xs py-2 px-4 border-b border-indigo-800/40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-brand-500/30 text-brand-200 border border-brand-400/30">
            <span className={`w-1.5 h-1.5 rounded-full ${health?.status === 'healthy' ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`}></span>
            Live Capstone System
          </span>
          <span className="text-slate-300 hidden sm:inline">
            Final Year Engineering Project &bull; Academic Year 2025–2026
          </span>
        </div>

        <div className="flex items-center gap-4 text-slate-300">
          <span className="text-[11px]">
            <i className="fa-solid fa-clock mr-1 text-brand-400"></i> Context: <strong className="text-white">Sem 5 CSE &bull; Week 9</strong>
          </span>
          <button
            onClick={() => scrollTo('supervisor-pitch')}
            className="hover:text-white text-[11px] font-medium text-brand-300 underline underline-offset-2"
          >
            Supervisor Review Notes &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
