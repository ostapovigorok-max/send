import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/config';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#FAF8F5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: `${siteConfig.studioName} | Наращивание ресниц и брови в Ашдоде (Ashdod, Israel)`,
  description: `${siteConfig.tagline}. Услуги: Классика, 2D, 3-4D, Mega Volume, ламинирование ресниц и бровей. Цены от 30 ₪ до 400 ₪. Запись через Instagram Direct (@brow._.poli). Ашдод, Израиль.`,
  keywords: [
    'наращивание ресниц Ашдод',
    'ресницы Ашдод',
    'брови Ашдод',
    'ламинирование ресниц Ашдод',
    'долговременная укладка бровей Ашдод',
    'lash master ashdod',
    'polilash ashdod',
    'ריסים אשדוד',
    'גבות אשדוד',
    'beauty.oskar4you.com',
  ],
  authors: [{ name: siteConfig.masterName }],
  creator: siteConfig.masterName,
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteConfig.siteUrl,
    siteName: siteConfig.studioName,
    title: `${siteConfig.studioName} | Наращивание ресниц и брови • Ашдод, Израиль`,
    description: `Профессиональное наращивание ресниц и укладка бровей в Ашдоде. Цены от 30 ₪. Запись онлайн в Instagram.`,
    images: [
      {
        url: '/images/placeholders/og-preview.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.studioName} - Ashdod, Israel`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.studioName} | Ashdod, Israel`,
    description: siteConfig.tagline,
    images: ['/images/placeholders/og-preview.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org LocalBusiness / BeautySalon structured data for Ashdod, Israel
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: siteConfig.studioName,
    image: `${siteConfig.siteUrl}/images/placeholders/hero-master.jpg`,
    description: siteConfig.tagline,
    url: siteConfig.siteUrl,
    priceRange: '₪30 - ₪400',
    currenciesAccepted: 'ILS',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ashdod',
      addressCountry: 'IL',
      streetAddress: 'Ashdod, Israel',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    hasMap: siteConfig.googleMapsUrl,
    sameAs: [
      siteConfig.instagram1,
      siteConfig.instagram2,
      siteConfig.tiktok,
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '10:00',
        closes: '20:00',
      },
    ],
  };

  return (
    <html lang="ru" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-champagne-100 text-espresso-900 font-sans selection:bg-nude-300 selection:text-espresso-950">
        {children}
      </body>
    </html>
  );
}
