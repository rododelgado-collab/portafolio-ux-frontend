/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Project ID de Microsoft Clarity. Opcional. */
  readonly VITE_CLARITY_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
