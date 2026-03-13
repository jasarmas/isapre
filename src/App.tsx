import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuienesSomos from './components/QuienesSomos'
import Beneficios from './components/Beneficios'
import Stats from './components/Stats'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { whatsappButton } from './content'

export default function App() {
  const contactRef = useRef<HTMLElement>(null)
  const [formVisible, setFormVisible] = useState(false)

  useEffect(() => {
    const el = contactRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setFormVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuienesSomos />
        <Beneficios />
        <Stats />
        <ContactForm ref={contactRef} />
      </main>
      <Footer />
      <WhatsAppButton
        href={whatsappButton.href}
        tooltip={whatsappButton.tooltip}
        ariaLabel={whatsappButton.ariaLabel}
        visible={!formVisible}
      />
    </>
  )
}
