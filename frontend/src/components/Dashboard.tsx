import React from 'react';

interface DashboardProps {
  onOpenFocusTimer: (taskName?: string) => void;
  onMarkTaskDone: (taskName: string) => void;
  onRefresh: () => void;
  productivityScore: number;
  scrollTo: (id: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  onOpenFocusTimer,
  onMarkTaskDone,
  onRefresh,
  productivityScore,
  scrollTo,
}) => {
  return (
    <section id="dashboard" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Real-time Student Context Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1">
              <i className="fa-solid fa-house-chimney"></i> Section 02 &bull; Unified Student Dashboard
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Good afternoon, Alex! 👋
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Wednesday &bull; CS302 Database Management Systems due tomorrow &bull; Current Campus Stress: <span className="text-amber-600 font-semibold">Moderate</span>
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <div className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-slate-600">Cognitive Load:</span>
              <strong className="text-slate-800">Optimal (Window: 2h)</strong>
            </div>
            <button
              onClick={onRefresh}
              className="p-2 text-slate-500 hover:text-brand-600 hover:bg-white rounded-lg border border-slate-200 transition"
              title="Refresh Live State"
            >
              <i className="fa-solid fa-arrows-rotate"></i>
            </button>
          </div>
        </div>

        {/* Unified 6-Card Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1: Today's priority action */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:shadow-card transition relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-600"></div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-brand-50 text-brand-700 border border-brand-200 flex items-center gap-1.5">
                <i className="fa-solid fa-fire text-brand-600"></i> Today's Priority Action
              </span>
              <span className="text-xs text-rose-500 font-semibold flex items-center gap-1">
                <i className="fa-regular fa-clock"></i> Due in 18 hrs
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition">
              DBMS Assignment 3: BCNF Normalization
            </h3>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Spend the next 25 minutes decomposing relations into 3NF & BCNF to finish Question 2 before lecture.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onOpenFocusTimer('DBMS Assignment 3 - Question 2')}
                className="px-3.5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold shadow-sm transition flex items-center gap-1.5"
              >
                <i className="fa-solid fa-play"></i> Start Focus Session
              </button>
              <button
                onClick={() => onMarkTaskDone('DBMS Assignment 3')}
                className="px-3 py-2 rounded-xl text-xs font-medium text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 transition"
              >
                <i className="fa-regular fa-circle-check mr-1"></i> Mark Done
              </button>
            </div>
          </div>

          {/* Card 2: Upcoming deadlines */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:shadow-card transition">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs">
                  <i className="fa-regular fa-calendar-check"></i>
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Upcoming Deadlines</h3>
              </div>
              <span className="text-[11px] font-semibold text-slate-400">4 Active</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-slate-50 hover:bg-slate-100/80 transition">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  <div>
                    <p className="font-semibold text-slate-800">OS Semaphore Lab Report</p>
                    <p className="text-[10px] text-slate-500">Operating Systems &bull; Weight 10%</p>
                  </div>
                </div>
                <span className="font-mono font-medium text-rose-600 text-[11px]">Tomorrow 11:59 PM</span>
              </div>

              <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-slate-50 hover:bg-slate-100/80 transition">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <div>
                    <p className="font-semibold text-slate-800">DSA Dynamic Programming Quiz</p>
                    <p className="text-[10px] text-slate-500">Algorithms &bull; 20 MCQs</p>
                  </div>
                </div>
                <span className="font-mono font-medium text-amber-600 text-[11px]">In 2 days</span>
              </div>

              <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-slate-50 hover:bg-slate-100/80 transition">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <div>
                    <p className="font-semibold text-slate-800">ML Model Evaluation Paper</p>
                    <p className="text-[10px] text-slate-500">Machine Learning Draft</p>
                  </div>
                </div>
                <span className="font-mono font-medium text-slate-600 text-[11px]">In 5 days</span>
              </div>
            </div>
          </div>

          {/* Card 3: Budget status */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:shadow-card transition">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                  <i className="fa-solid fa-indian-rupee-sign"></i>
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Budget Status</h3>
              </div>
              <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">On Track</span>
            </div>

            <div className="flex items-baseline justify-between mt-2">
              <div>
                <span className="text-2xl font-extrabold text-slate-900">₹820</span>
                <span className="text-xs text-slate-500 ml-1">remaining of ₹2,500</span>
              </div>
              <span className="text-xs font-semibold text-slate-700">₹1,680 spent (67%)</span>
            </div>

            {/* Multi-tier progress bar */}
            <div className="w-full bg-slate-100 h-2.5 rounded-full mt-3 overflow-hidden flex">
              <div className="bg-emerald-500 h-full w-[45%]" title="Food: ₹1,120"></div>
              <div className="bg-indigo-500 h-full w-[12%]" title="Printing: ₹290"></div>
              <div className="bg-amber-400 h-full w-[10%]" title="Transport: ₹180"></div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 mt-1.5">
              <span>Food 52%</span>
              <span>Printing 18%</span>
              <span>Travel 15%</span>
              <span>Available 33%</span>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Weekend safe burn rate:</span>
              <span className="font-bold text-slate-800">₹270 / day</span>
            </div>
          </div>

          {/* Card 4: Enrolled Course Cadence */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:shadow-card transition">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-xs">
                  <i className="fa-solid fa-book-bookmark"></i>
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Active Courses (Sem 5)</h3>
              </div>
              <span className="text-[11px] font-semibold text-slate-400">4 Enrolled</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-5 rounded-full bg-brand-600"></span>
                  <span className="font-bold text-slate-800">CS302 DBMS</span>
                </div>
                <div className="text-right">
                  <span className="font-medium text-emerald-600">88% Attendance</span>
                  <p className="text-[10px] text-slate-400">Midterm in 3d</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-5 rounded-full bg-teal-500"></span>
                  <span className="font-bold text-slate-800">CS304 OS</span>
                </div>
                <div className="text-right">
                  <span className="font-medium text-emerald-600">92% Attendance</span>
                  <p className="text-[10px] text-slate-400">Lab tomorrow</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-5 rounded-full bg-indigo-500"></span>
                  <span className="font-bold text-slate-800">CS301 DSA</span>
                </div>
                <div className="text-right">
                  <span className="font-medium text-emerald-600">85% Attendance</span>
                  <p className="text-[10px] text-slate-400">Quiz in 2d</p>
                </div>
              </div>
            </div>

            <div className="mt-3 text-right">
              <button
                onClick={() => scrollTo('academic-assistant')}
                className="text-xs text-brand-600 font-semibold hover:underline"
              >
                View Academic Engine &rarr;
              </button>
            </div>
          </div>

          {/* Card 5: Opportunity Matches */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:shadow-card transition">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-xs">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Recommended Matches</h3>
              </div>
              <span className="text-[11px] font-semibold text-teal-600 font-mono">3 New</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-2.5 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/60 transition">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-800">Razorpay Backend Intern</h4>
                    <p className="text-[10px] text-slate-500">PostgreSQL &bull; Node.js &bull; ₹45k/mo</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    96% Match
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/60 transition">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-800">Smart India Hackathon 2026</h4>
                    <p className="text-[10px] text-slate-500">Cognitive EdTech &bull; Prize ₹1.5L</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-100 text-teal-800">
                    94% Match
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3 text-right">
              <button
                onClick={() => scrollTo('opportunities')}
                className="text-xs text-teal-700 font-semibold hover:underline"
              >
                Browse All Opportunities &rarr;
              </button>
            </div>
          </div>

          {/* Card 6: Productivity Metric & Score */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:shadow-card transition flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Productivity Metric</h3>
              </div>
              <span className="text-[11px] font-semibold text-emerald-600">+12% vs last week</span>
            </div>

            <div className="flex items-center justify-around my-2">
              {/* Circular SVG Gauge */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-100"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-brand-600 transition-all duration-500"
                    strokeDasharray={`${productivityScore}, 100`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute text-center">
                  <span className="text-xl font-extrabold text-slate-900">{productivityScore}</span>
                  <span className="block text-[9px] text-slate-400 font-medium -mt-1">/ 100</span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-fire text-amber-500 text-xs"></i>
                  <span className="text-slate-600">Streak:</span>
                  <strong className="text-slate-800">6 Days</strong>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-clock text-indigo-500 text-xs"></i>
                  <span className="text-slate-600">Focus Hours:</span>
                  <strong className="text-slate-800">14.5 hrs</strong>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check-double text-emerald-500 text-xs"></i>
                  <span className="text-slate-600">Tasks:</span>
                  <strong className="text-slate-800">12 Closed</strong>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>Goal: 90 Score</span>
              <span className="text-brand-600 font-semibold cursor-pointer" onClick={() => onOpenFocusTimer()}>
                + Boost Score &rarr;
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
