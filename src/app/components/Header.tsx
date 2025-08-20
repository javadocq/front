"use client";

import useTheme from "next-theme";
import Logo from "../../icons/header/logo.svg";
import ToggleDark from "../../icons/header/toggle_light.svg";
import ToggleLight from "../../icons/header/toggle_dark.svg";
import Link from "next/link";
import { useState } from "react";
import Dark from "../../icons/header/darkMode_moon.svg";
import Light from "../../icons/header/lightMode_sun.svg";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <nav className="fixed z-50 flex w-screen box-border border-b-2 px-10 justify-between items-center h-20 bg-white dark:bg-black">
      <div className="flex gap-3 items-center w-2/4">
        <Link href="/">
          <Logo />
        </Link>
        <Link href="/" className="text-xl max-[416px]:hidden">
          JAVADOCQ_BLOG
        </Link>
      </div>
      <div className="flex gap-6">
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Light /> : <Dark />}
        </button>
        {/* max-lg:hidden : 화면이 1024px 미만 일때 안 보이게 하기 */}
        <div className="max-lg:hidden flex items-center text-lg gap-6">
          <Link href="/project" className="hover:text-customBlue">
            PROJECT
          </Link>
          <Link href="/blog" className="hover:text-customBlue">
            BLOG
          </Link>
          <Link href="/community" className="hover:text-customBlue">
            COMMUNITY
          </Link>
        </div>
        {/* lg:hiddne : 화면이 1024px 이상 일때 안 보이게 하기 */}
        <div className="lg:hidden flex gap-6 items-center text-2xl relative h-20 cursor-pointer">
          {theme === "dark" ? (
            <ToggleLight onClick={() => setToggle(!toggle)} />
          ) : (
            <ToggleDark onClick={() => setToggle(!toggle)} />
          )}
        </div>
        {/* lg:hiddne : 화면이 1024px 이상 일때 안 보이게 하기 */}
        {toggle ? (
          <ul className="lg:hidden flex flex-col box-border border-[2px] border-black tetext-xl fixed top-24 right-5 items-center gap-2 box-border border-4 px-4 py-2 z-10 bg-lightBg dark:bg-darkBg">
            <button
              type="button"
              onClick={() => setToggle(false)}
              className="hover:text-customBlue"
            >
              <Link href="/project">PROJECT</Link>
            </button>
            <button
              type="button"
              onClick={() => setToggle(false)}
              className="hover:text-customBlue"
            >
              <Link href="/blog">BLOG</Link>
            </button>
            <button
              type="button"
              onClick={() => setToggle(false)}
              className="hover:text-customBlue"
            >
              <Link href="/community">COMMUNITY</Link>
            </button>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}
