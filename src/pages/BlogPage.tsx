import { useEffect } from 'react'
import BackLink from '../components/common/BackLink'
import SectionHeader from '../components/common/SectionHeader'
import BlogPostCard from '../components/BlogPostCard'
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
      <BackLink to="/" label="Volver al inicio" className="mb-10" />

      <SectionHeader
        as="h1"
        title="Blog"
        description="Análisis y opinión sobre diseño UX/UI, desarrollo front-end e inteligencia artificial."
      />

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} headingLevel="h2" />
        ))}
      </div>
    </main>
  )
}

export default BlogPage
