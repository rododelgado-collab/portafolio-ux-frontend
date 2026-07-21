interface SectionHeaderProps {
  title: string
  description?: string
  /** h1 en páginas propias (ej. /blog), h2 en secciones de la landing */
  as?: 'h1' | 'h2'
  id?: string
}

const SectionHeader = ({ title, description, as = 'h2', id }: SectionHeaderProps) => {
  const Heading = as

  return (
    <div className="mb-16">
      <Heading
        id={id}
        className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4"
      >
        {title}
      </Heading>
      {description && (
        <p className="text-slate-700 dark:text-slate-400 max-w-xl text-lg">{description}</p>
      )}
    </div>
  )
}

export default SectionHeader
