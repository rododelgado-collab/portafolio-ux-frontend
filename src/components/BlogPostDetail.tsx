import { X, ExternalLink, Calendar } from 'lucide-react'
import type { BlogPost } from '../types'

interface BlogPostDetailProps {
  post: BlogPost
  onClose: () => void
}

const BlogPostDetail = ({ post, onClose }: BlogPostDetailProps) => {
  return (
    <div
      className="fixed inset-0 bg-slate-950/50 dark:bg-slate-950/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      role="presentation"
      onClick={onClose}
    >
      <button
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        aria-label="Cerrar modal"
        tabIndex={-1}
      />
      <div
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="blog-post-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 py-6 flex justify-between items-center gap-4 z-10">
          <h1
            id="blog-post-title"
            className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white"
          >
            {post.title}
          </h1>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all focus:ring-2 focus:ring-cyan-500 outline-none shrink-0"
            aria-label="Cerrar artículo"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
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

          {/* Cover Image */}
          <div className="rounded-2xl overflow-hidden bg-slate-950">
            <img src={post.image} alt={post.imageAlt} className="w-full h-auto" />
          </div>

          {/* Body */}
          <div className="space-y-6">
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className={`leading-relaxed ${
                  index === 0
                    ? 'text-xl font-bold text-slate-900 dark:text-white'
                    : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Source */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <a
              href={post.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-bold hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors focus:ring-2 focus:ring-cyan-500 outline-none rounded"
              aria-label={`Leer artículo original en ${post.sourceLabel}`}
            >
              Fuente: {post.sourceLabel} <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostDetail
