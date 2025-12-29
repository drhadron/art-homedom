import Image from "next/image";
import Link from "next/link";

import { DesignIblEffect } from "@/components/DesignIblEffect";
import { DesignProjectScope } from "@/components/DesignProjectScope";

const included = [
  "Планировки и перепланировка с учётом БТИ, мокрых зон и эргономики",
  "Визуализации по всем комнатам с ведомостями отделки, мебели и света",
  "Чертежи: технический план и 3D-модель в Revit, электрика, сантехника, узлы раскладок и спецификации для подрядчиков",
  "Спецификация всех материалов, света, мебели и оборудования по проекту",
  "3D Max визуализации по всем помещениям для согласования с подрядчиками",
  "Подбор материалов, мебели и света под бюджет, снабжение без задержек",
  "Авторский надзор и контроль изменений на стройке",
];

const risks = [
  "Переплаты на стройке: переделки из-за отсутствия узлов и спецификаций",
  "Срывы сроков: подрядчики задают лишние вопросы или делают «как привыкли»",
  "Несостыковки инженерии и отделки: розетки, свет и мебель не совпадают",
  "Непрозрачный бюджет: закупки без смет и ведомостей",
];

const caseImages = [
  { src: "/Image/image copy 18.png", alt: "Кейс квартиры 1" },
  { src: "/Image/image copy 12.png", alt: "Кейс квартиры 2" },
  { src: "/Image/image copy 9.png", alt: "Кейс квартиры 3" },
  { src: "/Image/image copy 8.png", alt: "Кейс квартиры 4" },
];

export default function DesignKvartiryPage() {
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
                Дизайн проект квартиры
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.05]">
                  Дизайн-проект квартиры окупается на стройке
                </h1>
                <div className="relative overflow-hidden rounded-3xl bg-[var(--surface)] lg:hidden">
                  <div className="relative aspect-[4/3] w-full bg-black">
                    <DesignIblEffect />
                  </div>
                </div>
                <p className="text-base leading-relaxed text-white/75 md:text-lg">
                  Планировки, визуализации, ведомости и рабочие чертежи, чтобы ремонт шёл по проекту,
                  без переделок и переплат. Мы считаем риски заранее и контролируем реализацию.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contacts"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-6 py-3 text-base font-semibold text-[var(--bg)] shadow-[0_10px_40px_rgba(255,106,0,0.25)] transition duration-200 hover:translate-y-[-1px] hover:shadow-[0_14px_50px_rgba(255,106,0,0.3)]"
                >
                  Обсудить проект
                </Link>
                <Link
                  href="/cases#design-kvartiry"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition duration-200 hover:border-white/60 hover:bg-white/5"
                >
                  Смотреть кейсы
                </Link>
              </div>
            </div>

            <div className="order-2 hidden overflow-hidden rounded-3xl bg-[var(--surface)] lg:block">
              <div className="relative aspect-[4/3] w-full bg-black">
                <DesignIblEffect />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[var(--bg)] pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8 space-y-3 text-white">
            <h2 className="text-2xl font-semibold md:text-3xl">Дизайн-проект квартиры — что входит</h2>
            <p className="text-base leading-relaxed text-white/75 md:text-lg">
              Для квартиры дизайн-проект — это перепланировка с учётом БТИ, визуализации по комнатам, ведомости и рабочие
              чертежи инженерии. Он закрывает мокрые зоны, хранение и свет, чтобы подрядчики собирали интерьер без
              переделок и переплат.
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
              Итогом становится полный комплект визуализаций, спецификаций и чертежей: строители понимают точки,
              материалы и последовательность работ, а заказчик — сроки и бюджет.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[var(--bg)] pb-8 md:pb-12">
        <div className="mx-auto max-w-6xl space-y-3 px-4 md:px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Кейсы</h2>
            <Link href="/cases#design-kvartiry" className="text-sm text-[var(--orange)] hover:underline">
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

      <DesignProjectScope />

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
              Мы ведём авторский надзор, снабжаем материалами и мебелью, а также можем передать проект в
              Homedom строительный контроль — команда строителей реализует его строго по дизайн-проекту.
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
