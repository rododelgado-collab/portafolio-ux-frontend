import { useEffect, useRef } from 'react'
import { Layers, Terminal, Code2, Smartphone, Palette } from 'lucide-react'

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null)
  const barsRef = useRef<(HTMLDivElement | null)[]>([])

  const skills = [
    { name: 'Diseño UX/UI', icon: Layers, level: 'Avanzado', percentage: 85 },
    { name: 'Desarrollo Front-End', icon: Terminal, level: 'Avanzado', percentage: 80 },
    { name: 'Figma & Prototipado', icon: Palette, level: 'Experto', percentage: 95 },
    { name: 'React & Ecosistema', icon: Code2, level: 'Avanzado', percentage: 75 },
    { name: 'Diseño Responsivo', icon: Smartphone, level: 'Experto', percentage: 90 },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          barsRef.current.forEach((bar) => {
            if (bar) {
              const percentage = bar.getAttribute('data-percentage')
              bar.style.width = (percentage || 0) + '%'
            }
          })
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      tabIndex={-1}
      className="py-24 px-6 bg-white dark:bg-slate-900/20 border-y border-slate-200 dark:border-slate-800/50 outline-none"
    >
      <div className="max-w-6xl mx-auto" ref={skillsRef}>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Mi Arsenal Creativo
          </h2>
          <p className="text-slate-700 dark:text-slate-400 max-w-xl text-lg">
            El puente entre el diseño y el código. Utilizo las mejores herramientas para asegurar que la visión de diseño sobreviva la implementación técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/20 border border-slate-200 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-800/40 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all group shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center text-cyan-700 dark:text-cyan-400 group-hover:scale-110 transition-transform shadow-sm border border-slate-200 dark:border-transparent shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{skill.name}</h3>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{skill.level}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div
                  className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mt-4"
                  role="progressbar"
                  aria-valuenow={skill.percentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`Nivel de habilidad en ${skill.name}: ${skill.percentage}%`}
                >
                  <div
                    ref={(el) => {
                      barsRef.current[index] = el
                    }}
                    className="h-full bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-500 rounded-full transition-all duration-1000 ease-out w-0"
                    data-percentage={skill.percentage}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  ></div>
                </div>

                <div className="text-right mt-1">
                  <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.percentage}%
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
