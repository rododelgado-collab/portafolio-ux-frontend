import { useEffect } from 'react'
import BackLink from '../components/common/BackLink'

const PrivacyPage = () => {
  useEffect(() => {
    document.title = 'Política de Privacidad · Rodolfo Delgado'
  }, [])

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative z-10 pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-screen outline-none"
    >
      <BackLink to="/" label="Volver al inicio" className="mb-10" />

      <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
            Política de Privacidad
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Última actualización: 28 de julio de 2026
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Sobre este sitio
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Este sitio (portafolio-ux-frontend.vercel.app) es el portafolio profesional y blog
            personal de Rodolfo Delgado. Su propósito es mostrar proyectos, artículos y formas de
            contacto.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Datos que se recopilan
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Este sitio no muestra publicidad y no vende datos a terceros. Los únicos datos
            personales que se procesan son los que tú decidas enviar voluntariamente a través del
            formulario de contacto (nombre, correo electrónico y mensaje), y se usan exclusivamente
            para responderte.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            El sitio se aloja en Vercel, que puede registrar datos técnicos básicos (como
            direcciones IP) en sus registros de servidor para operar el servicio, según su propia
            política de privacidad.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Analítica de uso
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Para entender cómo se usa el sitio y mejorarlo, se utilizan dos herramientas de
            analítica de forma agregada y anónima:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
            <li>
              <strong>Vercel Web Analytics:</strong> mide visitas, páginas vistas, país de origen
              y referrers sin usar cookies ni identificar a personas.
            </li>
            <li>
              <strong>Microsoft Clarity:</strong> genera mapas de calor y grabaciones anónimas de
              sesión (clics, desplazamiento y navegación) para detectar puntos de fricción. Clarity
              enmascara por defecto el texto que escribes y puede usar cookies para distinguir
              sesiones. No se recopila información que permita identificarte personalmente.
            </li>
          </ul>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Puedes bloquear estas herramientas con la configuración de tu navegador o con una
            extensión de bloqueo, sin que ello afecte tu navegación por el sitio.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Aplicaciones conectadas a LinkedIn
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Las herramientas de publicación asociadas a este sitio son de uso personal del autor:
            publican contenido únicamente en el perfil de LinkedIn de Rodolfo Delgado, con su
            autorización expresa mediante OAuth. No acceden, recopilan ni almacenan datos de otros
            usuarios de LinkedIn, ni comparten información con terceros.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Contacto</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Si tienes preguntas sobre esta política, puedes escribir a{' '}
            <a
              href="mailto:rodolfodelgadosantiag@gmail.com"
              className="text-cyan-700 dark:text-cyan-400 font-bold hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors focus:ring-2 focus:ring-cyan-500 outline-none rounded"
            >
              rodolfodelgadosantiag@gmail.com
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  )
}

export default PrivacyPage
