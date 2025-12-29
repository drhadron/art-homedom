import Image from "next/image";
import Link from "next/link";

import { LandscapeInstancingEffect } from "@/components/LandscapeInstancingEffect";

const landscapeCards = [
  {
    title: "Двор частного дома",
    desc: "Благоустройство, дорожки, дренаж, свет и озеленение под архитектуру дома.",
    image: "/Image/image copy 19.png",
    href: "/services/landscape/doma",
    price: "От 1 500 за м²",
  },
  {
    title: "Двор многоквартирного дома",
    desc: "Навигация, освещение, безопасность и сценарии использования территории.",
    image: "/Image/image copy 4.png",
    href: "/services/landscape/mnogokvartir",
    price: "От 1 500 за м²",
  },
  {
    title: "Коммерческие объекты",
    desc: "Входные группы, паркинги, логистика потоков и зоны ожидания.",
    image: "/Image/image copy 2.png",
    href: "/services/landscape/commerce",
    price: "От 1 500 за м²",
  },
  {
    title: "Парки и водоёмы",
    desc: "Сценарии отдыха, озеленение, водные элементы и подсветка.",
    image: "/Image/image copy 5.png",
    href: "/services/landscape/park",
    price: "От 1 500 за м²",
  },
];

export default function LandscapeServicesPage() {
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
                Ландшафтный проект
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.05]">
                  Ландшафт, который работает днём и ночью
                </h1>
                <div className="relative overflow-hidden rounded-3xl bg-[var(--surface)] lg:hidden">
                  <div className="relative aspect-[4/3] w-full bg-black">
                    <LandscapeInstancingEffect />
                  </div>
                </div>
                <p className="text-base leading-relaxed text-white/75 md:text-lg">
                  Дорожки, свет, озеленение, дренаж и малые формы — в одном проекте, без переделок после
                  строительства.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contacts"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-6 py-3 text-base font-semibold text-[var(--bg)] shadow-[0_10px_40px_rgba(255,106,0,0.25)] transition duration-200 hover:translate-y-[-1px] hover:shadow-[0_14px_50px_rgba(255,106,0,0.3)]"
                >
                  Обсудить ландшафт
                </Link>
                <Link
                  href="/portfolio/landscape"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition duration-200 hover:border-white/60 hover:bg-white/5"
                >
                  Смотреть кейсы
                </Link>
              </div>
            </div>

            <div className="order-2 hidden overflow-hidden rounded-3xl bg-[var(--surface)] lg:block">
              <div className="relative aspect-[4/3] w-full bg-black">
                <LandscapeInstancingEffect />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[var(--bg)] pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {landscapeCards.map((card) => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
