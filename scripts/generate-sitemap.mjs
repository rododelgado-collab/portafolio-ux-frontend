/**
 * Genera public/sitemap.xml a partir de las rutas de App.tsx y los posts de
 * src/data/blogPosts.ts. Se ejecuta antes del build para que el sitemap nunca
 * quede desfasado respecto al blog.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const SITE = 'https://portafolio-ux-frontend.vercel.app'
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const postsFile = resolve(root, 'src/data/blogPosts.ts')
const outFile = resolve(root, 'public/sitemap.xml')

/** Extrae id y date de cada post. Falla fuerte si el formato cambia. */
function readPosts() {
  const source = readFileSync(postsFile, 'utf8')
  const posts = []
  const entry = /id:\s*'([^']+)'[\s\S]*?date:\s*'(\d{4}-\d{2}-\d{2})'/g

  let match
  while ((match = entry.exec(source)) !== null) {
    posts.push({ id: match[1], date: match[2] })
  }

  if (posts.length === 0) {
    throw new Error(
      `No se encontro ningun post en ${postsFile}. ` +
        'Cambio el formato del archivo? El sitemap no se genero.'
    )
  }

  return posts
}

function buildUrls(posts) {
  const latest = posts.reduce((a, p) => (p.date > a ? p.date : a), posts[0].date)

  return [
    { loc: `${SITE}/`, lastmod: latest },
    { loc: `${SITE}/blog`, lastmod: latest },
    ...posts.map((p) => ({ loc: `${SITE}/blog/${p.id}`, lastmod: p.date })),
    { loc: `${SITE}/privacidad`, lastmod: latest }
  ]
}

function toXml(urls) {
  const entries = urls
    .map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`
}

const posts = readPosts()
const urls = buildUrls(posts)
writeFileSync(outFile, toXml(urls), 'utf8')
console.log(`sitemap.xml generado con ${urls.length} URLs (${posts.length} posts del blog)`)
