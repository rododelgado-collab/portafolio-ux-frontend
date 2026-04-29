import { useState, useEffect } from 'react'
import { Sun, Moon, ChevronRight, Menu, X } from 'lucide-react'
import SkipLink from './common/SkipLink'

interface NavigationProps {
  isDark: boolean
  setIsDark: (isDark: boolean) => void
}

const Navigation = ({ isDark, setIsDark }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detectar sección activa
      const sections = ['hero', 'skills', 'projects', 'contact']
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <SkipLink />
      <nav
        role="navigation"
        aria-label="Navegación principal"
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-slate-200 dark:border-slate-800/50 py-4 shadow-sm'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div
            className="text-xl font-bold tracking-tighter cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            aria-label="Ir al inicio"
          >
            <span className="text-slate-950 dark:text-slate-100">Rodolfo</span><span className="text-blue-600 dark:text-blue-500">Delgado</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium items-center">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, 'hero')}
              className={`pb-1 border-b-2 transition-colors outline-none focus:outline-none focus-visible:outline-none active:outline-none ${
                activeSection === 'hero'
                  ? 'text-slate-900 dark:text-white border-cyan-600 dark:border-cyan-400'
                  : 'text-slate-600 dark:text-slate-300 border-transparent hover:text-cyan-600 dark:hover:text-cyan-400'
              }`}
            >
              Sobre mí
            </a>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, 'skills')}
              className={`pb-1 border-b-2 transition-colors outline-none focus:outline-none focus-visible:outline-none active:outline-none ${
                activeSection === 'skills'
                  ? 'text-slate-900 dark:text-white border-cyan-600 dark:border-cyan-400'
                  : 'text-slate-600 dark:text-slate-300 border-transparent hover:text-cyan-600 dark:hover:text-cyan-400'
              }`}
            >
              Habilidades
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className={`pb-1 border-b-2 transition-colors outline-none focus:outline-none focus-visible:outline-none active:outline-none ${
                activeSection === 'projects'
                  ? 'text-slate-900 dark:text-white border-cyan-600 dark:border-cyan-400'
                  : 'text-slate-600 dark:text-slate-300 border-transparent hover:text-cyan-600 dark:hover:text-cyan-400'
              }`}
            >
              Proyectos
            </a>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors ml-4 focus:ring-2 focus:ring-cyan-500 outline-none"
              aria-label="Cambiar tema"
            >
              {isDark ? <Sun size={18} className="text-slate-300" /> : <Moon size={18} className="text-slate-700" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors focus:ring-2 focus:ring-cyan-500 outline-none"
              aria-label="Cambiar tema"
            >
              {isDark ? <Sun size={20} className="text-slate-300" /> : <Moon size={20} className="text-slate-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors focus:ring-2 focus:ring-cyan-500 outline-none"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-slate-900 dark:text-white" />
              ) : (
                <Menu size={24} className="text-slate-900 dark:text-white" />
              )}
            </button>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 hover:bg-slate-900/10 dark:hover:bg-white/10 text-slate-900 dark:text-white text-sm font-semibold transition-all hover:scale-105 active:scale-95 focus:ring-2 focus:ring-cyan-500 outline-none"
          >
            Hablemos <ChevronRight size={16} />
          </a>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <>
          {/* Overlay para cerrar al hacer click fuera */}
          <div
            className="md:hidden fixed inset-0 top-[70px] z-30 bg-black/20 dark:bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          {/* Menu */}
          <div className="md:hidden fixed inset-x-0 top-[70px] z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-top-2">
            <div className="px-6 py-4 space-y-2" onClick={(e) => e.stopPropagation()}>
            <a
              href="#hero"
              onClick={(e) => {
                handleNavClick(e, 'hero')
                setMobileMenuOpen(false)
              }}
              className={`block py-3 px-4 rounded-lg transition-colors ${
                activeSection === 'hero'
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Sobre mí
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                handleNavClick(e, 'skills')
                setMobileMenuOpen(false)
              }}
              className={`block py-3 px-4 rounded-lg transition-colors ${
                activeSection === 'skills'
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Habilidades
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                handleNavClick(e, 'projects')
                setMobileMenuOpen(false)
              }}
              className={`block py-3 px-4 rounded-lg transition-colors ${
                activeSection === 'projects'
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Proyectos
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                handleNavClick(e, 'contact')
                setMobileMenuOpen(false)
              }}
              className={`block py-3 px-4 rounded-lg transition-colors ${
                activeSection === 'contact'
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Contacto
            </a>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Navigation
