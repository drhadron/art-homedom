import Link from "next/link";

import { PlanBvhEffect } from "@/components/PlanBvhEffect";

const includes = [
  "Планировки, инженерия, узлы и раскладки для коммерческих помещений",
  "Спецификации материалов, оборудования и света",
  "Ведомости и сметы для закупок и подрядчиков",
  "Узлы креплений, схемы вентиляции и электрики",
];

const descriptionItems = [
  "Обмерный план и техническое обследование помещения/здания",
  "Планировочные решения и зонирование под бизнес-задачи",
  "Планы демонтажа и монтажа перегородок",
  "Рабочие планы полов, потолков и отделочных решений",
  "Чертежи электрики: освещение, силовые линии, розетки, слаботочные системы",
  "Чертежи инженерных сетей: водоснабжение, канализация, отопление, вентиляция и кондиционирование (ОВиК)",
  "Планы размещения оборудования, мебели и технологических зон",
  "Развертки стен и узлы/детали для строителей",
  "Спецификации и ведомости материалов (по необходимости)",
];

const risks = [
  "Переделки и простои: нет узлов и спецификаций для подрядчиков",
  "Несоблюдение норм и требований — риск штрафов и остановок",
  "Конфликты инженерии и отделки: точки питания, свет и оборудование не сходятся",
  "Рост бюджета: закупки и работы без смет и графика",
];

export default function PlanCommercePage() {
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
                Чертежи коммерческих помещений
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.05]">
                  Чертежи коммерции, по которым строят без штрафов
                </h1>
                <div className="relative overflow-hidden rounded-3xl bg-[var(--surface)] lg:hidden">
                  <div className="relative aspect-[4/3] w-full">
                    <PlanBvhEffect />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(255,106,0,0.2)] via-transparent to-white/5" />
                  </div>
                </div>
                <p className="text-base leading-relaxed text-white/75 md:text-lg">
                  Полный комплект рабочих листов: инженерия, узлы, спецификации и сметы, чтобы подрядчики
                  запускали объект без простоев, переделок и штрафов.
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
                  href="/cases#plan-commerce"
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
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Чертежи коммерческих помещений и зданий — что входит
            </h2>
            <p className="text-base leading-relaxed text-white/75 md:text-lg">
              Чертежи коммерческих помещений и зданий — это полный комплект рабочей документации для ремонта,
              реконструкции или строительства, который помогает точно рассчитать объёмы работ, согласовать
              решения и выполнить монтаж без ошибок. Мы разрабатываем чертежи для офисов, магазинов,
              ресторанов, салонов, складов и других объектов коммерческой недвижимости. В состав услуги
              обычно входят:
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
            Заказывая у нас архитектурные чертежи и рабочие чертежи для коммерческих помещений, вы получаете
            понятную и точную документацию для подрядчиков, сокращение сроков ремонта и контроль бюджета на
            всех этапах проекта.
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
            Авторский надзор, снабжение и Homedom строительный контроль: передадим чертежи подрядчикам и
            проследим, чтобы коммерческий объект собрали по проекту, без штрафов и задержек.
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
