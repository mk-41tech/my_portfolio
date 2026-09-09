import React from 'react';
import { MessageSquareQuote, Sparkles, Send, Star, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 relative bg-slate-50/60 border-t border-slate-200 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/5 rounded-full blur-[100px] sm:blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span>Client Feedback &amp; Reviews</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-normal">
            What Clients Say
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Authenticity and trust are foundational to MK Technology &amp; Services. Verified testimonials will be published as recent project cohorts launch.
          </p>
        </div>

        {/* Future-Ready Intentional Empty State Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-slate-200 shadow-md relative overflow-hidden space-y-6">
            
            {/* Ambient subtle glow */}
            <div className="w-16 h-16 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 mx-auto shadow-sm">
              <MessageSquareQuote className="w-8 h-8" />
            </div>

            <div className="space-y-3 max-w-lg mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Client Testimonials Coming Soon
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We believe in genuine, verified feedback. As recent client deliverables and deployments conclude, client reviews and case study quotes will be published directly here.
              </p>
            </div>

            {/* Testimonial Structure Schema Preview for future additions */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700">
                  <Star className="w-4 h-4 text-cyan-600 fill-cyan-600" />
                  <span>Verified Ratings</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">Authentic project ratings from real business stakeholders.</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Project Outcomes</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">Measurable impact on client operations and growth.</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-sky-700">
                  <HeartHandshake className="w-4 h-4 text-sky-600" />
                  <span>Client Partnership</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">Long-term collaboration, support, and responsiveness.</p>
              </div>
            </div>

            {/* CTA for past/current clients */}
            <div className="pt-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all cursor-pointer shadow-xs"
              >
                <Send className="w-4 h-4 text-cyan-600" />
                <span>Have we worked together? Share your feedback</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
