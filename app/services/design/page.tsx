import Image from "next/image";
import Link from "next/link";

import { DesignIblEffect } from "@/components/DesignIblEffect";
import { DesignProjectScope } from "@/components/DesignProjectScope";

const designStages = [
  {
    title: "Чертежи (технический план)",
    items: [
      "Обмерный план, перепланировка и зонирование под нормативы",
      "Планы электрики, слаботочки, сантехники и вентиляции с привязками",
      "Узлы, развертки и стыки покрытий, чтобы подрядчики не гадали",
    ],
  },
  {
    title: "Спецификация всех материалов",
    items: [
      "Ведомости отделки, света, мебели и оборудования с артикулами",
      "Подбор под бюджет и логистику, сметы и графики поставок",
      "Снабжение и контроль замен без потери концепции",
    ],
  },
  {
    title: "3D чертежи через Revit",
    items: [
      "3D-модель объекта с инженерией и привязками по помещениям",
      "Проверка узлов: мокрые зоны, потолки, примыкания и карнизы",
      "Экспорт для подрядчиков и согласований с управляющими компаниями",
    ],
  },
  {
    title: "3D Max визуализация",
    items: [
      "Фотореалистичные визуализации по ключевым помещениям",
      "Синхронизируем визуалки со спецификациями и сметами",
      "Фиксируем решения для авторского надзора и стройконтроля",
    ],
  },
];

const designCards = [
  {
    title: "Дизайн проект квартиры",
    desc: "Планировки, визуализации, ведомости отделки и подбор материалов под реализацию.",
    image: "/Image/image copy 18.png",
    href: "/services/design/kvartiry",
    caseHref: "/cases#design-kvartiry",
    price: "От 3 500 за м²",
  },
  {
    title: "Дизайн проект дома",
    desc: "Интерьеры с учётом инженерии и бюджета, чтобы стройка шла без переделок.",
    image: "/Image/image copy 11.png",
    href: "/services/design/doma",
    caseHref: "/cases#design-doma",
    price: "От 3 500 за м²",
  },
  {
    title: "Дизайн коммерческой недвижимости",
    desc: "Концепции для торговых площадей, офисов, ресторанов и сервисных зон.",
    image: "/Image/image copy 2.png",
    href: "/services/design/commerce",
    caseHref: "/cases#design-commerce",
    price: "От 3 500 за м²",
  },
  {
    title: "Дизайн SPA / wellness",
    desc: "Зоны СПА и бассейнов с инженерией, отделкой и узлами под безопасную эксплуатацию.",
    image: "/Image/image copy 14.png",
    href: "/services/design/spa",
    caseHref: "/cases#design-spa",
    price: "От 3 500 за м²",
  },
];

export default function DesignServicesPage() {
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
                Дизайн
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.05]">
                  Дизайн-проект в 100% случаев окупается на этапе стройки
                </h1>
                <div className="relative overflow-hidden rounded-3xl bg-[var(--surface)] lg:hidden">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/Image/image copy 25.png"
                      alt="Дизайн-проект"
                      fill
                      className="object-cover opacity-70"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/70" />
                    <DesignIblEffect textureSrc="/Image/image copy 25.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                  </div>
                </div>
                <p className="text-base leading-relaxed text-white/75 md:text-lg">
                  Планировки, визуализации, ведомости и подбор материалов с учётом инженерии и сметы, чтобы
                  подрядчики реализовали проект без переделок.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contacts"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-6 py-3 text-base font-semibold text-[var(--bg)] shadow-[0_10px_40px_rgba(255,106,0,0.25)] transition duration-200 hover:translate-y-[-1px] hover:shadow-[0_14px_50px_rgba(255,106,0,0.3)]"
                >
                  Обсудить дизайн
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
                  src="/Image/image copy 25.png"
                  alt="Дизайн-проект"
                  fill
                  className="object-cover opacity-70"
                  priority
                />
                <div className="absolute inset-0 bg-black/70" />
                <DesignIblEffect textureSrc="/Image/image copy 25.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[var(--bg)] pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
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
                    href={card.href || "/contacts"}
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
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                  <Link
                    href={card.caseHref || "/cases"}
                    className="inline-flex items-center gap-2 text-sm text-white/80 underline-offset-4 transition hover:text-[var(--green)]"
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
            ))}
          </div>
        </div>
      </section>

      <DesignProjectScope
        title="Дизайн-проект интерьера — этапы и состав"
        description="Покрываем проект от чертежей и 3D-модели до ведомостей и визуализаций, чтобы подрядчики строили по проекту, а не по догадкам."
        blocks={designStages}
      />
    </div>
  );
}
