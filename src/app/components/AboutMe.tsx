import Image from "next/image";
import Profile from "../../../public/main/profile.svg";

export default function AboutMe() {
  return (
    <div className="w-screen h-full flex justify-center items-center mt-[203px]">
      <div className="flex flex-col justify-start mr-[120px]">
        <Image src={Profile} alt="프로필" width={250} height={250} />
        <strong className="text-[40px] font-bold text-black dark:text-white mt-[45px]">
          이종원
        </strong>
        <div className="w-[245px] h-[1px] bg-black dark:bg-white mt-[25px]"></div>
        <p className="mt-[14px] text-[20px]">LEE JONGWON</p>
      </div>
      <div className="w-[1px] h-[752px] bg-black dark:bg-white"></div>
      <div className="flex flex-col ml-[56px] text-[20px]">
        <div>
          <strong className="text-[25px] text-black dark:text-white font-bold">
            Education
          </strong>
          <div className="flex mt-[20px]">
            <div className="flex flex-col gap-[16px] w-[208px]">
              <p>2019.02</p>
              <p>2023. 03 ~ ing</p>
            </div>
            <div className="flex flex-col gap-[16px] ml-[31px]">
              <p>서울공업고등학교 졸업</p>
              <p>한양대 에리카 컴퓨터학부 재학</p>
            </div>
          </div>
        </div>
        <div className="mt-[61px]">
          <strong className="text-[25px] text-black dark:text-white font-bold">
            Awards History
          </strong>
          <div className="flex mt-[20px]">
            <div className="flex flex-col gap-[16px] w-[208px]">
              <p>2024. 12</p>
            </div>
            <div className="flex flex-col gap-[16px] ml-[31px]">
              <p>HY-THONE 대상</p>
            </div>
          </div>
        </div>
        <div className="mt-[65px]">
          <strong className="text-[25px] text-black dark:text-white font-bold">
            Activity
          </strong>
          <div className="flex mt-[20px]">
            <div className="flex flex-col gap-[16px] w-[208px]">
              <p>2020. 03 ~ 2020.09</p>
              <p>2024. 03 ~ 2024.12</p>
              <p>2024. 01 ~ ing</p>
            </div>
            <div className="flex flex-col gap-[16px] ml-[31px]">
              <p>ICT 보안 엔지니어 과정 수료 (KGITBANK)</p>
              <p>멋쟁이사자처럼 대학 12기 프론트엔드 수료</p>
              <p>멋쟁이사자처럼 대학 13기 대표</p>
            </div>
          </div>
        </div>
        <div className="mt-[53px]">
          <strong className="text-[25px] text-black dark:text-white font-bold">
            Skills
          </strong>
          <div className="flex mt-[20px]">
            <div className="flex flex-col gap-[16px] w-[208px]">
              <p>FRONT</p>
              <p>BACK</p>
              <p>DevOps/Deployment</p>
            </div>
            <div className="flex flex-col gap-[16px] ml-[31px]">
              <p>React, TypeScript, Next.js</p>
              <p>Django, Spring Boot</p>
              <p>AWS(S3, EC2), Vercel, Netlify, Cloudtype</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
