import type { Project } from '../types'

interface UxCaseStudyProps {
  project: Project
}

/**
 * Secciones específicas de un caso UX: proceso, flujo, decisiones y definiciones.
 * Cada bloque se omite si el proyecto no trae esos datos, así los proyectos
 * frontend siguen renderizando exactamente igual que antes.
 */
const UxCaseStudy = ({ project }: UxCaseStudyProps) => {
  const { uxProcess, userFlow, designDecisions, uxDefinitions } = project

  const hasContent =
    uxProcess?.length || userFlow?.length || designDecisions?.length || uxDefinitions?.length

  if (!hasContent) return null

  return (
    <>
      {uxProcess && uxProcess.length > 0 && (
        <section className="space-y-6" aria-labelledby="ux-process-heading">
          <h2
            id="ux-process-heading"
            className="text-2xl font-extrabold text-slate-900 dark:text-white"
          >
            Proceso de Diseño
          </h2>
          <ol className="space-y-6">
            {uxProcess.map((stage, index) => (
              <li key={stage.name} className="flex gap-5">
                <span
                  className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-800 dark:text-cyan-300 font-extrabold text-sm"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div className="space-y-3 pt-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{stage.name}</h3>
                  <p className="text-slate-700 dark:text-slate-400 leading-relaxed">
                    {stage.description}
                  </p>
                  <ul className="flex flex-wrap gap-2" aria-label={`Entregables de ${stage.name}`}>
                    {stage.deliverables.map((item) => (
                      <li
                        key={item}
                        className="px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {userFlow && userFlow.length > 0 && (
        <section className="space-y-6" aria-labelledby="ux-flow-heading">
          <h2
            id="ux-flow-heading"
            className="text-2xl font-extrabold text-slate-900 dark:text-white"
          >
            Flujo Principal
          </h2>
          <ol className="space-y-2">
            {userFlow.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50"
              >
                <span className="shrink-0 text-sm font-extrabold text-cyan-700 dark:text-cyan-400 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">{step}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {designDecisions && designDecisions.length > 0 && (
        <section className="space-y-6" aria-labelledby="ux-decisions-heading">
          <h2
            id="ux-decisions-heading"
            className="text-2xl font-extrabold text-slate-900 dark:text-white"
          >
            Decisiones de Diseño
          </h2>
          <dl className="space-y-6">
            {designDecisions.map((item) => (
              <div
                key={item.decision}
                className="pl-5 border-l-4 border-cyan-500 dark:border-cyan-400 space-y-2"
              >
                <dt className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.decision}
                </dt>
                <dd className="text-slate-700 dark:text-slate-400 leading-relaxed">
                  {item.rationale}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {uxDefinitions && uxDefinitions.length > 0 && (
        <section className="space-y-6" aria-labelledby="ux-definitions-heading">
          <h2
            id="ux-definitions-heading"
            className="text-2xl font-extrabold text-slate-900 dark:text-white"
          >
            Definiciones Transversales
          </h2>
          <ul className="space-y-3">
            {uxDefinitions.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="text-cyan-600 dark:text-cyan-400 font-extrabold text-lg mt-0.5"
                  aria-hidden="true"
                >
                  ·
                </span>
                <span className="text-slate-700 dark:text-slate-400">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}

export default UxCaseStudy
