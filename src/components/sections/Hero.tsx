import React from 'react';
import { ArrowUpRight, Code, Sparkles, MapPin, CheckCircle2, Bot, Layers, ArrowDown, Terminal } from 'lucide-react';
import { BRAND_INFO } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[600px] h-72 sm:h-[600px] bg-cyan-500/8 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 sm:w-[400px] h-72 sm:h-[400px] bg-emerald-500/8 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Availability Pill & Role Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium shadow-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span>{BRAND_INFO.availability}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium shadow-xs">
                <Sparkles className="w-4 h-4 text-cyan-600" />
                <span>{BRAND_INFO.role}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-snug">
                Building Digital Solutions{' '}
                <span className="text-gradient-cyan block sm:inline">
                  That Fit Your Needs &amp; Budget
                </span>
              </h1>
              
              {/* Tagline Highlight */}
              <div className="inline-block px-3.5 py-1.5 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-800 font-medium text-sm sm:text-base tracking-normal shadow-xs">
                &ldquo;{BRAND_INFO.tagline}&rdquo;
              </div>
            </div>

            {/* Supporting Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              {BRAND_INFO.heroDescription}
            </p>

            {/* Value Highlights Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-1 text-sm sm:text-base font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0" />
                <span>100% Customized Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Minimal Cost Approach</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />
                <span>Fast &amp; Reliable Delivery</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 shadow-lg shadow-cyan-600/25 hover:shadow-cyan-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all text-base cursor-pointer"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 hover:text-slate-900 shadow-sm transition-all text-base cursor-pointer group"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 text-cyan-600 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Hero Tech & Terminal Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Decorative background border glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-400 via-indigo-400 to-emerald-400 rounded-3xl blur-md opacity-25 group-hover:opacity-45 transition duration-1000" />

              <div className="relative rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-xl shadow-slate-200/60 space-y-4">
                
                {/* Developer Terminal Box */}
                <div className="rounded-xl bg-slate-950 text-slate-200 p-4 sm:p-5 border border-slate-800 shadow-inner font-mono space-y-3">
                  {/* Window Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/90 text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      <span>mk-solutions.config.ts</span>
                    </div>
                  </div>

                  {/* Code snippet */}
                  <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
                    <p className="text-slate-400">
                      <span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> = &#123;
                    </p>
                    <p className="pl-4 text-slate-300">
                      <span className="text-slate-400">name:</span> <span className="text-emerald-300">'{BRAND_INFO.owner}'</span>,
                    </p>
                    <p className="pl-4 text-slate-300">
                      <span className="text-slate-400">brand:</span> <span className="text-emerald-300">'{BRAND_INFO.brandName}'</span>,
                    </p>
                    <p className="pl-4 text-slate-300">
                      <span className="text-slate-400">location:</span> <span className="text-emerald-300">'{BRAND_INFO.location}'</span>,
                    </p>
                    <p className="pl-4 text-slate-300">
                      <span className="text-slate-400">mission:</span> <span className="text-amber-300">'{BRAND_INFO.tagline}'</span>,
                    </p>
                    <p className="pl-4 text-slate-300">
                      <span className="text-slate-400">status:</span> <span className="text-cyan-400 font-semibold">'Available for Projects'</span>
                    </p>
                    <p className="text-slate-400">&#125;;</p>
                  </div>

                  {/* Live Status indicator in terminal */}
                  <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs sm:text-sm text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Ready to build
                    </span>
                    <span className="text-cyan-400 font-medium">TypeScript &bull; React &bull; AI</span>
                  </div>
                </div>

                {/* Identity & Highlight Card */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 text-white font-bold flex items-center justify-center text-base shadow-sm">
                      MK
                    </div>
                    <div>
                      <div className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                        <span>{BRAND_INFO.owner}</span>
                        <span className="w-2 h-2 rounded-full bg-cyan-600" />
                      </div>
                      <p className="text-xs sm:text-sm text-cyan-700 font-medium">{BRAND_INFO.brandName}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                    <span>Tirunelveli</span>
                  </div>
                </div>

                {/* Feature Metric Pills */}
                <div className="grid grid-cols-3 gap-2.5 text-center text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex flex-col items-center justify-center gap-1">
                    <Code className="w-5 h-5 text-cyan-600" />
                    <span className="font-semibold text-slate-800">Full Stack</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex flex-col items-center justify-center gap-1">
                    <Bot className="w-5 h-5 text-emerald-600" />
                    <span className="font-semibold text-slate-800">AI Chatbots</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex flex-col items-center justify-center gap-1">
                    <Layers className="w-5 h-5 text-indigo-600" />
                    <span className="font-semibold text-slate-800">Automations</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
