import Image from "next/image";
import Link from "next/link";

const valueCards = [
  "Концепция + планировки + фасады — с логикой, а не “красотой ради красоты”",
  "Рабочая документация, по которой подрядчики не задают лишних вопросов",
  "Авторский надзор: защищаем проект, когда начинается реальная стройка",
  "Нестандартные задачи — наша нормальная практика. Проект дома под ключ: от идеи до контроля реализации.",
];

const cases = [
  { src: "/Image/image copy 2.png", alt: "Кейс 1", label: "Коммерческие", href: "/portfolio/commercial" },
  { src: "/Image/image copy 16.png", alt: "Кейс 2", label: "Дома", href: "/portfolio/houses" },
  { src: "/Image/image copy 18.png", alt: "Кейс 3", label: "Квартиры", href: "/portfolio/apartments" },
  { src: "/Image/image copy 19.png", alt: "Кейс 4", label: "Ландшафт", href: "/portfolio/landscape" },
];

const services = [
  {
    title: "Дизайн проект интерьера",
    href: "/services/design",
    image: "/Image/image copy 18.png",
    tagline: "Планировки, визуализации, ведомости и узлы — ремонт без переделок.",
  },
  {
    title: "Дизайн проект экстерьера",
    href: "/services/design/exteriyer",
    image: "/Image/image copy 16.png",
    tagline: "Фасады, входные группы и навигация с узлами и спецификациями под стройку.",
  },
  {
    title: "Архитектурный проект",
    href: "/services/architecture",
    image: "/Image/image copy 15.png",
    tagline: "Концепция, фасады, конструктив и инженерия — без конфликтов на стройке.",
  },
  {
    title: "Чертежи",
    href: "/services/plan",
    image: "/Image/image copy 13.png",
    tagline: "Рабочие листы с узлами и спецификациями, чтобы подрядчики не задавали лишних вопросов.",
  },
  {
    title: "Ландшафтный проект",
    href: "/services/landscape",
    image: "/Image/image copy 19.png",
    tagline: "Дорожки, дренаж, свет и озеленение в одном проекте без переделок после стройки.",
  },
];

export function ServicesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--bg)] py-12 md:py-20">
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.14),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute left-[55%] -top-16 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.12),transparent_60%)] blur-3xl" />
      <div className="relative container mx-auto max-w-6xl px-4 md:px-6">
        <div className="space-y-10 md:space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" aria-hidden />
              Услуги
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Мы берем проекты под ключ и доводим до реализации
            </h2>
            <div className="grid gap-3 text-white/80 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)] text-white"
                >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <div className="pointer-events-none absolute -right-10 top-1/4 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.18),transparent_60%)] blur-3xl" />
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                      sizes="(min-width: 1024px) 320px, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between px-4 py-4">
                    <div className="space-y-2">
                      <div className="text-lg font-semibold">{service.title}</div>
                      {service.tagline ? (
                        <p className="text-sm text-white/70">{service.tagline}</p>
                      ) : null}
                    </div>
                    <Link
                      href={service.href}
                      className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--green)] transition hover:underline"
                    >
                      Подробнее
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-3 text-white/80 sm:grid-cols-2">
              {valueCards.map((item) => (
                <div
                  key={item}
                  className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <span
                    className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--orange)]"
                    aria-hidden
                  />
                  <span className="leading-relaxed text-sm md:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white md:text-2xl">
                Наши работы
              </h3>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Больше кейсов
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {cases.map((item) => (
                <div
                  key={item.src}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)]"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 320px, 100vw"
                      priority
                    />
                    {item.label && item.href ? (
                      <Link
                        href={item.href}
                        className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-black/70"
                      >
                        {item.label}
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </Link>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
