import { ShieldCheck, Sparkles } from "lucide-react";

import { DesignHomeMaskEffect } from "@/components/DesignHomeMaskEffect";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--bg)] py-10 md:py-18">
      <div className="pointer-events-none absolute -left-32 -top-40 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.16),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-10%] h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.14),transparent_60%)] blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-start gap-8 md:gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="order-1 space-y-8">
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.05]">
                Проекты, которые строятся — без сюрпризов на стройке
              </h1>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--surface)] shadow-[0_25px_80px_-45px_rgba(0,0,0,0.8)] lg:hidden">
                <div className="relative aspect-[4/3] w-full bg-black">
                  <DesignHomeMaskEffect />
                </div>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                Мы делаем архитектурное проектирование и архитектурный дизайн
                так, чтобы решение проходило весь путь: от концепции до рабочей
                документации и реализации.
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                Если вам нужен проектирование частных домов, где всё рассчитано
                заранее — сроки, узлы, инженерия и бюджет — вы по адресу.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-6 py-3 text-base font-semibold text-[var(--bg)] shadow-[0_10px_40px_rgba(255,106,0,0.25)] transition duration-200 hover:translate-y-[-1px] hover:shadow-[0_14px_50px_rgba(255,106,0,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange)]">
                Рассчитать стоимость проекта
                <Sparkles className="h-4 w-4 text-[var(--bg)] opacity-70 transition duration-200 group-hover:scale-110" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition duration-200 hover:border-white/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70">
                Получить консультацию архитектора
                <ShieldCheck className="h-4 w-4 text-white/80" />
              </button>
            </div>
            <p className="max-w-xl text-sm text-white/60">
              Ответим по делу: сроки, состав проекта, этапы, стоимость. Без
              “продажных” созвонов.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 lg:hidden">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" aria-hidden />
              Архитектурное проектирование • Архитектурный дизайн • Авторский надзор
            </div>
          </div>

          <div className="order-2 hidden lg:flex lg:flex-col lg:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" aria-hidden />
              Архитектурное проектирование • Архитектурный дизайн • Авторский надзор
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--surface)] shadow-[0_25px_80px_-45px_rgba(0,0,0,0.8)]">
              <div className="pointer-events-none absolute -right-10 top-1/4 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.22),transparent_60%)] blur-3xl" />
              <div className="relative aspect-[4/3] w-full bg-black">
                <DesignHomeMaskEffect />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
