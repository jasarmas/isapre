import { stats } from '../content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountUp, parseStatValue } from '../hooks/useCountUp'
import ScrollReveal from './ScrollReveal'

function AnimatedStat({ value, label, active, delay }: {
  value: string
  label: string
  active: boolean
  delay: number
}) {
  const { number, prefix, suffix } = parseStatValue(value)
  const count = useCountUp(number, 1800, active)

  return (
    <ScrollReveal delay={delay} className="flex flex-col items-center text-center">
      <span className="text-2xl font-extrabold text-white sm:text-5xl">
        {prefix}{count}{suffix}
      </span>
      <span className="mt-1 text-xs font-medium text-blue-100 sm:mt-2 sm:text-base">
        {label}
      </span>
    </ScrollReveal>
  )
}

export default function Stats() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id={stats.sectionId}
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-r from-primary to-blue-700 py-16 md:py-20"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/5" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-2 sm:gap-8">
          {stats.items.map((item, index) => (
            <AnimatedStat
              key={item.label}
              value={item.value}
              label={item.label}
              active={isVisible}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
