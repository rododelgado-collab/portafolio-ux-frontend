import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'

interface NotFoundPageProps {
  title?: string
  description?: string
}

const NotFoundPage = ({
  title = 'Esta página no existe',
  description = 'El enlace que seguiste apunta a una dirección que no está en el sitio. Puede que la URL se haya cortado al copiarla o que el contenido haya cambiado de lugar.',
}: NotFoundPageProps) => {
  useEffect(() => {
    document.title = 'Página no encontrada · Rodolfo Delgado'

    // El sitio es una SPA y Vercel reescribe todas las rutas a index.html, así
    // que una dirección inexistente responde 200 igual que una real. Sin este
    // noindex, los buscadores tratarían cualquier enlace roto como una página
    // válida del portafolio. Se retira al desmontar para no afectar al resto.
    const robots = document.createElement('meta')
    robots.name = 'robots'
    robots.content = 'noindex'
    document.head.appendChild(robots)

    return () => {
      document.head.removeChild(robots)
    }
  }, [])

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative z-10 pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-screen outline-none"
    >
      <div className="flex items-center gap-3 text-cyan-700 dark:text-cyan-400 mb-6">
        <Compass size={20} aria-hidden="true" />
        <span className="text-sm font-bold uppercase tracking-wider">Error 404</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
        {title}
      </h1>

      <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-10 max-w-2xl">
        {description}
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-bold px-5 py-3 rounded-lg transition-colors focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 outline-none"
        >
          Ir al inicio
        </Link>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 border-2 border-slate-300 dark:border-slate-700 hover:border-cyan-600 dark:hover:border-cyan-400 text-slate-700 dark:text-slate-300 font-bold px-5 py-3 rounded-lg transition-colors focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 outline-none"
        >
          Ver el blog
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
