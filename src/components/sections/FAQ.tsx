import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '../../data/portfolioData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative bg-white border-t border-slate-200 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-normal">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Everything you need to know about working with MK Technology &amp; Services, pricing approach, project timelines, and post-delivery maintenance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-cyan-400 bg-cyan-50/40 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-cyan-700 font-bold shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-2 rounded-xl bg-slate-100 text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-cyan-700 bg-cyan-100' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
