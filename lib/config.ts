/**
 * Single Source of Truth for Polilash Ashdod (Lash & Brow Studio)
 * Production Domain: https://beauty.oskar4you.pp.ua
 * Location: Ashdod, Israel
 */

export interface ServiceItem {
  id: string;
  category: 'lash' | 'brow';
  name: string;
  description: string;
  price: number;
  duration: number; // in minutes
  badge?: string;
  details: {
    procedure: string;
    longevity: string;
    aftercare: string[];
    contraindications: string[];
  };
}

export interface ServiceCategory {
  id: 'lash' | 'brow';
  name: string;
  tagline: string;
  description: string;
  services: ServiceItem[];
}

export interface RemovalServiceItem {
  id: string;
  name: string;
  description: string;
  price: number;
  duration?: string;
  badge?: string;
  isFree?: boolean;
}

export interface ComboPackageItem {
  id: string;
  name: string;
  badge: string;
  composition: string[];
  price: string;
  regularPrice?: string;
  savings: string;
  duration?: string;
  note?: string;
  bonus?: string;
  description: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'classic' | 'volume' | 'lamination' | 'lash-lift';
  image: string;
  alt: string;
  tag: string;
}

export interface ReviewItem {
  id: string;
  clientName: string;
  service: string;
  review: string;
  date: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const siteConfig = {
  // Master & Studio Info
  masterName: 'Poli',
  studioName: 'Polilash Ashdod',
  tagline: 'Профессиональное наращивание ресниц и моделирование бровей в Ашдоде',
  locationCity: 'Ashdod, Israel',
  address: 'Ashdod, Israel',

  // Single-source URLs & Contacts
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://beauty.oskar4you.pp.ua',
  currency: '₪', // Israeli New Shekel

  // Phone & Instant Messengers (Ashdod, Israel)
  phone: process.env.NEXT_PUBLIC_PHONE || '+972585964040',
  whatsAppUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.me/972585964040',
  telegramUrl: process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/polinaLashAshdod',
  telegramHandle: '@polinaLashAshdod',

  // Socials & Direct Channels
  instagram1: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/brow._.poli',
  instagram1Handle: '@brow._.poli',
  instagram1Label: 'Brow & Lash (Основной)',

  instagram2: process.env.NEXT_PUBLIC_INSTAGRAM2_URL || 'https://www.instagram.com/vugoraniya_net',
  instagram2Handle: '@vugoraniya_net',
  instagram2Label: 'Vugoraniya Studio',

  tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || 'https://www.tiktok.com/@polilash.ashdod',
  tiktokHandle: '@polilash.ashdod',

  googleMapsUrl: 'https://maps.google.com/maps?q=31.784744,34.651508&ll=31.784744,34.651508&z=16',
  appleMapsUrl: 'https://maps.apple/p/ibk~z1~Azo.HB.z',

  geo: {
    lat: 31.784744,
    lng: 34.651508,
  },

  // Online Calendar Booking (Calmark / Tor4You placeholder)
  onlineBookingUrl: process.env.NEXT_PUBLIC_CALENDAR_URL || 'https://calmark.io/polilash-ashdod',

  workingHours: {
    days: 'Воскресенье – Пятница',
    hours: '10:00 – 20:00',
    policy: 'По предварительной записи',
  },

  // WhatsApp Deep-Link Generator with Pre-filled Message
  getWhatsAppBookingUrl: (serviceName?: string) => {
    const base = 'https://wa.me/972585964040';
    const message = serviceName
      ? `Здравствуйте! Хочу записаться на процедуру: ${serviceName} в Ашдоде.`
      : 'Здравствуйте! Хочу записаться на ресницы / брови в Ашдоде.';
    return `${base}?text=${encodeURIComponent(message)}`;
  },

  // Telegram Deep-Link Generator with Pre-filled Message
  getTelegramBookingUrl: (serviceName?: string) => {
    const base = 'https://t.me/polinaLashAshdod';
    const message = serviceName
      ? `Здравствуйте! Хочу записаться на процедуру: ${serviceName} в Ашдоде.`
      : 'Здравствуйте! Хочу записаться на ресницы / брови в Ашдоде.';
    return `${base}?text=${encodeURIComponent(message)}`;
  },

  getBookingMessage: (serviceName?: string) => {
    return serviceName
      ? `Здравствуйте! Хочу записаться на процедуру: ${serviceName} в Ашдоде.`
      : 'Здравствуйте! Хочу записаться на ресницы / брови в Ашдоде.';
  },

  // Master Bio & Qualifications
  aboutMaster: {
    title: 'Сертифицированный мастер по наращиванию ресниц и бровям',
    experienceYears: '5+ лет опыта',
    bio: 'Индивидуальный подбор изгиба, длины и объема ресниц с учетом анатомии глаз. 100% безопасная изоляция каждой реснички без склеек, сохранение здоровья натуральных волосков и длительная комфортная носка в климате Израиля.',
    standards: [
      {
        title: 'Сухожаровая стерилизация',
        description: 'Медицинская трехэтапная дезинфекция инструментов и одноразовые расходники для каждого клиента.',
      },
      {
        title: 'Премиум гипоаллергенные клеи',
        description: 'Сертифицированные материалы без резких испарений, устойчивые к влаге и теплу.',
      },
      {
        title: 'Анатомическая изоляция',
        description: 'Безопасный отступ 0.5 мм от века, исключающий контакт клея с кожей и раздражение.',
      },
      {
        title: 'Индивидуальное моделирование',
        description: 'Подбор эффекта (натуральный, лисий, кукольный, мокрый) под форму ваших глаз.',
      },
    ],
    certificates: [
      'Международный сертификат по классическому и объемному наращиванию',
      'Курс повышения квалификации: Моделирование взгляда и трендовые эффекты',
      'Эксперт по долговременной укладке и кератиновому ламинированию',
      'Стандарты санитарной безопасности в бьюти-индустрии',
    ],
  },
};

// Exact Client Service Menu (Ashdod Pricing in ₪)
export const services: ServiceItem[] = [
  // === НАРАЩИВАНИЕ РЕСНИЦ ===
  {
    id: 'lash-half',
    category: 'lash',
    name: 'Полуклассика',
    description: 'Естественный объем с легким акцентом на длину и изгиб.',
    price: 180,
    duration: 90,
    badge: 'Легкий акцент',
    details: {
      procedure: 'Поресничное наращивание на взрослые крепкие ресницы (50-70% заполнения). Идеально для естественного эффекта и знакомства с процедурой.',
      longevity: '2 – 3 недели.',
      aftercare: [
        'Не мочить глаза первые 24 часа.',
        'Использовать безмасляные средства для демакияжа.',
        'Расчесывать ресницы щеточкой только в сухом виде.',
      ],
      contraindications: [
        'Острые воспалительные процессы глаз (конъюнктивит, блефарит).',
        'Индивидуальная чувствительность к испарениям клея.',
      ],
    },
  },
  {
    id: 'lash-classic',
    category: 'lash',
    name: 'Классика',
    description: 'Идеальная ровная линия, эффект своей косметики.',
    price: 250,
    duration: 120,
    badge: 'Хит',
    details: {
      procedure: 'Классическое поресничное наращивание 1:1. На каждую натуральную ресничку ставится одна тонкая искусственная. Эффект накрашенных тушью ресниц.',
      longevity: '3 – 5 недель.',
      aftercare: [
        'Избегать сауны, бассейна и прямого пара в первые 24 часа.',
        'Не спать лицом в подушку первые двое суток.',
        'Не наносить масляные сыворотки на прикорневую зону.',
      ],
      contraindications: [
        'Травмы век или недавние офтальмологические операции.',
      ],
    },
  },
  {
    id: 'lash-2d',
    category: 'lash',
    name: '2D',
    description: 'Двойной объем для более выразительного взгляда.',
    price: 300,
    duration: 150,
    badge: 'Популярное',
    details: {
      procedure: 'Формирование невесомого пучка из 2 тонких ресниц (0.07 мм) на одну родную. Бархатная глубина взгляда без утяжеления корней.',
      longevity: '3 – 5 недель.',
      aftercare: [
        'Беречь от воды первые 24 часа.',
        'Ежедневно промывать ресницы специальной пенкой без масел.',
      ],
      contraindications: [
        'Сильно поврежденные после неправильного снятия ресницы.',
      ],
    },
  },
  {
    id: 'lash-3-4d',
    category: 'lash',
    name: '3-4D',
    description: 'Глубокий, драматичный объем для вечерних образов.',
    price: 350,
    duration: 180,
    badge: 'Драматичный взгляд',
    details: {
      procedure: 'Густой пучок из 3-4 микроволокон (0.05 мм). Визуальный эффект плотного ресничного ряда и мягкой подводки.',
      longevity: '4 – 5 недель.',
      aftercare: [
        'Сухой режим первые 24 часа обязателен.',
        'Не тереть глаза, расчесывать только сухими.',
      ],
      contraindications: [
        'Слишком тонкие или ослабленные родные ресницы.',
      ],
    },
  },
  {
    id: 'lash-mega-volume',
    category: 'lash',
    name: 'Mega Volume',
    description: 'Ювелирная ручная техника микро-пучков 0.03 мм от 5D до 10D. 100% заполнение, максимальная пушистая густота без утяжеления корней. Стойкость носки 4–6 недель.',
    price: 450,
    duration: 210, // 3.5 часа
    badge: 'Максимум густоты',
    details: {
      procedure: 'Максимальный объем с использованием тончайших волокон 0.03 мм. Ультрачерный пушистый результат с полной безопасностью для родных ресниц.',
      longevity: '4 – 6 недель.',
      aftercare: [
        'Строго соблюдать сухой режим 24 часа.',
        'Снимать только у мастера специальным ремувером.',
      ],
      contraindications: [
        'Повышенная ломкость ресниц.',
      ],
    },
  },

  // === БРОВИ И РЕСНИЦЫ ===
  {
    id: 'lash-lamination',
    category: 'brow',
    name: 'Ламинирование ресниц (с окрашиванием и кератином)',
    description: 'Изгиб, насыщенный черный цвет и кератиновое питание для ваших натуральных ресниц.',
    price: 220,
    duration: 75,
    badge: 'Натуральный уход',
    details: {
      procedure: 'Создание красивого анатомического завитка на силиконовых валиках, окрашивание в черный цвет и насыщение кератином.',
      longevity: '6 – 8 недель.',
      aftercare: [
        'Не мочить первые 24 часа. После суток ограничений нет — можно купаться в море и бассейне.',
      ],
      contraindications: [
        'Воспалительные процессы глаз.',
      ],
    },
  },
  {
    id: 'brow-lamination',
    category: 'brow',
    name: 'Долговременная укладка бровей (коррекция + окрашивание)',
    description: 'Ламинирование и укладка волосков с архитектурной коррекцией и окрашиванием.',
    price: 200,
    duration: 60,
    badge: 'Любимая процедура',
    details: {
      procedure: 'Укладка и фиксация волосков в нужном направлении, окрашивание стойким красителем и глубокое питание кератином.',
      longevity: '5 – 7 недель.',
      aftercare: [
        'Не мочить брови первые 24 часа.',
        'Расчесывать брови щеточкой с гелем или питательным маслом.',
        'Избегать кислотных пилингов в зоне бровей.',
      ],
      contraindications: [
        'Раздражения, открытые ранки или свежий перманент (< 1 месяца).',
      ],
    },
  },
  {
    id: 'brow-correction',
    category: 'brow',
    name: 'Архитектурная коррекция бровей (воск + пинцет)',
    description: 'Моделирование формы воском или пинцетом по точкам лица.',
    price: 70,
    duration: 30,
    details: {
      procedure: 'Построение правильной архитектуры бровей по точкам лица, удаление лишних волосков воском и стерильным пинцетом.',
      longevity: '2 – 3 недели.',
      aftercare: [
        'Не наносить тональный крем на свежедепилированную кожу несколько часов.',
      ],
      contraindications: [
        'Повреждения кожи в зоне бровей.',
      ],
    },
  },
  {
    id: 'brow-tinting',
    category: 'brow',
    name: 'Окрашивание бровей',
    description: 'Придание цвета и глубины без изменения формы.',
    price: 50,
    duration: 20,
    details: {
      procedure: 'Подбор оттенка под цвет волос и окрашивание краской или хной для четкого выразительного контура.',
      longevity: 'До 7-10 дней на коже, до 3-4 недель на волосках.',
      aftercare: [
        'Не протирать брови спиртовыми лосьонами.',
      ],
      contraindications: [
        'Аллергия на красители (возможен тест).',
      ],
    },
  },
  {
    id: 'lash-tinting',
    category: 'brow',
    name: 'Окрашивание ресниц',
    description: 'Окрашивание натуральных ресниц для эффекта без макияжа.',
    price: 40,
    duration: 20,
    details: {
      procedure: 'Окрашивание верхних и нижних ресниц в насыщенный черный оттенок стойкой мягкой краской.',
      longevity: '3 – 4 недели.',
      aftercare: [
        'Обычный ежедневный уход.',
      ],
      contraindications: [
        'Острый конъюнктивит.',
      ],
    },
  },
];

// Grouped categories for UI tabs
export const serviceCategories: ServiceCategory[] = [
  {
    id: 'lash',
    name: 'Наращивание ресниц',
    tagline: 'Идеальный изгиб, легкий вес и безупречная носка в Ашдоде',
    description: 'От невесомой полуклассики до роскошного Mega Volume. Индивидуальный подбор эффекта под ваш образ.',
    services: services.filter((s) => s.category === 'lash'),
  },
  {
    id: 'brow',
    name: 'Брови и ресницы',
    tagline: 'Форма, насыщенный цвет и долговременная укладка',
    description: 'Комплексный уход за натуральными бровями и ресницами: ламинирование, коррекция, укладка и окрашивание.',
    services: services.filter((s) => s.category === 'brow'),
  },
];

// Снятие ресниц (Ashdod Removal Services)
export const removalServices: RemovalServiceItem[] = [
  {
    id: 'removal-own',
    name: 'Снятие своей работы перед новым наращиванием',
    description: 'Бесплатное бережное снятие перед повторным наращиванием у мастера.',
    price: 0,
    isFree: true,
    badge: 'Бесплатно',
  },
  {
    id: 'removal-other',
    name: 'Снятие чужой работы при наращивании',
    description: 'Бережное снятие кремовым ремувером — 30 ₪ вместо 50 ₪',
    price: 30,
    badge: 'Спеццена',
  },
  {
    id: 'removal-standalone',
    name: 'Снятие ресниц отдельно + уход',
    description: 'Бережное снятие ресниц без последующего наращивания (включает уходовое питательное масло).',
    price: 60,
    duration: '20–30 мин',
    badge: 'С уходом',
  },
];

// Комбо-пакеты (Ashdod Combo Packages)
export const comboPackages: ComboPackageItem[] = [
  {
    id: 'combo-express-eyes',
    name: 'Express Eyes',
    badge: 'Выгода 60 ₪',
    composition: [
      'Ламинирование ресниц (с окрашиванием и кератином)',
      'Долговременная укладка бровей (коррекция + окрашивание)',
    ],
    price: '360 ₪',
    regularPrice: '420 ₪',
    savings: 'Экономия 60 ₪',
    duration: '~90 мин',
    description: 'Комплексный уход за взглядом за один сеанс: выразительный изгиб ресниц и четкая аккуратная форма бровей.',
  },
  {
    id: 'combo-total-look',
    name: 'Total Look',
    badge: 'Выгода 60 ₪',
    composition: [
      'Наращивание ресниц: Классика (310 ₪) или 2D (360 ₪)',
      'Оформление бровей: коррекция 70 ₪ + окрашивание 50 ₪ входят в оформление',
    ],
    price: '310 ₪ (с классикой) / 360 ₪ (с 2D)',
    savings: 'Экономия 60 ₪',
    note: 'Коррекция 70 ₪ + окрашивание 50 ₪ входят в оформление',
    description: 'Идеальный дуэт: поресничное наращивание и архитектурное моделирование бровей с экономией 60 ₪.',
  },
  {
    id: 'combo-welcome',
    name: 'Знакомство с мастером',
    badge: 'Первый визит',
    composition: [
      'Первое наращивание ресниц (любой желаемый объем)',
      'Бесплатное снятие чужой работы',
      'Щёточка в защитном футляре в подарок',
    ],
    price: 'по прайсу',
    savings: 'Бонусы в подарок',
    bonus: 'Бесплатное снятие чужой работы + щёточка в защитном футляре в подарок',
    description: 'Специальный комплимент новым клиентам: бережное снятие старого наращивания бесплатно и полезный подарок.',
  },
];

// Interactive Before / After Items
export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: 'ba-classic-lashes',
    title: 'Классика',
    category: 'Наращивание ресниц',
    description: 'Натуральный mascara-эффект с идеальной линией и нулевой тяжестью.',
    beforeImage: '/images/placeholders/ba-classic-before.jpg',
    afterImage: '/images/placeholders/ba-classic-after.jpg',
    beforeAlt: 'Ресницы до наращивания классика',
    afterAlt: 'Классическое наращивание ресниц в Ашдоде',
  },
  {
    id: 'ba-volume-lashes',
    title: 'Объем 2D / 3D',
    category: 'Наращивание ресниц',
    description: 'Пушистый бархатный объем с моделированием открытого взгляда.',
    beforeImage: '/images/placeholders/ba-volume-before.jpg',
    afterImage: '/images/placeholders/ba-volume-after.jpg',
    beforeAlt: 'Ресницы до объемного наращивания',
    afterAlt: 'Объемное наращивание 2D 3D ресниц',
  },
  {
    id: 'ba-brow-lamination',
    title: 'Долговременная укладка бровей',
    category: 'Брови и ламинирование',
    description: 'Укладка непослушных волосков в гармоничную форму с окрашиванием.',
    beforeImage: '/images/placeholders/ba-brow-before.jpg',
    afterImage: '/images/placeholders/ba-brow-after.jpg',
    beforeAlt: 'Брови до укладки',
    afterAlt: 'Ламинированные аккуратные брови',
  },
];

