import { X } from 'lucide-react'
import type { Project } from '../types'

interface ProjectDetailProps {
  project: Project
  onClose: () => void
}

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  return (
    <div
      className="fixed inset-0 bg-slate-950/50 dark:bg-slate-950/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      role="presentation"
      onClick={onClose}
    >
      <button
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        aria-label="Cerrar modal"
        tabIndex={-1}
      />
      <div
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 py-6 flex justify-between items-center z-10">
          <h1 id="project-title" className="text-3xl font-extrabold text-slate-900 dark:text-white">
            {project.title}
          </h1>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all focus:ring-2 focus:ring-cyan-500 outline-none"
            aria-label="Cerrar detalles del proyecto"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Hero Image */}
              <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Description */}
              <div>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              {/* Challenge Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">El Desafío</h2>
                <p className="text-slate-700 dark:text-slate-400 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">La Solución</h2>
                <p className="text-slate-700 dark:text-slate-400 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Results Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Resultados</h2>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-cyan-600 dark:text-cyan-400 font-extrabold text-lg mt-0.5">✓</span>
                      <span className="text-slate-700 dark:text-slate-400">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Info Card */}
              <div className="space-y-6 lg:sticky lg:top-20">
                {/* Timeline */}
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                  <h3 className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Duración
                  </h3>
                  <p className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {project.timeline}
                  </p>
                </div>

                {/* Role */}
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                  <h3 className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Rol
                  </h3>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">
                    {project.role}
                  </p>
                </div>

                {/* Technologies */}
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                  <h3 className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-4">
                    Tecnologías
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={`mailto:rodolfodelgadosantiag@gmail.com?subject=Quiero%20un%20proyecto%20como%20el%20de%20${project.title}`}
                  className="block w-full px-6 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-lg focus:ring-4 focus:ring-cyan-500/50 outline-none text-center"
                  aria-label={`Enviar correo para consultar sobre un proyecto similar a ${project.title}`}
                >
                  Contáctame
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
