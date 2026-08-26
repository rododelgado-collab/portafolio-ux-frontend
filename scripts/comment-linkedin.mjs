// Publica un comentario propio en un post existente de LinkedIn.
// Uso:
//   node scripts/comment-linkedin.mjs <urn-o-url-del-post> <texto.txt>
//
// Acepta como primer argumento la URL del post (https://www.linkedin.com/feed/update/urn:li:activity:XXXX/
// o https://www.linkedin.com/feed/update/urn:li:share:XXXX/) o el URN directo.
// El token OAuth se lee de C:\Users\<usuario>\.linkedin\token.txt (fuera del repo).

import { readFileSync, existsSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'

const TOKEN_PATH = join(homedir(), '.linkedin', 'token.txt')
const API = 'https://api.linkedin.com'

function fail(message) {
  console.error(message)
  process.exit(1)
}

if (!existsSync(TOKEN_PATH)) {
  fail(`NO_TOKEN: no existe ${TOKEN_PATH}. Sigue la guía en scripts/LINKEDIN_SETUP.md`)
}

const token = readFileSync(TOKEN_PATH, 'utf8').trim()
const authHeaders = { Authorization: `Bearer ${token}` }

function extractUrn(input) {
  const match = input.match(/urn:li:(activity|share|ugcPost):[\w-]+/)
  if (match) return match[0]
  fail(`No pude extraer un URN válido de: ${input}`)
}

async function getAuthorUrn() {
  const response = await fetch(`${API}/v2/userinfo`, { headers: authHeaders })
  if (response.status === 401) {
    fail('TOKEN_EXPIRADO: renueva el token en LinkedIn Developers y vuelve a guardarlo en ' + TOKEN_PATH)
  }
  if (!response.ok) {
    fail(`Error consultando userinfo: ${response.status} ${await response.text()}`)
  }
  const { sub } = await response.json()
  return `urn:li:person:${sub}`
}

async function postComment(postUrn, authorUrn, text) {
  const encodedUrn = encodeURIComponent(postUrn)
  const response = await fetch(`${API}/v2/socialActions/${encodedUrn}/comments`, {
    method: 'POST',
    headers: {
      ...authHeaders,
      'Content-Type': 'application/json',
      'X-Restli-Protocol-Version': '2.0.0',
    },
    body: JSON.stringify({
      actor: authorUrn,
      message: { text },
    }),
  })
  if (!response.ok) {
    fail(`Error publicando el comentario: ${response.status} ${await response.text()}`)
  }
  console.log('COMENTARIO_PUBLICADO')
}

async function main() {
  const [, , postRef, textPath] = process.argv
  if (!postRef || !textPath) {
    fail('Uso: node scripts/comment-linkedin.mjs <urn-o-url-del-post> <texto.txt>')
  }
  if (!existsSync(textPath)) {
    fail(`No existe el archivo de texto: ${textPath}`)
  }
  const text = readFileSync(textPath, 'utf8').trim()
  if (text.length === 0) {
    fail('El archivo de texto está vacío')
  }

  const postUrn = extractUrn(postRef)
  const authorUrn = await getAuthorUrn()
  await postComment(postUrn, authorUrn, text)
}

main().catch((error) => fail(`Error inesperado: ${error.message}`))
