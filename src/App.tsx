import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ProjectDetail from './components/ProjectDetail'
import type { Project } from './types'

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      return saved === 'dark'
    }
    return false // Default to light mode
  })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showScroll, setShowScroll] = useState(false)

  // Aplicar clase dark al documento cuando isDark cambia
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 transition-colors duration-300">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 dark:bg-cyan-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 dark:bg-purple-900/20 blur-[120px]"></div>
      </div>

      {selectedProject ? (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : (
        <>
          <Navigation isDark={isDark} setIsDark={setIsDark} />

          <main id="main-content" className="relative z-10">
            <Hero />
            <Skills />
            <Projects onProjectClick={setSelectedProject} />
            <Contact />
          </main>

          <Footer />

          <BackToTop show={showScroll} />
        </>
      )}
    </div>
  )
}

export default App
