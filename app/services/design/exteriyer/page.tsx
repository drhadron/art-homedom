import Image from "next/image";
import Link from "next/link";

const exteriyerCards = [
  {
    title: "Дома и коттеджи",
    desc: "Фасады, входные группы и навигация под стиль дома и нормы поселка. Узлы креплений и ведомости для подрядчика.",
    image: "/Image/image copy 16.png",
    href: "/services/design/exteriyer/doma",
    caseHref: "/cases#design-exteriyer",
  },
  {
    title: "Коммерческие здания",
    desc: "Вывески, витрины, подсветка и входные группы, согласованные с брендом и требованиями города.",
    image: "/Image/image copy 2.png",
    href: "/services/design/exteriyer/commerce",
    caseHref: "/cases#design-exteriyer",
  },
  {
    title: "Многоквартирные комплексы",
    desc: "Фасады и входные группы с учетом эксплуатационных нагрузок, логистики жильцов и требований управляющей компании.",
    image: "/Image/image copy 5.png",
    href: "/services/design/exteriyer/complex",
    caseHref: "/cases#design-exteriyer",
  },
];

const included = [
  "Фасады, входные группы, навигация и витрины под бренд и нормы города",
  "Визуализации и ведомости отделки, светотехники, вывесок и навигации",
  "Чертежи узлов, креплений, светотехники и элементов благоустройства",
  "Подбор фасадных материалов, вывесок и снабжение под проект",
  "Авторский надзор и контроль монтажа на площадке",
];

const exteriyerScope = [
  "Обмеры и анализ существующих фасадов, входных групп и рельефа",
  "Концепция фасадов и входных групп под бренд/стилистику здания",
  "3D-визуализации фасадов и входной зоны для согласования",
  "Чертежи фасадов с отметками, материалами и узлами креплений",
  "Узлы и детали: витражи, порталы, козырьки, примыкания, откосы",
  "Светотехника и подсветка вывесок/фасадов, схемы электрики",
  "Навигация и вывески: размещение, размеры, крепления",
  "Решения по благоустройству у входа: покрытие, ступени/пандус, ограждения",
  "Согласование материалов и узлов под нормы города/ТР ТС (при необходимости)",
  "Спецификации и ведомости материалов, вывесок и крепежа для подрядчиков",
];

const risks = [
  "Несогласованные фасады: требования города и бренда не совпадают",
  "Переделки и задержки из-за отсутствия узлов и спецификаций",
  "Неправильная светотехника и вывески — штрафы и потери видимости",
  "Неудобные входные группы и навигация — потеря трафика",
];

const caseImages = [
  { src: "/Image/image copy 16.png", alt: "Кейс экстерьера 1" },
  { src: "/Image/image copy 2.png", alt: "Кейс экстерьера 2" },
  { src: "/Image/image copy 5.png", alt: "Кейс экстерьера 3" },
  { src: "/Image/image copy 15.png", alt: "Кейс экстерьера 4" },
];

