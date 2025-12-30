'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

type NavItem = {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
};

const navItems: NavItem[] = [
  { name: "Главная", href: "/" },
  {
    name: "Услуги",
    href: "/services",
    submenu: [
      { name: "Дизайн-проект интерьера", href: "/services/design" },
      { name: "Дизайн-проект экстерьера", href: "/services/design/exteriyer" },
      { name: "Архитектурный проект", href: "/services/architecture" },
      { name: "Ландшафтный проект", href: "/services/landscape" },
      { name: "Чертежи", href: "/services/plan" },
    ],
  },
  { name: "Портфолио", href: "/cases" },
  {
    name: "Типы проектов",
    href: "/projects",
    submenu: [
      { name: "Коммерческие помещения", href: "/commerce" },
      { name: "Частные дома", href: "/doma" },
      { name: "Квартиры", href: "/kvartiry" },
      { name: "Ландшафтный дизайн", href: "/landshaft" },
      { name: "Двор МКД", href: "/services/landscape/mnogokvartir" },
      { name: "Парки и водоёмы", href: "/services/landscape/park" },
    ],
  },
  { name: "Блог", href: "/blog" },
  { name: "Команда", href: "/team" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activePath = useMemo(() => pathname || "/", [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[var(--bg)]/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:h-20">
        <Link href="/" className="flex items-center gap-3 leading-none pl-2 lg:gap-4 lg:pl-20">
          <div className="relative h-8 w-36 lg:h-10 lg:w-44">
            <Image
              src="/Image/Dom Home лого в одну строку бело-оранжевый 2.png"
              alt="Art HomeDom"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav
          aria-label="Основная навигация"
          className="hidden items-center gap-6 text-sm font-medium text-white lg:flex lg:gap-8"
        >
          {navItems.map((item) => {
            const isActive =
              activePath === item.href ||
              (item.href !== "/" && activePath.startsWith(item.href + "/"));
            return (
              <div key={item.name} className="group relative">
                <Link
                  href={item.href}
              className={`flex items-center gap-1 py-2 transition-colors ${
                isActive
                  ? "text-[var(--orange)]"
                  : "text-white hover:text-[var(--orange)]"
              }`}
            >
              {item.name}
              {item.submenu && (
                <svg
                  className="h-4 w-4 text-white/70 group-hover:text-[var(--orange)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  )}
                </Link>
                {item.submenu && (
                  <div className="invisible absolute left-0 top-[calc(100%-2px)] z-20 w-52 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100">
                    <div className="absolute -top-2 left-0 h-2 w-full" aria-hidden />
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-[var(--surface)] shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)]">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[var(--orange)]"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/79386903838"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--green)] bg-[var(--green)]/10 p-2 text-[var(--green)] transition hover:border-[var(--green)]/80 hover:bg-[var(--green)]/15"
              aria-label="Написать в WhatsApp"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12.04 2a9.93 9.93 0 0 0-8.46 14.98L2 22l5.18-1.53A9.93 9.93 0 1 0 12.04 2Zm5.93 14.1c-.25.7-1.44 1.33-2 1.4-.52.08-1.19.11-1.93-.12-.44-.14-1-.33-1.72-.64-3.02-1.31-4.98-4.36-5.13-4.57-.15-.21-1.22-1.62-1.22-3.09 0-1.47.77-2.19 1.04-2.49.27-.3.59-.38.79-.38.2 0 .4 0 .57.01.18.01.43-.07.68.52.25.6.85 2.07.93 2.22.08.15.14.33.03.54-.11.21-.16.33-.32.5-.15.17-.34.38-.48.51-.16.16-.32.33-.14.65.19.32.83 1.36 1.78 2.2 1.22 1.08 2.24 1.42 2.56 1.58.32.16.5.14.69-.09.19-.23.8-.93 1.02-1.25.22-.32.43-.27.72-.16.29.11 1.85.87 2.17 1.03.32.16.53.24.61.37.08.13.08.76-.17 1.45Z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-white/30 hover:bg-white/10"
              aria-label="Открыть Instagram"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>
          </div>
          <svg
            className="h-5 w-5 text-[var(--orange)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.11 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.81.37 1.59.73 2.32a2 2 0 0 1-.45 2.18L9 11a16 16 0 0 0 6 6l1.78-1.38a2 2 0 0 1 2.18-.45c.73.36 1.51.61 2.32.73A2 2 0 0 1 22 16.92Z" />
          </svg>
          <a
            href="tel:+79386903838"
            className="text-[var(--orange)] transition hover:opacity-80"
          >
            +7 (938) 690-38-38
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="https://wa.me/79386903838"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--green)] bg-[var(--green)]/10 p-2 text-[var(--green)] transition hover:border-[var(--green)]/80 hover:bg-[var(--green)]/15"
            aria-label="Написать в WhatsApp"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12.04 2a9.93 9.93 0 0 0-8.46 14.98L2 22l5.18-1.53A9.93 9.93 0 1 0 12.04 2Zm5.93 14.1c-.25.7-1.44 1.33-2 1.4-.52.08-1.19.11-1.93-.12-.44-.14-1-.33-1.72-.64-3.02-1.31-4.98-4.36-5.13-4.57-.15-.21-1.22-1.62-1.22-3.09 0-1.47.77-2.19 1.04-2.49.27-.3.59-.38.79-.38.2 0 .4 0 .57.01.18.01.43-.07.68.52.25.6.85 2.07.93 2.22.08.15.14.33.03.54-.11.21-.16.33-.32.5-.15.17-.34.38-.48.51-.16.16-.32.33-.14.65.19.32.83 1.36 1.78 2.2 1.22 1.08 2.24 1.42 2.56 1.58.32.16.5.14.69-.09.19-.23.8-.93 1.02-1.25.22-.32.43-.27.72-.16.29.11 1.85.87 2.17 1.03.32.16.53.24.61.37.08.13.08.76-.17 1.45Z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-white/30 hover:bg-white/10"
            aria-label="Открыть Instagram"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="tel:+79386903838"
            className="rounded-full border border-white/10 bg-white/5 p-2 text-[var(--orange)] transition hover:border-white/30 hover:bg-white/10"
            aria-label="Позвонить"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.11 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.81.37 1.59.73 2.32a2 2 0 0 1-.45 2.18L9 11a16 16 0 0 0 6 6l1.78-1.38a2 2 0 0 1 2.18-.45c.73.36 1.51.61 2.32.73A2 2 0 0 1 22 16.92Z" />
            </svg>
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-white hover:bg-white/5"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="fixed inset-0 top-16 z-40 bg-black/60 backdrop-blur-sm" />
          <div className="fixed inset-x-0 top-16 z-50 border-b border-white/10 bg-[var(--bg)]">
            <div className="container mx-auto px-4 py-6">
              <nav
                aria-label="Мобильная навигация"
                className="flex flex-col space-y-4 text-base"
              >
                {navItems.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block font-medium ${
                        activePath === item.href
                          ? "text-[var(--orange)]"
                          : "text-white hover:text-[var(--orange)]"
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="space-y-2 border-l border-white/10 pl-4">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="block text-white/75 transition hover:text-[var(--orange)]"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="mt-4 border-t border-white/10 pt-4">
                  <div className="mb-3 flex items-center gap-3">
                    <a
                      href="https://wa.me/79386903838"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[var(--green)] bg-[var(--green)]/10 p-2 text-[var(--green)] transition hover:border-[var(--green)]/80 hover:bg-[var(--green)]/15"
                      aria-label="Написать в WhatsApp"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M12.04 2a9.93 9.93 0 0 0-8.46 14.98L2 22l5.18-1.53A9.93 9.93 0 1 0 12.04 2Zm5.93 14.1c-.25.7-1.44 1.33-2 1.4-.52.08-1.19.11-1.93-.12-.44-.14-1-.33-1.72-.64-3.02-1.31-4.98-4.36-5.13-4.57-.15-.21-1.22-1.62-1.22-3.09 0-1.47.77-2.19 1.04-2.49.27-.3.59-.38.79-.38.2 0 .4 0 .57.01.18.01.43-.07.68.52.25.6.85 2.07.93 2.22.08.15.14.33.03.54-.11.21-.16.33-.32.5-.15.17-.34.38-.48.51-.16.16-.32.33-.14.65.19.32.83 1.36 1.78 2.2 1.22 1.08 2.24 1.42 2.56 1.58.32.16.5.14.69-.09.19-.23.8-.93 1.02-1.25.22-.32.43-.27.72-.16.29.11 1.85.87 2.17 1.03.32.16.53.24.61.37.08.13.08.76-.17 1.45Z" />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-white/30 hover:bg-white/10"
                      aria-label="Открыть Instagram"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                      </svg>
                    </a>
                  </div>
                  <a
                    href="tel:+79386903838"
                    className="flex items-center gap-3 text-lg font-semibold text-[var(--orange)]"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.11 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.81.37 1.59.73 2.32a2 2 0 0 1-.45 2.18L9 11a16 16 0 0 0 6 6l1.78-1.38a2 2 0 0 1 2.18-.45c.73.36 1.51.61 2.32.73A2 2 0 0 1 22 16.92Z" />
                    </svg>
                    +7 (938) 690-38-38
                  </a>
                  <p className="mt-1 text-sm text-white/60">
                    Ежедневно с 9:00 до 21:00
                  </p>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
