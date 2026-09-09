import React from 'react';
import { Layout, Server, Database, Cpu, GitBranch, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return Layout;
      case 'Server':
        return Server;
      case 'Database':
        return Database;
      case 'Cpu':
        return Cpu;
      case 'GitBranch':
        return GitBranch;
      default:
        return Layout;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-slate-50/60 border-t border-slate-200 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-normal">
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            A solid stack of modern frontend frameworks, backend runtimes, structured databases, and AI automation engines.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.icon);
            return (
              <div
                key={cat.category}
                className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-cyan-400 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 group-hover:scale-105 group-hover:border-cyan-400 transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-cyan-800 transition-colors">
                        {cat.category}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 mb-5 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2.5 pt-4 border-t border-slate-100">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3.5 py-2 rounded-lg text-sm font-semibold bg-slate-100 text-slate-800 border border-slate-200 hover:border-cyan-300 hover:text-cyan-900 hover:bg-cyan-50 transition-all shadow-xs flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan-600" />
                      <span>{skill}</span>
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
