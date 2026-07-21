interface TagListProps {
  tags: string[]
  className?: string
}

const TagList = ({ tags, className = '' }: TagListProps) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export default TagList
