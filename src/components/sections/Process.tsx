import React from 'react';
import { MessagesSquare, Palette, MessageSquare, Code2, CheckCircle2, Rocket, Headphones, Wrench, Sparkles, Check } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/portfolioData';

export const Process: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessagesSquare':
        return MessagesSquare;
      case 'Palette':
        return Palette;
      case 'MessageCircleCheck':
        return MessageSquare;
      case 'Code2':
        return Code2;
      case 'CheckCircle2':
        return CheckCircle2;
      case 'Rocket':
        return Rocket;
      case 'Headphones':
        return Headphones;
      case 'Wrench':
        return Wrench;
      default:
        return MessagesSquare;
    }
  };

  return (
    <section id="process" className="py-20 sm:py-28 relative bg-white border-t border-slate-200 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span>Workflow &amp; Collaboration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-normal">
            How I Work
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            A structured, 8-step end-to-end development journey focused on clarity, frequent client feedback, rapid milestones, and comprehensive post-launch support.
          </p>
        </div>

        {/* 8-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => {
            const Icon = getStepIcon(step.icon);
            return (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-cyan-400 transition-all duration-300 group"
              >
                {/* Step Top */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 group-hover:scale-105 group-hover:border-cyan-400 transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs sm:text-sm font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-cyan-800 border border-slate-200">
                      STEP {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-800 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Micro bullets */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
