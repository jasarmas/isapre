import { ArrowRight, CheckCircle } from 'lucide-react'
import { hero } from '../content'
import ScrollReveal from './ScrollReveal'

const highlights = [
  'Sin costo para ti',
  'Todas las Isapres',
  'Respuesta en 24 h',
]

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-blue-50/70 via-white to-white py-16 md:py-24">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* Text */}
          <ScrollReveal direction="left" className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <span className="badge-pulse mb-4 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">
              <CheckCircle size={13} />
              {hero.badge}
            </span>

            <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-text sm:text-4xl md:text-5xl lg:text-6xl">
              {hero.title}{' '}
              <span className="text-primary">{hero.titleHighlight}</span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-text-muted sm:text-lg">
              {hero.subtitle}
            </p>

            {/* Checkmarks */}
            <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-start">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-1.5 text-sm font-medium text-text-muted">
                  <CheckCircle size={15} className="shrink-0 text-primary" />
                  {h}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a href={hero.ctaHref} className="btn-primary w-full sm:w-auto">
                {hero.ctaLabel}
                <ArrowRight size={16} />
              </a>
              <a href={hero.secondaryCtaHref} className="btn-outline w-full sm:w-auto">
                {hero.secondaryCtaLabel}
              </a>
            </div>
          </ScrollReveal>

          {/* Image placeholder */}
          <ScrollReveal direction="right" className="hidden w-full flex-1 sm:block lg:max-w-lg">
            <div className="relative flex aspect-video w-full items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 via-blue-50 to-white shadow-lg overflow-hidden">
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-primary/10" />
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-primary/5" />
              <span className="relative z-10 px-6 text-center font-medium text-primary/60">
                {hero.imagePlaceholder}
              </span>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