// Filterable Portfolio Items
export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p-1',
    title: 'Классика 1:1',
    category: 'classic',
    image: '/images/placeholders/portfolio-1.jpg',
    alt: 'Классическое наращивание ресниц Ашдод',
    tag: 'Классика',
  },
  {
    id: 'p-2',
    title: 'Объем 2D / 3D',
    category: 'volume',
    image: '/images/placeholders/portfolio-2.jpg',
    alt: 'Объемное наращивание ресниц 2D 3D',
    tag: 'Объем 2D-3D',
  },
  {
    id: 'p-3',
    title: 'Долговременная укладка',
    category: 'lamination',
    image: '/images/placeholders/portfolio-3.jpg',
    alt: 'Ламинирование и укладка бровей Ашдод',
    tag: 'Укладка бровей',
  },
  {
    id: 'p-4',
    title: 'Ламинирование ресниц',
    category: 'lash-lift',
    image: '/images/placeholders/portfolio-4.jpg',
    alt: 'Ламинирование натуральных ресниц',
    tag: 'Ламинирование',
  },
  {
    id: 'p-5',
    title: 'Mega Volume',
    category: 'volume',
    image: '/images/placeholders/portfolio-5.jpg',
    alt: 'Mega Volume ресницы Ашдод',
    tag: 'Mega Volume',
  },
  {
    id: 'p-6',
    title: 'Коррекция и окрашивание',
    category: 'lamination',
    image: '/images/placeholders/portfolio-6.jpg',
    alt: 'Архитектура и окрашивание бровей',
    tag: 'Брови',
  },
];

