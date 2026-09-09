import React from 'react';
import { Globe, Bot, Smartphone, Workflow, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { SERVICES } from '../../data/portfolioData';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return Globe;
      case 'Bot':
        return Bot;
      case 'Smartphone':
        return Smartphone;
      case 'Workflow':
        return Workflow;
      default:
        return Globe;
    }
  };

  const handleDiscuss = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 relative bg-slate-50/60 border-t border-slate-200 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span>Tailored Freelance Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-normal">
            What I Can Build For You
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Practical digital services designed to enhance client engagement, automate repetitive operations, and deliver high-impact web &amp; mobile solutions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-cyan-400 transition-all duration-300"
              >
                {/* Top Badge & Number */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 group-hover:scale-105 group-hover:border-cyan-400 transition-all shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-3xl font-mono font-bold text-slate-300 group-hover:text-cyan-600 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-cyan-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Capabilities Checklist */}
                  <div className="pt-3 border-t border-slate-100">
                    <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">
                      Key Capabilities:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm sm:text-[15px] text-slate-700">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-cyan-600 shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA at Bottom of Card */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => handleDiscuss(service.title)}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-cyan-700 hover:text-cyan-900 transition-colors group/btn cursor-pointer"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
