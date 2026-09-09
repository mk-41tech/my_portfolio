import React, { useState } from 'react';
import { ExternalLink, Layers, CheckCircle2, Sparkles, Building2, Eye, ShieldCheck, Database, Calendar } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { ProjectItem } from '../../types';
import { ProjectModal } from '../modals/ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-white border-t border-slate-200 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span>Proven Client Deliveries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-normal">
            Selected Projects
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Real solutions built for real clients. Each system is engineered for scalability, custom workflows, and optimal user experience.
          </p>
        </div>

        {/* Projects Grid (2 projects only) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-400 transition-all duration-300 group"
            >
              {/* Project Visual Banner Card - High-Tech Slate Preview */}
              <div className="relative p-5 sm:p-7 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800 overflow-hidden text-white">
                {/* Tech abstract grid / pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Card Top Category & Client */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-medium">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span>{project.category}</span>
                  </span>

                  {project.client && (
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60 font-medium">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      <span>{project.client}</span>
                    </span>
                  )}
                </div>

                {/* Visual Representation Element */}
                <div className="relative z-10 rounded-xl bg-slate-950/90 border border-slate-800 p-4 sm:p-5 shadow-inner">
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs sm:text-sm font-mono text-slate-400 truncate max-w-[180px] sm:max-w-none">
                      {project.id === 'rethika-enterprises' ? 'rethikaenterprises.com' : 'vidhyavidhai.org/Roots'}
                    </span>
                  </div>

                  <div className="pt-4 space-y-2.5">
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 flex flex-wrap items-center justify-between gap-2">
                      <span>Architecture Highlights</span>
                      {project.id === 'rethika-enterprises' ? (
                        <span className="text-xs text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/30 flex items-center gap-1.5">
                          <Database className="w-3 h-3" /> D1 SQL + Cloudflare
                        </span>
                      ) : (
                        <span className="text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/30 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" /> Conclave Platform
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-300">
                      {project.id === 'rethika-enterprises' ? (
                        <>
                          <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" /> Admin &amp; RFQ Portal
                          </div>
                          <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Excel Bulk Import
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Delegate Registration
                          </div>
                          <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Media &amp; Keynotes
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 bg-white">
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-cyan-800 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Status Note for Roots if applicable */}
                  {project.statusNote && (
                    <p className="text-sm text-amber-900 bg-amber-50 border border-amber-200 p-3 rounded-xl leading-relaxed font-medium">
                      {project.statusNote}
                    </p>
                  )}

                  {/* Tech Tags */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-cyan-50 text-cyan-800 border border-cyan-200">
                          +{project.technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Buttons Action Bar */}
                <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm sm:text-base font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 transition-all cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-cyan-600" />
                    <span>View Case Study</span>
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 shadow-md shadow-cyan-600/15 transition-all"
                    >
                      <span>Live Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
