const whatsappNumber = '573012016095';

const buildWhatsAppHref = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const siteData = {
  brand: {
    name: 'D´Barber',
    tagline: 'Barbería premium',
    city: 'Armenia, Quindío',
  },
  navigation: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Destacado', href: '#destacado' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    eyebrow: 'Barbería premium en Armenia, Quindío',
    headline: 'Presencia impecable. Corte preciso. Barba al detalle.',
    subcopy:
      'Barbería premium para hombres que quieren verse filosos desde la primera impresión.',
    primaryCtaLabel: 'Agendar por WhatsApp',
    primaryCtaHref: buildWhatsAppHref('Hola, quiero agendar una cita en D´Barber.'),
    secondaryCtaLabel: 'Ver servicios',
    secondaryCtaHref: '#servicios',
    backgroundImage:
      'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1600&q=80',
    trustBadges: ['Respuesta rápida', 'Atención personalizada', 'Cupos limitados'],
  },
  usp: [
    {
      title: 'Precisión real',
      body: 'Cada corte se diseña según tu rostro, tu estilo y el nivel de presencia que quieres proyectar.',
    },
    {
      title: 'Ritual cuidado',
      body: 'Perfilado, barba y acabado final pensados como experiencia, no como trámite rápido.',
    },
    {
      title: 'Ambiente premium',
      body: 'Atención sobria, ejecución limpia y una barbería pensada para que salgas con otra energía.',
    },
  ],
  services: [
    {
      name: 'Corte clásico y moderno',
      description:
        'Fade limpio, textura controlada y acabado preciso para que tu corte se vea fuerte desde cualquier ángulo.',
      duration: '45 min',
      priceLabel: 'Desde $45.000',
      featured: true,
      ctaLabel: 'Reservar corte',
      ctaHref: buildWhatsAppHref('Hola, quiero reservar el servicio de corte clásico y moderno en D´Barber.'),
    },
    {
      name: 'Perfilado y arreglo de barba',
      description:
        'Contornos definidos, volumen equilibrado y perfilado detallado para una barba que de verdad se note trabajada.',
      duration: '35 min',
      priceLabel: 'Desde $30.000',
      featured: false,
      ctaLabel: 'Reservar barba',
      ctaHref: buildWhatsAppHref('Hola, quiero reservar el servicio de perfilado y arreglo de barba en D´Barber.'),
    },
    {
      name: 'Ritual premium',
      description:
        'Servicio completo con corte, barba y acabado final para quienes quieren una versión más pulida de sí mismos.',
      duration: '70 min',
      priceLabel: 'Desde $68.000',
      featured: false,
      ctaLabel: 'Reservar ritual',
      ctaHref: buildWhatsAppHref('Hola, quiero reservar el ritual premium en D´Barber.'),
    },
  ],
  gallery: [
    {
      type: 'result',
      image:
        'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80',
      alt: 'Barbero trabajando un corte con precisión',
      caption: 'Acabados limpios, presencia fuerte y detalle visible al primer vistazo.',
    },
    {
      type: 'result',
      image:
        'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
      alt: 'Cliente con corte y barba perfilada en barbería premium',
      caption: 'Resultados pensados para que el estilo se vea premium y no improvisado.',
    },
    {
      type: 'before_after',
      beforeImage:
        '/before-service.svg',
      afterImage:
        'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80',
      alt: 'Comparación antes y después de un arreglo de barba',
      caption: 'Antes / después: definición, simetría y una presencia mucho más pulida.',
    },
  ],
  closingCta: {
    headline: 'Reserva hoy y sal con un look que sí impone presencia.',
    body: 'Agenda tu espacio por WhatsApp y confirma tu cita en minutos. Respuesta rápida durante el horario de atención.',
    primaryCtaLabel: 'Agendar por WhatsApp',
    primaryCtaHref: buildWhatsAppHref('Hola, quiero agendar mi cita en D´Barber para esta semana.'),
    secondaryCtaLabel: 'Llamar ahora',
    secondaryCtaHref: 'tel:+573012016095',
  },
  contact: {
    whatsappLabel: 'WhatsApp',
    whatsappValue: '+57 301 201 6095',
    whatsappHref: buildWhatsAppHref('Hola, quiero reservar una cita en D´Barber.'),
    phoneLabel: 'Teléfono',
    phoneValue: '+57 301 201 6095',
    phoneHref: 'tel:+573012016095',
    emailLabel: 'Correo',
    emailValue: 'citas@dbarbers.com',
    emailHref: 'mailto:citas@dbarbers.com',
    hours: ['Lunes a viernes · 10:00 AM — 8:00 PM', 'Sábados · 9:00 AM — 7:00 PM'],
    address: 'Cl. 30 #15, Armenia, Quindío. Reserva programada por WhatsApp y atención con enfoque premium.',
    mapTitle: 'Mapa de D´Barber en Armenia, Quindío',
    mapEmbedUrl: 'https://www.google.com/maps?q=Cl.%2030%20%2315%2C%20Armenia%2C%20Quind%C3%ADo&z=17&output=embed',
    directionsHref: 'https://www.google.com/maps/search/?api=1&query=Cl.%2030%20%2315%2C%20Armenia%2C%20Quind%C3%ADo',
  },
  socialLinks: [
    { label: 'Instagram', href: 'https://instagram.com/dbarbers.co' },
    { label: 'TikTok', href: 'https://tiktok.com/@dbarbers.co' },
  ],
  seo: {
    title: 'D´Barber | Cortes premium, barba y estilo en Armenia, Quindío',
    description:
      'D´Barber es una barbería premium en Armenia, Quindío, con cortes precisos, barba al detalle y reservas rápidas por WhatsApp.',
    ogImage: '/og-image.svg',
  },
};

export type SiteData = typeof siteData;
