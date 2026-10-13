import React, { useState } from 'react';

interface FinanceAssistantProps {
  onShowToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
  onIncreaseProductivity: (pts: number) => void;
}

export const FinanceAssistant: React.FC<FinanceAssistantProps> = ({
  onShowToast,
  onIncreaseProductivity,
}) => {
  const [remainingBudget, setRemainingBudget] = useState(820);
  const [quickAmount, setQuickAmount] = useState('60');

  const handleQuickExpense = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseInt(quickAmount) || 0;
    if (amt <= 0) return;

    setRemainingBudget((prev) => Math.max(0, prev - amt));
    onShowToast(`Logged ₹${amt} expense. Updated remaining balance to ₹${Math.max(0, remainingBudget - amt)}!`, 'info');
    setQuickAmount('');
  };

  const handleSavingsAction = (desc: string) => {
    onShowToast(`🎉 Accepted savings recommendation: ${desc}!`, 'success');
    onIncreaseProductivity(5);
  };

  return (
    <section id="finance-assistant" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3">
            <i className="fa-solid fa-wallet"></i> Section 06 &bull; Student Finance Assistant
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Keep Financial Anxiety at Bay
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Weekly budget tracking, expenses by category, predictive spending forecast, spending insights, and affordable alternative suggestions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Finance Card 1: Weekly Breakdown & Category Breakdown */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-sm">Weekly Budget &amp; Categories</h3>
              <span className="text-xs font-mono font-bold text-emerald-600">₹{remainingBudget} Left</span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>Food & Mess (Target: ₹1,400)</span>
                  <span className="font-semibold text-slate-800">₹1,120 spent</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[80%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>Academics & Printing (Target: ₹400)</span>
                  <span className="font-semibold text-slate-800">₹290 spent</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-500 h-full w-[72%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>Commute / Metro (Target: ₹350)</span>
                  <span className="font-semibold text-slate-800">₹180 spent</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[51%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>Social / Leisure (Target: ₹350)</span>
                  <span className="font-semibold text-slate-800">₹90 spent</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-teal-500 h-full w-[25%]"></div>
                </div>
              </div>
            </div>

            {/* Quick Add Expense Form */}
            <form onSubmit={handleQuickExpense} className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Quick Log Campus Expense
              </span>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="₹ Amount"
                  value={quickAmount}
                  onChange={(e) => setQuickAmount(e.target.value)}
                  className="w-28 text-xs p-2 rounded-xl border border-slate-200 font-medium"
                />
                <button
                  type="submit"
                  className="flex-1 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-semibold transition"
                >
                  + Log Expense
                </button>
              </div>
            </form>
          </div>

          {/* Finance Card 2: AI Predictive Forecast & Spending Insights */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-slate-900 text-sm">Budget Forecast &amp; Insights</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">Weekend Alert</span>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                Based on your past 3 weeks of Friday–Sunday spending patterns (canteen snacks + peer outings):
              </p>

              <div className="my-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                  <i className="fa-solid fa-triangle-exclamation text-amber-600"></i>
                  <span>Predicted Weekend Burn: ₹940</span>
                </div>
                <p className="text-[11px] text-amber-800 leading-relaxed">
                  You currently have <strong>₹{remainingBudget}</strong> in reserve. Without adjustment, you are projected to exceed your weekly budget by <strong>₹120</strong> on Sunday night.
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Recommended Friday limit:</span>
                  <span className="font-bold text-slate-800">₹180</span>
                </div>
                <div className="flex justify-between">
                  <span>Recommended Saturday limit:</span>
                  <span className="font-bold text-slate-800">₹240</span>
                </div>
                <div className="flex justify-between">
                  <span>Recommended Sunday limit:</span>
                  <span className="font-bold text-slate-800">₹200</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Safety buffer remaining:</span>
              <span className="font-bold text-emerald-600">₹200 (Healthy)</span>
            </div>
          </div>

          {/* Finance Card 3: Affordable Alternative Suggestions */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-slate-900 text-sm">Affordable Alternative Suggestions</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">Save ₹390</span>
            </div>

            <p className="text-xs text-slate-500 mb-4">
              AI identifies peer and mess alternatives before you spend unnecessarily:
            </p>

            <div className="space-y-3">
              {/* Alternative 1: Meal Option */}
              <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200 text-xs space-y-1">
                <div className="flex items-center justify-between font-bold text-emerald-900">
                  <span>🍱 Meal Option Switch</span>
                  <span className="text-emerald-700 font-extrabold">Save ₹120</span>
                </div>
                <p className="text-slate-600 text-[11px]">
                  “You can save ₹120 by choosing this meal option (Central Mess South Indian combo ₹70 instead of Swiggy delivery ₹190).”
                </p>
                <button
                  onClick={() => handleSavingsAction('Meal Option Saved ₹120')}
                  className="mt-1 text-[10px] font-bold text-emerald-800 hover:underline"
                >
                  Accept Recommendation &rarr;
                </button>
              </div>

              {/* Alternative 2: Textbook */}
              <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-200 text-xs space-y-1">
                <div className="flex items-center justify-between font-bold text-indigo-900">
                  <span>📚 Library Co-op Book Reserve</span>
                  <span className="text-indigo-700 font-extrabold">Save ₹270</span>
                </div>
                <p className="text-slate-600 text-[11px]">
                  “Borrow Korth 7th Ed from Senior in Hostel C-Wing rather than ordering retail.”
                </p>
                <button
                  onClick={() => handleSavingsAction('Library Reserve Saved ₹270')}
                  className="mt-1 text-[10px] font-bold text-indigo-800 hover:underline"
                >
                  Reserve on Campus &rarr;
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
