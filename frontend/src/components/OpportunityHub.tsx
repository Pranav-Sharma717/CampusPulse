import React, { useState } from 'react';

interface OpportunityHubProps {
  onShowToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
}

export const OpportunityHub: React.FC<OpportunityHubProps> = ({ onShowToast }) => {
  const [filterCategory, setFilterCategory] = useState('all');

  const opportunities = [
    {
      id: 1,
      category: 'internship',
      categoryLabel: 'Internship',
      match: 96,
      badgeColor: 'bg-emerald-100 text-emerald-800',
      deadline: 'Closes in 5d',
      title: 'Backend Engineering Intern',
      org: 'Razorpay &bull; Bangalore / Hybrid &bull; ₹45,000/mo',
      desc: 'Work on distributed payment pipelines, PostgreSQL query indexing, and Redis caching layers.',
      skills: ['PostgreSQL', 'Node.js', 'REST API'],
      missingSkill: 'Docker (Prerequisite)',
      actionText: '1-Click Apply',
    },
    {
      id: 2,
      category: 'hackathon',
      categoryLabel: 'Hackathon',
      match: 94,
      badgeColor: 'bg-teal-100 text-teal-800',
      deadline: 'Closes in 4d',
      title: 'Smart India Hackathon 2026',
      org: 'Govt of India &bull; Nationwide &bull; ₹1,50,000 Prize Pool',
      desc: 'Theme: AI & Cognitive Tools in Higher Education. Matches your current Capstone project architecture!',
      skills: ['Full Stack', 'NLP / RAG', 'Team of 4-6'],
      missingSkill: null,
      actionText: 'Join Team',
    },
    {
      id: 3,
      category: 'scholarship',
      categoryLabel: 'Scholarship',
      match: 91,
      badgeColor: 'bg-indigo-100 text-indigo-800',
      deadline: 'Closes in 18d',
      title: 'Adobe Women in Tech Scholarship',
      org: 'Adobe India &bull; ₹1,00,000 Grant + Mentorship',
      desc: 'Open to CS/IT undergrads with strong academic standing and demonstrated software engineering passion.',
      skills: ['GPA > 8.0', 'Essay Review', 'B.Tech 3rd Yr'],
      missingSkill: null,
      actionText: 'Apply Scholarship',
    },
    {
      id: 4,
      category: 'contest',
      categoryLabel: 'Coding Contest',
      match: 89,
      badgeColor: 'bg-purple-100 text-purple-800',
      deadline: 'Starts Saturday 8 PM',
      title: 'LeetCode Biweekly Contest 142',
      org: 'Global Competitive Rank &bull; 4 Algorithmic Challenges',
      desc: 'Sharpens your DP and Tree traversal patterns right before your CS301 Dynamic Programming quiz.',
      skills: ['DSA', 'Algorithms', 'Speed Coding'],
      missingSkill: null,
      actionText: 'Register Free',
    },
    {
      id: 5,
      category: 'workshop',
      categoryLabel: 'Workshop',
      match: 92,
      badgeColor: 'bg-amber-100 text-amber-800',
      deadline: 'Tomorrow 5 PM',
      title: 'Hands-on Ollama & Local LLM Deployment',
      org: 'Campus Developer Club &bull; CS Lab 2 &bull; Free Entry',
      desc: 'Deploy 8B parameter models locally on student laptops using quantization and vLLM acceleration.',
      skills: ['Python', 'Docker', 'Ollama'],
      missingSkill: null,
      actionText: 'Reserve Seat',
    },
    {
      id: 6,
      category: 'opensource',
      categoryLabel: 'Open Source',
      match: 88,
      badgeColor: 'bg-teal-100 text-teal-800',
      deadline: 'Applications Open',
      title: 'Google Summer of Code 2026',
      org: 'Open Source Initiative &bull; Global Stipend Grant',
      desc: 'Contribute to open-source database drivers and relational schema query optimizers.',
      skills: ['Git', 'PostgreSQL', 'C++ / Go'],
      missingSkill: null,
      actionText: 'Explore Orgs',
    },
  ];

  const filtered = opportunities.filter(
    (o) => filterCategory === 'all' || o.category === filterCategory
  );

  const handleTailorResume = (role: string) => {
    onShowToast(`📄 AI Resume generated for "${role}" emphasizing DBMS & SQL projects!`, 'info');
  };

  const handleApply = (title: string) => {
    onShowToast(`🚀 Application packet dispatched for ${title}!`, 'success');
  };

  return (
    <section id="opportunities" className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">
              <i className="fa-solid fa-compass"></i> Section 07 &bull; Opportunity Hub
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Personalized Career &amp; Skill Recommendations
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Internships, Hackathons, Scholarships, Coding Contests, Workshops, and Open-Source Programs scored against your course track.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-4 md:mt-0 flex flex-wrap gap-1.5 text-xs font-semibold">
            {[
              { id: 'all', label: 'All' },
              { id: 'internship', label: 'Internships' },
              { id: 'hackathon', label: 'Hackathons' },
              { id: 'scholarship', label: 'Scholarships' },
              { id: 'contest', label: 'Coding Contests' },
              { id: 'workshop', label: 'Workshops' },
              { id: 'opensource', label: 'Open Source' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg transition ${
                  filterCategory === cat.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Opportunity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((opp) => (
            <div
              key={opp.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft hover:shadow-card transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold flex items-center gap-1 ${opp.badgeColor}`}>
                    <i className="fa-solid fa-certificate"></i> {opp.match}% Match
                  </span>
                  <span className="text-xs font-semibold text-rose-500">{opp.deadline}</span>
                </div>

                <h3 className="font-bold text-slate-900 text-base">{opp.title}</h3>
                <p className="text-xs text-slate-500 font-medium" dangerouslySetInnerHTML={{ __html: opp.org }} />

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">{opp.desc}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {opp.skills.map((s, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[10px] font-medium">
                      {s}
                    </span>
                  ))}
                  {opp.missingSkill && (
                    <span className="px-2 py-0.5 bg-rose-50 text-rose-700 rounded text-[10px] font-medium">
                      {opp.missingSkill}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleTailorResume(opp.title)}
                  className="text-xs text-brand-600 font-bold hover:underline flex items-center gap-1"
                >
                  <i className="fa-solid fa-file-pen"></i> AI Resume Tailor
                </button>
                <button
                  onClick={() => handleApply(opp.title)}
                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition"
                >
                  {opp.actionText}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
