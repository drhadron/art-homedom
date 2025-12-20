import Image from "next/image";
import Link from "next/link";

const designCards = [
  {
    title: "Дизайн проект квартиры",
    desc: "Планировки, визуализации, ведомости отделки и подбор материалов под реализацию.",
    image: "/Image/image copy 18.png",
  },
  {
    title: "Дизайн проект дома",
    desc: "Интерьеры с учётом инженерии и бюджета, чтобы стройка шла без переделок.",
    image: "/Image/image copy 11.png",
  },
  {
    title: "Дизайн коммерческой недвижимости",
    desc: "Концепции для торговых площадей, офисов, ресторанов и сервисных зон.",
    image: "/Image/image copy 2.png",
  },
  {
    title: "Дизайн экстерьера",
    desc: "Фасады, входные группы и навигация, которые работают на бренд и эксплуатацию.",
    image: "/Image/image copy 16.png",
  },
];

const architectureCards = [
  {
    title: "Архитектурный проект дома",
    desc: "Планировки, фасады, конструктив, инженерные узлы и сметы.",
    image: "/Image/image copy 15.png",
  },
  {
    title: "Архитектура торговых площадей",
    desc: "Зонирование потоков, нормы, безопасность и логистика для коммерции.",
    image: "/Image/image copy 16.png",
  },
  {
    title: "Фасады и входные группы",
    desc: "Согласованные решения с конструктивом и инженерией, без конфликтов на стройке.",
    image: "/Image/image copy 14.png",
  },
];

const landscapeCards = [
  {
    title: "Двор частного дома",
    desc: "Благоустройство, дорожки, дренаж, свет и озеленение под архитектуру дома.",
    image: "/Image/image copy 19.png",
    price: "От 1 500 за м²",
  },
  {
    title: "Двор многоквартирного дома",
    desc: "Навигация, освещение, безопасность и сценарии использования территории.",
    image: "/Image/image copy 4.png",
    price: "От 1 500 за м²",
  },
  {
    title: "Коммерческие объекты",
    desc: "Входные группы, паркинги, логистика потоков и зоны ожидания.",
    image: "/Image/image copy 2.png",
    price: "От 1 500 за м²",
  },
  {
    title: "Парки и водоёмы",
    desc: "Сценарии отдыха, озеленение, водные элементы и подсветка.",
    image: "/Image/image copy 5.png",
    price: "От 1 500 за м²",
  },
];

const drawingCards = [
  {
    title: "Чертежи коммерческих зданий",
    desc: "Рабочая документация по инженерии, узлам и спецификациям для подрядчиков.",
    image: "/Image/image copy 13.png",
  },
  {
    title: "Планировки квартир",
    desc: "Электрика, сантехника, раскладки — без лишних вопросов на стройке.",
    image: "/Image/image copy 18.png",
  },
  {
    title: "Планировки частных домов",
    desc: "Согласованные листы по инженерии, отделке и фасадам для стройки без рисков.",
    image: "/Image/image copy 11.png",
  },
  {
    title: "Чертежи территорий",
    desc: "Дренаж, освещение, покрытие и малые формы — всё в рабочем проекте.",
    image: "/Image/image copy 19.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <section className="relative overflow-hidden bg-[var(--bg)] py-12 md:py-20">
        <div className="pointer-events-none absolute -left-40 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.12),transparent_60%)] blur-3xl" />
        <div className="pointer-events-none absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_60%)] blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="order-1 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" aria-hidden />
                Услуги
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.05]">
                  Дизайн, архитектура, ландшафт и чертежи — под ключ
                </h1>
                <div className="relative overflow-hidden rounded-3xl bg-[var(--surface)] lg:hidden">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/Image/image copy 10.png"
                      alt="Проекты под ключ"
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                    />
                  </div>
                </div>
                <p className="text-base leading-relaxed text-white/75 md:text-lg">
                  Проектируем интерьеры, экстерьеры, архитектуру, ландшафт и рабочую документацию, чтобы
                  стройка шла по плану, а не по догадкам подрядчиков.
                </p>
                <div className="space-y-2 text-sm text-white/75 md:text-base">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" aria-hidden />
                    Считаем риски заранее: сроки, сметы, инженерия и логистика.
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" aria-hidden />
                    Чертежи, по которым подрядчики не задают лишних вопросов.
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contacts"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-6 py-3 text-base font-semibold text-[var(--bg)] shadow-[0_10px_40px_rgba(255,106,0,0.25)] transition duration-200 hover:translate-y-[-1px] hover:shadow-[0_14px_50px_rgba(255,106,0,0.3)]"
                >
                  Обсудить проект
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition duration-200 hover:border-white/60 hover:bg-white/5"
                >
                  Смотреть кейсы
                </Link>
              </div>
            </div>

            <div className="order-2 hidden overflow-hidden rounded-3xl bg-[var(--surface)] lg:block">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/Image/image copy 10.png"
                  alt="Проекты под ключ"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 520px, 100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[var(--bg)] py-12 md:py-18">
        <div className="mx-auto max-w-6xl px-4 md:px-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Дизайн</h2>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Обсудить дизайн
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {designCards.map((card) => (
              <div
                key={card.title}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)] text-white"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
                  {card.price ? (
                    <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-[color:rgba(34,197,94,0.65)] px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      {card.price}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col justify-between px-4 py-4">
                  <div className="space-y-2">
                    <div className="text-lg font-semibold">{card.title}</div>
                    <p className="text-sm leading-relaxed text-white/70">{card.desc}</p>
                  </div>
                  <Link
                    href="/contacts"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--orange)] transition hover:underline"
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
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[var(--bg)] py-12 md:py-18">
        <div className="mx-auto max-w-6xl px-4 md:px-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Архитектурный проект</h2>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Обсудить архитектуру
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {architectureCards.map((card) => (
              <div
                key={card.title}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)] text-white"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
                </div>
                <div className="flex flex-1 flex-col justify-between px-4 py-4">
                  <div className="space-y-2">
                    <div className="text-lg font-semibold">{card.title}</div>
                    <p className="text-sm leading-relaxed text-white/70">{card.desc}</p>
                  </div>
                  <Link
                    href="/contacts"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--orange)] transition hover:underline"
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
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[var(--bg)] py-12 md:py-18">
        <div className="mx-auto max-w-6xl px-4 md:px-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Ландшафтный проект</h2>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Обсудить ландшафт
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {landscapeCards.map((card) => (
              <div
                key={card.title}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)] text-white"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
                </div>
                <div className="flex flex-1 flex-col justify-between px-4 py-4">
                  <div className="space-y-2">
                    <div className="text-lg font-semibold">{card.title}</div>
                    <p className="text-sm leading-relaxed text-white/70">{card.desc}</p>
                  </div>
                  <Link
                    href="/contacts"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--orange)] transition hover:underline"
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
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[var(--bg)] py-12 md:py-18">
        <div className="mx-auto max-w-6xl px-4 md:px-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Чертежи и документация</h2>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Обсудить чертежи
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {drawingCards.map((card) => (
              <div
                key={card.title}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)] text-white"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
                </div>
                <div className="flex flex-1 flex-col justify-between px-4 py-4">
                  <div className="space-y-2">
                    <div className="text-lg font-semibold">{card.title}</div>
                    <p className="text-sm leading-relaxed text-white/70">{card.desc}</p>
                  </div>
                  <Link
                    href="/contacts"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--orange)] transition hover:underline"
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
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
