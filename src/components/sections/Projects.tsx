import React, { useState } from 'react';
import {
  ExternalLink,
  Layers,
  Sparkles,
  Building2,
  Eye,
  ShieldCheck,
  Database,
  Calendar,
  Clock,
  CheckCircle2,
  Rocket,
  Users,
  Send,
  Briefcase,
  Share2,
  FileSpreadsheet,
  MessageCircle,
  BarChart3,
  CalendarDays
} from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { ProjectItem, ProjectStatus } from '../../types';
import { ProjectModal } from '../modals/ProjectModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectStatus>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const ongoingCount = PROJECTS.filter((p) => p.status === 'ongoing').length;
  const completedCount = PROJECTS.filter((p) => p.status === 'completed').length;
  const upcomingCount = PROJECTS.filter((p) => p.status === 'upcoming').length;

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((project) => project.status === activeFilter);

  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case 'ongoing':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span>ONGOING</span>
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>COMPLETED</span>
          </span>
        );
      case 'upcoming':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
            <Clock className="w-3.5 h-3.5 text-indigo-400" />
            <span>UPCOMING</span>
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-white border-t border-slate-200 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span>Structured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Selected Projects
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Real solutions built for real clients, organized across ongoing developments, delivered systems, and upcoming roadmaps.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>All Projects</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${activeFilter === 'all' ? 'bg-cyan-100 text-cyan-800' : 'bg-slate-200 text-slate-700'}`}>
                {PROJECTS.length}
              </span>
            </button>

            <button
              onClick={() => setActiveFilter('ongoing')}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeFilter === 'ongoing'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span>Ongoing</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${activeFilter === 'ongoing' ? 'bg-amber-100 text-amber-800' : 'bg-slate-200 text-slate-700'}`}>
                {ongoingCount}
              </span>
            </button>

            <button
              onClick={() => setActiveFilter('completed')}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeFilter === 'completed'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Completed</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${activeFilter === 'completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'}`}>
                {completedCount}
              </span>
            </button>

            <button
              onClick={() => setActiveFilter('upcoming')}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeFilter === 'upcoming'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-indigo-600" />
              <span>Upcoming</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${activeFilter === 'upcoming' ? 'bg-indigo-100 text-indigo-800' : 'bg-slate-200 text-slate-700'}`}>
                {upcomingCount}
              </span>
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-400 transition-all duration-300 group"
            >
              {/* Project Visual High-Tech Slate Preview Banner */}
              <div className="relative p-5 sm:p-7 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800 overflow-hidden text-white">
                {/* Tech abstract grid / pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Card Top Category, Status Badge & Client */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="flex flex-wrap items-center gap-2">
                    {getStatusBadge(project.status)}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300 text-xs font-medium">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{project.category}</span>
                    </span>
                  </div>

                  {project.client && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700/60 font-medium">
                      <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{project.client}</span>
                    </span>
                  )}
                </div>

                {/* Bespoke Visual Interface Mockup for each Project */}
                <div className="relative z-10 rounded-xl bg-slate-950/90 border border-slate-800 p-4 sm:p-5 shadow-inner">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 truncate max-w-[200px] sm:max-w-none">
                      {project.id === 'rethika-enterprises' && 'https://rethikaenterprises.com'}
                      {project.id === 'roots-education-mile' && 'https://vidhyavidhai.org/index.php/roots/'}
                      {project.id === 'social-media-management-tool' && 'social-workspace.app (Development)'}
                      {project.id === 'aadharsh-workhub-crm' && 'aadharsh.workhub.workspace (Development)'}
                      {project.id === 'raghul-brand-website' && 'raghul-brand.project (Planned)'}
                    </span>
                  </div>

                  {/* Project specific highlights inside the preview */}
                  <div className="pt-3.5 space-y-2.5">
                    {/* Social Media Tool Preview */}
                    {project.id === 'social-media-management-tool' && (
                      <>
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                          <span className="flex items-center gap-1.5 text-cyan-400">
                            <Share2 className="w-3.5 h-3.5" /> Phase 1 Channels:
                          </span>
                          <span className="text-[11px] text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                            Active Development
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-300">
                          {['Instagram', 'Facebook', 'LinkedIn', 'TikTok', 'YouTube'].map((platform) => (
                            <span key={platform} className="bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800 text-slate-300 font-medium">
                              {platform}
                            </span>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
                          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center gap-1.5">
                            <CalendarDays className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span className="truncate">Content Composer &amp; Calendar</span>
                          </div>
                          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">Approval &amp; Role Access</span>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Aadharsh WorkHub CRM Preview */}
                    {project.id === 'aadharsh-workhub-crm' && (
                      <>
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                          <span className="flex items-center gap-1.5 text-cyan-400">
                            <Briefcase className="w-3.5 h-3.5" /> Unified Operations Workspace
                          </span>
                          <span className="text-[11px] text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                            Active Development
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span className="truncate">My Workday &amp; Daily HR Reports</span>
                          </div>
                          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center gap-1.5">
                            <Send className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">Client Jobs &amp; Dispatch Flow</span>
                          </div>
                          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center gap-1.5">
                            <BarChart3 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                            <span className="truncate">Staff Expenses &amp; Enquiries</span>
                          </div>
                          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span className="truncate">Reminders &amp; Email Follow-ups</span>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Rethika Enterprises Preview */}
                    {project.id === 'rethika-enterprises' && (
                      <>
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                          <span className="flex items-center gap-1.5 text-cyan-400">
                            <Database className="w-3.5 h-3.5" /> Cloudflare D1 SQL + R2
                          </span>
                          <span className="text-[11px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                            Live &amp; Delivered
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span className="truncate">Admin Portal &amp; RFQ System</span>
                          </div>
                          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center gap-1.5">
                            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">Excel Bulk Product Import</span>
                          </div>
                          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center gap-1.5">
                            <MessageCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                            <span className="truncate">WhatsApp Click-to-Chat</span>
                          </div>
                          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                            <span className="truncate">Branding Customization</span>
                          </div>
                        </div>
                      </>
                    )}

                    {/* ROOTS Preview */}
                    {project.id === 'roots-education-mile' && (
                      <>
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                          <span className="flex items-center gap-1.5 text-emerald-400">
                            <Calendar className="w-3.5 h-3.5" /> Education Conclave Platform
                          </span>
                          <span className="text-[11px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                            Live &amp; Delivered (2025)
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span className="truncate">Delegate &amp; Speaker Workflows</span>
                          </div>
                          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">Video &amp; Gallery Archives</span>
                          </div>
                          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center gap-1.5">
                            <Rocket className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                            <span className="truncate">ROOTS Conclave Journey</span>
                          </div>
                          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                            <span className="truncate">High-Accessibility Mobile UI</span>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Raghul Preview */}
                    {project.id === 'raghul-brand-website' && (
                      <>
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                          <span className="flex items-center gap-1.5 text-indigo-400">
                            <Rocket className="w-3.5 h-3.5" /> Brand Website &amp; Admin System
                          </span>
                          <span className="text-[11px] text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/30">
                            Planned Upcoming Scope
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span className="truncate">Backend Product Admin Portal</span>
                          </div>
                          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center gap-1.5">
                            <Send className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">Form Email Notifications</span>
                          </div>
                          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center gap-1.5">
                            <MessageCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                            <span className="truncate">Direct Email &amp; WhatsApp</span>
                          </div>
                          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                            <span className="truncate">Home, About, Products, Contact</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 bg-white">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-cyan-800 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Status Note banner if applicable */}
                  {project.statusNote && (
                    <div className={`p-3 rounded-xl text-xs sm:text-sm font-medium leading-relaxed ${
                      project.status === 'ongoing'
                        ? 'text-amber-900 bg-amber-50 border border-amber-200'
                        : project.status === 'completed'
                        ? 'text-slate-700 bg-slate-50 border border-slate-200'
                        : 'text-indigo-900 bg-indigo-50 border border-indigo-200'
                    }`}>
                      {project.statusNote}
                    </div>
                  )}

                  {/* Feature & Technology Tags */}
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

                {/* Action Buttons Bar */}
                <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all cursor-pointer ${
                      project.liveUrl
                        ? 'sm:w-1/2 text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
                        : 'w-full text-white bg-slate-900 hover:bg-slate-800 shadow-sm'
                    }`}
                  >
                    <Eye className="w-4 h-4 text-cyan-400" />
                    <span>
                      {project.status === 'completed'
                        ? 'View Case Study'
                        : project.status === 'ongoing'
                        ? 'View Project Details'
                        : 'View Planned Scope'}
                    </span>
                  </button>

                  {/* Strictly only show live URL where public URL is intentionally provided */}
                  {project.isLive && project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 shadow-md shadow-cyan-600/15 transition-all"
                    >
                      <span>View Live Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study / Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
