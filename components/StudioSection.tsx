import Image from "next/image";

export function StudioSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--bg)] py-12 md:py-20">
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.12),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-10%] top-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_60%)] blur-3xl" />
      <div className="relative container mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" aria-hidden />
              Студия дизайна — проект Аслана Кабардокова
            </div>
            <div className="space-y-3">
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Студия дизайна — это личная ответственность за каждый метр
              </h2>
              <p className="max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                «В нашей компании нет места шаблонным решениям и халтуре. Каждый
                проект мы ведем как собственный: архитектурное проектирование,
                дизайн и рабочая документация строятся на расчётах, а не на
                компромиссах».
              </p>
              <p className="max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                «Мы отвечаем именем за то, что создаём. Мы считаем риски до того,
                как вы за них заплатите. Мы делаем пространства, где вам
                комфортно жить, работать и вдохновляться — и доводим их до
                реализации без сюрпризов».
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span className="h-1.5 w-6 rounded-full bg-[var(--green)]" aria-hidden />
                20+ лет практики: архитектурное проектирование и контроль на
                стройке
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span className="h-1.5 w-6 rounded-full bg-[var(--orange)]" aria-hidden />
                300+ реализованных проектов — частные дома, квартиры, коммерция
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span className="h-1.5 w-6 rounded-full bg-white/50" aria-hidden />
                Сильная команда — залог успешной реализации
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[602px] overflow-hidden rounded-3xl border border-white/10 bg-[var(--surface)] shadow-[0_25px_80px_-45px_rgba(0,0,0,0.8)]">
            <div className="pointer-events-none absolute -right-14 top-1/3 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.18),transparent_60%)] blur-3xl" />
            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur">
              Проект Аслана Кабардокова
            </div>
            <div className="relative flex w-full justify-center">
              <Image
                src="/Image/Снимок экрана 2025-12-19 в 02.28.29.png"
                alt="Авторский взгляд Аслана Кабардокова"
                width={602}
                height={1052}
                sizes="(min-width: 1024px) 602px, 90vw"
                className="h-auto w-full max-w-[602px] object-contain"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudioSection;
