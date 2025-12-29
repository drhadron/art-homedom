import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "Как проектировать коммерческие пространства без переделок",
    excerpt:
      "Разбираем типовые ошибки на стройке: планировки, инженерия, логистика и что предусмотреть в ТЗ.",
    tag: "Коммерческие",
    image: "/Image/image copy 2.png",
    href: "/blog/commercial-design",
  },
  {
    title: "Дизайн квартиры: чек-лист перед стартом ремонта",
    excerpt:
      "План электрики, узлы, чистовые материалы, мебель и свет — как подготовиться, чтобы не переплачивать.",
    tag: "Квартиры",
    image: "/Image/image copy 18.png",
    href: "/blog/apartment-checklist",
  },
  {
    title: "Ландшафт и архитектура: единый проект или хаос",
    excerpt:
      "Почему дорожки, свет и дренаж нужно считать вместе с домом, и как избежать перекопанной лужайки.",
    tag: "Ландшафт",
    image: "/Image/image copy 19.png",
    href: "/blog/landscape-and-architecture",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <section className="relative overflow-hidden bg-[var(--bg)] py-12 md:py-20">
        <div className="pointer-events-none absolute -left-40 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.12),transparent_60%)] blur-3xl" />
        <div className="pointer-events-none absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_60%)] blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" aria-hidden />
                Блог Art HomeDom
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.05]">
                  Дизайн, архитектура и реализация без сюрпризов
                </h1>
                <p className="text-base leading-relaxed text-white/75 md:text-lg">
                  SEO-статьи, кейсы и разборы: как мы проектируем, считаем риски и доводим интерьер,
                  экстерьер и ландшафт до стройки без потерь.
                </p>
                <div className="space-y-2 text-sm text-white/75 md:text-base">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" aria-hidden />
                    Практика 300+ реализованных объектов — делимся тем, что работает.
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" aria-hidden />
                    Без воды: только решения, схемы, чертежи и наглядные примеры.
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/contacts"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-6 py-3 text-base font-semibold text-[var(--bg)] shadow-[0_10px_40px_rgba(255,106,0,0.25)] transition duration-200 hover:translate-y-[-1px] hover:shadow-[0_14px_50px_rgba(255,106,0,0.3)]"
                >
                  Обсудить проект
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition duration-200 hover:border-white/60 hover:bg-white/5"
                >
                  Смотреть кейсы
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-[var(--surface)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/Image/image copy 10.png"
                  alt="Блог о дизайне и архитектуре"
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
        <div className="mx-auto max-w-6xl px-4 md:px-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Последние публикации
            </h2>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Запросить консультацию
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)] text-white transition hover:border-white/30 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 320px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/55 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
                    {post.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between px-4 py-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold leading-tight">{post.title}</h3>
                    <p className="text-sm text-white/70">{post.excerpt}</p>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--green)]">
                    Читать
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
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
