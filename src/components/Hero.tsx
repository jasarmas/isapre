import { ArrowRight, CheckCircle } from 'lucide-react'
import { hero } from '../content'

const highlights = [
  'Sin costo para ti',
  'Todas las Isapres',
  'Respuesta en 24 h',
]

export default function Hero() {
  return (
    <section id="inicio" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">
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
          </div>

          {/* Image placeholder */}
          <div className="hidden w-full flex-1 sm:block lg:max-w-lg">
            <div
              className="flex aspect-video w-full items-center justify-center rounded-2xl bg-[#F1F3F5] text-sm text-text-muted shadow-sm"
              aria-label={hero.imagePlaceholder}
            >
              <span className="px-6 text-center font-medium">{hero.imagePlaceholder}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
