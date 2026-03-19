import type { ReactNode } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'fade'
}

const directionClass: Record<NonNullable<Props['direction']>, string> = {
  up: 'scroll-reveal',
  fade: 'scroll-reveal-fade',
  left: 'scroll-reveal-left',
  right: 'scroll-reveal-right',
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: Props) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      data-visible={isVisible}
      className={`${directionClass[direction]} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
