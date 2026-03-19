import { quienesSomos } from '../content'

export default function QuienesSomos() {
  return (
    <section id={quienesSomos.sectionId} className="bg-surface-muted py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* Photo placeholder — left on desktop */}
          <div className="w-full max-w-[180px] shrink-0 sm:max-w-xs lg:max-w-sm">
            <div
              className="flex aspect-square w-full items-center justify-center rounded-2xl bg-[#F1F3F5] text-sm text-text-muted shadow-sm"
              aria-label={quienesSomos.imageAlt}
            >
              <span className="px-6 text-center font-medium">{quienesSomos.imagePlaceholder}</span>
            </div>
          </div>

          {/* Text — right on desktop */}
          <div className="flex-1 text-center lg:text-left">
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
          </div>

        </div>
      </div>
    </section>
  )
}
