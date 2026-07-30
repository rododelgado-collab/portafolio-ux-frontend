/** Etapa del proceso de diseño, con los entregables que produjo. */
export interface UxStage {
  name: string
  description: string
  deliverables: string[]
}

/** Decisión de diseño acompañada del motivo que la sostiene. */
export interface DesignDecision {
  decision: string
  rationale: string
}

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
  /** Etapas del proceso de diseño. Solo en casos UX. */
  uxProcess?: UxStage[]
  /** Pasos del flujo principal, en orden. Solo en casos UX. */
  userFlow?: string[]
  /** Decisiones de diseño y su porqué. Solo en casos UX. */
  designDecisions?: DesignDecision[]
  /** Definiciones transversales: principios, accesibilidad, contenido. Solo en casos UX. */
  uxDefinitions?: string[]
}

export interface BlogPost {
  id: string
  title: string
  date: string
  dateLabel: string
  tags: string[]
  excerpt: string
  content: string[]
  image: string
  imageAlt: string
  sourceUrl: string
  sourceLabel: string
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
