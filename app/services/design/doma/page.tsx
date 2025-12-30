import Image from "next/image";
import Link from "next/link";

import { DesignIblEffect } from "@/components/DesignIblEffect";
import { DesignProjectScope } from "@/components/DesignProjectScope";

const included = [
  "Планировки, фасады и стилистика интерьера и экстерьера с учётом участка",
  "Визуализации и ведомости отделки, мебели, света и фасадных материалов",
  "Чертежи: технический план и 3D-модель в Revit, электрика, сантехника, конструктив, кровля, узлы и спецификации",
  "Спецификация всех материалов, света, мебели и оборудования по проекту",
  "3D Max визуализации по всем помещениям и фасадам для согласования",
  "Подбор материалов и снабжение под согласованный бюджет",
  "Авторский надзор и контроль изменений на стройке",
];

const risks = [
  "Переделки на стройке из-за отсутствия узлов и ведомостей",
  "Конфликты инженерии и отделки: свет, мебель и точки питания не сходятся",
  "Срывы сроков и переплаты: подрядчики работают «по-своему»",
  "Непрозрачный бюджет: закупки без смет и спецификаций",
];

const projectScopeItems = [
  "Посадка дома на участок и планировки с учётом инженерии",
  "Фасады, кровля и узлы примыканий, чтобы строители не гадали",
  "Планы электрики, слаботочки, отопления, водоснабжения и вентиляции",
  "Спецификации отделки, фасадных материалов, света и мебели",
  "3D визуализации интерьера/экстерьера для согласования с подрядчиками",
  "Рабочие узлы и детали (лестницы, витражи, санузлы, кухни)",
];
const caseImages = [
  { src: "/Image/image copy 11.png", alt: "Кейс дома 1" },
  { src: "/Image/image copy 16.png", alt: "Кейс дома 2" },
  { src: "/Image/image copy 5.png", alt: "Кейс дома 3" },
  { src: "/Image/image copy 14.png", alt: "Кейс дома 4" },
];

export default function DesignDomaPage() {
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
                Дизайн проект дома
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.05]">
                  Дизайн-проект в 100% случаев окупается на этапе стройки
                </h1>
                <div className="relative overflow-hidden rounded-3xl bg-[var(--surface)] lg:hidden">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/Image/image copy 32.png"
                      alt="Дизайн-проект дома визуализация"
                      fill
                      className="object-cover opacity-70"
                      sizes="100vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/70" />
                    <DesignIblEffect textureSrc="/Image/image copy 32.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                  </div>
                </div>
                <p className="text-base leading-relaxed text-white/75 md:text-lg">
                  Интерьер и экстерьер, визуализации, ведомости и чертежи в одном комплекте — чтобы дом
                  строился по проекту, без сюрпризов и лишних затрат.
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
                  href="/cases#design-doma"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition duration-200 hover:border-white/60 hover:bg-white/5"
                >
                  Смотреть кейсы
                </Link>
              </div>
            </div>

            <div className="order-2 hidden overflow-hidden rounded-3xl bg-[var(--surface)] lg:block">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/Image/image copy 32.png"
                  alt="Дизайн-проект дома интерьер"
                  fill
                  className="object-cover opacity-70"
                  sizes="(min-width: 1024px) 520px, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/70" />
                <DesignIblEffect textureSrc="/Image/image copy 32.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[var(--bg)] pb-8 md:pb-12">
        <div className="mx-auto max-w-6xl space-y-3 px-4 md:px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Кейсы</h2>
            <Link href="/cases#design-doma" className="text-sm text-[var(--orange)] hover:underline">
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

      <section className="w-full overflow-hidden bg-[var(--bg)] pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8 space-y-3 text-white">
            <h2 className="text-2xl font-semibold md:text-3xl">Дизайн-проект дома — что входит</h2>
            <p className="text-base leading-relaxed text-white/75 md:text-lg">
              Для дома дизайн-проект связывает интерьер, экстерьер и инженерию: планировки, фасады, визуализации,
              ведомости и рабочие чертежи конструкций и инженерных систем. Учитываем участок, посадку дома и бюджеты,
              чтобы стройка шла без сюрпризов и переделок.
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
              Такой комплект дает стройке понятные решения по планировке, отделке и инженерии: подрядчики работают по
              чертежам и спецификациям, а не «на глаз».
            </p>
          </div>
        </div>
      </section>

      <DesignProjectScope
        title="Из чего состоит дизайн-проект дома"
        description="Связываем интерьер, экстерьер и инженерию в одном комплекте, чтобы строители работали без переделок."
        items={projectScopeItems}
      />

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
              Авторский надзор, снабжение и Homedom строительный контроль: можем передать проект строителям,
              чтобы он был реализован строго по дизайн-проекту и в срок.
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
