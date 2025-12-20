import Image from "next/image";
import Link from "next/link";
import FurnitureSection from "@/components/FurnitureSection";

const serviceCards = [
  {
    title: "Разработка проекта",
    description:
      "Благоустройство, дендроплан, свет, дренаж и малые формы — один проект без переделок.",
    image: "/Image/image copy 19.png",
    price: "От 1 500 за м²",
  },
];

const cases = [
  { src: "/Image/image copy 19.png", title: "Благоустройство участка" },
  { src: "/Image/image copy 4.png", title: "Ландшафтные акценты" },
  { src: "/Image/image copy 5.png", title: "Освещение и дорожки" },
  { src: "/Image/image copy 14.png", title: "Малые формы" },
];

export default function LandshaftPage() {
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
                Ландшафтный дизайн
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.05]">
                  Участки, которые работают и днём, и ночью
                </h1>
                <div className="relative overflow-hidden rounded-3xl bg-[var(--surface)] lg:hidden">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/Image/image copy 19.png"
                      alt="Ландшафтный проект"
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                    />
                  </div>
                </div>
                <p className="text-base leading-relaxed text-white/75 md:text-lg">
                  Проектируем ландшафт под архитектуру дома: функциональные маршруты, акценты, свет и
                  инженерия без конфликтов.
                </p>
                <div className="space-y-2 text-sm text-white/75 md:text-base">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" aria-hidden />
                    Дендроплан и полив — считаем заранее, чтобы посадки прижились.
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" aria-hidden />
                    Свет и дренаж — сразу в проекте, без “вырезания” после.
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contacts"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-6 py-3 text-base font-semibold text-[var(--bg)] shadow-[0_10px_40px_rgba(255,106,0,0.25)] transition duration-200 hover:translate-y-[-1px] hover:shadow-[0_14px_50px_rgba(255,106,0,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange)]"
                >
                  Обсудить участок
                </Link>
                <Link
                  href="/cases#landscape-doma"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition duration-200 hover:border-white/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
                >
                  Смотреть кейсы
                </Link>
              </div>
            </div>

            <div className="order-2 hidden overflow-hidden rounded-3xl bg-[var(--surface)] lg:block">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/Image/image copy 19.png"
                  alt="Ландшафтный проект"
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

      <section className="w-full overflow-hidden bg-[var(--bg)] py-12 md:py-18">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" aria-hidden />
              Что мы делаем
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Услуги по ландшафту
            </h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
            {serviceCards.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)] text-white"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
                  {service.price ? (
                    <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-[color:rgba(34,197,94,0.65)] px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      {service.price}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col justify-between px-4 py-4">
                  <div className="space-y-2">
                    <div className="text-lg font-semibold">{service.title}</div>
                    <p className="text-sm leading-relaxed text-white/70">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href="/contacts"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--orange)] transition hover:underline"
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

      <section className="w-full overflow-hidden bg-[var(--bg)] py-12 md:py-18">
        <div className="mx-auto max-w-6xl px-4 md:px-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-white md:text-3xl">Кейсы</h3>
            <Link
              href="/portfolio/landscape"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Все кейсы
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cases.map((item) => (
              <div
                key={item.src}
                className="overflow-hidden rounded-2xl bg-[var(--surface)]"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 280px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                  <div className="absolute left-3 bottom-3 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-2">
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-6 py-3 text-base font-semibold text-[var(--bg)] shadow-[0_10px_40px_rgba(255,106,0,0.25)] transition duration-200 hover:translate-y-[-1px] hover:shadow-[0_14px_50px_rgba(255,106,0,0.3)]"
            >
              Рассчитать ландшафтный проект
            </Link>
          </div>
        </div>
      </section>
      <FurnitureSection />
    </div>
  );
}
