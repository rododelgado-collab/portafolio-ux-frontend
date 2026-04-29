import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  role?: string
  ariaLabel?: string
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', role = 'region', ariaLabel, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`card ${className}`}
        role={role}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
