import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Sun, Moon, ChevronRight, Menu, X } from 'lucide-react'
import SkipLink from './common/SkipLink'

interface NavigationProps {
  isDark: boolean
  setIsDark: (isDark: boolean) => void
}

interface SectionLink {
  id: string
  label: string
}

const SECTION_LINKS: SectionLink[] = [
  { id: 'hero', label: 'Sobre mí' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Proyectos' },
]

const Navigation = ({ isDark, setIsDark }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === '/'
  const isBlog = location.pathname.startsWith('/blog')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detectar sección activa (solo aplica en la página de inicio)
      if (window.location.pathname !== '/') return
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

  // Cerrar el menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome) {
      e.preventDefault()
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
    // Fuera del inicio, el Link navega a /#id y HomePage hace el scroll
    setMobileMenuOpen(false)
  }

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  const desktopSectionClass = (id: string) =>
    `pb-1 border-b-2 transition-colors outline-none focus:outline-none focus-visible:outline-none active:outline-none ${
      isHome && activeSection === id
        ? 'text-slate-900 dark:text-white border-cyan-600 dark:border-cyan-400'
        : 'text-slate-600 dark:text-slate-300 border-transparent hover:text-cyan-600 dark:hover:text-cyan-400'
    }`

  const mobileSectionClass = (isActive: boolean) =>
    `block py-3 px-4 rounded-lg transition-colors ${
      isActive
        ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold'
        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
    }`

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
            onClick={handleLogoClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleLogoClick()
            }}
            aria-label="Ir al inicio"
          >
            <span className="text-slate-950 dark:text-slate-100">Rodolfo</span><span className="text-blue-600 dark:text-blue-500">Delgado</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium items-center">
            {SECTION_LINKS.map((link) => (
              <Link
                key={link.id}
                to={`/#${link.id}`}
                onClick={(e) => handleSectionClick(e, link.id)}
                className={desktopSectionClass(link.id)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/blog"
              aria-current={isBlog ? 'page' : undefined}
              className={`pb-1 border-b-2 transition-colors outline-none focus:outline-none focus-visible:outline-none active:outline-none ${
                isBlog
                  ? 'text-slate-900 dark:text-white border-cyan-600 dark:border-cyan-400'
                  : 'text-slate-600 dark:text-slate-300 border-transparent hover:text-cyan-600 dark:hover:text-cyan-400'
              }`}
            >
              Blog
            </Link>

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
          <Link
            to="/#contact"
            onClick={(e) => handleSectionClick(e, 'contact')}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 hover:bg-slate-900/10 dark:hover:bg-white/10 text-slate-900 dark:text-white text-sm font-semibold transition-all hover:scale-105 active:scale-95 focus:ring-2 focus:ring-cyan-500 outline-none"
          >
            Hablemos <ChevronRight size={16} />
          </Link>
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
              {SECTION_LINKS.map((link) => (
                <Link
                  key={link.id}
                  to={`/#${link.id}`}
                  onClick={(e) => handleSectionClick(e, link.id)}
                  className={mobileSectionClass(isHome && activeSection === link.id)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/blog"
                aria-current={isBlog ? 'page' : undefined}
                className={mobileSectionClass(isBlog)}
              >
                Blog
              </Link>
              <Link
                to="/#contact"
                onClick={(e) => handleSectionClick(e, 'contact')}
                className={mobileSectionClass(isHome && activeSection === 'contact')}
              >
                Contacto
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Navigation
