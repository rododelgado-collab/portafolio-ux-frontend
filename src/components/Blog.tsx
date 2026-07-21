import { ArrowRight, Calendar } from 'lucide-react'
import type { BlogPost } from '../types'
import { blogPosts } from '../data/blogPosts'

interface BlogProps {
  onPostClick: (post: BlogPost) => void
}

const Blog = ({ onPostClick }: BlogProps) => {
  return (
    <section
      id="blog"
      tabIndex={-1}
      className="py-24 px-6 max-w-6xl mx-auto outline-none"
    >
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Blog
          </h2>
          <p className="text-slate-700 dark:text-slate-400 max-w-xl text-lg">
            Análisis y opinión sobre diseño UX/UI, desarrollo front-end e inteligencia artificial.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => onPostClick(post)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onPostClick(post)
              }
            }}
            className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl cursor-pointer focus:ring-4 focus:ring-cyan-500/50 outline-none"
            role="button"
            tabIndex={0}
            aria-label={`Leer artículo: ${post.title}`}
          >
            {/* Cover Image */}
            <div className="h-64 w-full overflow-hidden bg-slate-950">
              <img
                src={post.image}
                alt={post.imageAlt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 text-sm font-bold mb-2">
                <Calendar size={14} aria-hidden="true" />
                <time dateTime={post.date}>{post.dateLabel}</time>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
                {post.title}
              </h3>
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
              <div className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-bold group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Leer artículo{' '}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blog
