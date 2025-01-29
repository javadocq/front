"use client";

import Image from "next/image";
import Github_White from "@/../../public/main/github-mark.svg";
import Github_Black from "@/../../public/main/github-mark-white.svg";
import Note_Stack_White from "@/../../public/main/note_stack_white.svg";
import Note_Stack_Black from "@/../../public/main/note_stack_black.svg";
import useTheme from "next-theme";
import Link from "next/link";

export default function Archiving() {
  const { theme } = useTheme();
  return (
    <div className="w-screen h-full flex flex-col items-center pb-[95px]">
      <strong className="text-[35px] text-black dark:text-white mt-[92px] max-[450px]:text-[30px]">
        ARCHIVING
      </strong>
      <div className="flex gap-[14px] mt-[104px] max-[450px]:flex-col max-[450px]:mt-[40px]">
        <div className="flex flex-col gap-[15px] w-[400px] max-[450px]:w-[300px] h-[242px] rounded-[10px] bg-lightBg dark:bg-darkBg pt-[23px] pl-[32px]">
          {theme === "light" ? (
            <Image src={Github_White} alt="깃허브" width={70} height={70} />
          ) : (
            <Image src={Github_Black} alt="깃허브" width={70} height={70} />
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
            <Image src={Note_Stack_White} alt="벨로그" width={70} height={70} />
          ) : (
            <Image src={Note_Stack_Black} alt="벨로그" width={70} height={70} />
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
