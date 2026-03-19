import { quienesSomos } from '../content'
import ScrollReveal from './ScrollReveal'

export default function QuienesSomos() {
  return (
    <section id={quienesSomos.sectionId} className="bg-surface-muted py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* Photo placeholder — left on desktop */}
          <ScrollReveal direction="left" className="w-full max-w-[180px] shrink-0 sm:max-w-xs lg:max-w-sm">
            <div
              className="relative flex aspect-square w-full items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 via-blue-50 to-white shadow-lg overflow-hidden"
              aria-label={quienesSomos.imageAlt}
            >
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/10" />
              <div className="absolute -top-3 -left-3 h-16 w-16 rounded-full bg-primary/5" />
              <span className="relative z-10 px-6 text-center font-medium text-primary/60">
                {quienesSomos.imagePlaceholder}
              </span>
            </div>
          </ScrollReveal>

          {/* Text — right on desktop */}
          <ScrollReveal direction="right" className="flex-1 text-center lg:text-left">
            <span className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">
              {quienesSomos.badge}
            </span>

            <h2 className="section-title">{quienesSomos.title}</h2>

            <div className="mt-5 space-y-4">
              {quienesSomos.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-text-muted">
                  {p}
                </p>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
