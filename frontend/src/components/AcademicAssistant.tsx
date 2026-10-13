import React, { useState } from 'react';

interface AcademicAssistantProps {
  onOpenFocusTimer: (taskName?: string) => void;
  onShowToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
}

export const AcademicAssistant: React.FC<AcademicAssistantProps> = ({
  onOpenFocusTimer,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = useState<'assignments' | 'studyplan' | 'schedule'>('assignments');
  const [subjectFilter, setSubjectFilter] = useState('all');

  // Study plan state
  const [planSubject, setPlanSubject] = useState('CS302 DBMS (Relational Normalization)');
  const [planDays, setPlanDays] = useState('3');
  const [planHours, setPlanHours] = useState('2.5');
  const [planGenerated, setPlanGenerated] = useState(false);

  const assignments = [
    {
      id: 1,
      subject: 'DBMS',
      code: 'CS302 DBMS',
      color: 'brand',
      title: 'Assignment 3: Normalization & Functional Dependencies',
      desc: 'Decomposing R into BCNF; dependency preserving tests',
      deadline: 'Tomorrow, 09:00 AM',
      deadlineClass: 'text-rose-600',
      progress: 65,
      progressLabel: '65% (Q1 Done)',
      urgency: 'Critical',
      urgencyBg: 'bg-rose-100 text-rose-700',
    },
    {
      id: 2,
      subject: 'OS',
      code: 'CS304 OS',
      color: 'indigo',
      title: 'Lab Project: Producer-Consumer using Semaphores',
      desc: 'POSIX threads, mutex locking & buffer bounds',
      deadline: 'In 36 Hours',
      deadlineClass: 'text-amber-600',
      progress: 30,
      progressLabel: '30% (Code written)',
      urgency: 'High',
      urgencyBg: 'bg-amber-100 text-amber-800',
    },
    {
      id: 3,
      subject: 'DSA',
      code: 'CS301 DSA',
      color: 'emerald',
      title: 'Problem Set 5: Dynamic Programming on Trees',
      desc: 'House Robber III, Tree Diameter, Maximum Path Sum',
      deadline: 'In 4 Days',
      deadlineClass: 'text-slate-600',
      progress: 10,
      progressLabel: '10% (Started)',
      urgency: 'Medium',
      urgencyBg: 'bg-indigo-100 text-indigo-700',
    },
    {
      id: 4,
      subject: 'ML',
      code: 'CS305 ML',
      color: 'teal',
      title: 'Mini Project: Random Forest Hyperparameter Tuning',
      desc: 'Grid search vs Bayesian optimization on Kaggle dataset',
      deadline: 'In 6 Days',
      deadlineClass: 'text-slate-600',
      progress: 50,
      progressLabel: '50% (Dataset ready)',
      urgency: 'Normal',
      urgencyBg: 'bg-slate-100 text-slate-700',
    },
  ];

  const filteredAssignments = assignments.filter(
    (a) => subjectFilter === 'all' || a.subject.toLowerCase() === subjectFilter.toLowerCase()
  );

  const handleGeneratePlan = (e: React.FormEvent) => {
    e.preventDefault();
    setPlanGenerated(true);
    onShowToast(`✨ Generated optimal ${planDays}-day study roadmap for ${planSubject}!`, 'success');
  };

  const handleSyncCalendar = () => {
    onShowToast('📅 4 Study Blocks Synced to Google Calendar!', 'info');
  };

  return (
    <section id="academic-assistant" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1">
              <i className="fa-solid fa-book-open"></i> Section 04 &bull; Smart Academic Assistant
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Integrated Academic Engine
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Study plan generator, assignment tracker, notes summarizer, flashcard generator, quiz generator, and adaptive study schedule.
            </p>
          </div>

          {/* Tab Controls */}
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2 bg-slate-200/70 p-1.5 rounded-xl border border-slate-300/60 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('assignments')}
              className={`px-3.5 py-1.5 rounded-lg transition ${
                activeTab === 'assignments'
                  ? 'bg-white text-slate-900 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900 font-semibold'
              }`}
            >
              Assignment Tracker
            </button>
            <button
              onClick={() => setActiveTab('studyplan')}
              className={`px-3.5 py-1.5 rounded-lg transition ${
                activeTab === 'studyplan'
                  ? 'bg-white text-slate-900 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900 font-semibold'
              }`}
            >
              Study Plan Generator
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-3.5 py-1.5 rounded-lg transition ${
                activeTab === 'schedule'
                  ? 'bg-white text-slate-900 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900 font-semibold'
              }`}
            >
              Adaptive Schedule
            </button>
          </div>
        </div>

        {/* Tab 1: Assignment Tracker */}
        {activeTab === 'assignments' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-soft overflow-hidden">
            <div className="p-4 bg-slate-50/70 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-700">Course Filter:</span>
                {['all', 'DBMS', 'DSA', 'OS', 'ML'].map((subj) => (
                  <button
                    key={subj}
                    onClick={() => setSubjectFilter(subj)}
                    className={`px-2.5 py-1 rounded-md font-medium transition ${
                      subjectFilter === subj
                        ? 'bg-brand-600 text-white'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    {subj === 'all' ? 'All' : subj}
                  </button>
                ))}
              </div>
              <div className="text-slate-500">
                Showing {filteredAssignments.length} active assignments &bull; 1 completed
              </div>
            </div>

            <div className="divide-y divide-slate-100 overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700 min-w-[650px]">
                <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Subject</th>
                    <th className="py-3 px-4">Assignment / Deliverable</th>
                    <th className="py-3 px-4">Deadline</th>
                    <th className="py-3 px-4">Progress</th>
                    <th className="py-3 px-4">Urgency</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredAssignments.map((a) => (
                    <tr key={a.id} className="hover:bg-slate-50/70 transition">
                      <td className="py-3.5 px-4 font-semibold text-brand-700">
                        <span className="px-2 py-0.5 rounded bg-brand-50 border border-brand-200">{a.code}</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-900">{a.title}</div>
                        <div className="text-slate-400 text-[11px]">{a.desc}</div>
                      </td>
                      <td className={`py-3.5 px-4 font-mono font-semibold ${a.deadlineClass}`}>
                        {a.deadline}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="w-28 bg-slate-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-brand-600 h-full" style={{ width: `${a.progress}%` }}></div>
                        </div>
                        <span className="text-[10px] text-slate-500 mt-0.5 block">{a.progressLabel}</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${a.urgencyBg}`}>
                          {a.urgency}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => onOpenFocusTimer(`${a.code}: ${a.title}`)}
                          className="px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-medium text-xs transition"
                        >
                          Work On It
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Study Plan Generator */}
        {activeTab === 'studyplan' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form Input */}
              <div className="lg:col-span-1 space-y-4">
                <h3 className="font-bold text-slate-900 text-base">Generate Adaptive Study Plan</h3>
                <p className="text-xs text-slate-500">
                  Select your target syllabus topic, available exam horizon, and daily study capacity.
                </p>

                <form onSubmit={handleGeneratePlan} className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Target Subject / Topic</label>
                    <select
                      value={planSubject}
                      onChange={(e) => setPlanSubject(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white font-medium"
                    >
                      <option>CS302 DBMS (Relational Normalization)</option>
                      <option>CS301 DSA (Dynamic Programming & Trees)</option>
                      <option>CS304 OS (Concurrency & Deadlocks)</option>
                      <option>CS305 ML (Regression & Evaluation Metrics)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Days Horizon</label>
                      <input
                        type="number"
                        min="1"
                        max="30"
                        value={planDays}
                        onChange={(e) => setPlanDays(e.target.value)}
                        className="w-full text-xs p-2 rounded-xl border border-slate-200 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Daily Study Hours</label>
                      <input
                        type="number"
                        step="0.5"
                        min="0.5"
                        max="12"
                        value={planHours}
                        onChange={(e) => setPlanHours(e.target.value)}
                        className="w-full text-xs p-2 rounded-xl border border-slate-200 font-medium"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-1.5"
                  >
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                    <span>Generate Spaced-Repetition Plan</span>
                  </button>
                </form>
              </div>

              {/* Study Plan Roadmap Preview */}
              <div className="lg:col-span-2 bg-slate-50 rounded-xl p-5 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-slate-900 text-sm">
                    {planGenerated
                      ? `AI Spaced-Repetition Plan for ${planSubject} (${planDays}-Day Horizon @ ${planHours}h/day)`
                      : 'Recommended 3-Day Spaced Repetition Plan (DBMS Normalization)'}
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    Calculated via Ebbinghaus Decay Model
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between font-bold text-slate-800 mb-1">
                      <span>Day 1: Concept Encoding (1.5h Focus + 30m Active Recall)</span>
                      <span className="text-brand-600 font-mono">Weight: 40%</span>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      Armstrong's axioms proof walkthrough, Attribute closure algorithm, Candidate keys identification practice.
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between font-bold text-slate-800 mb-1">
                      <span>Day 2: Synthesis & Diagnostic Flashcards (1.0h)</span>
                      <span className="text-indigo-600 font-mono">Weight: 35%</span>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      BCNF vs 3NF lossless join condition, dependency preserving decomposition check, solve 5 university questions.
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between font-bold text-slate-800 mb-1">
                      <span>Day 3: Timed Rapid Testing (45m Sprint)</span>
                      <span className="text-teal-600 font-mono">Weight: 25%</span>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      Diagnostic 15-question speed quiz, verify edge-case transitive dependencies under exam conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Adaptive Schedule */}
        {activeTab === 'schedule' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-bold text-slate-900 text-base">Today's Optimized Adaptive Time Slots</h3>
                <p className="text-xs text-slate-500">Auto-balanced around your 2:00 PM - 4:00 PM Operating Systems Lab</p>
              </div>
              <button
                onClick={handleSyncCalendar}
                className="px-3.5 py-2 bg-brand-50 hover:bg-brand-100 text-brand-700 border border-brand-200 rounded-xl text-xs font-semibold transition flex items-center gap-1.5"
              >
                <i className="fa-brands fa-google"></i>
                <span>Sync to Google Calendar</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl border-2 border-brand-500 bg-brand-50/50">
                <span className="text-[10px] font-mono uppercase text-brand-700 font-bold block">11:30 AM - 12:15 PM</span>
                <h4 className="font-bold text-slate-900 mt-1">DBMS Question 2 (BCNF)</h4>
                <p className="text-[11px] text-slate-600 mt-1">High cognitive alertness block. 45m focus session.</p>
                <span className="mt-3 inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-brand-200 text-brand-800">Current Slot</span>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">02:00 PM - 04:00 PM</span>
                <h4 className="font-bold text-slate-900 mt-1">CS304 OS Lab (College)</h4>
                <p className="text-[11px] text-slate-600 mt-1">Mandatory attendance in C-Wing Lab 301.</p>
                <span className="mt-3 inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-700">Class Commitment</span>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">05:30 PM - 06:15 PM</span>
                <h4 className="font-bold text-slate-900 mt-1">OS Semaphore Code Review</h4>
                <p className="text-[11px] text-slate-600 mt-1">POSIX producer-consumer verification sprint.</p>
                <span className="mt-3 inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-100 text-indigo-700">Pending</span>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">08:00 PM - 08:30 PM</span>
                <h4 className="font-bold text-slate-900 mt-1">DSA DP Review & Flashcards</h4>
                <p className="text-[11px] text-slate-600 mt-1">Light spaced-repetition before dinner.</p>
                <span className="mt-3 inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700">Pending</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
