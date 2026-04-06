import type { Metadata } from 'next';

import { RecommendedOffersGallery } from '@/components/loveresta/recommended-offers-gallery';
import { VenueCarousel } from '@/components/loveresta/venue-carousel';
import {
  CatalogCategories,
  PageShell,
  SectionHeading,
  StatStrip,
} from '@/components/loveresta/ui';
import { JsonLd } from '@/components/JsonLd';
import type { Offer, Venue } from '@/lib/loveresta-data';
import { fetchCategories, fetchFeaturedProducts, fetchStores } from '@/lib/api';
import type { ApiStore, ApiProduct } from '@/lib/api';

export const metadata: Metadata = {
  title: 'FoodSave — Купить сюрприз-бокс с едой со скидкой 50–70% в Алматы',
  description:
    'Каталог сюрприз-боксов из кафе, ресторанов и пекарен Алматы. Скидка 50–70%, онлайн-оплата, самовывоз сегодня. FoodSave — экономьте на еде и помогайте планете.',
  alternates: {
    canonical: 'https://foodsave.kz',
  },
  openGraph: {
    title: 'FoodSave — Купить сюрприз-бокс с едой со скидкой 50–70% в Алматы',
    description:
      'Каталог сюрприз-боксов из кафе, ресторанов и пекарен Алматы. Скидка 50–70%, онлайн-оплата, самовывоз сегодня.',
    url: 'https://foodsave.kz',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Что такое FoodSave?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FoodSave — это казахстанский маркетплейс еды, где можно купить сюрприз-боксы из кафе, ресторанов и пекарен Алматы и Астаны со скидкой 50–70%. Платформа помогает заведениям продавать излишки еды, а покупателям — экономить. Работает через сайт foodsave.kz и Telegram Mini App.',
      },
    },
    {
      '@type': 'Question',
      name: 'Что такое сюрприз-бокс от FoodSave?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Сюрприз-бокс — это набор продуктов или блюд из кафе, ресторана или пекарни, которые заведение продаёт со скидкой 50–70% в конце дня, чтобы не выбрасывать излишки. Состав бокса — сюрприз, но всегда качественная и свежая еда.',
      },
    },
    {
      '@type': 'Question',
      name: 'Как заказать еду на FoodSave?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Выберите заведение на сайте foodsave.kz или в Telegram Mini App, оплатите онлайн и заберите бокс самовывозом в указанное время. Всё просто: выбрал — оплатил — забрал. Доставка не нужна.',
      },
    },
    {
      '@type': 'Question',
      name: 'FoodSave дешевле Wolt и Яндекс Еды?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да, намного дешевле. На FoodSave скидки 50–70% от обычной цены. Wolt, Яндекс Еда и Chocofood — это доставка по полной цене плюс комиссия. FoodSave продаёт излишки дня: еда та же самая, цена в 2–3 раза ниже. Единственное отличие — самовывоз, без доставки на дом.',
      },
    },
    {
      '@type': 'Question',
      name: 'FoodSave работает в Астане?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да, FoodSave работает в Астане. На платформе представлены заведения как в Алматы, так и в Астане. Вы можете найти кафе, рестораны и пекарни в своём городе и купить сюрприз-бокс со скидкой до 70%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Чем FoodSave отличается от Яндекс Лавки и других агрегаторов еды?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FoodSave — не агрегатор доставки. Это маркетплейс против пищевых отходов. Яндекс Лавка, Wolt и Chocofood везут еду по обычной цене с комиссией за доставку. FoodSave продаёт только сюрприз-боксы из реальных заведений со скидкой до 70%, еду нужно забрать самому. Вы экономите, заведения не выбрасывают еду.',
      },
    },
    {
      '@type': 'Question',
      name: 'Как стать партнёром FoodSave — подключить кафе или ресторан?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Перейдите на foodsave.kz/forbussines или напишите в WhatsApp. Подключение бесплатное, без абонентской платы. FoodSave берёт процент только с фактических продаж. Подойдёт для кафе, ресторанов, пекарен, кондитерских и магазинов.',
      },
    },
    {
      '@type': 'Question',
      name: 'Как FoodSave помогает бизнесу?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FoodSave превращает списания в доход. Вместо того чтобы выбрасывать не проданную за день еду, заведение продаёт её через FoodSave со скидкой 50–70%. Это дополнительная выручка, меньше пищевых отходов и улучшение репутации заведения.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Главная',
      item: 'https://foodsave.kz',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Каталог',
      item: 'https://foodsave.kz/#catalog',
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'FoodSave — маркетплейс сюрприз-боксов с едой в Казахстане',
  serviceType: 'Food Marketplace',
  provider: {
    '@type': 'Organization',
    name: 'FoodSave',
    url: 'https://foodsave.kz',
  },
  areaServed: [
    { '@type': 'City', name: 'Алматы' },
    { '@type': 'City', name: 'Астана' },
    { '@type': 'Country', name: 'Kazakhstan' },
  ],
  description:
    'FoodSave — платформа для покупки сюрприз-боксов с едой из кафе, ресторанов и пекарен Алматы и Астаны со скидкой 50–70%. Альтернатива Wolt, Яндекс Еда, Яндекс Лавка, Chocofood. Без доставки — самовывоз в день заказа.',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'KZT',
    lowPrice: '700',
    highPrice: '5000',
    offerCount: '100',
    priceSpecification: {
      '@type': 'PriceSpecification',
      description: 'Скидка 50–70% от оригинальной цены',
    },
    eligibleRegion: [
      { '@type': 'City', name: 'Алматы' },
      { '@type': 'City', name: 'Астана' },
    ],
    availability: 'https://schema.org/InStock',
  },
};

