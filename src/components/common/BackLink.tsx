import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

interface BackLinkProps {
  to: string
  label: string
  className?: string
}

const BackLink = ({ to, label, className = '' }: BackLinkProps) => {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold transition-colors focus:ring-2 focus:ring-cyan-500 outline-none rounded px-1 py-0.5 ${className}`}
    >
      <ArrowLeft size={18} aria-hidden="true" /> {label}
    </Link>
  )
}

export default BackLink
