import Image from "next/image";
import Link from "next/link";

import { DesignProjectScope } from "@/components/DesignProjectScope";

const stages = [
  {
    title: "Чертежи (технический план)",
    items: [
      "Планировки и зонирование потоков гостей/персонала + технологические линии",
      "Планы электрики, силовых линий и слаботочки под оборудование и бренд",
      "ОВиК, водоснабжение и пожарка с узлами и примыканиями под нормы",
    ],
  },
  {
    title: "Спецификация всех материалов",
    items: [
      "Ведомости отделки, света, мебели и оборудования с артикулами",
      "Сметы и подбор под бюджет, графики поставок без простоев",
      "Навигация и вывески: крепления, подсветка, согласование с городом/ТР ТС",
    ],
  },
  {
    title: "3D чертежи через Revit",
    items: [
      "3D-модель зала/кухни/техзон с инженерией и высотами",
      "Проверка стыков: подвесы, потолки, мокрые зоны и подсобки",
      "Экспорт для подрядчиков и согласований (аренда, УК, контролирующие органы)",
    ],
  },
  {
    title: "3D Max визуализация",
    items: [
      "Фотореалистичные визуализации витрин, зала, кассовых зон",
      "Увязка визуализаций со спецификациями и требованиями бренда",
      "Материал для согласований и маркетинга перед открытием",
    ],
  },
];

const risks = [
  "Переделки и простои: нет узлов, спецификаций и согласований",
  "Нарушения норм и требований — риск штрафов и закрытий",
  "Неэффективная логистика: очереди, пересечения потоков, низкая выручка",
  "Бюджет неуправляем: закупки без смет и ведомостей",
];

const caseImages = [
  { src: "/Image/image copy 2.png", alt: "Кейс коммерции 1" },
  { src: "/Image/image copy 24.png", alt: "Кейс коммерции 2" },
  { src: "/Image/image copy 20.png", alt: "Кейс коммерции 3" },
  { src: "/Image/image copy 21.png", alt: "Кейс коммерции 4" },
];

export default function DesignCommercePage() {
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
                Дизайн проект коммерции
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.05]">
                  Дизайн-проект в 100% случаев окупается на этапе стройки
                </h1>
                <div className="relative overflow-hidden rounded-3xl bg-[var(--surface)] lg:hidden">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/Image/image copy 33.png"
                      alt="Дизайн коммерческой недвижимости"
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                    />
                  </div>
                </div>
                <p className="text-base leading-relaxed text-white/75 md:text-lg">
                  Дизайн-проект с зонированием потоков, инженерией, ведомостями и чертежами — чтобы открытие
                  прошло без штрафов, простоя и потери выручки.
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
                  href="/cases#design-commerce"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition duration-200 hover:border-white/60 hover:bg-white/5"
                >
                  Смотреть кейсы
                </Link>
              </div>
            </div>

            <div className="order-2 hidden overflow-hidden rounded-3xl bg-[var(--surface)] lg:block">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/Image/image copy 33.png"
                  alt="Дизайн коммерческой недвижимости"
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

      <section className="w-full overflow-hidden bg-[var(--bg)] pb-10 md:pb-12">
        <div className="mx-auto max-w-6xl space-y-4 px-4 md:px-6">
          <h3 className="text-xl font-semibold text-white md:text-2xl">Для кого и чем помогаем</h3>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-4 text-white/80">
              <div className="mb-2 text-white">Рестораны</div>
              <ul className="space-y-1 text-sm leading-relaxed">
                <li>- Кухонное оборудование, вытяжка, холод/тепло — согласовано с инженерией</li>
                <li>- Линии электропитания под технологию и санитарные нормы</li>
                <li>- Потоки гостей/персонала и посадочные места без конфликтов</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-4 text-white/80">
              <div className="mb-2 text-white">Кофейни</div>
              <ul className="space-y-1 text-sm leading-relaxed">
                <li>- Барная линия, вода/электрика под кофейное оборудование</li>
                <li>- Очереди, выдача и кассы — сценарии без узких мест</li>
                <li>- Нормы по вентиляции, запахам и шуму для быстрой сдачи</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-4 text-white/80">
              <div className="mb-2 text-white">Производство</div>
              <ul className="space-y-1 text-sm leading-relaxed">
                <li>- Технологические зоны, логистика сырья/готовой продукции</li>
                <li>- Электрика, вентиляция и санитарные узлы под нормы и контроль</li>
                <li>- План эвакуации и охрана труда — без штрафов и переделок</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-4 text-white/80">
              <div className="mb-2 text-white">Гостиницы</div>
              <ul className="space-y-1 text-sm leading-relaxed">
                <li>- Номера, ресепшен, хоззоны: инженерия и отделка согласованы</li>
                <li>- Лифты, эвакуация и безопасность под требования МЧС</li>
                <li>- Инженерные расчёты по водоснабжению, вентиляции и электрике</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <DesignProjectScope
        title="Дизайн-проект коммерции — этапы и состав"
        description="Собираем проект коммерческого пространства от планировок и норм до смет и визуализаций, чтобы открытие прошло без простоев и штрафов."
        blocks={stages}
      />

      <section className="w-full overflow-hidden bg-[var(--bg)] pb-8 md:pb-12">
        <div className="mx-auto max-w-6xl space-y-3 px-4 md:px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Кейсы</h2>
            <Link href="/cases#design-commerce" className="text-sm text-[var(--orange)] hover:underline">
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
              Авторский надзор, снабжение и Homedom строительный контроль: передадим проект строителям и
              проследим, чтобы он реализовался строго по дизайн-проекту, в срок и без штрафов.
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