// Специальный блок для ИИ-поисковиков: чёткое текстовое описание сущности
const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'FoodSave — маркетплейс еды в Казахстане: сюрприз-боксы со скидкой 50–70%',
  description:
    'FoodSave — это казахстанский онлайн-маркетплейс, где пользователи покупают сюрприз-боксы с едой из кафе, ресторанов, пекарен и кондитерских Алматы и Астаны со скидкой 50–70%. Заведения продают излишки еды, которые иначе были бы выброшены. Модель работы: онлайн-оплата → самовывоз в день заказа. FoodSave не доставляет еду — это не агрегатор доставки, как Wolt, Яндекс Еда или Chocofood. Ключевое отличие: цена в 2–3 раза ниже, потому что продаются остатки дня.',
  keywords: 'FoodSave, сюрприз-бокс, еда со скидкой, Алматы, Астана, Казахстан, альтернатива Wolt, Яндекс Еда, food waste, антифудвейст',
  author: {
    '@type': 'Organization',
    name: 'FoodSave',
    url: 'https://foodsave.kz',
  },
  publisher: {
    '@type': 'Organization',
    name: 'FoodSave',
    url: 'https://foodsave.kz',
  },
  about: [
    { '@type': 'Thing', name: 'food waste reduction' },
    { '@type': 'Thing', name: 'surprise box food' },
    { '@type': 'Thing', name: 'food marketplace Kazakhstan' },
    { '@type': 'Thing', name: 'discount food Almaty Astana' },
  ],
  mentions: [
    { '@type': 'Organization', name: 'Wolt', description: 'Конкурент — агрегатор доставки еды' },
    { '@type': 'Organization', name: 'Яндекс Еда', description: 'Конкурент — агрегатор доставки еды' },
    { '@type': 'Organization', name: 'Яндекс Лавка', description: 'Конкурент — быстрая доставка продуктов' },
    { '@type': 'Organization', name: 'Chocofood', description: 'Конкурент — агрегатор доставки еды в Казахстане' },
  ],
  inLanguage: 'ru-KZ',
  url: 'https://foodsave.kz',
};

