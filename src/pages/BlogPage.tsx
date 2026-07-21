import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'

const BlogPage = () => {
  useEffect(() => {
    document.title = 'Blog · Rodolfo Delgado'
  }, [])

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative z-10 pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-screen outline-none"
    >
      {/* Volver */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 mb-10 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold transition-colors focus:ring-2 focus:ring-cyan-500 outline-none rounded px-1 py-0.5"
      >
        <ArrowLeft size={18} aria-hidden="true" /> Volver al inicio
      </Link>

      <header className="mb-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
          Blog
        </h1>
        <p className="text-slate-700 dark:text-slate-400 max-w-xl text-lg">
          Análisis y opinión sobre diseño UX/UI, desarrollo front-end e inteligencia artificial.
        </p>
      </header>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="h-full">
            <Link
              to={`/blog/${post.id}`}
              aria-label={`Leer artículo: ${post.title}`}
              className="group flex flex-col h-full rounded-3xl overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl focus:ring-4 focus:ring-cyan-500/50 outline-none"
            >
              {/* Cover Image */}
              <div className="h-56 md:h-64 w-full overflow-hidden bg-slate-950">
                <img
                  src={post.image}
                  alt=""
                  loading="lazy"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 md:p-8">
                <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 text-sm font-bold mb-2">
                  <Calendar size={14} aria-hidden="true" />
                  <time dateTime={post.date}>{post.dateLabel}</time>
                </div>
                <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
                  {post.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 font-medium">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <span className="mt-auto inline-flex items-center gap-2 text-slate-900 dark:text-white font-bold group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Leer artículo{' '}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}

export default BlogPage
