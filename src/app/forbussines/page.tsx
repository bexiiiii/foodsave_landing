import type { Metadata } from 'next';
import {
  BusinessBenefitsSection,
  BusinessCalculatorSection,
  BusinessFaqSection,
  BusinessFinalBanner,
  BusinessStepsSection,
  MarketingHero,
  PageShell,
  StatStrip,
} from '@/components/loveresta/ui';

export const metadata: Metadata = {
  title: 'Для бизнеса — Подключите кафе или ресторан к FoodSave',
  description:
    'Продавайте излишки еды через FoodSave и получайте дополнительную выручку. Бесплатное подключение кафе, ресторанов, пекарен и магазинов в Казахстане. Без абонентской платы.',
  keywords: [
    'подключить кафе к FoodSave',
    'продать излишки еды',
    'маркетплейс для ресторанов',
    'партнёрство кафе Алматы',
    'дополнительная выручка ресторан',
    'антифудвейст бизнес',
    'food waste solution restaurant',
    'продать остатки еды',
    'агрегатор для кафе Казахстан',
  ],
  alternates: {
    canonical: 'https://foodsave.kz/forbussines',
  },
  openGraph: {
    title: 'FoodSave для бизнеса — Подключите заведение бесплатно',
    description:
      'Превратите излишки в выручку. Подключите кафе, ресторан или пекарню к FoodSave. Бесплатно, без абонентской платы.',
    url: 'https://foodsave.kz/forbussines',
  },
};

export default function ForBusinessPage() {
  const partnerWhatsappHref = 'https://wa.me/77074403678';

  return (
    <PageShell ctaHref={partnerWhatsappHref} ctaLabel="Стать партнёром">
      <main className="loveresta-main">
        <MarketingHero
          description="С нами пользователи получают еду почти по себестоимости, а заведения — избавляются от излишков с пользой. Подключите заведение и начните продавать сегодня."
          eyebrow="Бизнесу"
          primaryHref={partnerWhatsappHref}
          primaryLabel="Стать партнером"
          secondaryHref="/"
          secondaryLabel="Смотреть каталог"
          sideCopy="То, что вы списываете — не потери. Это нереализованный доход. FOODSAVE превращает остатки еды в дополнительную выручку и экологическую репутацию."
          sideTitle="120+ заведений нам уже доверяют"
          title="Спасаем еду, экономим деньги, поддерживаем бизнес"
        />

        <section className="loveresta-container loveresta-section">
          <StatStrip />
        </section>

        <BusinessStepsSection />
        <BusinessBenefitsSection />
        <BusinessCalculatorSection />
        <BusinessFaqSection />
        <BusinessFinalBanner ctaHref={partnerWhatsappHref} />
      </main>
    </PageShell>
  );
}
