import { Mail } from 'lucide-react'

const Contact = () => {
  const email = 'rodolfodelgadosantiag@gmail.com'
  const mailtoLink = `mailto:${email}?subject=Quiero%20trabajar%20contigo&body=Hola%2C%0A%0AMe%20gustaría%20hablar%20contigo%20sobre%20un%20proyecto.`

  return (
    <section
      id="contact"
      tabIndex={-1}
      className="py-24 px-6 max-w-6xl mx-auto outline-none"
      aria-label="Sección de contacto"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
          ¿Trabajamos <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500">
            juntos?
          </span>
        </h2>
        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Estoy disponible para proyectos de diseño UX/UI y desarrollo frontend. Contáctame para discutir cómo puedo ayudarte a crear productos digitales excepcionales.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Email Card */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm hover:shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4">
            <Mail size={24} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Envíame un email</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            La mejor forma de contactarme. Respondo dentro de 24 horas.
          </p>
          <a
            href={mailtoLink}
            className="inline-flex md:inline-flex w-full md:w-auto justify-center items-center gap-2 px-4 md:px-8 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-lg focus:ring-4 focus:ring-cyan-500/50 outline-none text-xs md:text-base"
            aria-label={`Enviar correo a ${email}`}
          >
            {email}
          </a>
        </div>

        {/* Social Card */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm hover:shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4 text-xl">
            🔗
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Sígueme en redes</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Comparto contenido sobre diseño y desarrollo.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/rododelgado-collab"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all focus:ring-4 focus:ring-cyan-500/50 outline-none"
              aria-label="Ver mi código en GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rodolfo-delgado-592a22266/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all focus:ring-4 focus:ring-cyan-500/50 outline-none"
              aria-label="Visitarme en LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-slate-600 dark:text-slate-400">
          O copia mi email: <span className="font-mono font-semibold text-slate-900 dark:text-white">{email}</span>
        </p>
      </div>
    </section>
  )
}

export default Contact
