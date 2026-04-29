import { ExternalLink } from 'lucide-react'
import type { Project } from '../types'

interface ProjectsProps {
  onProjectClick: (project: Project) => void
}

const Projects = ({ onProjectClick }: ProjectsProps) => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Fintech Dashboard UX',
      shortDescription: 'Rediseño de dashboard financiero con mejora del 30% en velocidad de tareas',
      description: 'Rediseño completo de un dashboard financiero. Mejoré la accesibilidad y reduje el tiempo de tareas en un 30% mediante investigación de usuarios y un diseño limpio en React.',
      technologies: ['React', 'Tailwind', 'Figma', 'Recharts'],
      image: 'https://images.unsplash.com/photo-1460925895917-aaf4b91c7670?w=600&h=400&fit=crop',
      imageAlt: 'Dashboard financiero moderno con gráficos y datos',
      liveUrl: '#',
      githubUrl: '#',
      category: 'ux',
      role: 'Lead UX/UI & Desarrollador Front-End',
      timeline: '3 meses',
      challenge: 'El sistema financiero anterior presentaba una sobrecarga cognitiva severa. Los usuarios tardaban un promedio de 4 minutos en encontrar el reporte mensual, y las tasas de error en las transferencias eran altas debido a la falta de jerarquía visual y retroalimentación del sistema.',
      solution: 'Implementamos una arquitectura de información basada en "widgets" personalizables. Desarrollé el front-end utilizando React y Tailwind CSS, asegurando que cada componente fuera accesible (WCAG 2.1 AA) y respondiera instantáneamente. Creamos un sistema de diseño robusto en Figma para mantener la coherencia.',
      results: [
        'Reducción del 30% en el tiempo promedio por tarea.',
        'Disminución del 85% en errores de transferencia.',
        'Puntuación de satisfacción (CSAT) aumentada de 3.2 a 4.8 sobre 5.'
      ]
    },
    {
      id: '2',
      title: 'E-commerce Sostenible',
      shortDescription: 'Tienda en línea optimizada con puntuación de 98 en Lighthouse',
      description: 'Desarrollo de una tienda en línea rápida y optimizada para SEO. Implementación de un carrito de compras con estado global y animaciones fluidas.',
      technologies: ['Next.js', 'TypeScript', 'Zustand', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      imageAlt: 'Interfaz de e-commerce con productos',
      liveUrl: '#',
      githubUrl: '#',
      category: 'frontend',
      role: 'Desarrollador Front-End Principal',
      timeline: '2.5 meses',
      challenge: 'La marca de ropa sostenible necesitaba migrar de una plataforma lenta a una experiencia a medida, ultrarrápida y optimizada para buscadores, capaz de manejar picos de tráfico repentinos durante los lanzamientos de colecciones.',
      solution: 'Arquitecturamos la solución con Next.js para un Server-Side Rendering y SEO óptimo. Utilicé Zustand para un manejo de estado ligero en el carrito y Framer Motion para micro-interacciones sutiles que mejoran la percepción de calidad de los productos.',
      results: [
        'Puntuación de 98/100 en Google Lighthouse (Performance).',
        'Aumento del 40% en la tasa de conversión móvil.',
        'Reducción del tiempo de carga inicial a menos de 0.8 segundos.'
      ]
    },
    {
      id: '3',
      title: 'App de Movilidad Urbana',
      shortDescription: 'Sistema de transporte con Design System escalable',
      description: 'Investigación, wireframing y prototipado de alta fidelidad para una app de transporte. Incluye un sistema de diseño escalable y pruebas de usabilidad.',
      technologies: ['Figma', 'Miro', 'UserTesting', 'Design System'],
      image: 'https://images.unsplash.com/photo-1563986768609-2f121991de9a?w=600&h=400&fit=crop',
      imageAlt: 'Aplicación de movilidad urbana',
      liveUrl: '#',
      githubUrl: '#',
      category: 'ux',
      role: 'UX Researcher & Product Designer',
      timeline: '4 meses',
      challenge: 'Los usuarios de la ciudad se quejaban de la falta de predictibilidad en los tiempos de llegada del transporte público en la app existente. Necesitábamos descubrir las frustraciones reales y diseñar una solución que generara confianza inmediata.',
      solution: 'Realicé entrevistas en profundidad y pruebas de usabilidad con la app actual. Basado en los hallazgos, rediseñé el flujo principal, introduciendo estimaciones de tiempo con rangos de probabilidad visuales y mapas térmicos. Todo fue prototipado y validado en Figma.',
      results: [
        'Validación exitosa del nuevo flujo con 20 usuarios beta.',
        'Creación de un Design System con más de 50 componentes y variantes.',
        'Incremento proyectado del 25% en la retención de usuarios recurrentes.'
      ]
    },
  ]

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
            Una selección de trabajos donde he aplicado mi enfoque de extremo a extremo, desde la investigación inicial hasta el despliegue del código.
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
