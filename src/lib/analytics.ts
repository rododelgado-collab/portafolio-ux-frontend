import Clarity from '@microsoft/clarity'

/**
 * Inicializa Microsoft Clarity (mapas de calor + grabaciones de sesión).
 *
 * El ID del proyecto se lee desde la variable de entorno VITE_CLARITY_ID.
 * Si no está definida (por ejemplo, en desarrollo local), Clarity no se
 * inicializa y no ocurre nada: así evitamos ensuciar las métricas con tráfico
 * propio y no rompemos el build si aún no configuraste la cuenta.
 *
 * Para activarlo:
 *   1. Crea un proyecto en https://clarity.microsoft.com
 *   2. Copia el "Project ID"
 *   3. Define VITE_CLARITY_ID en tu .env local y en las variables de entorno
 *      del proyecto en Vercel.
 */
export function initClarity(): void {
  const projectId = import.meta.env.VITE_CLARITY_ID

  if (!projectId) return

  try {
    Clarity.init(projectId)
  } catch (error) {
    // No queremos que un fallo de analítica afecte la experiencia del usuario.
    console.warn('No se pudo inicializar Clarity:', error)
  }
}
