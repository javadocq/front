"use client";

import { ThemeProvider } from "next-theme";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThreeScene from "./components/ThreeScene";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [inState, setInState] = useState<boolean>(false);

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {inState ? (
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
              </motion.div>
            </AnimatePresence>
          </ThemeProvider>
        ) : (
          <div className="relative">
            <ThreeScene />
            <div className="absolute bottom-56 left-0 right-0 flex justify-center">
              <button
                className="bg-zinc-800 box-border transition-transform duration-300 flex items-center justify-center w-56 h-16 rounded-lg mt-10 text-white text-2xl hover:scale-110"
                onClick={() => setInState(true)}
              >
                들어가기
              </button>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
