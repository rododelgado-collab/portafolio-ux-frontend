import { FileText } from 'lucide-react'

const Hero = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      tabIndex={-1}
      className="pt-40 pb-20 px-6 max-w-6xl mx-auto flex flex-col justify-center min-h-[90vh] outline-none"
      aria-label="Sección principal"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20 text-cyan-800 dark:text-cyan-400 text-sm font-bold mb-6 w-fit">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-600 dark:bg-cyan-500"></span>
        </span>
        Disponible para nuevos proyectos
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
        Diseñando experiencias. <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500">
          Construyendo interfaces.
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-slate-700 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed font-medium">
        Soy un profesional híbrido. Combino la empatía del diseño UX con la lógica del desarrollo Front-end para crear productos digitales que no solo se ven increíbles, sino que funcionan a la perfección.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          onClick={(e) => handleNavClick(e, 'projects')}
          className="px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-lg focus:ring-4 focus:ring-cyan-500/50 outline-none"
        >
          Ver mis trabajos
        </a>
        <a
          href="./curriculum.html"
          target="_blank"
          rel="noreferrer"
          className="px-8 py-4 rounded-full bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white font-bold border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-sm focus:ring-4 focus:ring-cyan-500/50 outline-none"
          aria-label="Ver mi Currículum"
        >
          <FileText size={20} /> Currículum
        </a>
        <a
          href="https://github.com/rododelgado-collab"
          target="_blank"
          rel="noreferrer"
          className="px-8 py-4 rounded-full bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white font-bold border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-sm focus:ring-4 focus:ring-cyan-500/50 outline-none"
          aria-label="Visitar mi perfil de GitHub"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Hero
