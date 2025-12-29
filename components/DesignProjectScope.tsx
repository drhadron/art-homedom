export const designProjectScope = [
  "Поднятие стен с учётом высот проёмов дверей и окон",
  "Создание напольных покрытий",
  "Создание настенных покрытий (покраска, плитка и т.п.)",
  "В санузлах проработка мебели (тумба, стеллажи, полки, шкафы)",
  "Расстановка сантехники: ванны, душевые перегородки, унитазы, раковины",
  "В кухне проработка мебели (кухонный гарнитур)",
  "Ставим обеденный стол и стулья к нему",
  "Кухонная техника",
  "В прихожей создание мебели для хранения вещей (шкаф, полки, тумбы)",
  "В гостиной создание ТВ-зоны",
  "Расстановка мебели в гостиной (диван, кресло, кофейные и журнальные столики, шкафы, консоли и полки)",
  "В спальне проработка кровати и шкафов",
  "Декор на всех стенах (панели, рифления и т.д.)",
  "Проработка освещения во всех помещениях (люстры, трековое освещение, светильники, подвесы)",
  "Работа с текстурами всех поверхностей",
  "Расстановка камер в программе",
  "Рендеринг",
] as const;

type DesignProjectScopeProps = {
  className?: string;
};

export function DesignProjectScope({ className }: DesignProjectScopeProps) {
  const sectionClassName = ["w-full overflow-hidden bg-[var(--bg)] py-10 md:py-16", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-6xl space-y-5 px-4 md:px-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Из чего состоит дизайн-проект</h2>
          <p className="text-base leading-relaxed text-white/75 md:text-lg">
            Собираем полный объём по всем помещениям, чтобы подрядчики работали без вопросов, а визуализации
            совпали с результатом.
          </p>
        </div>
        <ol className="grid gap-3 md:gap-4 md:grid-cols-2">
          {designProjectScope.map((item, index) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[var(--surface)] p-4 text-sm text-white/80 md:text-base"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--green)] text-sm font-semibold text-[var(--bg)]">
                {index + 1}
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
