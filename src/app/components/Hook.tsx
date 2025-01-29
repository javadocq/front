import Link from "next/link";

export default function Hook() {
  return (
    <div className="h-full w-screen">
      <p className="mt-[204px] ml-[186px] font-[200] text-darkBg dark:text-white text-[45px]">
        문제 안에서{" "}
        <strong className="text-black dark:text-white font-[700]">
          가능성
        </strong>
        을 발견하고,
        <br />{" "}
        <strong className="text-black dark:text-white font-[700]">
          해결로 연결
        </strong>
        하며
        <br />
        성장하는 예비 개발자
        <strong className="text-black font-[700] dark:text-white">
          {" "}
          이종원
        </strong>
        입니다
      </p>

      <div className="mt-[180px] ml-[100px]">
        <strong className="mb-[16px] text-[15px] font-bold">CONTACT ME</strong>
        <br />
        <p className="text-black dark:text-white text-[14px] flex flex-col mt-[4px]">
          <Link href="https://www.linkedin.com/in/%EC%A2%85%EC%9B%90-%EC%9D%B4-690349349/">
            LinkedIn
          </Link>
          han18264@naver.com
        </p>
      </div>
    </div>
  );
}