function mapStoreToVenue(store: ApiStore): Venue {
  const pickupWindow =
    store.openingHours && store.closingHours
      ? `${store.openingHours} – ${store.closingHours}`
      : 'Уточните у заведения';

  return {
    id: String(store.id),
    kind: 'restaurant',
    name: store.name,
    logo: store.logo ?? undefined,
    summary: store.description || store.name,
    address: store.address,
    rating: '4.8',
    pickupWindow,
    priceHint: 'от 1 400 ₸',
    tags: [],
    description: store.description || '',
  };
}

function mapProductToOffer(product: ApiProduct): Offer {
  const discount = product.discountPercentage
    ? `-${Math.round(product.discountPercentage)}%`
    : 'Скидка';

  const stock =
    product.stockQuantity > 0 ? `${product.stockQuantity} шт` : 'Уточните';

  return {
    id: String(product.id),
    venueId: String(product.storeId),
    title: product.name,
    description: product.description || '',
    price: product.price,
    oldPrice: product.originalPrice ?? product.price,
    pickup: product.storeAddress,
    category: product.categoryName,
    accent: discount,
    image: product.imageUrl || product.images?.[0] || '',
    boxLabel: stock,
    brandLabel: product.storeName,
    brandTone: 'dark',
  };
}

export default async function HomePage() {
  const [apiCategories, apiStores, apiProducts] = await Promise.all([
    fetchCategories(),
    fetchStores(),
    fetchFeaturedProducts(),
  ]);

  const categoryNames = apiCategories.map((c) => c.name);
  const venues: Venue[] = apiStores.map(mapStoreToVenue);
  const offers: Offer[] = apiProducts.map(mapProductToOffer);

  const storeListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Заведения-партнёры FoodSave в Алматы',
    description: 'Кафе, рестораны и пекарни Алматы, продающие сюрприз-боксы со скидкой 50–70%',
    numberOfItems: apiStores.length,
    itemListElement: apiStores.map((store, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'FoodEstablishment',
        name: store.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: store.address,
          addressLocality: 'Алматы',
          addressCountry: 'KZ',
        },
        telephone: store.phone ?? undefined,
        openingHours: store.openingHours && store.closingHours
          ? `Mo-Su ${store.openingHours}-${store.closingHours}`
          : undefined,
        image: store.logo ?? undefined,
        url: `https://foodsave.kz/restaurant/${store.id}`,
        servesCuisine: 'Казахстанская, Европейская',
        priceRange: '₸',
      },
    })),
  };

  return (
    <PageShell>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={aboutSchema} />
      <JsonLd data={storeListSchema} />
      <main className="loveresta-main" id="catalog">
        <section className="loveresta-container loveresta-market-intro">
          <div>
            <span className="loveresta-eyebrow">Каталог</span>
            <h1 className="loveresta-hero-title">
              Сюрприз-боксы со скидкой 50–70% из кафе и магазинов рядом.
            </h1>
            <p className="loveresta-hero-copy">
              Онлайн-оплата, самовывоз в день заказа и понятная механика:
              заведения продают излишки, пользователи экономят, еда не
              пропадает.
            </p>
          </div>
        </section>

        <CatalogCategories categories={categoryNames} />

        <section className="loveresta-container loveresta-section">
          <SectionHeading
            eyebrow="Рядом с вами"
            title="Партнёры — заведения"
            description="Заведения-партнёры FoodSave — покупайте сюрприз-боксы с настоящей едой по честной цене."
          />
          <VenueCarousel venues={venues} />
        </section>

        <section className="loveresta-container loveresta-section">
          <SectionHeading
            eyebrow="В подборке"
            title="Рекомендуемые товары"
          />
          <RecommendedOffersGallery offers={offers} venues={venues} />
        </section>

        <section className="loveresta-container loveresta-section">
          <StatStrip />
        </section>
      </main>
    </PageShell>
  );
}
