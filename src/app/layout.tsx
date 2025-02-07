"use client";

import { ThemeProvider } from "next-theme";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";

const variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pretendard = localFont({
  src: "../../public/font/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    if (theme) {
      document.documentElement.className = theme;
    } else {
      document.documentElement.className = "dark";
      window.localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Favicon 설정 */}
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />

        {/* SEO 기본 메타태그 */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="JAVADOCQ의 개인 블로그입니다." />
        <meta property="og:title" content="JAVADOCQ_BLOG" />
        <meta
          property="og:description"
          content="JAVADOCQ의 개인 블로그입니다."
        />
        <meta property="og:image" content="/main/MainProject.png" />

        <title>JAVADOCQ_BLOG</title>
      </head>
      <body
        className={`${pretendard.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class">
          <Header />
          {/* 자식 컴포넌트가 마운트 되거나 언마운트될 때 애니메이션 처리 */}
          <AnimatePresence>
            <motion.div
              key={pathname} // 현재 경로가 변경되면 새로운 key가 적용
              variants={variants}
              initial="hidden"
              animate="enter"
              transition={{ type: "tween", duration: 1 }}
            >
              {children}
              <Analytics />
            </motion.div>
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}
