import { Calendar } from 'lucide-react'

interface PostMetaProps {
  date: string
  dateLabel: string
  className?: string
}

const PostMeta = ({ date, dateLabel, className = '' }: PostMetaProps) => {
  return (
    <div
      className={`flex items-center gap-2 text-cyan-700 dark:text-cyan-400 text-sm font-bold ${className}`}
    >
      <Calendar size={14} aria-hidden="true" />
      <time dateTime={date}>{dateLabel}</time>
    </div>
  )
}

export default PostMeta
