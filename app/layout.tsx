import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
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
  title: "Архитектурное проектирование и дизайн | Art HomeDom",
  description:
    "Архитектурное проектирование, архитектурный дизайн и авторский надзор: проекты частных домов, рабочая документация и контроль реализации без сюрпризов на стройке.",
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
        <Header />
        <main className="min-h-screen bg-[var(--bg)] pt-12 text-[var(--text)] lg:pt-18">
          {children}
        </main>
      </body>
    </html>
  );
}
