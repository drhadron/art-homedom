import Image from "next/image";
import Link from "next/link";

const includes = [
  "Планировки, зонирование потоков, эвакуация и нормы",
  "Фасады, входные группы, навигация и витрины",
  "Конструктив и инженерные узлы для подрядчиков",
  "Чертежи, ведомости, спецификации и сметы",
  "Авторский надзор и снабжение под проект",
];

const descriptionItems = [
  "Предпроектный анализ объекта и ТЗ: площадь, потоки людей, требования бизнеса",
  "Планировочные решения и зонирование под назначение помещения/здания",
  "Архитектурная концепция и варианты фасадных решений (для зданий)",
  "Поэтажные планы с размерами, привязками и экспликацией помещений",
  "Фасады, разрезы, отметки и основные узлы (при необходимости)",
  "Решения по входной группе, витринам, навигации и доступности (в т.ч. для МГН)",
  "Координация с инженерными разделами (ОВиК, ВК, электрика, пожарные требования — по составу проекта)",
  "Комплект архитектурных чертежей и ведомостей для согласований и строительства",
];

const risks = [
  "Штрафы и простои: не учтены нормы, узлы и согласования",
  "Конфликты потоков: очереди, пересечения, потеря выручки",
  "Переделки подрядчиков: нет спецификаций и узлов",
  "Распухший бюджет: закупки и работы без смет и графика",
];

export default function ArchitectureCommercePage() {
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
                Архитектурный проект коммерции
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.05]">
                  Архитектура коммерции окупается на стройке
                </h1>
                <div className="relative overflow-hidden rounded-3xl bg-[var(--surface)] lg:hidden">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/Image/image copy 2.png"
                      alt="Архитектурный проект коммерции"
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                    />
                  </div>
                </div>
                <p className="text-base leading-relaxed text-white/75 md:text-lg">
                  Планировки, фасады, инженерия и узлы по нормам, чтобы открытие прошло без штрафов,
                  простоев и потери выручки.
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
                  href="/cases#architecture-commerce"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition duration-200 hover:border-white/60 hover:bg-white/5"
                >
                  Смотреть кейсы
                </Link>
              </div>
            </div>

            <div className="order-2 hidden overflow-hidden rounded-3xl bg-[var(--surface)] lg:block">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/Image/image copy 2.png"
                  alt="Архитектурный проект коммерции"
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

      <section className="w-full overflow-hidden bg-[var(--bg)] pb-10 md:pb-16">
        <div className="mx-auto max-w-6xl space-y-6 px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Архитектурный проект коммерческого объекта — что входит
            </h2>
            <p className="text-base leading-relaxed text-white/75 md:text-lg">
              Архитектурный проект коммерческого объекта — это разработка профессиональной проектной
              документации для строительства, реконструкции или перепланировки коммерческой недвижимости:
              офисов, магазинов, ресторанов, салонов, клиник, складов и зданий под бизнес. Проект учитывает
              функциональные процессы, требования норм, безопасность и удобство для клиентов и персонала. В
              услугу обычно входит:
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
            Заказывая архитектурный проект коммерческого помещения или здания, вы получаете понятную
            документацию для подрядчиков, соответствие нормам, оптимальную планировку под бизнес-задачи и
            контроль сроков и бюджета на этапе реализации.
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
            Авторский надзор, снабжение и Homedom строительный контроль: передадим проект строителям и
            проследим, чтобы объект открыли по проекту, без простоев и штрафов.
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
