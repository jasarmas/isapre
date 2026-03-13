import { stats } from '../content'

export default function Stats() {
  return (
    <section id={stats.sectionId} className="bg-surface-muted py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.items.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <span className="text-5xl font-extrabold text-primary">{item.value}</span>
              <span className="mt-2 text-base font-medium text-text-muted">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
