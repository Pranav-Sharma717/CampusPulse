import React, { useState, useEffect, useCallback } from 'react';
import { HealthStatus } from './types';
import { api } from './services/api';
import { TopNoticeBar } from './components/TopNoticeBar';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Dashboard } from './components/Dashboard';
import { ProductivityCoach } from './components/ProductivityCoach';
import { AcademicAssistant } from './components/AcademicAssistant';
import { NotesSummarizer } from './components/NotesSummarizer';
import { FinanceAssistant } from './components/FinanceAssistant';
import { OpportunityHub } from './components/OpportunityHub';
import { Marketplace } from './components/Marketplace';
import { ContextEngine } from './components/ContextEngine';
import { ArchitectureSection } from './components/ArchitectureSection';
import { SupervisorPitch } from './components/SupervisorPitch';
import { FocusTimerModal, RescheduleModal, ToastContainer, ToastMessage } from './components/Modals';

export const App: React.FC = () => {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [productivityScore, setProductivityScore] = useState(84);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Focus modal state
  const [isFocusModalOpen, setIsFocusModalOpen] = useState(false);
  const [focusTaskTitle, setFocusTaskTitle] = useState('DBMS Assignment 3: Question 2');

  // Reschedule modal state
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);

  // Coach headline & rationale state
  const [coachHeadline, setCoachHeadline] = useState(
    '“Spend 25 minutes solving Question 2 of DBMS Assignment 3 (BCNF Decomposition) before your 2 PM Lab.”'
  );
  const [coachRationale, setCoachRationale] = useState(
    'Due in 18 hours (CS302, 15% marks). You have a 45-minute open slot before your 2:00 PM Operating Systems lab. Your energy level is optimal for analytical problem-solving.'
  );

  // Web Audio chime generator
  const playChime = useCallback(() => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3); // A5
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.8);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.8);
    } catch {
      // AudioContext fallback
    }
  }, []);

  const playAmbientTone = useCallback(() => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(216, audioCtx.currentTime); // 432Hz harmonic
      gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 2.0);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 2.0);
      showToast('🎵 432Hz Alpha Focus Tone Played', 'info');
    } catch {
      // AudioContext fallback
    }
  }, []);

  // Toast handler
  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Smooth scroll
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Poll backend health check on mount
  useEffect(() => {
    const fetchHealth = async () => {
      const res = await api.getHealth();
      setHealth(res);
    };
    fetchHealth();
    const interval = setInterval(fetchHealth, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleOpenFocusTimer = (taskName = 'DBMS Assignment 3: Question 2') => {
    setFocusTaskTitle(taskName);
    setIsFocusModalOpen(true);
  };

  const handleTimerComplete = () => {
    setProductivityScore((prev) => Math.min(100, prev + 15));
    showToast('🎉 Focus Sprint Completed! +15 Productivity Points Awarded!', 'success');
    setIsFocusModalOpen(false);
  };

  const handleMarkTaskDone = (taskName: string) => {
    setProductivityScore((prev) => Math.min(100, prev + 5));
    showToast(`"${taskName}" marked done! Well done Alex!`, 'success');
  };

  const handleCoachComplete = () => {
    setProductivityScore((prev) => Math.min(100, prev + 10));
    showToast('✅ Awesome job! Task marked complete. +10 Productivity Points!', 'success');
    setCoachHeadline('“Next up: Review Operating Systems Semaphore Lab Code before tomorrow.”');
    setCoachRationale('With DBMS Question 2 completed, your highest remaining weight is the POSIX producer-consumer code due in 36h.');
  };

  const handleExecuteReschedule = (slotText: string) => {
    setIsRescheduleOpen(false);
    showToast(`Task rescheduled to ${slotText}. AI priorities rebalanced!`, 'info');
    setCoachRationale(`Rebalanced slot: Moved to ${slotText}. Re-optimizing intermediate gap before 2 PM class.`);
  };

  const handleRefreshState = () => {
    showToast('🔄 Synchronized with campus LMS & refreshed context vector!', 'info');
    api.getHealth().then(setHealth);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-500 selection:text-white">
      {/* Top Banner */}
      <TopNoticeBar health={health} scrollTo={scrollTo} />

      {/* Sticky Navigation */}
      <Navigation health={health} onOpenFocusTimer={handleOpenFocusTimer} scrollTo={scrollTo} />

      {/* Main Content Sections */}
      <main>
        <Hero scrollTo={scrollTo} onOpenFocusTimer={handleOpenFocusTimer} />
        
        <Dashboard
          onOpenFocusTimer={handleOpenFocusTimer}
          onMarkTaskDone={handleMarkTaskDone}
          onRefresh={handleRefreshState}
          productivityScore={productivityScore}
          scrollTo={scrollTo}
        />

        <ProductivityCoach
          onOpenFocusTimer={handleOpenFocusTimer}
          onOpenReschedule={() => setIsRescheduleOpen(true)}
          onCompleteAction={handleCoachComplete}
          headline={coachHeadline}
          rationale={coachRationale}
        />

        <AcademicAssistant
          onOpenFocusTimer={handleOpenFocusTimer}
          onShowToast={showToast}
        />

        <NotesSummarizer
          onShowToast={showToast}
          playChime={playChime}
        />

        <FinanceAssistant
          onShowToast={showToast}
          onIncreaseProductivity={(pts) => setProductivityScore((prev) => Math.min(100, prev + pts))}
        />

        <OpportunityHub onShowToast={showToast} />

        <Marketplace onShowToast={showToast} />

        <ContextEngine onShowToast={showToast} />

        <ArchitectureSection />

        <SupervisorPitch />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-tight">CampusPulse</span>
              <p className="text-slate-400 text-[11px]">Keep Moving Forward &bull; Capstone Demo</p>
            </div>
          </div>

          <div className="text-slate-400 text-center sm:text-right">
            <p>Engineered for Academic Year 2025–2026 Final Year B.Tech Project Defense.</p>
            <p className="mt-1 text-[10px] text-slate-500">
              FastAPI &bull; PostgreSQL &bull; pgvector &bull; React &bull; Tailwind &bull; Ollama
            </p>
          </div>
        </div>
      </footer>

      {/* Modals & Toasts */}
      <FocusTimerModal
        isOpen={isFocusModalOpen}
        onClose={() => setIsFocusModalOpen(false)}
        taskTitle={focusTaskTitle}
        onTimerComplete={handleTimerComplete}
        playChime={playChime}
        playAmbientTone={playAmbientTone}
      />

      <RescheduleModal
        isOpen={isRescheduleOpen}
        onClose={() => setIsRescheduleOpen(false)}
        onExecute={handleExecuteReschedule}
      />

      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  );
};

export default App;
