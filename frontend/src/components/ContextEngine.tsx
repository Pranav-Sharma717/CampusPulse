import React, { useState } from 'react';

interface ContextEngineProps {
  onShowToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
}

export const ContextEngine: React.FC<ContextEngineProps> = ({ onShowToast }) => {
  const [selectedScenario, setSelectedScenario] = useState<'exam_rush' | 'weekend_chill' | 'placement_prep'>('exam_rush');

  const scenarioData = {
    exam_rush: {
      exam: '72 Hours (DBMS)',
      examClass: 'text-rose-400',
      budget: '₹380 (Low)',
      budgetClass: 'text-amber-400',
      time: '2.0 Hours',
      timeClass: 'text-teal-400',
      energy: '65% (Medium)',
      energyClass: 'text-indigo-400',
      title: '“Revise DBMS normalization for 45 minutes, skip paid food delivery today, and apply for the hackathon tomorrow.”',
      academic: '45m focus sprint on BCNF & 3NF flashcards. Yields highest point return before bedtime.',
      finance: 'Skip paid food delivery tonight; use mess coupon to protect your ₹380 reserve for weekend printouts.',
      career: 'Apply for the hackathon tomorrow afternoon during your 3:30 PM gap; zero impact on review score.',
    },
    weekend_chill: {
      exam: '6 Days (ML Midterm)',
      examClass: 'text-emerald-400',
      budget: '₹1,250 (Healthy)',
      budgetClass: 'text-emerald-400',
      time: '4.5 Hours Free',
      timeClass: 'text-teal-400',
      energy: '90% (High)',
      energyClass: 'text-indigo-400',
      title: '“Draft Smart India Hackathon system architecture tonight, invite 2 teammates, and treat yourself to a canteen smoothie.”',
      academic: 'Relax academic load: Light 30-minute review of Kaggle Random Forest hyperparameters.',
      finance: 'Budget is healthy: Safe to spend ₹120 on campus snacks with study group.',
      career: 'Submit Hackathon abstract draft while team momentum is high (Closes in 4 days).',
    },
    placement_prep: {
      exam: 'None This Week',
      examClass: 'text-slate-300',
      budget: '₹600 (Normal)',
      budgetClass: 'text-amber-400',
      time: '1.0 Hour Left',
      timeClass: 'text-teal-400',
      energy: '30% (Exhausted)',
      energyClass: 'text-rose-400',
      title: '“Wind down with 15 minutes of light DSA flashcards, skip caffeine, and sleep by 11:00 PM for morning lab alertness.”',
      academic: 'Zero heavy problem-solving. Review 3 flip cards on graph traversal complexity.',
      finance: 'No expenses needed tonight. Fill water bottle and avoid late night vending machine.',
      career: 'Archive Razorpay internship listing to queue for Saturday morning review.',
    },
  };

  const current = scenarioData[selectedScenario];

  const handleSelectScenario = (sc: 'exam_rush' | 'weekend_chill' | 'placement_prep') => {
    setSelectedScenario(sc);
    onShowToast(`Recomputed prescriptive recommendation for Scenario: ${sc.toUpperCase()}!`, 'info');
  };

  return (
    <section id="context-engine" className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200 mb-3">
            <i className="fa-solid fa-microchip"></i> Section 09 &bull; Context-Aware Recommendation Engine
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            How Context Turns Confusion into Absolute Clarity
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Generic productivity apps treat all tasks equally. CampusPulse recalculates the student's optimal path in real-time across academic, financial, and personal constraints.
          </p>
        </div>

        {/* Interactive Scenario Selector */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <button
              onClick={() => handleSelectScenario('exam_rush')}
              className={`px-4 py-2.5 rounded-xl font-semibold text-xs transition ${
                selectedScenario === 'exam_rush'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Scenario A: Exam in 3 Days + Low Budget + 2 Free Hours Tonight
            </button>
            <button
              onClick={() => handleSelectScenario('weekend_chill')}
              className={`px-4 py-2.5 rounded-xl font-semibold text-xs transition ${
                selectedScenario === 'weekend_chill'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Scenario B: Friday Free + Healthy Budget + Hackathon Due
            </button>
            <button
              onClick={() => handleSelectScenario('placement_prep')}
              className={`px-4 py-2.5 rounded-xl font-semibold text-xs transition ${
                selectedScenario === 'placement_prep'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Scenario C: High Fatigue + 8:00 AM Lab Tomorrow
            </button>
          </div>

          {/* Simulation Box */}
          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
            
            {/* Input Vector Readout */}
            <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/80 mb-6">
              <span className="text-[10px] font-mono uppercase text-brand-300 font-bold block mb-2">
                <i className="fa-solid fa-code mr-1"></i> Multi-Dimensional Input State Vector:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="bg-slate-900/60 p-2.5 rounded-lg">
                  <span className="text-slate-400 block text-[10px]">EXAM HORIZON</span>
                  <span className={`font-bold ${current.examClass}`}>{current.exam}</span>
                </div>
                <div className="bg-slate-900/60 p-2.5 rounded-lg">
                  <span className="text-slate-400 block text-[10px]">AVAILABLE BUDGET</span>
                  <span className={`font-bold ${current.budgetClass}`}>{current.budget}</span>
                </div>
                <div className="bg-slate-900/60 p-2.5 rounded-lg">
                  <span className="text-slate-400 block text-[10px]">FREE TIME TONIGHT</span>
                  <span className={`font-bold ${current.timeClass}`}>{current.time}</span>
                </div>
                <div className="bg-slate-900/60 p-2.5 rounded-lg">
                  <span className="text-slate-400 block text-[10px]">ENERGY LEVEL</span>
                  <span className={`font-bold ${current.energyClass}`}>{current.energy}</span>
                </div>
              </div>
            </div>

            {/* Prescriptive Directive */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  AI Tri-Pronged Prescriptive Directive
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                  {current.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-brand-500/15 rounded-xl border border-brand-400/20">
                    <span className="text-brand-300 font-bold block mb-1">📚 Academic Directive</span>
                    <span className="text-slate-200">{current.academic}</span>
                  </div>
                  <div className="p-3 bg-amber-500/15 rounded-xl border border-amber-400/20">
                    <span className="text-amber-300 font-bold block mb-1">💰 Financial Directive</span>
                    <span className="text-slate-200">{current.finance}</span>
                  </div>
                  <div className="p-3 bg-teal-500/15 rounded-xl border border-teal-400/20">
                    <span className="text-teal-300 font-bold block mb-1">🚀 Career Directive</span>
                    <span className="text-slate-200">{current.career}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-4 border-t border-slate-800">
              <span>Model: CampusPulse Context-Ranker v2 (Deterministic + Heuristic Reranker)</span>
              <span className="text-emerald-400 font-mono font-semibold">
                <i className="fa-solid fa-check-double mr-1"></i> Zero Decision Paralysis
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
