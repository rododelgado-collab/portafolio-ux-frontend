import { ArrowUp } from 'lucide-react'

interface BackToTopProps {
  show: boolean
}

const BackToTop = ({ show }: BackToTopProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white shadow-lg transition-all duration-300 z-50 focus:ring-4 focus:ring-cyan-500/50 outline-none ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Volver arriba"
    >
      <ArrowUp size={24} />
    </button>
  )
}

export default BackToTop
