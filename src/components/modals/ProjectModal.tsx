import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Building2, AlertCircle } from 'lucide-react';
import { ProjectItem } from '../../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold mb-2">
              <Layers className="w-3.5 h-3.5 text-cyan-600" />
              <span>{project.category}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {project.title}
            </h3>
            {project.client && (
              <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1">
                <Building2 className="w-3.5 h-3.5 text-cyan-600" />
                <span>Client: <strong className="text-slate-700">{project.client}</strong></span>
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status note if present */}
        {project.statusNote && (
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>{project.statusNote}</span>
          </div>
        )}

        {/* Case Study Overview */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
            Project Case Study &amp; Scope
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Key Highlights */}
        <div className="space-y-3 border-t border-slate-100 pt-5">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
            Key Implemented Features &amp; Architecture
          </h4>
          <ul className="space-y-2.5">
            {project.keyHighlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Stack */}
        <div className="space-y-3 border-t border-slate-100 pt-5">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-600" />
            <span>Technologies &amp; Libraries Used</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-5">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            Close Window
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 shadow-md shadow-cyan-600/20 transition-all"
            >
              <span>{project.liveUrlText || 'Visit Live Website'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
