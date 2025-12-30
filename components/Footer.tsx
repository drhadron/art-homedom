import Link from "next/link";

const navLinks = [
  { name: "Главная", href: "/" },
  { name: "Портфолио", href: "/cases" },
  { name: "Блог", href: "/blog" },
  { name: "Команда", href: "/team" },
];

const serviceLinks = [
  { name: "Дизайн-проект интерьера", href: "/services/design" },
  { name: "Дизайн-проект экстерьера", href: "/services/design/exteriyer" },
  { name: "Архитектурный проект", href: "/services/architecture" },
  { name: "Ландшафтный проект", href: "/services/landscape" },
  { name: "Чертежи", href: "/services/plan" },
];

const objectLinks = [
  { name: "Коммерческие помещения", href: "/commerce" },
  { name: "Частные дома", href: "/doma" },
  { name: "Квартиры", href: "/kvartiry" },
  { name: "Ландшафтный дизайн", href: "/landshaft" },
  { name: "Двор МКД", href: "/services/landscape/mnogokvartir" },
  { name: "Парки и водоёмы", href: "/services/landscape/park" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-[var(--text)]">
      <div className="relative mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-3">
            <div className="text-xl font-semibold text-white">Art HomeDom</div>
            <p className="text-sm leading-relaxed text-white/70">
              Архитектурное бюро и студия дизайна: интерьеры, архитектура, ландшафт, рабочие чертежи,
              комплектация и авторский надзор.
            </p>
            <div className="space-y-1 text-sm text-white/70">
              <div>ИП Кабардоков Аслан Ратмирович</div>
              <div>ИНН: 070502631283</div>
              <div>ОГРНИП: 324070000043021</div>
              <div>Регистрация: 02.10.2024, УФНС по КБР</div>
              <div>Нальчик, Кабардино-Балкарская Республика</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-wide text-white/80">Навигация</div>
            <ul className="space-y-2 text-sm text-white/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-[var(--orange)]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-wide text-white/80">Услуги</div>
            <ul className="space-y-2 text-sm text-white/70">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-[var(--orange)]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-wide text-white/80">Объекты</div>
            <ul className="space-y-2 text-sm text-white/70">
              {objectLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-[var(--orange)]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-1 text-sm text-white/70">
              <Link href="https://wa.me/79386903838" className="block text-[var(--orange)] transition hover:text-[var(--orange)]">
                +7 (938) 690-38-38
              </Link>
              <a href="mailto:info@homedom.shop" className="block hover:text-[var(--orange)]">
                info@homedom.shop
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4">
            <Link href="/policy" className="hover:text-[var(--orange)]">
              Политика конфиденциальности
            </Link>
            <span>© {new Date().getFullYear()} Art HomeDom</span>
          </div>
          <a
            href="https://tehnopolyus.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--orange)]"
          >
            <span className="text-white">Сайт разработан </span>
            <span className="text-blue-400 underline">tehnopolyus.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
