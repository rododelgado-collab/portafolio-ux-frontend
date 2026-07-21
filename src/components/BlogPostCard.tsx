import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PostMeta from './common/PostMeta'
import TagList from './common/TagList'
import type { BlogPost } from '../types'

interface BlogPostCardProps {
  post: BlogPost
  /** Nivel de encabezado según la jerarquía de la página (h2 en /blog, h3 en la landing) */
  headingLevel?: 'h2' | 'h3'
}

const BlogPostCard = ({ post, headingLevel = 'h2' }: BlogPostCardProps) => {
  const Heading = headingLevel
  return (
    <article className="h-full">
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
          <PostMeta date={post.date} dateLabel={post.dateLabel} className="mb-2" />
          <Heading className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
            {post.title}
          </Heading>
          <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 font-medium">
            {post.excerpt}
          </p>

          <TagList tags={post.tags} className="mb-8" />

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
  )
}

export default BlogPostCard
