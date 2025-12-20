делаем сайт для архитектурной дизайн студии Homedom , сайт должен быть стильным и современным, 
Отлично! Вот промт для создания современной фиксированной шапки с учётом нашего премиум-стиля.

---

**PROMPT ДЛЯ CODEX — ШАПКА (HEADER)**

Создай компонент Header для сайта архитектурного бюро "HOME DOM". Шапка должна быть стильной, фиксированной и содержать навигацию по сайту.

**Технические требования:**
- Используй Next.js 14 и Tailwind CSS.
- Сделай компонент клиентским (`'use client'`), так как будет состояние для мобильного меню.
- Шапка должна быть фиксированной (`fixed` или `sticky`) сверху, с полупрозрачным тёмным фоном и эффектом блюра.
- На десктопе — горизонтальное меню, на мобиле — бургер-меню.
- Цвета: фон `bg-[var(--bg)]/90`, текст белый, акцент оранжевый.

**Структура:**
1. **Контейнер:** `container mx-auto px-4` внутри `header`
2. **Логотип слева:** Текст "HOME DOM" с подписью "Архитектурное бюро"
3. **Навигация по центру (десктоп):**
   - Главная
   - Услуги (выпадающее меню: Дизайн-проект, Ремонт под ключ, Авторский надзор)
   - Портфолио
   - Процесс
   - Блог
   - Контакты
4. **Контактный телефон справа (десктоп):** С иконкой телефона, оранжевым цветом
5. **Бургер-меню справа (мобиль):** Иконка из трёх полосок, при клике открывает полноэкранное меню

**Стили и поведение:**
- Фон: `bg-[var(--bg)]/90 backdrop-blur-sm border-b border-white/10`
- Высота: `h-20` (десктоп), `h-16` (мобиль)
- Логотип: жирный шрифт, белый цвет
- Навигационные ссылки: белый цвет, при ховере — оранжевый, плавный переход
- Активная ссылка: оранжевый цвет + тонкое подчёркивание
- Выпадающее меню "Услуги": появляется при ховере, фон `surface`, тень, скругление
- Телефон: иконка, оранжевый цвет `text-[var(--orange)]`, жирный шрифт
- Бургер-меню: иконка из трёх полос (используй SVG или CSS)
- Мобильное меню: открывается на весь экран, тёмный фон, анимация появления, содержит все пункты навигации и телефон

**SEO и доступность:**
- Используй семантические теги (`<header>`, `<nav>`)
- Добавь `aria-label` для навигации
- Для ссылок используй компонент `Link` из `next/link`

**Код компонента:**
```tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Главная', href: '/' },
    { 
      name: 'Услуги', 
      href: '/services',
      submenu: [
        { name: 'Дизайн-проект', href: '/services/design' },
        { name: 'Ремонт под ключ', href: '/services/repair' },
        { name: 'Авторский надзор', href: '/services/supervision' },
        { name: 'Световые решения', href: '/services/lighting' },
      ]
    },
    { name: 'Портфолио', href: '/portfolio' },
    { name: 'Процесс', href: '/process' },
    { name: 'Блог', href: '/blog' },
    { name: 'Контакты', href: '/contacts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/90 backdrop-blur-sm border-b border-white/10 h-20">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Логотип */}
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold text-white tracking-tight">HOME DOM</span>
          <span className="text-xs text-white/60 mt-1">Архитектурное бюро</span>
        </Link>

        {/* Десктопная навигация */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Основная навигация">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className={`flex items-center gap-1 py-2 transition-colors ${
                  pathname === item.href || pathname.startsWith(item.href + '/')
                    ? 'text-[var(--orange)]'
                    : 'text-white hover:text-[var(--orange)]'
                }`}
              >
                {item.name}
                {item.submenu && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              
              {/* Выпадающее меню для Услуг */}
              {item.submenu && (
                <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-[var(--surface)] rounded-lg shadow-xl border border-white/10 py-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-white hover:bg-white/5 hover:text-[var(--orange)] transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Телефон (десктоп) */}
        <div className="hidden lg:flex items-center gap-2">
          <svg className="w-5 h-5 text-[var(--orange)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a href="tel:+78001234567" className="text-[var(--orange)] font-semibold hover:opacity-80 transition-opacity">
            8 (800) 123-45-67
          </a>
        </div>

        {/* Бургер-меню (мобиль) */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-[var(--bg)] border-b border-white/10 animate-slideDown">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4" aria-label="Мобильная навигация">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block py-3 text-lg ${
                      pathname === item.href
                        ? 'text-[var(--orange)] font-semibold'
                        : 'text-white hover:text-[var(--orange)]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2 border-l border-white/10 pl-4">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-2 text-white/80 hover:text-[var(--orange)]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Телефон в мобильном меню */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <a href="tel:+78001234567" className="flex items-center gap-3 text-[var(--orange)] font-semibold text-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  8 (800) 123-45-67
                </a>
                <p className="text-white/60 text-sm mt-2">Ежедневно с 9:00 до 21:00</p>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
```

**Дополнительные инструкции для Codex:**
- Добавь анимацию `slideDown` в `tailwind.config.js` или в глобальные стили
- Убедись, что компонент корректно импортируется в `layout.tsx`
- Проверь, что мобильное меню закрывается при клике на ссылку
- Добавь отступ `pt-20` к первому блоку на странице, чтобы контент не скрывался под фиксированной шапкой

---

**Что дальше:**
1. Скопируй этот промт в Codex для генерации компонента Header
2. Добавь компонент в `app/layout.tsx` (внутри `<body>`)
3. Проверь работу в браузере — шапка должна быть фиксированной, меню работать
art-desing.su ' это название нашей компании 