export default function DesignExteriyerPage() {
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
                Дизайн проект экстерьера
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.05]">
                  Экстерьер окупает себя на этапе стройки
                </h1>
                <div className="relative overflow-hidden rounded-3xl bg-[var(--surface)] lg:hidden">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/Image/image copy 16.png"
                      alt="Дизайн экстерьера"
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                    />
                  </div>
                </div>
                <p className="text-base leading-relaxed text-white/75 md:text-lg">
                  Фасады, входные группы и навигация, просчитанные по узлам, свету и нормативам, чтобы
                  монтаж прошёл без переделок и простоя.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contacts"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-6 py-3 text-base font-semibold text-[var(--bg)] shadow-[0_10px_40px_rgba(255,106,0,0.25)] transition duration-200 hover:translate-y-[-1px] hover:shadow-[0_14px_50px_rgba(255,106,0,0.3)]"
                >
                  Обсудить экстерьер
                </Link>
                <Link
                  href="/cases#design-exteriyer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition duration-200 hover:border-white/60 hover:bg-white/5"
                >
                  Смотреть кейсы
                </Link>
              </div>
            </div>

            <div className="order-2 hidden overflow-hidden rounded-3xl bg-[var(--surface)] lg:block">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/Image/image copy 16.png"
                  alt="Дизайн экстерьера"
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

      <section className="w-full overflow-hidden bg-[var(--bg)] pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-6 space-y-2">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Форматы экстерьера</h2>
            <p className="text-base leading-relaxed text-white/75 md:text-lg">
              Под каждый тип объекта собираем отдельный комплект визуализаций, узлов и ведомостей — чтобы стройка шла без переделок.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {exteriyerCards.map((card) => (
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
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-2 text-[var(--green)] transition hover:underline"
                    >
                      Обсудить
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
                    <Link
                      href={card.caseHref}
                      className="inline-flex items-center gap-2 text-white/80 underline-offset-4 transition hover:text-[var(--green)]"
                    >
                      Кейсы
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[var(--bg)] pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8 space-y-3 text-white">
            <h2 className="text-2xl font-semibold md:text-3xl">Дизайн-проект экстерьера — что входит</h2>
            <p className="text-base leading-relaxed text-white/75 md:text-lg">
              Для экстерьера дизайн-проект — это фасады, входные группы и навигация с узлами креплений, светотехникой и
              требованиями города/бренда. Готовим визуализации, ведомости и чертежи, чтобы монтаж прошёл быстро и без
              переделок.
            </p>
            <ul className="grid gap-2 rounded-2xl border border-white/10 bg-[var(--surface)] p-4 text-sm text-white/80 md:text-base md:grid-cols-2 md:gap-3">
              {included.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--orange)]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-white/70 md:text-base">
              В результате подрядчики получают понятные узлы, схемы света и спецификации материалов, а фасады и входные
              группы реализуются без штрафов и переделок.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[var(--bg)] pb-10 md:pb-16">
        <div className="mx-auto max-w-6xl space-y-6 px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Дизайн-проект экстерьера — что входит
            </h2>
            <p className="text-base leading-relaxed text-white/75 md:text-lg">
              Для экстерьера мы собираем единый комплект фасадных решений, входных групп и навигации — с
              визуализациями, узлами, светотехникой и ведомостями, чтобы монтаж прошёл без переделок и штрафов.
            </p>
          </div>
          <ul className="grid gap-3 md:grid-cols-2">
            {exteriyerScope.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-white/10 bg-[var(--surface)] px-4 py-3 text-sm text-white/80 md:text-base"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--orange)]" aria-hidden />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[var(--bg)] pb-8 md:pb-12">
        <div className="mx-auto max-w-6xl space-y-3 px-4 md:px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Кейсы</h2>
            <Link href="/cases#design-exteriyer" className="text-sm text-[var(--orange)] hover:underline">
              Все кейсы
            </Link>
          </div>
          <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2">
            {caseImages.map((item) => (
              <div
                key={item.src}
                className="relative h-40 w-64 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[var(--surface)] md:h-48 md:w-80"
              >
                <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="320px" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-3 text-sm text-white/90">
                  {item.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[var(--bg)] py-10 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 grid gap-8 lg:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white md:text-2xl">Какие проблемы решаем</h3>
            <ul className="space-y-2 text-white/80">
              {risks.map((item) => (
                <li key={item} className="flex gap-3 text-sm md:text-base">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--green)]" aria-hidden />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-[var(--surface)] p-5">
            <h3 className="text-xl font-semibold text-white md:text-2xl">Реализация и контроль</h3>
            <p className="text-sm leading-relaxed text-white/75 md:text-base">
              Авторский надзор, снабжение и Homedom строительный контроль: передадим проект монтажникам и
              проследим, чтобы фасад и входные группы собрали строго по проекту.
            </p>
            <Link
              href="/contacts"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--orange)] px-5 py-3 text-sm font-semibold text-[var(--bg)] shadow-[0_10px_40px_rgba(255,106,0,0.25)] transition hover:translate-y-[-1px] hover:shadow-[0_14px_50px_rgba(255,106,0,0.3)]"
            >
              Получить консультацию
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
