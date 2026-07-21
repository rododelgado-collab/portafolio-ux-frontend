import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeader from './common/SectionHeader'
import BlogPostCard from './BlogPostCard'
import { blogPosts } from '../data/blogPosts'

const LATEST_POSTS_COUNT = 3

const BlogPreview = () => {
  const latestPosts = blogPosts.slice(0, LATEST_POSTS_COUNT)

  return (
    <section
      id="blog"
      tabIndex={-1}
      className="py-24 px-6 max-w-6xl mx-auto outline-none"
      aria-labelledby="blog-preview-heading"
    >
      <SectionHeader
        id="blog-preview-heading"
        title="Últimos artículos"
        description="Análisis y opinión sobre diseño UX/UI, desarrollo front-end e inteligencia artificial."
      />

      {/* Latest Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {latestPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} headingLevel="h3" />
        ))}
      </div>

      {/* CTA hacia el blog completo */}
      <div className="flex justify-center">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white font-bold border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-sm focus:ring-4 focus:ring-cyan-500/50 outline-none"
        >
          Ver artículos anteriores{' '}
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

export default BlogPreview
