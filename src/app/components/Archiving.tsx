"use client";

import GithubWhite from "../../icons/main/github-mark.svg";
import GithubBlack from "../../icons/main/github-mark-white.svg";
import NoteStackWhite from "../../icons/main/note_stack_white.svg";
import NoteStackBlack from "../../icons/main/note_stack_black.svg";
import useTheme from "next-theme";
import Link from "next/link";

export default function Archiving() {
  const { theme } = useTheme();
  return (
    <div className="w-screen h-full flex flex-col items-center pb-[250px]">
      <strong className="text-[35px] text-black dark:text-white mt-[92px] max-[450px]:text-[30px]">
        ARCHIVING
      </strong>
      <div className="flex gap-[14px] mt-[104px] max-[450px]:flex-col max-[450px]:mt-[40px]">
        <div className="flex flex-col gap-[15px] w-[400px] max-[450px]:w-[300px] h-[242px] rounded-[10px] bg-lightBg dark:bg-darkBg pt-[23px] pl-[32px]">
          {theme === "light" ? (
            <GithubWhite width={70} height={70} />
          ) : (
            <GithubBlack width={70} height={70} />
          )}
          <strong className="text-[35px] font-bold">GITHUB</strong>
          <Link
            href="https://github.com/javadocq"
            className="text-[20px] mt-[22px] max-[450px]:text-[15px]"
          >
            https://github.com/javadocq
          </Link>
        </div>
        <div className="flex flex-col gap-[15px] w-[400px] max-[450px]:w-[300px] h-[242px] rounded-[10px] bg-lightBg dark:bg-darkBg pt-[23px] pl-[32px]">
          {theme === "light" ? (
            <NoteStackWhite width={70} height={70} />
          ) : (
            <NoteStackBlack width={70} height={70} />
          )}
          <strong className="text-[35px] font-bold">VELOG</strong>
          <Link
            href="https://velog.io/@javadocq/posts"
            className="text-[20px] mt-[22px] max-[450px]:text-[15px]"
          >
            https://velog.io/@javadocq/posts
          </Link>
        </div>
      </div>
    </div>
  );
}
