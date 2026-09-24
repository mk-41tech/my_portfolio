import React from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, MessagesSquare, Headphones, Wrench, Sparkles, MapPin, Briefcase } from 'lucide-react';
import { BRAND_INFO } from '../../data/portfolioData';

export const About: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pillars = [
    {
      icon: Zap,
      title: 'Affordable Development',
      description: 'Developing high-grade software solutions with minimal overhead, ensuring clients get maximum business value within their budget.'
    },
    {
      icon: ShieldCheck,
      title: 'Customized & Scalable',
      description: 'Zero generic templates. Every website, app, and chatbot is crafted specifically to meet your unique business workflow and requirements.'
    },
    {
      icon: CheckCircle2,
      title: 'Reliable Quality',
      description: 'Clean, modern TypeScript & React architectures, robust databases, and tested functionality across all devices and browsers.'
    },
    {
      icon: MessagesSquare,
      title: 'Direct Communication',
      description: 'Clear, transparent collaboration from concept to deployment. You work directly with the developer without communication middlemen.'
    },
    {
      icon: Headphones,
      title: 'Fast Turnaround',
      description: 'Focused execution that turns ideas into working production applications quickly without compromising on reliability.'
    },
    {
      icon: Wrench,
      title: 'Long-term Support',
      description: 'Continued post-delivery communication, maintenance updates, and ongoing technical guidance as your business expands.'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span>About Muthukumar</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-normal">
            Meet Muthukumar — Freelance Software Developer
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Practical digital engineering with a firm commitment to affordability, customization, and long-term client success.
          </p>
        </div>

        {/* Profile & Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Column: Bio Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden border border-slate-200/90 shadow-md">
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <img
                    src={BRAND_INFO.profileImage}
                    alt="Muthukumar"
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-cyan-500/30 shadow-md"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{BRAND_INFO.owner}</h3>
                  <p className="text-xs sm:text-sm font-semibold text-cyan-700">{BRAND_INFO.subtitle}</p>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">{BRAND_INFO.role}</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                    <span>{BRAND_INFO.location}</span>
                  </p>
                </div>
              </div>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
                <span>{BRAND_INFO.availability}</span>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-200 pt-4">
                <p>
                  I am a freelance software developer specializing in building full-stack web applications, customized business websites, mobile apps, AI chatbots, and intelligent workflow automations.
                </p>
                <p>
                  My core guiding philosophy is simple:{' '}
                  <strong className="text-slate-900 font-bold">&ldquo;{BRAND_INFO.tagline}&rdquo;</strong>.
                  I collaborate directly with founders, business owners, and organizations to translate ideas into high-performing, scalable digital products — with full transparency, fast turnarounds, and minimal overhead.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={scrollToContact}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 shadow-md shadow-cyan-600/20 transition-all cursor-pointer"
                >
                  <span>Let's Work Together</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white hover:bg-slate-50/60 rounded-xl p-5 border border-slate-200 shadow-sm hover:border-cyan-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 mb-3.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-1.5">{pillar.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
