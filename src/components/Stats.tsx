import { stats } from '../content'

export default function Stats() {
  return (
    <section id={stats.sectionId} className="bg-surface-muted py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-2 divide-x divide-border sm:gap-8 sm:divide-x-0">
          {stats.items.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <span className="text-2xl font-extrabold text-primary sm:text-5xl">{item.value}</span>
              <span className="mt-1 text-xs font-medium text-text-muted sm:mt-2 sm:text-base">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