// Reviews
export const reviewsData: ReviewItem[] = [
  {
    id: 'r-1',
    clientName: 'Анна Р.',
    service: '2D Объем',
    review: 'Отличная носка ресниц даже в жару! Уже месяц хожу, реснички легкие, ровные, никакого дискомфорта. Лучший мастер в Ашдоде!',
    date: '2 недели назад',
    rating: 5,
  },
  {
    id: 'r-2',
    clientName: 'Мишель К.',
    service: 'Долговременная укладка бровей',
    review: 'Мои жесткие брови теперь идеально уложены каждый день. Очень приятная и чистая студия в Ашдоде, мастер внимательная к деталям.',
    date: '1 месяц назад',
    rating: 5,
  },
  {
    id: 'r-3',
    clientName: 'Елена С.',
    service: 'Классика',
    review: 'Прекрасная классика! Настолько аккуратно, что все думают, что это мои родные накрашенные ресницы. Быстрая запись через WhatsApp.',
    date: '3 недели назад',
    rating: 5,
  },
  {
    id: 'r-4',
    clientName: 'Диана М.',
    service: 'Ламинирование ресниц',
    review: 'Красивый натуральный завиток и цвет! Больше не крашусь тушью вообще. Очень рекомендую Поли!',
    date: '1 месяц назад',
    rating: 5,
  },
];

