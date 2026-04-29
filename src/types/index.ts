export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  technologies: string[]
  image: string
  imageAlt: string
  liveUrl?: string
  githubUrl?: string
  figmaUrl?: string
  category: 'ux' | 'frontend' | 'fullstack'
  role: string
  timeline: string
  challenge: string
  solution: string
  results: string[]
}

export interface Skill {
  category: string
  items: string[]
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
