import React from 'react';
import { Code, MapPin, Mail, Phone, Linkedin, Github, ArrowUp } from 'lucide-react';
import { BRAND_INFO } from '../../data/portfolioData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-cyan-500/10 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Code className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">
                  {BRAND_INFO.brandName}
                </span>
                <span className="text-xs text-slate-400">by {BRAND_INFO.owner}</span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-cyan-400 font-semibold">
              "{BRAND_INFO.tagline}"
            </p>

            <p className="text-sm sm:text-[15px] text-slate-400 leading-relaxed max-w-sm">
              Providing customized, high-quality digital solutions across web development, mobile apps, AI chatbots, and workflow automation with maximum efficiency and minimal cost.
            </p>

            <div className="flex items-center gap-2.5 text-sm sm:text-[15px] text-slate-300 pt-2">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{BRAND_INFO.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2.5 text-sm sm:text-[15px] text-slate-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors py-0.5 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Direct Connect
            </h3>
            <ul className="space-y-3 text-sm sm:text-[15px] text-slate-300">
              <li>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors min-w-0"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">{BRAND_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{BRAND_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-300 shrink-0" />
                  <span>GitHub Profile</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Scroll to Top / Legal info */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end space-y-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all group cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <div className="flex flex-col items-start lg:items-end space-y-2 text-sm text-slate-400">
              <button
                onClick={onOpenPrivacy}
                className="hover:text-cyan-400 transition-colors text-left lg:text-right cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={onOpenTerms}
                className="hover:text-cyan-400 transition-colors text-left lg:text-right cursor-pointer"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400 text-center sm:text-left">
          <p>{BRAND_INFO.copyright}</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-4">
            <span>{BRAND_INFO.role}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 hidden sm:inline-block" />
            <span className="text-emerald-400 font-medium">Available for Freelance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
