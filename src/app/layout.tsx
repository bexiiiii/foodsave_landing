import type { Metadata, Viewport } from 'next';
import { Inter, Unbounded } from 'next/font/google';

import { JsonLd } from '@/components/JsonLd';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-unbounded',
  display: 'swap',
});

const siteUrl = 'https://foodsave.kz';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'FoodSave — Сюрприз-боксы со скидкой 50–70% из кафе и магазинов Алматы',
    template: '%s | FoodSave',
  },
  description:
    'FoodSave — маркетплейс еды в Казахстане. Сюрприз-боксы из кафе, ресторанов и пекарен Алматы и Астаны со скидкой 50–70%. Самовывоз в день заказа. Альтернатива Wolt, Яндекс Еда, Chocofood, Яндекс Лавка.',
  keywords: [
    // Бренд
    'FoodSave',
    'foodsave.kz',
    'ФудСейв',
    // Продукт
    'сюрприз-бокс еда',
    'сюрприз бокс купить',
    'surprise box еда',
    // Алматы
    'еда со скидкой Алматы',
    'купить еду дешево Алматы',
    'кафе скидки Алматы',
    'рестораны скидка Алматы',
    'пекарня скидка Алматы',
    'еда на вынос Алматы',
    'самовывоз еда Алматы',
    'еда по себестоимости Алматы',
    // Астана
    'еда со скидкой Астана',
    'купить еду дешево Астана',
    'кафе скидки Астана',
    'рестораны скидка Астана',
    'еда на вынос Астана',
    'самовывоз еда Астана',
    'еда по себестоимости Астана',
    // Казахстан общее
    'еда со скидкой Казахстан',
    'заказать еду онлайн Казахстан',
    'маркетплейс еды Казахстан',
    'онлайн магазин еды',
    'продукты со скидкой',
    // Конкуренты — Wolt
    'альтернатива Wolt',
    'дешевле Wolt',
    'Wolt скидка',
    'Wolt Алматы альтернатива',
    'Wolt Астана альтернатива',
    // Конкуренты — Яндекс
    'альтернатива Яндекс Еда',
    'альтернатива Яндекс Лавка',
    'Яндекс Еда Казахстан альтернатива',
    'дешевле Яндекс Еда',
    // Конкуренты — другие
    'альтернатива Chocofood',
    'альтернатива Glovo',
    'вместо Chocofood',
    'дешевле доставка еды',
    // Бизнес-запросы
    'подключить кафе к агрегатору',
    'продать излишки еды',
    'уменьшить пищевые отходы ресторан',
    'дополнительная выручка кафе',
    'партнёрство ресторан Казахстан',
    // Экология / sustainability
    'борьба с пищевыми отходами',
    'food waste Казахстан',
    'антифудвейст',
    'food saving',
    'излишки еды купить',
    'сэкономить на еде',
    // Разное
    'скидки в кафе сегодня',
    'еда рядом со скидкой',
    'продукты по скидке забрать',
  ],
  authors: [{ name: 'FoodSave', url: siteUrl }],
  creator: 'FoodSave',
  publisher: 'FoodSave',
  category: 'food',
  applicationName: 'FoodSave',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_KZ',
    url: siteUrl,
    siteName: 'FoodSave',
    title: 'FoodSave — Сюрприз-боксы со скидкой 50–70% из кафе Алматы и Астаны',
    description:
      'Покупайте сюрприз-боксы из кафе, ресторанов и пекарен Алматы и Астаны со скидкой 50–70%. Дешевле Wolt и Яндекс Еды. Онлайн-оплата, самовывоз в день заказа.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FoodSave — маркетплейс еды в Казахстане',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FoodSave — Сюрприз-боксы со скидкой 50–70%',
    description:
      'Покупайте сюрприз-боксы из кафе и ресторанов Алматы со скидкой до 70%. Самовывоз в день заказа.',
    images: ['/og-image.jpg'],
    creator: '@foodsave_kz',
    site: '@foodsave_kz',
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'ru-KZ': siteUrl,
    },
  },
  verification: {
    google: 'REPLACE_WITH_GOOGLE_VERIFICATION_TOKEN',
    yandex: 'REPLACE_WITH_YANDEX_VERIFICATION_TOKEN',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#f9fff5',
  width: 'device-width',
  initialScale: 1,
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FoodSave',
  alternateName: [
    'ФудСейв',
    'Food Save KZ',
    'FoodSave Kazakhstan',
    'FoodSave Алматы',
    'FoodSave Астана',
  ],
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    'FoodSave — маркетплейс сюрприз-боксов с едой в Казахстане. Покупайте излишки из кафе, ресторанов и пекарен Алматы и Астаны со скидкой 50–70%. Лучшая альтернатива Wolt, Яндекс Еда, Яндекс Лавка и Chocofood.',
  foundingDate: '2024',
  areaServed: [
    { '@type': 'City', name: 'Алматы' },
    { '@type': 'City', name: 'Астана' },
    { '@type': 'City', name: 'Нур-Султан' },
    { '@type': 'City', name: 'Шымкент' },
    { '@type': 'Country', name: 'Kazakhstan' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Алматы',
    addressCountry: 'KZ',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@foodsave.kz',
    contactType: 'customer service',
    availableLanguage: ['Russian', 'Kazakh'],
  },
  sameAs: [
    'https://t.me/foodsave_kz',
    'https://instagram.com/foodsave.kz',
  ],
  knowsAbout: [
    'food waste reduction',
    'surprise box food',
    'food marketplace Kazakhstan',
    'discount food Almaty',
    'discount food Astana',
    'антифудвейст',
    'сюрприз-боксы с едой',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FoodSave',
  url: siteUrl,
  description:
    'Маркетплейс еды: сюрприз-боксы со скидкой 50–70% из кафе, ресторанов и пекарен рядом.',
  inLanguage: 'ru-KZ',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="geo.region" content="KZ" />
        <meta name="geo.placename" content="Казахстан — Алматы, Астана" />
        <meta name="geo.position" content="48.0196;66.9237" />
        <meta name="ICBM" content="48.0196, 66.9237" />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className={`${inter.variable} ${unbounded.variable}`}>
        {children}
      </body>
    </html>
  );
}
