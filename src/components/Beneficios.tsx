import { BadgeCheck, LayoutGrid, HandHeart, FileText, type LucideIcon } from 'lucide-react'
import { beneficios } from '../content'

const iconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  LayoutGrid,
  HandHeart,
  FileText,
}

export default function Beneficios() {
  return (
    <section id={beneficios.sectionId} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">
            {beneficios.badge}
          </span>
          <h2 className="section-title">{beneficios.title}</h2>
          <p className="section-subtitle mx-auto mt-3">{beneficios.subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.items.map((item) => {
            const Icon = iconMap[item.icon] ?? BadgeCheck
            return (
              <div key={item.title} className="card flex flex-col gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-primary">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="font-semibold text-text">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
