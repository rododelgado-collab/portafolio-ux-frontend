// Publica un post (texto + imagen opcional) en el perfil de LinkedIn del dueño del token.
// Uso:
//   node scripts/publish-linkedin.mjs --check                  → verifica el token sin publicar
//   node scripts/publish-linkedin.mjs <texto.txt> [imagen.png] → publica
//
// El token OAuth se lee de C:\Users\<usuario>\.linkedin\token.txt (fuera del repo,
// nunca se commitea). Scopes requeridos: openid, profile, w_member_social.

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
const isCheckOnly = process.argv[2] === '--check'

async function getAuthorUrn() {
  const response = await fetch(`${API}/v2/userinfo`, { headers: authHeaders })
  if (response.status === 401) {
    fail('TOKEN_EXPIRADO: renueva el token en LinkedIn Developers (caduca cada ~60 días) y vuelve a guardarlo en ' + TOKEN_PATH)
  }
  if (!response.ok) {
    fail(`Error consultando userinfo: ${response.status} ${await response.text()}`)
  }
  const { sub, name } = await response.json()
  return { urn: `urn:li:person:${sub}`, name }
}

async function uploadImage(imagePath, ownerUrn) {
  const register = await fetch(`${API}/v2/assets?action=registerUpload`, {
    method: 'POST',
    headers: {
      ...authHeaders,
      'Content-Type': 'application/json',
      'X-Restli-Protocol-Version': '2.0.0',
    },
    body: JSON.stringify({
      registerUploadRequest: {
        recipes: ['urn:li:digitalmediaRecipe:feedshare-image'],
        owner: ownerUrn,
        serviceRelationships: [
          { relationshipType: 'OWNER', identifier: 'urn:li:userGeneratedContent' },
        ],
      },
    }),
  })
  if (!register.ok) {
    fail(`Error registrando la imagen: ${register.status} ${await register.text()}`)
  }
  const registerJson = await register.json()
  const uploadUrl =
    registerJson.value.uploadMechanism[
      'com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest'
    ].uploadUrl
  const assetUrn = registerJson.value.asset

  const upload = await fetch(uploadUrl, {
    method: 'PUT',
    headers: { ...authHeaders, 'Content-Type': 'application/octet-stream' },
    body: readFileSync(imagePath),
  })
  if (!upload.ok) {
    fail(`Error subiendo la imagen: ${upload.status}`)
  }
  return assetUrn
}

async function publishPost(authorUrn, text, imageUrn) {
  const body = {
    author: authorUrn,
    lifecycleState: 'PUBLISHED',
    specificContent: {
      'com.linkedin.ugc.ShareContent': {
        shareCommentary: { text },
        shareMediaCategory: imageUrn ? 'IMAGE' : 'NONE',
        ...(imageUrn && { media: [{ status: 'READY', media: imageUrn }] }),
      },
    },
    visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' },
  }
  const response = await fetch(`${API}/v2/ugcPosts`, {
    method: 'POST',
    headers: {
      ...authHeaders,
      'Content-Type': 'application/json',
      'X-Restli-Protocol-Version': '2.0.0',
    },
    body: JSON.stringify(body),
  })
  if (!response.ok) {
    fail(`Error publicando el post: ${response.status} ${await response.text()}`)
  }
  return response.headers.get('x-restli-id')
}

async function main() {
  const author = await getAuthorUrn()

  if (isCheckOnly) {
    console.log(`TOKEN_OK: autenticado como ${author.name} (${author.urn})`)
    return
  }

  const [, , textPath, imagePath] = process.argv
  if (!textPath || !existsSync(textPath)) {
    fail('Uso: node scripts/publish-linkedin.mjs <texto.txt> [imagen.png]')
  }
  const text = readFileSync(textPath, 'utf8').trim()
  if (text.length === 0) {
    fail('El archivo de texto está vacío')
  }
  if (text.length > 3000) {
    fail(`El post supera el límite de 3000 caracteres de LinkedIn (${text.length})`)
  }

  let imageUrn
  if (imagePath) {
    if (!existsSync(imagePath)) {
      fail(`No existe la imagen: ${imagePath}`)
    }
    imageUrn = await uploadImage(imagePath, author.urn)
  }

  const postId = await publishPost(author.urn, text, imageUrn)
  console.log(`PUBLICADO: https://www.linkedin.com/feed/update/${postId}`)
}

main().catch((error) => fail(`Error inesperado: ${error.message}`))
