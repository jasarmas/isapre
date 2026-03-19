// ─────────────────────────────────────────────
//  CONTENT PLACEHOLDER — editable por el cliente
//  Integrar con Strapi reemplazando estas constantes
//  por llamadas a la API del CMS.
// ─────────────────────────────────────────────

export const navbar = {
  logoText: "IsapreAsesores",
  logoTagline: "Tu salud, nuestra prioridad",
  links: [
    { label: "Inicio", href: "#inicio" },
    { label: "Quiénes Somos", href: "#quienes-somos" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Contacto", href: "#contacto" },
  ],
  ctaLabel: "Cotiza gratis",
  ctaHref: "#contacto",
};

export const hero = {
  badge: "Asesoría 100% gratuita",
  title: "Tu salud merece la mejor Isapre.",
  titleHighlight: "Nosotros te ayudamos a elegirla.",
  subtitle:
    "Comparamos todas las Isapres del mercado y te asesoramos de forma personalizada, sin costo y sin letra chica. Tú decides con información clara.",
  ctaLabel: "Quiero asesoría gratis",
  ctaHref: "#contacto",
  secondaryCtaLabel: "Conoce más",
  secondaryCtaHref: "#quienes-somos",
  imagePlaceholder: "[ Imagen hero — ej: familia feliz ]",
};

export const quienesSomos = {
  sectionId: "quienes-somos",
  badge: "Quiénes Somos",
  title: "Un asesor que trabaja para ti, no para las Isapres.",
  paragraphs: [
    "Soy corredor independiente de Isapre con más de 5 años de experiencia ayudando a familias y trabajadores a encontrar el plan de salud que mejor se adapta a su vida y su presupuesto.",
    "Mi trabajo es gratuito para ti: me financio a través de las comisiones que pagan las propias Isapres, sin que eso cambie el precio que tú pagas. Sin presiones, sin letra chica.",
    "Te acompaño en todo el proceso: desde la comparación hasta el cambio efectivo, respondiendo cada duda con paciencia y claridad.",
  ],
  imagePlaceholder: "[ Foto del asesor ]",
  imageAlt: "Foto del asesor de Isapre",
};

export const beneficios = {
  sectionId: "beneficios",
  badge: "Beneficios",
  title: "¿Por qué elegir un asesor independiente?",
  subtitle:
    "No somos una Isapre. Somos tu aliado para entender el sistema y tomar la mejor decisión.",
  items: [
    {
      icon: "BadgeCheck",
      title: "Asesoría 100% gratuita",
      description:
        "Sin costos ocultos ni comisiones a tu cargo. Nuestro servicio es completamente gratuito para ti y tu familia.",
    },
    {
      icon: "LayoutGrid",
      title: "Comparamos todas las Isapres",
      description:
        "Revisamos todas las opciones del mercado para que elijas con información completa y actualizada.",
    },
    {
      icon: "HandHeart",
      title: "Te acompañamos en el proceso",
      description:
        "Desde la primera consulta hasta el cambio efectivo, estamos contigo en cada paso.",
    },
    {
      icon: "FileText",
      title: "Sin letra chica, todo claro",
      description:
        "Explicamos cada cláusula en lenguaje simple para que sepas exactamente qué estás contratando.",
    },
  ],
};

export const stats = {
  sectionId: "nosotros",
  items: [
    { value: "200+", label: "familias asesoradas" },
    { value: "5 años", label: "de experiencia" },
    { value: "100%", label: "de satisfacción" },
  ],
};

export const contacto = {
  sectionId: "contacto",
  badge: "Contacto",
  title: "¿Listo para mejorar tu plan de salud?",
  subtitle:
    "Déjanos tus datos y te contactamos en menos de 24 horas. Sin compromiso.",
  fields: {
    nombre: { label: "Nombre completo", placeholder: "María González" },
    email: { label: "Email", placeholder: "maria@email.com" },
    telefono: { label: "Teléfono", placeholder: "+56 9 1234 5678" },
    sueldoActual: { label: "Sueldo actual", placeholder: "Ej: $800.000" },
    mensaje: {
      label: "Mensaje (opcional)",
      placeholder:
        "¿Tienes alguna duda o situación especial que quieras contarnos?",
    },
  },
  ctaLabel: "Enviar consulta",
  ctaLoadingLabel: "Enviando...",
  successMessage: "¡Mensaje enviado! Te contactaremos en menos de 24 horas.",
  errorMessage:
    "Hubo un error al enviar. Por favor intenta de nuevo o escríbenos por WhatsApp.",
};

export const footer = {
  logoText: "IsapreAsesores",
  tagline: "Tu salud, nuestra prioridad.",
  links: [
    { label: "Inicio", href: "#inicio" },
    { label: "Quiénes Somos", href: "#quienes-somos" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Contacto", href: "#contacto" },
  ],
  social: {
    instagram: {
      href: "https://instagram.com/placeholder",
      label: "Instagram",
    },
    whatsapp: {
      href: "https://wa.me/56900000000",
      label: "WhatsApp",
    },
  },
  copyright: "IsapreAsesores. Todos los derechos reservados.",
};

export const whatsappButton = {
  href: "https://wa.me/56900000000",
  tooltip: "¡Escríbenos!",
  ariaLabel: "Contáctanos por WhatsApp",
};
