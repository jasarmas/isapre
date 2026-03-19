import { useEffect, useState } from 'react'
import { Menu, X, ShieldCheck } from 'lucide-react'
import { navbar } from '../content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-navbar'
          : 'bg-white border-b border-border'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
            <ShieldCheck size={18} />
          </span>
          <span className="text-lg font-bold text-text">{navbar.logoText}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {navbar.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-text-muted transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href={navbar.ctaHref} className="btn-primary hidden text-sm md:inline-flex">
          {navbar.ctaLabel}
        </a>

        {/* Mobile hamburger */}
        <button
          className="rounded-lg p-2 text-text-muted transition-colors hover:bg-surface-muted md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`border-t border-border px-4 pb-5 pt-3 md:hidden ${
          scrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-white'
        }`}>
          <ul className="flex flex-col gap-1">
            {navbar.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-text-muted transition-colors hover:bg-surface-muted hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={navbar.ctaHref}
            onClick={handleNavClick}
            className="btn-primary mt-4 w-full text-sm"
          >
            {navbar.ctaLabel}
          </a>
        </div>
      )}
    </header>
  )
}
