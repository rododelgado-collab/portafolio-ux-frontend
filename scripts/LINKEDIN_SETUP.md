# Configuración de publicación automática en LinkedIn

Pasos que debes hacer **una sola vez** con tu cuenta (nadie más puede hacerlos por ti).
Tiempo estimado: 10-15 minutos.

## 1. Crear la app en LinkedIn Developers

1. Entra a https://developer.linkedin.com y haz clic en **Create app**.
2. Completa el formulario:
   - **App name:** por ejemplo `Portafolio Auto Post`
   - **LinkedIn Page:** LinkedIn exige asociar una página. Si no tienes una,
     crea una gratis en https://www.linkedin.com/company/setup/new/
     (puede ser una página simple con tu marca personal, ej. "Rodolfo Delgado · UX").
   - **App logo:** cualquier imagen (puedes usar `public/blog/react2shell-flight-protocol.png`).
3. Acepta los términos y crea la app.

## 2. Habilitar los productos necesarios

En la pestaña **Products** de tu app, solicita estos dos (aprobación inmediata):

- **Share on LinkedIn** → da el permiso `w_member_social` (publicar posts)
- **Sign In with LinkedIn using OpenID Connect** → da `openid` y `profile` (identificar tu perfil)

## 3. Generar el token de acceso

1. Ve a la pestaña **Auth** de tu app.
2. Abre el **OAuth 2.0 tools** → **Token generator** (o "Create token").
3. Selecciona los scopes: `openid`, `profile`, `w_member_social`.
4. Autoriza con tu cuenta de LinkedIn y copia el **Access token**.

## 4. Guardar el token en tu máquina

Crea la carpeta y el archivo (PowerShell):

```powershell
New-Item -ItemType Directory -Force "$env:USERPROFILE\.linkedin"
notepad "$env:USERPROFILE\.linkedin\token.txt"
```

Pega el token en el archivo y guárdalo. Queda **fuera del repo**: nunca se sube a git.

## 5. Verificar

```bash
node scripts/publish-linkedin.mjs --check
```

Si ves `TOKEN_OK: autenticado como Rodolfo Delgado (...)`, todo listo:
la rutina diaria empezará a publicar automáticamente.

## Renovación (cada ~60 días)

El token caduca a los 60 días y LinkedIn no da refresh tokens a apps personales.
Cuando la rutina avise `TOKEN_EXPIRADO`, repite los pasos 3 y 4 (2 minutos).