// FAQ Items
export const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Сколько держится наращивание ресниц?',
    answer: 'В среднем ресницы держатся от 3 до 5 недель при соблюдении базовых правил ухода. Срок носки зависит от индивидуального цикла обновления натуральных ресниц. Для идеального вида рекомендуется коррекция или перенаращивание раз в 3-4 недели.',
  },
  {
    id: 'faq-2',
    question: 'Можно ли купаться в море и бассейне?',
    answer: 'Спустя 24 часа после процедуры купаться разрешено, так как клей полностью завершает полимеризацию. Однако после морской воды или бассейна обязательно ополосните ресницы чистой пресной водой: соль и хлор могут незначительно сократить срок носки. Также желательно избегать слишком долгого непрерывного пребывания в воде.',
  },
  {
    id: 'faq-3',
    question: 'Где находится студия в Ашдоде?',
    answer: 'Студия находится в Ашдоде, точный адрес и маршрут вы можете получить при записи. Координаты для навигатора: 31.784744, 34.651508.',
  },
  {
    id: 'faq-4',
    question: 'Как записаться на процедуру?',
    answer: 'Напишите мне в WhatsApp (+972585964040) или Telegram (@polinaLashAshdod). Я подберу удобное время и отвечу на все вопросы.',
  },
  {
    id: 'faq-5',
    question: 'Сколько по времени длится сеанс?',
    answer: 'Длительность зависит от процедуры: от 20 минут (окрашивание) до 3.5 часов (Mega Volume). Точное время указано в прайс-листе рядом с каждой услугой.',
  },
];
