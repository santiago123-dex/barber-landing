const whatsappNumber = '573012016095';

const buildWhatsAppHref = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const siteData = {
  brand: {
    name: 'D’Barbers',
    tagline: 'Barbería premium',
    city: 'Bogotá',
  },
  navigation: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Destacado', href: '#destacado' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    eyebrow: 'Barbería premium en Bogotá',
    headline: 'Presencia impecable. Corte preciso. Barba al detalle.',
    subcopy:
      'Barbería premium para hombres que quieren verse filosos desde la primera impresión.',
    primaryCtaLabel: 'Agendar por WhatsApp',
    primaryCtaHref: buildWhatsAppHref('Hola, quiero agendar una cita en D’Barbers.'),
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
      ctaHref: buildWhatsAppHref('Hola, quiero reservar el servicio de corte clásico y moderno en D’Barbers.'),
    },
    {
      name: 'Perfilado y arreglo de barba',
      description:
        'Contornos definidos, volumen equilibrado y perfilado detallado para una barba que de verdad se note trabajada.',
      duration: '35 min',
      priceLabel: 'Desde $30.000',
      featured: false,
      ctaLabel: 'Reservar barba',
      ctaHref: buildWhatsAppHref('Hola, quiero reservar el servicio de perfilado y arreglo de barba en D’Barbers.'),
    },
    {
      name: 'Ritual premium',
      description:
        'Servicio completo con corte, barba y acabado final para quienes quieren una versión más pulida de sí mismos.',
      duration: '70 min',
      priceLabel: 'Desde $68.000',
      featured: false,
      ctaLabel: 'Reservar ritual',
      ctaHref: buildWhatsAppHref('Hola, quiero reservar el ritual premium en D’Barbers.'),
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
        'https://images.unsplash.com/photo-1512690459411-b0fd1c86b8b8?auto=format&fit=crop&w=900&q=80',
      afterImage:
        'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80',
      alt: 'Comparación antes y después de un arreglo de barba',
      caption: 'Antes / después: definición, simetría y una presencia mucho más pulida.',
    },
  ],
  testimonials: [
    {
      quote:
        'Llegué por recomendación y terminé quedándome. El nivel de detalle y la atención se sienten muy por encima de una barbería promedio.',
      name: 'Juan Esteban R.',
      service: 'Corte clásico y moderno',
      rating: 5,
    },
    {
      quote:
        'La barba quedó perfectamente perfilada y el acabado final duró varios días viéndose impecable. Se nota la mano profesional.',
      name: 'Andrés M.',
      service: 'Perfilado y arreglo de barba',
      rating: 5,
    },
    {
      quote:
        'No solo te hacen ver mejor, también te asesoran bien. Se siente una experiencia seria, limpia y premium de principio a fin.',
      name: 'Sebastián C.',
      service: 'Ritual premium',
      rating: 5,
    },
  ],
  closingCta: {
    headline: 'Reserva hoy y sal con un look que sí impone presencia.',
    body: 'Agenda tu espacio por WhatsApp y confirma tu cita en minutos. Respuesta rápida durante el horario de atención.',
    primaryCtaLabel: 'Agendar por WhatsApp',
    primaryCtaHref: buildWhatsAppHref('Hola, quiero agendar mi cita en D’Barbers para esta semana.'),
    secondaryCtaLabel: 'Llamar ahora',
    secondaryCtaHref: 'tel:+573012016095',
  },
  contact: {
    whatsappLabel: 'WhatsApp',
    whatsappValue: '+57 301 201 6095',
    whatsappHref: buildWhatsAppHref('Hola, quiero reservar una cita en D’Barbers.'),
    phoneLabel: 'Teléfono',
    phoneValue: '+57 301 201 6095',
    phoneHref: 'tel:+573012016095',
    emailLabel: 'Correo',
    emailValue: 'citas@dbarbers.com',
    emailHref: 'mailto:citas@dbarbers.com',
    hours: ['Lunes a viernes · 10:00 AM — 8:00 PM', 'Sábados · 9:00 AM — 7:00 PM'],
    address: 'Atención en Bogotá con enfoque premium y reservas programadas por WhatsApp.',
    mapTitle: 'Mapa de D’Barbers en Bogotá',
    mapEmbedUrl: 'https://www.google.com/maps?q=Bogot%C3%A1%2C%20Colombia&z=13&output=embed',
    directionsHref: 'https://www.google.com/maps/search/?api=1&query=Bogot%C3%A1%2C%20Colombia',
  },
  socialLinks: [
    { label: 'Instagram', href: 'https://instagram.com/dbarbers.co' },
    { label: 'TikTok', href: 'https://tiktok.com/@dbarbers.co' },
  ],
  seo: {
    title: 'D’Barbers | Cortes premium, barba y estilo',
    description:
      'Barbería premium en Bogotá con cortes precisos, barba al detalle y reservas rápidas por WhatsApp. Agenda tu cita y eleva tu presencia.',
    ogImage: '/og-image.svg',
  },
};

export type SiteData = typeof siteData;
