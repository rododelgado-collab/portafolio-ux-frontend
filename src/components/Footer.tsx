const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer
      className="border-t border-slate-200 dark:border-slate-800/50 bg-white dark:bg-slate-900/20 py-16 px-6 mt-24"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold tracking-tighter mb-4">
              <span className="text-slate-950 dark:text-slate-100">Rodolfo</span><span className="text-blue-600 dark:text-blue-500">Delgado</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Diseño UX y Desarrollo Frontend enfocado en accesibilidad WCAG 2.1 AA y experiencias de usuario excepcionales.
            </p>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Enlaces de navegación del footer">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-3 list-none m-0 p-0">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, 'about')}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors focus:ring-2 focus:ring-cyan-500 rounded px-2 py-1 outline-none inline-block"
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => handleNavClick(e, 'skills')}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors focus:ring-2 focus:ring-cyan-500 rounded px-2 py-1 outline-none inline-block"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, 'projects')}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors focus:ring-2 focus:ring-cyan-500 rounded px-2 py-1 outline-none inline-block"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors focus:ring-2 focus:ring-cyan-500 rounded px-2 py-1 outline-none inline-block"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          {/* Social Links */}
          <nav aria-label="Enlaces a redes sociales">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Sígueme</h4>
            <ul className="space-y-3 list-none m-0 p-0">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors focus:ring-2 focus:ring-cyan-500 rounded px-2 py-1 outline-none inline-block"
                  aria-label="Ver mi código en GitHub"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors focus:ring-2 focus:ring-cyan-500 rounded px-2 py-1 outline-none inline-block"
                  aria-label="Visitarme en LinkedIn"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors focus:ring-2 focus:ring-cyan-500 rounded px-2 py-1 outline-none inline-block"
                  aria-label="Sígueme en Twitter"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800/50 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <p>© {currentYear} Rodolfo Delgado. Todos los derechos reservados.</p>
            <p>Diseñado y desarrollado con pasión.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
