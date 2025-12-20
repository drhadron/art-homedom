import Image from "next/image";
import Link from "next/link";

const gallery = [
  { src: "/Image/image copy 11.png", alt: "Мягкая мебель" },
  { src: "/Image/image copy 12.png", alt: "Кухни" },
  { src: "/Image/image copy 13.png", alt: "Двери и окна" },
  { src: "/Image/image copy 14.png", alt: "Авторские изделия" },
  { src: "/Image/image copy 15.png", alt: "Картины и декор" },
];

export function FurnitureSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--bg)] py-12 md:py-18">
      <div className="pointer-events-none absolute -left-32 top-8 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-12%] bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.14),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute left-[50%] -bottom-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-6 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.12),transparent_60%)] blur-3xl" />
      <div className="relative container mx-auto max-w-6xl px-4 md:px-6">
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" aria-hidden />
            Снабжение
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Мебель и материалы под проект
            </h2>
            <p className="text-base leading-relaxed text-white/75 md:text-lg">
              Мы сами производим товары для дома, картины, уникальную мебель и
              изделия. Являемся официальным дистрибьютором Homedom.shop и
              партнёром фабрик мягкой мебели, кухонь, дверей, окон. Работаем
              напрямую, без посредников, контролируем качество материалов и
              даём гарантию, которая действительно работает.
            </p>
            <p className="text-base leading-relaxed text-white/75 md:text-lg">
              Мы снимаем с заказчиков задачу поиска и подбора — поставляем всё
              под проект, чтобы он реализовался без задержек и сюрпризов.
            </p>
            <Link
              href="/manufacturing"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
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

          <div className="space-y-4">
            <div className="flex gap-4 overflow-x-auto pb-2">
              {gallery.map((item) => (
                <div
                  key={item.src}
                  className="relative min-w-[240px] flex-1 overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)] shadow-[0_20px_60px_-50px_rgba(0,0,0,0.7)]"
                >
                  <div className="pointer-events-none absolute -right-10 top-1/3 h-36 w-36 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.18),transparent_60%)] blur-3xl" />
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 320px, 70vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
                    <div className="absolute left-3 bottom-3 rounded-full border border-white/20 bg-black/55 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
                      {item.alt}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FurnitureSection;
