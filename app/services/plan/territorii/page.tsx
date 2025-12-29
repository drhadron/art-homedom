import Link from "next/link";

import { PlanBvhEffect } from "@/components/PlanBvhEffect";

const includes = [
  "Дренаж, освещение, покрытие и дорожки",
  "Навигация, малые формы, посадочные места",
  "Инженерные узлы и спецификации для подрядчиков",
  "Ведомости и сметы для закупок и работ",
];

const descriptionItems = [
  "Ситуационный план и анализ участка (границы, рельеф, существующие объекты)",
  "Генеральный план благоустройства с зонированием и привязками",
  "Вертикальная планировка (отметки, уклоны, водоотведение)",
  "План покрытий и мощения (материалы, раскладка, бордюры)",
  "План дорожек, площадок, подъездов и парковок",
  "План озеленения (посадки, ассортимент, схемы)",
  "План освещения территории и электрики (при необходимости)",
  "Схемы полива и дренажа (при необходимости)",
  "Разрезы, узлы и детали конструкций (подпорные стенки, ступени, террасы)",
  "Спецификации и ведомости материалов (по проекту)",
];

const risks = [
  "Переделки и простои: инженерия и покрытие не согласованы",
  "Опасные или неудобные маршруты из-за отсутствия навигации и света",
  "Бюджет и сроки расползаются без смет и узлов",
];

export default function PlanTerritoriiPage() {
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
                Чертежи территорий
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.05]">
                  Чертежи территории, по которым строят без переделок
                </h1>
                <div className="relative overflow-hidden rounded-3xl bg-[var(--surface)] lg:hidden">
                  <div className="relative aspect-[4/3] w-full">
                    <PlanBvhEffect />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(255,106,0,0.2)] via-transparent to-white/5" />
                  </div>
                </div>
                <p className="text-base leading-relaxed text-white/75 md:text-lg">
                  Рабочая документация по благоустройству: дренаж, свет, покрытие, навигация и малые формы,
                  чтобы подрядчики не копали дважды и не срывали сроки.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contacts"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-6 py-3 text-base font-semibold text-[var(--bg)] shadow-[0_10px_40px_rgba(255,106,0,0.25)] transition duration-200 hover:translate-y-[-1px] hover:shadow-[0_14px_50px_rgba(255,106,0,0.3)]"
                >
                  Обсудить чертежи
                </Link>
                <Link
                  href="/cases#plan-territorii"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition duration-200 hover:border-white/60 hover:bg-white/5"
                >
                  Смотреть кейсы
                </Link>
              </div>
            </div>

            <div className="order-2 hidden overflow-hidden rounded-3xl bg-[var(--surface)] lg:block">
              <div className="relative aspect-[4/3] w-full">
                <PlanBvhEffect />
                <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(255,106,0,0.2)] via-transparent to-white/5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[var(--bg)] pb-10 md:pb-16">
        <div className="mx-auto max-w-6xl space-y-6 px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Чертежи территорий — что входит</h2>
            <p className="text-base leading-relaxed text-white/75 md:text-lg">
              Чертежи территорий — это комплект проектной и рабочей документации для благоустройства участка и
              ландшафтных работ. По ним выполняют планировку, мощение, озеленение и монтаж инженерных систем на
              территории без ошибок и переделок. Мы разрабатываем чертежи для частных участков, коттеджных
              посёлков, коммерческих объектов и общественных пространств. В состав услуги обычно входят:
            </p>
          </div>
          <ul className="grid gap-3 md:grid-cols-2">
            {descriptionItems.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-white/10 bg-[var(--surface)] px-4 py-3 text-sm text-white/80 md:text-base"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--orange)]" aria-hidden />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm leading-relaxed text-white/75 md:text-base">
            Заказывая чертежи благоустройства и ландшафтного проектирования, вы получаете точную документацию
            для подрядчиков, контроль бюджета и понятный план реализации территории “под ключ”.
          </p>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[var(--bg)] py-10 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 grid gap-8 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Что входит</h2>
            <ul className="space-y-2 text-white/80">
              {includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm md:text-base">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--orange)]" aria-hidden />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Какие проблемы решаем</h2>
            <ul className="space-y-2 text-white/80">
              {risks.map((item) => (
                <li key={item} className="flex gap-3 text-sm md:text-base">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--green)]" aria-hidden />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[var(--surface)] py-10 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 space-y-4 rounded-2xl border border-white/10">
          <h3 className="text-xl font-semibold text-white md:text-2xl">Реализация и контроль</h3>
          <p className="text-sm leading-relaxed text-white/75 md:text-base">
            Авторский надзор, снабжение и Homedom строительный контроль: передадим проект подрядчикам и
            проследим, чтобы территорию сделали по чертежам, без переделок и задержек.
          </p>
          <Link
            href="/contacts"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--orange)] px-5 py-3 text-sm font-semibold text-[var(--bg)] shadow-[0_10px_40px_rgba(255,106,0,0.25)] transition hover:translate-y-[-1px] hover:shadow-[0_14px_50px_rgba(255,106,0,0.3)]"
          >
            Получить консультацию
          </Link>
        </div>
      </section>
    </div>
  );
}
