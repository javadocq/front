// React Hook을 사용하기 위해 import
"use client";

import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Toggle from "../../../public/toggle.svg";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <nav className="flex w-screen box-border border-2 px-10 justify-between items-center h-20">
      <div className="flex gap-3">
        <Image src={Logo} alt="로고" />
        <Link href="/" className="text-2xl  max-md: base">
          JAVADOCQ_BLOG
        </Link>
      </div>
      <div className="flex">
        {/* max-lg:hidden : 화면이 1024px 이하 일때 안 보이게 하기 */}
        <div className="max-lg:hidden flex text-lg gap-6">
          <Link href="/project" className="hover:text-customBlue">
            PROJECT
          </Link>
          <Link href="/blog" className="hover:text-customBlue">
            BLOG
          </Link>
          <Link href="/about" className="hover:text-customBlue">
            ABOUT
          </Link>
          <Link href="/contact" className="hover:text-customBlue">
            CONTACT
          </Link>
          <Link href="/community" className="hover:text-customBlue">
            COMMUNITY
          </Link>
        </div>
        {/* lg:hiddne : 화면이 1024px 이상 일때 안 보이게 하기 */}
        <div
          className="lg:hidden text-2xl relative h-10 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <Image src={Toggle} alt="토글" />
        </div>
        {/* lg:hiddne : 화면이 1024px 이상 일때 안 보이게 하기 */}
        {toggle ? (
          <ul className="lg:hidden flex flex-col text-xl fixed top-24 right-5 items-center gap-2 box-border border-4 px-4 py-2">
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
              <Link href="/contact">CONTACT</Link>
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
