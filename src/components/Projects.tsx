import { ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'
import type { Project } from '../types'

interface ProjectsProps {
  onProjectClick: (project: Project) => void
}

const Projects = ({ onProjectClick }: ProjectsProps) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch('/projects-data.json')
        const data = await response.json()
        setProjects(data)
      } catch (error) {
        console.error('Error loading projects:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  if (loading) {
    return (
      <section id="projects" tabIndex={-1} className="py-24 px-6 max-w-6xl mx-auto outline-none">
        <div className="text-center">
          <div className="inline-block animate-pulse">
            <div className="h-12 w-48 bg-slate-200 dark:bg-slate-800 rounded-lg mb-4"></div>
            <div className="h-6 w-72 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="projects"
      tabIndex={-1}
      className="py-24 px-6 max-w-6xl mx-auto outline-none"
    >
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-slate-700 dark:text-slate-400 max-w-xl text-lg">
            Una selección de trabajos donde he aplicado mis habilidades en desarrollo frontend y diseño UX/UI.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onProjectClick(project)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onProjectClick(project)
              }
            }}
            className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl cursor-pointer focus:ring-4 focus:ring-cyan-500/50 outline-none"
            role="button"
            tabIndex={0}
            aria-label={`Ver caso de estudio de ${project.title}`}
          >
            {/* Hero Image */}
            <div className="h-64 w-full bg-gradient-to-br from-blue-600 to-cyan-500 opacity-90 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8" aria-hidden="true">
              <div className="w-full h-full bg-slate-900/30 dark:bg-slate-950/40 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-500 shadow-inner">
                <span className="font-mono text-sm tracking-widest uppercase font-bold drop-shadow-md">
                  Preview del Proyecto
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-cyan-700 dark:text-cyan-400 text-sm font-bold mb-2">{project.category.toUpperCase() === 'UX' ? 'UX/UI & Front-End' : 'Front-End Development'}</p>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 font-medium">{project.shortDescription}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-bold group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Ver caso de estudio <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
