import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'

const BlogPostPage = () => {
  const { postId } = useParams<{ postId: string }>()
  const post = blogPosts.find((p) => p.id === postId)

  useEffect(() => {
    if (post) {
      document.title = `${post.title} · Blog de Rodolfo Delgado`
    }
  }, [post])

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative z-10 pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-screen outline-none"
    >
      {/* Volver */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 mb-10 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold transition-colors focus:ring-2 focus:ring-cyan-500 outline-none rounded px-1 py-0.5"
      >
        <ArrowLeft size={18} aria-hidden="true" /> Volver al blog
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 text-sm font-bold">
              <Calendar size={14} aria-hidden="true" />
              <time dateTime={post.date}>{post.dateLabel}</time>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="rounded-2xl overflow-hidden bg-slate-950 mb-10">
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={1200}
            className="w-full h-auto"
          />
        </div>

        {/* Body */}
        <div className="space-y-6">
          {post.content.map((paragraph, index) => (
            <p
              key={index}
              className={`leading-relaxed ${
                index === 0
                  ? 'text-xl md:text-2xl font-bold text-slate-900 dark:text-white'
                  : 'text-base md:text-lg text-slate-700 dark:text-slate-300'
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Source */}
        <footer className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <a
            href={post.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-bold hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors focus:ring-2 focus:ring-cyan-500 outline-none rounded"
            aria-label={`Leer artículo original en ${post.sourceLabel}`}
          >
            Fuente: {post.sourceLabel} <ExternalLink size={16} aria-hidden="true" />
          </a>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold transition-colors focus:ring-2 focus:ring-cyan-500 outline-none rounded px-1 py-0.5"
          >
            <ArrowLeft size={18} aria-hidden="true" /> Volver al blog
          </Link>
        </footer>
      </article>
    </main>
  )
}

export default BlogPostPage
