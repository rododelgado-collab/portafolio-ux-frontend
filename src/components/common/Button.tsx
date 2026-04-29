import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asLink?: boolean
  href?: string
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      className = '',
      asLink = false,
      href = '#',
      ...props
    },
    ref
  ) => {
    const baseClasses = `btn ${sizeClasses[size]} btn-${variant}`
    const combinedClasses = `${baseClasses} ${className}`

    if (asLink) {
      return (
        <a href={href} className={combinedClasses} ref={ref as React.Ref<HTMLAnchorElement>}>
          {children}
        </a>
      )
    }

    return (
      <button
        className={combinedClasses}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
