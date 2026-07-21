import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import BlogPreview from '../components/BlogPreview'
import Contact from '../components/Contact'
import ProjectDetail from '../components/ProjectDetail'
import type { Project } from '../types'

const HomePage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const location = useLocation()

  useEffect(() => {
    document.title = 'Rodolfo Delgado · UX/UI Designer & Front-End Developer'
  }, [])

  // Scroll a la sección cuando se llega con hash (ej. /#skills desde otra página)
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location.hash])

  return (
    <>
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <main id="main-content" tabIndex={-1} className="relative z-10 outline-none">
        <Hero />
        <Skills />
        <Projects onProjectClick={setSelectedProject} />
        <BlogPreview />
        <Contact />
      </main>
    </>
  )
}

export default HomePage
