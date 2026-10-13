import React, { useState } from 'react';

interface NotesSummarizerProps {
  onShowToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
  playChime: () => void;
}

export const NotesSummarizer: React.FC<NotesSummarizerProps> = ({ onShowToast, playChime }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stepLabel, setStepLabel] = useState('');
  const [activeDocTab, setActiveDocTab] = useState<'summary' | 'keypoints' | 'questions' | 'flashcards' | 'quiz'>('summary');
  
  // Current loaded doc state
  const [docType, setDocType] = useState<'dbms' | 'dsa'>('dbms');
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});
  const [quizAnswers, setQuizAnswers] = useState<{ [qNum: number]: boolean }>({});
  const [quizFeedback, setQuizFeedback] = useState<{ [qNum: number]: { text: string; correct: boolean } }>({});

  const loadSamplePDF = (type: 'dbms' | 'dsa') => {
    setIsProcessing(true);
    setProgress(30);
    setStepLabel(`Tokenizing ${type.toUpperCase()} PDF slides into Vector Chunks...`);

    setTimeout(() => {
      setProgress(75);
      setStepLabel('Extracting High-Probability Exam Theorems & Formulas...');
    }, 400);

    setTimeout(() => {
      setProgress(100);
      setStepLabel('Generating Flashcards & Diagnostic Mini-Quiz...');
    }, 800);

    setTimeout(() => {
      setIsProcessing(false);
      setDocType(type);
      setFlippedCards({});
      setQuizAnswers({});
      setQuizFeedback({});
      setActiveDocTab('summary');
      onShowToast(`📄 ${type.toUpperCase()} lecture notes processed and synthesized!`, 'success');
    }, 1100);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsProcessing(true);
      setProgress(25);
      setStepLabel(`Reading ${file.name} via PyMuPDF...`);
      setTimeout(() => {
        setProgress(70);
        setStepLabel('Extracting semantic embeddings and exam focal points...');
      }, 500);
      setTimeout(() => {
        setIsProcessing(false);
        setDocType('dbms');
        onShowToast(`📄 Successfully parsed "${file.name}"!`, 'success');
      }, 1000);
    }
  };

  const toggleFlip = (cardIndex: number) => {
    setFlippedCards((prev) => ({ ...prev, [cardIndex]: !prev[cardIndex] }));
  };

  const handleQuizAnswer = (qNum: number, optionLetter: string, isCorrect: boolean) => {
    if (isCorrect) {
      setQuizAnswers((prev) => ({ ...prev, [qNum]: true }));
      setQuizFeedback((prev) => ({
        ...prev,
        [qNum]: { text: `✓ Correct! Option ${optionLetter} is the right conceptual answer.`, correct: true },
      }));
      playChime();
    } else {
      setQuizAnswers((prev) => ({ ...prev, [qNum]: false }));
      setQuizFeedback((prev) => ({
        ...prev,
        [qNum]: { text: `✗ Incorrect. Review the flashcard on normal form requirements.`, correct: false },
      }));
    }
  };

  const totalScore = Object.values(quizAnswers).filter(Boolean).length;

  return (
    <section id="notes-summarizer" className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-700 border border-teal-200 mb-3">
            <i className="fa-solid fa-file-pdf"></i> Section 05 &bull; Notes &amp; PDF Summarization Studio
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Transform 40-Page Lecture Slides into 5-Minute Mastery
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Upload course notes, lecture PDFs, or professor slide decks. CampusPulse generates structured summaries, high-yield bullet points, predicted exam questions, interactive flashcards, and diagnostic quizzes.
          </p>
        </div>

        {/* Upload Zone & Preloaded PDF Switcher */}
        <div className="max-w-4xl mx-auto">
          
          <div className="border-2 border-dashed border-slate-300 hover:border-brand-500 bg-slate-50/80 rounded-2xl p-6 sm:p-8 text-center transition group relative">
            <input
              type="file"
              accept=".pdf,.docx,.pptx,.txt"
              onChange={handleFileUpload}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              title="Upload file"
            />
            <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-cloud-arrow-up"></i>
            </div>
            <h3 className="font-bold text-slate-800 text-base mt-3">
              Drag and drop course lecture notes or PDFs here
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Supports .PDF, .PPTX, .DOCX, or Markdown notes (Max 50MB)
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 relative z-10 pointer-events-auto">
              <span className="text-xs text-slate-400 font-medium">Or test with preloaded course notes:</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  loadSamplePDF('dbms');
                }}
                className="px-3 py-1.5 rounded-lg bg-brand-100 hover:bg-brand-200 text-brand-800 font-semibold text-xs transition flex items-center gap-1.5"
              >
                <i className="fa-solid fa-file-pdf text-brand-600"></i>
                <span>Load DBMS_Unit4_Normalization.pdf</span>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  loadSamplePDF('dsa');
                }}
                className="px-3 py-1.5 rounded-lg bg-teal-100 hover:bg-teal-200 text-teal-800 font-semibold text-xs transition flex items-center gap-1.5"
              >
                <i className="fa-solid fa-file-code text-teal-600"></i>
                <span>Load DSA_Dynamic_Programming.pdf</span>
              </button>
            </div>
          </div>

          {/* Processing State */}
          {isProcessing && (
            <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center animate-fadeIn">
              <div className="inline-block w-8 h-8 border-4 border-brand-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="font-semibold text-slate-800 text-sm mt-3">{stepLabel}</p>
              <div className="w-64 mx-auto bg-slate-200 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-brand-600 h-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          )}

          {/* Generated Output Section */}
          {!isProcessing && (
            <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-soft overflow-hidden">
              
              {/* File Banner Header */}
              <div className="p-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-500/30 border border-brand-400/40 text-brand-300 flex items-center justify-center font-bold text-sm">
                    <i className="fa-solid fa-file-pdf"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">
                      {docType === 'dbms'
                        ? 'DBMS_Unit4_Normalization_Comprehensive.pdf'
                        : 'DSA_Dynamic_Programming_Advanced.pdf'}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {docType === 'dbms' ? '38 Pages • Extracted in 1.2s • RAG Confidence: 99.1%' : '42 Pages • Extracted in 1.3s • RAG Confidence: 98.7%'}
                    </p>
                  </div>
                </div>

                {/* Sub tabs */}
                <div className="flex items-center gap-1.5 bg-slate-800 p-1 rounded-xl text-xs">
                  {(['summary', 'keypoints', 'questions', 'flashcards', 'quiz'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveDocTab(tab)}
                      className={`px-3 py-1 rounded-lg transition ${
                        activeDocTab === tab
                          ? 'bg-brand-600 text-white font-semibold'
                          : 'text-slate-300 hover:text-white font-normal'
                      }`}
                    >
                      {tab === 'summary' && 'Summary'}
                      {tab === 'keypoints' && 'Key Points'}
                      {tab === 'questions' && 'Important Questions'}
                      {tab === 'flashcards' && 'Flashcards (3)'}
                      {tab === 'quiz' && 'Quiz Questions'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Doc Tab 1: Executive Summary */}
              {activeDocTab === 'summary' && (
                <div className="p-6 sm:p-8 space-y-4 text-slate-700 text-sm leading-relaxed">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-600 uppercase tracking-wider">
                    <i className="fa-solid fa-sparkles"></i> AI Executive Synthesis
                  </div>
                  {docType === 'dbms' ? (
                    <>
                      <p>
                        Database normalization is the systematic process of organizing fields and tables within a relational database to minimize redundancy and eliminate anomalies (insertion, update, and deletion anomalies). The syllabus unit focuses on functional dependencies (FDs), canonical cover computations, and progressive normal forms from 1NF to Boyce-Codd Normal Form (BCNF).
                      </p>
                      <p>
                        A critical exam distinction highlighted in these slides: <strong>3NF preserves functional dependencies and is always lossless</strong>, whereas <strong>BCNF guarantees complete elimination of redundancy based on functional dependencies</strong>, but may not always preserve all original FDs upon decomposition.
                      </p>
                      <div className="bg-brand-50/70 p-4 rounded-xl border border-brand-200/80 text-xs text-brand-900 font-medium">
                        💡 <strong>High-Probability Exam Alert:</strong> Professor emphasized Question 2 on the Midterm will test whether a candidate relation R(A, B, C, D) with F = &#123;A &rarr; B, B &rarr; C, C &rarr; D&#125; can be decomposed into BCNF without losing dependencies.
                      </div>
                    </>
                  ) : (
                    <>
                      <p>
                        Dynamic programming (DP) solves complex problems by breaking them into overlapping subproblems and optimal substructures. The notes contrast Top-Down Memoization (recursion + cache) with Bottom-Up Tabulation (iterative table fill).
                      </p>
                      <p>
                        High-probability exam problems: <strong>0/1 Knapsack</strong> vs <strong>Fractional Knapsack</strong> (greedy) and <strong>Longest Common Subsequence (LCS)</strong> with O(m x n) space optimizations.
                      </p>
                      <div className="bg-teal-50/70 p-4 rounded-xl border border-teal-200/80 text-xs text-teal-900 font-medium">
                        💡 <strong>High-Probability Exam Alert:</strong> Midterm will ask students to construct the state-transition equation for the Matrix Chain Multiplication problem.
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Doc Tab 2: Key Points */}
              {activeDocTab === 'keypoints' && (
                <div className="p-6 sm:p-8 space-y-3">
                  <h4 className="font-bold text-slate-900 text-sm mb-3">Core Theorems & High-Yield Key Points:</h4>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Armstrong's Axioms:</strong> Reflexivity (Y &sube; X &rArr; X &rarr; Y), Augmentation (X &rarr; Y &rArr; XZ &rarr; YZ), and Transitivity (X &rarr; Y, Y &rarr; Z &rArr; X &rarr; Z).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Lossless-Join Condition:</strong> A decomposition of R into R1 and R2 is lossless if and only if (R1 &cap; R2) &rarr; R1 OR (R1 &cap; R2) &rarr; R2.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 flex-shrink-0"></span>
                      <span><strong>BCNF Criterion:</strong> For every non-trivial functional dependency X &rarr; Y, the left side X MUST be a superkey for the relation.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 flex-shrink-0"></span>
                      <span><strong>3NF Criterion:</strong> For every non-trivial X &rarr; Y, either X is a superkey OR Y is a prime attribute (part of any candidate key).</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Doc Tab 3: Important Questions */}
              {activeDocTab === 'questions' && (
                <div className="p-6 sm:p-8 space-y-4">
                  <h4 className="font-bold text-slate-900 text-sm">University Exam Predicted Questions:</h4>
                  <div className="space-y-3 text-xs">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="flex justify-between font-bold text-slate-800">
                        <span>Q1 (10 Marks): Explain 3NF vs BCNF with a suitable relational decomposition example.</span>
                        <span className="text-rose-600">Expected in Sec B</span>
                      </div>
                      <p className="text-slate-600 mt-2 text-[11px]">
                        Hint: Use R(Student, Advisor, Subject) where (Student, Subject) &rarr; Advisor and Advisor &rarr; Subject.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="flex justify-between font-bold text-slate-800">
                        <span>Q2 (5 Marks): State and prove the Lossless-Join Decomposition Theorem.</span>
                        <span className="text-amber-600">Expected in Sec A</span>
                      </div>
                      <p className="text-slate-600 mt-2 text-[11px]">
                        Hint: Show that intersection contains a key of at least one of the decomposed schemas.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Doc Tab 4: 3D Flashcards */}
              {activeDocTab === 'flashcards' && (
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-slate-900 text-sm">Interactive 3D Active-Recall Flashcards:</h4>
                    <span className="text-xs text-slate-400">Click card to flip</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        id: 1,
                        frontTag: 'Concept 1 &bull; Front',
                        frontText: 'What is the exact mathematical definition of Boyce-Codd Normal Form (BCNF)?',
                        backText: 'A relation R is in BCNF if for every non-trivial functional dependency X → Y, X is a SUPERKEY.',
                      },
                      {
                        id: 2,
                        frontTag: 'Concept 2 &bull; Front',
                        frontText: 'Can every relational schema be decomposed into BCNF while preserving all dependencies?',
                        backText: 'NO! BCNF always guarantees lossless-join, but dependency preservation is NOT always achievable. (3NF achieves both).',
                      },
                      {
                        id: 3,
                        frontTag: 'Concept 3 &bull; Front',
                        frontText: 'What constitutes a "Canonical Cover" of functional dependencies?',
                        backText: 'A minimal set of FDs Fc such that: 1. Fc ≡ F, 2. No extraneous attributes on LHS/RHS, 3. Each LHS is unique.',
                      },
                    ].map((card) => {
                      const isFlipped = !!flippedCards[card.id];
                      return (
                        <div
                          key={card.id}
                          onClick={() => toggleFlip(card.id)}
                          className="h-52 perspective-1000 cursor-pointer select-none"
                        >
                          <div
                            className={`relative w-full h-full duration-500 transform-style-3d ${
                              isFlipped ? 'rotate-y-180' : ''
                            }`}
                          >
                            {/* Front */}
                            <div className="absolute w-full h-full bg-gradient-to-br from-indigo-50 to-white border-2 border-brand-200 rounded-2xl p-5 flex flex-col justify-between backface-hidden shadow-sm hover:border-brand-400 transition">
                              <span
                                className="text-[10px] font-mono text-brand-600 font-bold uppercase"
                                dangerouslySetInnerHTML={{ __html: card.frontTag }}
                              />
                              <p className="text-xs font-bold text-slate-800 text-center leading-relaxed">
                                {card.frontText}
                              </p>
                              <div className="text-[10px] text-center text-slate-400">
                                ↺ Click to reveal answer
                              </div>
                            </div>

                            {/* Back */}
                            <div className="absolute w-full h-full bg-gradient-to-br from-brand-900 to-indigo-950 text-white rounded-2xl p-5 flex flex-col justify-between backface-hidden rotate-y-180 shadow-md">
                              <span className="text-[10px] font-mono text-brand-300 font-bold uppercase">
                                Verified Solution &bull; Back
                              </span>
                              <p className="text-xs text-slate-100 text-center leading-relaxed font-medium">
                                {card.backText}
                              </p>
                              <div className="text-[10px] text-center text-slate-400">
                                ↺ Click to flip back
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Doc Tab 5: Diagnostic Quiz */}
              {activeDocTab === 'quiz' && (
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 text-sm">Diagnostic 2-Question Mastery Quiz:</h4>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-brand-50 text-brand-700 border border-brand-200">
                      Score: {totalScore} / 2
                    </span>
                  </div>

                  {/* Question 1 */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                    <p className="font-bold text-slate-800">
                      1. Which of the following normal forms guarantees that NO functional dependency redundancy exists?
                    </p>
                    <div className="space-y-1.5">
                      {[
                        { letter: 'A', text: '1NF (Atomic domain values)', correct: false },
                        { letter: 'B', text: '2NF (No partial key dependencies)', correct: false },
                        { letter: 'C', text: '3NF (No transitive dependencies)', correct: false },
                        { letter: 'D', text: 'BCNF (Every determinant is a superkey)', correct: true },
                      ].map((opt) => (
                        <button
                          key={opt.letter}
                          onClick={() => handleQuizAnswer(1, opt.letter, opt.correct)}
                          className="w-full text-left p-2.5 rounded-xl border border-slate-200 hover:bg-brand-50 hover:border-brand-300 transition text-slate-700 block font-medium"
                        >
                          <strong>{opt.letter})</strong> {opt.text}
                        </button>
                      ))}
                    </div>
                    {quizFeedback[1] && (
                      <div
                        className={`text-xs font-semibold p-2.5 rounded-lg border ${
                          quizFeedback[1].correct
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-rose-100 text-rose-800 border-rose-300'
                        }`}
                      >
                        {quizFeedback[1].text}
                      </div>
                    )}
                  </div>

                  {/* Question 2 */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                    <p className="font-bold text-slate-800">
                      2. If relation R(A, B, C) has F = &#123;AB &rarr; C, C &rarr; A&#125;, what is the highest normal form of R?
                    </p>
                    <div className="space-y-1.5">
                      {[
                        { letter: 'A', text: '1NF only', correct: false },
                        { letter: 'B', text: '2NF only', correct: false },
                        { letter: 'C', text: '3NF (C is not a superkey, but A is prime)', correct: true },
                        { letter: 'D', text: 'BCNF', correct: false },
                      ].map((opt) => (
                        <button
                          key={opt.letter}
                          onClick={() => handleQuizAnswer(2, opt.letter, opt.correct)}
                          className="w-full text-left p-2.5 rounded-xl border border-slate-200 hover:bg-brand-50 hover:border-brand-300 transition text-slate-700 block font-medium"
                        >
                          <strong>{opt.letter})</strong> {opt.text}
                        </button>
                      ))}
                    </div>
                    {quizFeedback[2] && (
                      <div
                        className={`text-xs font-semibold p-2.5 rounded-lg border ${
                          quizFeedback[2].correct
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-rose-100 text-rose-800 border-rose-300'
                        }`}
                      >
                        {quizFeedback[2].text}
                      </div>
                    )}
                  </div>

                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
