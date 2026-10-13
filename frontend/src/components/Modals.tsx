import React, { useState, useEffect } from 'react';

// Focus Timer Modal
interface FocusTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskTitle: string;
  onTimerComplete: () => void;
  playChime: () => void;
  playAmbientTone: () => void;
}

export const FocusTimerModal: React.FC<FocusTimerModalProps> = ({
  isOpen,
  onClose,
  taskTitle,
  onTimerComplete,
  playChime,
  playAmbientTone,
}) => {
  const [seconds, setSeconds] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval!);
            setIsRunning(false);
            playChime();
            onTimerComplete();
            return 25 * 60;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, onTimerComplete, playChime]);

  if (!isOpen) return null;

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const timeDisplay = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  const handleToggle = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(25 * 60);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-200 shadow-2xl relative text-center">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-lg transition"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="w-12 h-12 mx-auto rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center text-xl mb-3">
          <i className="fa-solid fa-stopwatch"></i>
        </div>

        <h3 className="font-extrabold text-slate-900 text-lg">Deep Focus Session</h3>
        <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto font-medium">
          Target: <strong className="text-slate-800">{taskTitle}</strong>
        </p>

        {/* 25:00 Clock */}
        <div className="my-6 py-6 bg-slate-50 rounded-2xl border border-slate-200/80">
          <span className="font-mono text-5xl font-black text-slate-900 tracking-tight">
            {timeDisplay}
          </span>
          <p className={`text-xs font-bold uppercase tracking-wider mt-2 ${isRunning ? 'text-emerald-500' : 'text-brand-600'}`}>
            {isRunning ? 'Deep Focus In Progress' : 'Ready to Start'}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleToggle}
            className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md transition flex items-center gap-2"
          >
            <i className={`fa-solid ${isRunning ? 'fa-pause' : 'fa-play'}`}></i>
            <span>{isRunning ? 'Pause' : 'Start Timer'}</span>
          </button>

          <button
            onClick={handleReset}
            className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
          >
            Reset
          </button>

          <button
            onClick={playAmbientTone}
            className="px-3 py-3 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-700 font-semibold text-xs transition"
            title="Play 432Hz Alpha Focus Tone"
          >
            <i className="fa-solid fa-headphones"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

// Reschedule Modal
interface RescheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExecute: (slot: string) => void;
}

export const RescheduleModal: React.FC<RescheduleModalProps> = ({ isOpen, onClose, onExecute }) => {
  if (!isOpen) return null;

  const slots = [
    { label: '5:30 PM - 6:15 PM (Post-Lab Open Slot)', desc: '45 mins free before evening mess dinner.' },
    { label: '8:00 PM - 8:45 PM (After Dinner Slot)', desc: 'Protected quiet sprint in hostel.' },
    { label: 'Tomorrow 07:30 AM (Morning Buffer)', desc: '1.5 hrs remaining before 9:00 AM deadline.' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-200 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-lg transition">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <h3 className="font-extrabold text-slate-900 text-lg">Reschedule Focus Block</h3>
        <p className="text-xs text-slate-500 mt-1">
          Select an available slot detected in your campus schedule:
        </p>

        <div className="my-5 space-y-2.5">
          {slots.map((s, idx) => (
            <button
              key={idx}
              onClick={() => onExecute(s.label)}
              className="w-full text-left p-3.5 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50/50 transition group"
            >
              <div className="font-bold text-xs text-slate-800 group-hover:text-brand-700">{s.label}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{s.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Toast Notifications Container
export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning';
}

export const ToastContainer: React.FC<{ toasts: ToastMessage[]; onRemove: (id: string) => void }> = ({
  toasts,
  onRemove,
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-md pointer-events-none">
      {toasts.map((t) => {
        const bgColors = {
          success: 'bg-slate-900 text-white border-emerald-500',
          info: 'bg-brand-900 text-white border-brand-400',
          warning: 'bg-amber-900 text-white border-amber-400',
        };

        const icons = {
          success: 'fa-circle-check text-emerald-400',
          info: 'fa-circle-info text-brand-400',
          warning: 'fa-triangle-exclamation text-amber-400',
        };

        return (
          <div
            key={t.id}
            onClick={() => onRemove(t.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-xl text-xs font-medium pointer-events-auto cursor-pointer transition-all duration-300 animate-slideUp ${bgColors[t.type]}`}
          >
            <i className={`fa-solid ${icons[t.type]} text-base`}></i>
            <span>{t.message}</span>
          </div>
        );
      })}
    </div>
  );
};
