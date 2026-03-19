import { type FormEvent, forwardRef, useState } from 'react'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { contacto } from '../content'
import ScrollReveal from './ScrollReveal'

type Status = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  nombre: string
  email: string
  telefono: string
  sueldoActual: string
  mensaje: string
}

const INITIAL: FormData = {
  nombre: '',
  email: '',
  telefono: '',
  sueldoActual: '',
  mensaje: '',
}

function validate(data: FormData): string | null {
  if (!data.nombre.trim())            return 'El nombre es obligatorio.'
  if (!data.email.trim())             return 'El email es obligatorio.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
                                      return 'Ingresa un email válido.'
  if (!data.telefono.trim())          return 'El teléfono es obligatorio.'
  if (!data.sueldoActual.trim())      return 'El sueldo actual es obligatorio.'
  return null
}

const ContactForm = forwardRef<HTMLElement>((_, ref) => {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [status, setStatus] = useState<Status>('idle')
  const [validationError, setValidationError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const formatted =
      name === 'sueldoActual'
        ? value === '' ? '' : '$' + value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        : value
    setForm((prev) => ({ ...prev, [name]: formatted }))
    setValidationError(null)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const error = validate(form)
    if (error) {
      setValidationError(error)
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre:       form.nombre,
          email:        form.email,
          telefono:     form.telefono,
          sueldoActual: form.sueldoActual,
          mensaje:      form.mensaje,
        }),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  const { fields } = contacto

  return (
    <section
      id={contacto.sectionId}
      ref={ref as React.Ref<HTMLElement>}
      className="bg-surface-muted py-16 md:py-24"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollReveal direction="fade" className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">
            {contacto.badge}
          </span>
          <h2 className="section-title">{contacto.title}</h2>
          <p className="section-subtitle mx-auto">{contacto.subtitle}</p>
        </ScrollReveal>

        {/* Form card */}
        <ScrollReveal>
          <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              {/* Nombre + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nombre" className="text-sm font-medium text-text">
                    {fields.nombre.label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    autoComplete="name"
                    placeholder={fields.nombre.placeholder}
                    value={form.nombre}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-text">
                    {fields.email.label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={fields.email.placeholder}
                    value={form.email}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>
              </div>

              {/* Teléfono + Sueldo */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="telefono" className="text-sm font-medium text-text">
                    {fields.telefono.label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    autoComplete="tel"
                    placeholder={fields.telefono.placeholder}
                    value={form.telefono}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="sueldoActual" className="text-sm font-medium text-text">
                    {fields.sueldoActual.label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="sueldoActual"
                    name="sueldoActual"
                    type="text"
                    placeholder={fields.sueldoActual.placeholder}
                    value={form.sueldoActual}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>
              </div>

              {/* Mensaje */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="mensaje" className="text-sm font-medium text-text">
                  {fields.mensaje.label}
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder={fields.mensaje.placeholder}
                  value={form.mensaje}
                  onChange={handleChange}
                  className="input-field resize-none"
                />
              </div>

              {/* Validation error */}
              {validationError && (
                <p className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  <AlertCircle size={16} className="shrink-0" />
                  {validationError}
                </p>
              )}

              {/* Success message */}
              {status === 'success' && (
                <p className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  <CheckCircle size={16} className="shrink-0" />
                  {contacto.successMessage}
                </p>
              )}

              {/* API error */}
              {status === 'error' && (
                <p className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  <AlertCircle size={16} className="shrink-0" />
                  {contacto.errorMessage}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {contacto.ctaLoadingLabel}
                  </>
                ) : (
                  contacto.ctaLabel
                )}
              </button>

            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
})

ContactForm.displayName = 'ContactForm'

export default ContactForm
