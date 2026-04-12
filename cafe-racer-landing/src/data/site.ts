const whatsappNumber = '573106977981';

const buildWhatsAppHref = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const siteData = {
  brand: {
    name: 'Barbería Café Racer',
    tagline: 'Estilo clásico premium',
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
    eyebrow: 'Barbería clásica premium en Armenia, Quindío',
    headline: 'Cortes clásicos, barba precisa y presencia con carácter.',
    subcopy:
      'Un espacio con identidad café racer para hombres que valoran detalle, estilo limpio y atención profesional.',
    primaryCtaLabel: 'Agendar por WhatsApp',
    primaryCtaHref: buildWhatsAppHref('Hola, quiero agendar una cita en Barbería Café Racer.'),
    secondaryCtaLabel: 'Ver servicios',
    secondaryCtaHref: '#servicios',
    backgroundImage:
      'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1600&q=80',
    trustBadges: ['Respuesta rápida', 'Atención personalizada', 'Agenda por WhatsApp'],
  },
  usp: [
    {
      title: 'Estilo clásico',
      body: 'Técnica precisa inspirada en la barbería tradicional, adaptada al estilo actual de cada cliente.',
    },
    {
      title: 'Detalle en barba',
      body: 'Perfilado, simetría y definición para proyectar una imagen limpia y bien cuidada.',
    },
    {
      title: 'Ambiente con identidad',
      body: 'Una experiencia sobria y cómoda con estética café racer y enfoque en calidad.',
    },
  ],
  services: [
    {
      name: 'Corte clásico y moderno',
      description:
        'Degradados limpios, control de volumen y terminación precisa para una presencia sólida.',
      duration: '45 min',
      priceLabel: 'Desde $45.000',
      featured: true,
      ctaLabel: 'Reservar corte',
      ctaHref: buildWhatsAppHref('Hola, quiero reservar el servicio de corte clásico y moderno.'),
    },
    {
      name: 'Perfilado y arreglo de barba',
      description:
        'Contornos bien definidos y acabado prolijo para una barba con estilo auténtico.',
      duration: '35 min',
      priceLabel: 'Desde $30.000',
      featured: false,
      ctaLabel: 'Reservar barba',
      ctaHref: buildWhatsAppHref('Hola, quiero reservar el servicio de perfilado y arreglo de barba.'),
    },
    {
      name: 'Ritual Café Racer',
      description:
        'Servicio integral con corte, barba y acabado final para salir con una imagen más pulida.',
      duration: '70 min',
      priceLabel: 'Desde $68.000',
      featured: false,
      ctaLabel: 'Reservar ritual',
      ctaHref: buildWhatsAppHref('Hola, quiero reservar el ritual Café Racer.'),
    },
  ],
  gallery: [
    {
      type: 'result',
      image:
        'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80',
      alt: 'Barbero trabajando un corte con precisión',
      caption: 'Cortes limpios y acabados con carácter para destacar desde la primera impresión.',
    },
    {
      type: 'result',
      image:
        'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
      alt: 'Cliente con corte y barba perfilada en barbería premium',
      caption: 'Resultados consistentes para quienes valoran estilo clásico y ejecución impecable.',
    },
    {
      type: 'before_after',
      beforeImage:
        '/before-service.svg',
      afterImage:
        'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80',
      alt: 'Comparación antes y después de un arreglo de barba',
      caption: 'Antes / después: simetría, definición y una presencia mucho más refinada.',
    },
  ],
  closingCta: {
    headline: 'Reserva hoy y proyecta una imagen clásica con estilo premium.',
    body: 'Agenda tu cita por WhatsApp en minutos y asegura tu espacio según disponibilidad.',
    primaryCtaLabel: 'Agendar por WhatsApp',
    primaryCtaHref: buildWhatsAppHref('Hola, quiero agendar mi cita en Barbería Café Racer para esta semana.'),
    secondaryCtaLabel: 'Llamar ahora',
    secondaryCtaHref: 'tel:+573106977981',
  },
  contact: {
    whatsappLabel: 'WhatsApp',
    whatsappValue: '+57 310 697 7981',
    whatsappHref: buildWhatsAppHref('Hola, quiero reservar una cita en Barbería Café Racer.'),
    phoneLabel: 'Teléfono',
    phoneValue: '+57 310 697 7981',
    phoneHref: 'tel:+573106977981',
    emailLabel: 'Canal principal',
    emailValue: 'WhatsApp y llamadas',
    emailHref: buildWhatsAppHref('Hola, quiero información de horarios y servicios.'),
    hours: ['Lunes a viernes · 10:00 AM — 8:00 PM', 'Sábados · 9:00 AM — 7:00 PM'],
    address: 'Cra. 19 #31-91, Armenia, Quindío. Agenda previa por WhatsApp para confirmar disponibilidad.',
    mapTitle: 'Mapa de Barbería Café Racer en Armenia, Quindío',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Cra.%2019%20%2331-91%2C%20Armenia%2C%20Quind%C3%ADo&z=17&output=embed',
    directionsHref:
      'https://www.google.com/maps/search/?api=1&query=Cra.%2019%20%2331-91%2C%20Armenia%2C%20Quind%C3%ADo',
  },
  socialLinks: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'TikTok', href: 'https://tiktok.com/' },
  ],
  seo: {
    title: 'Barbería Café Racer | Cortes clásicos y barba en Armenia, Quindío',
    description:
      'Barbería Café Racer en Armenia, Quindío: cortes clásicos, perfilado de barba y reservas rápidas por WhatsApp.',
    ogImage: '/og-image.svg',
  },
};

export type SiteData = typeof siteData;
