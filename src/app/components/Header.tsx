// React Hook을 사용하기 위해 import
"use client";

import Image from "next/image";
import useTheme from "next-theme";
import Logo from "@/../public/logo.svg";
import ToggleDark from "@/../public/toggle_light.svg";
import ToggleLight from "@/../public/toggle_dark.svg";
import Link from "next/link";
import { useState } from "react";
import Dark from "@/../public/darkMode_moon.svg";
import Light from "@/../public/lightMode_sun.svg";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <nav className="flex w-screen box-border border-b-2 px-10 justify-between items-center h-20">
      <div className="flex gap-3 items-center w-2/4">
        <Link href="/">
          <Image src={Logo} alt="로고" />
        </Link>
        <Link href="/" className="text-xl max-[416px]:hidden">
          JAVADOCQ_BLOG
        </Link>
      </div>
      <div className="flex gap-6">
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? (
            <Image src={Light} alt="라이트모드" />
          ) : (
            <Image src={Dark} alt="다크모드" />
          )}
        </button>
        {/* max-lg:hidden : 화면이 1024px 미만 일때 안 보이게 하기 */}
        <div className="max-lg:hidden flex items-center text-lg gap-6">
          <Link href="/project" className="hover:text-customBlue">
            PROJECT
          </Link>
          <Link href="/blog" className="hover:text-customBlue">
            BLOG
          </Link>
          <Link href="/about" className="hover:text-customBlue">
            ABOUT
          </Link>
          <Link href="/community" className="hover:text-customBlue">
            COMMUNITY
          </Link>
        </div>
        {/* lg:hiddne : 화면이 1024px 이상 일때 안 보이게 하기 */}
        <div className="lg:hidden flex gap-6 items-center text-2xl relative h-20 cursor-pointer">
          {theme === "dark" ? (
            <Image
              src={ToggleLight}
              alt="토글 라이트"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <Image
              src={ToggleDark}
              alt="토글 다크"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
        {/* lg:hiddne : 화면이 1024px 이상 일때 안 보이게 하기 */}
        {toggle ? (
          <ul className="lg:hidden flex flex-col text-xl fixed top-24 right-5 items-center gap-2 box-border border-4 px-4 py-2 z-10 bg-gray-400">
            <li
              onClick={() => setToggle(false)}
              className="hover:text-customBlue"
            >
              <Link href="/project">PROJECT</Link>
            </li>
            <li
              onClick={() => setToggle(false)}
              className="hover:text-customBlue"
            >
              <Link href="/blog">BLOG</Link>
            </li>
            <li
              onClick={() => setToggle(false)}
              className="hover:text-customBlue"
            >
              <Link href="/about">ABOUT</Link>
            </li>
            <li
              onClick={() => setToggle(false)}
              className="hover:text-customBlue"
            >
              <Link href="/community">COMMUNITY</Link>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}
