import Image from "next/image";
import Link from "next/link";

const included = [
  "Фасады корпусов и входных групп с узлами, отметками и материалами",
  "3D-визуализации ключевых фасадов и входных зон для согласований",
  "Чертежи навигации и брендирования: размещение, размеры, крепления",
  "Светотехника фасадов и навигации: схемы, подбор оборудования, узлы",
  "Решения по благоустройству у входов: покрытия, пандусы, ограждения",
  "Спецификации материалов, светотехники и навигации для подрядчиков",
];

export default function DesignExteriyerComplexPage() {
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
                Дизайн экстерьера ЖК
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.05]">
                  Фасады и входные группы для многоквартирных комплексов
                </h1>
                <div className="relative overflow-hidden rounded-3xl bg-[var(--surface)] lg:hidden">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/Image/image copy 5.png"
                      alt="Экстерьер жилого комплекса"
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                    />
                  </div>
                </div>
                <p className="text-base leading-relaxed text-white/75 md:text-lg">
                  Проектируем фасады, входные группы и навигацию для ЖК: учитываем нагрузки эксплуатации, требования УК и
                  города, даём узлы и спецификации для подрядчиков.
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
                  src="/Image/image copy 5.png"
                  alt="Экстерьер жилого комплекса"
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

      <section className="w-full overflow-hidden bg-[var(--bg)] pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8 space-y-3 text-white">
            <h2 className="text-2xl font-semibold md:text-3xl">Дизайн-проект экстерьера ЖК — что входит</h2>
            <p className="text-base leading-relaxed text-white/75 md:text-lg">
              Подготавливаем фасадные решения, входные группы и навигацию с учётом эксплуатации и требований УК. Все
              решения идут с визуализациями, узлами и спецификациями.
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
              Документация облегчает согласования с городом и УК, а подрядчики монтируют фасады и навигацию без доработок
              на месте.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
