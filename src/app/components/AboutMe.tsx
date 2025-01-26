import Image from "next/image";
import Link from "next/link";

interface ThemeProp {
  theme: string;
}

export default function AboutMe({ theme }: ThemeProp) {
  return (
    <div className="mt-24 w-10/12 flex grid grid-cols-4 gap-20 max-[1300px]:grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 max-[600px]:w-full max-[600px]: justify-items-center">
      <div className="box-border border-1 w-64 h-56 rounded-lg flex flex-col items-center bg-zinc-100 dark:bg-darkBg">
        {theme === "light" ? (
          <Image
            src="/about/icon_name.svg"
            alt="이름"
            width={50}
            height={50}
            className="mt-10"
          />
        ) : (
          <Image
            src="/about/icon_name_dark.svg"
            alt="이름"
            width={50}
            height={50}
            className="mt-10"
          />
        )}
        <p className="mt-6 text-2xl font-bold">이종원</p>
      </div>
      <div className="box-border border-1 w-64 h-56 rounded-lg flex flex-col items-center bg-zinc-100 dark:bg-darkBg">
        {theme === "light" ? (
          <Image
            src="/about/icon_calender.svg"
            alt="달력"
            width={50}
            height={50}
            className="mt-10"
          />
        ) : (
          <Image
            src="/about/icon_calender_dark.svg"
            alt="달력"
            width={50}
            height={50}
            className="mt-10"
          />
        )}
        <p className="mt-6 text-2xl font-bold">2000년 6월 5일</p>
      </div>
      <div className="box-border border-1 w-64 h-56 rounded-lg flex flex-col items-center bg-zinc-100 dark:bg-darkBg">
        {theme === "light" ? (
          <Image
            src="/about/icon_mail.svg"
            alt="메일"
            width={50}
            height={50}
            className="mt-10"
          />
        ) : (
          <Image
            src="/about/icon_mail_dark.svg"
            alt="메일"
            width={50}
            height={50}
            className="mt-10"
          />
        )}

        <div className="flex flex-col gap-2 justify-center items-center text-lg mt-4 font-bold">
          <p>whddnjs960@gmail.com</p>
          <p>han18264@naver.com</p>
          <Link href={"https://github.com/javadocq"}>
            깃허브 : github.com/javadocq
          </Link>
        </div>
      </div>
      <div className="box-border border-1 w-64 h-56 rounded-lg flex flex-col items-center bg-zinc-100 dark:bg-darkBg">
        {theme === "light" ? (
          <Image
            src="/about/icon_school.svg"
            alt="학력"
            width={50}
            height={50}
            className="mt-10"
          />
        ) : (
          <Image
            src="/about/icon_school_dark.svg"
            alt="학력"
            width={50}
            height={50}
            className="mt-10"
          />
        )}

        <p className="mt-6 text-xl font-bold">한양대학교 ERICA</p>
        <p className="mt-2 text-xl font-bold">컴퓨터학부</p>
      </div>
    </div>
  );
}
