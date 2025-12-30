import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import FurnitureSection from "@/components/FurnitureSection";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Архитектурное проектирование и дизайн | HomeDom",
    template: "%s | HomeDom",
  },
  description:
    "HomeDom — архитектурное бюро полного цикла: архитектурный проект, дизайн интерьера и экстерьера, ландшафт, рабочие чертежи, авторский надзор и комплектация под ключ.",
  keywords: [
    "HomeDom",
    "Art Homedom",
    "архитектурная компания",
    "архитектурное бюро",
    "студия дизайна интерьера",
    "ландшафтная студия",
    "дизайн-проект интерьера",
    "рабочие чертежи",
    "архитектурный проект дома",
    "проект фасадов",
    "проект входной группы",
    "ландшафтный дизайн",
    "проект благоустройства",
    "авторский надзор",
    "комплектация",
    "квартира",
    "апартаменты",
    "частный дом",
    "коттедж",
    "таунхаус",
    "офис",
    "магазин",
    "шоурум",
    "ресторан",
    "кафе",
    "салон красоты",
    "клиника",
    "склад",
    "производство",
    "многоквартирный дом",
    "двор МКД",
    "парк",
    "сквер",
    "набережная",
    "водоём",
    "пруд",
    "озеро",
    "обмерный план",
    "планировка",
    "зонирование",
    "план демонтажа",
    "план монтажа",
    "план полов",
    "план потолков",
    "развертки стен",
    "узлы и детали",
    "спецификации",
    "ведомости материалов",
    "электрика",
    "слаботочные системы",
    "сантехника",
    "отопление",
    "тёплый пол",
    "вентиляция",
    "кондиционирование",
    "генеральный план благоустройства",
    "вертикальная планировка",
    "дренаж",
    "ливневая канализация",
    "автополив",
    "озеленение",
    "дендроплан",
    "план мощения",
    "освещение территории",
    "МАФ",
    "подпорные стенки",
    "террасы",
    "лестницы",
    "фасадные решения",
    "козырёк",
    "витражи",
    "витрины",
    "входной портал",
    "пандус",
    "доступность МГН",
    "подсветка фасада",
    "вывеска",
    "навигация",
    "современный стиль",
    "минимализм",
    "скандинавский стиль",
    "неоклассика",
    "лофт",
    "modern",
    "contemporary",
    "заказать дизайн-проект",
    "заказать рабочие чертежи",
    "архитектурный проект под ключ",
    "стоимость проектирования",
    "цена дизайн-проекта",
  ],
  openGraph: {
    title: "Архитектурное проектирование и дизайн | HomeDom",
    description:
      "HomeDom — архитектурное бюро полного цикла: архитектурный проект, дизайн интерьера и экстерьера, ландшафт, рабочие чертежи, авторский надзор и комплектация под ключ.",
    url: "https://homedom.shop",
    siteName: "HomeDom",
    locale: "ru_RU",
    type: "website",
  },
  alternates: {
    canonical: "https://homedom.shop",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Script
          id="organization-ldjson"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Art Homedom",
              legalName: "ИП Кабардоков Аслан Ратмирович",
              url: "https://homedom.shop",
              telephone: "+7 (938) 690-38-38",
              email: "info@homedom.shop",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Нальчик",
                addressRegion: "Кабардино-Балкарская Республика",
                addressCountry: "RU",
              },
              taxID: "070502631283",
              foundingDate: "2024-10-02",
              knowsAbout: [
                "архитектурный проект",
                "дизайн-проект интерьера",
                "рабочие чертежи",
                "ландшафтный дизайн",
                "проект фасадов",
                "проект входной группы",
                "авторский надзор",
                "комплектация",
              ],
              areaServed: ["Нальчик", "Кабардино-Балкарская Республика", "Россия"],
              sameAs: ["https://instagram.com", "https://wa.me/79386903838"],
              serviceType: [
                "архитектурное проектирование частных домов",
                "дизайн интерьера квартир и коммерции",
                "ландшафтное проектирование",
                "рабочая документация",
                "проект фасадов и входных групп",
              ],
              logo: "https://homedom.shop/logo.png",
              identifier: [
                {
                  "@type": "PropertyValue",
                  name: "ОГРНИП",
                  value: "324070000043021",
                },
              ],
            }),
          }}
        />
        <Header />
        <main className="min-h-screen bg-[var(--bg)] pt-12 text-[var(--text)] lg:pt-18">
          {children}
          <FurnitureSection />
          <Footer />
        </main>
      </body>
    </html>
  );
}
