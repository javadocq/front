"use client";

import Profile from "../assets/icons/main/profile.svg";
import { ABOUT_ME_DATA } from "../constant/about/ABOUT_ME_DATA";

export default function AboutMe() {
  return (
    <div className="w-screen  h-full flex max-[450px]:flex-col justify-center items-center mt-[203px] max-[450px]:mt-[100px]">
      <div className="flex flex-col justify-start mr-[120px] max-[450px]:mr-[0px]">
        <Profile />
        <strong className="text-[40px] font-bold text-black dark:text-white mt-[45px]">
          이종원
        </strong>
        <div className="w-[245px] h-[1px] bg-black dark:bg-white mt-[25px]"></div>
        <p className="mt-[14px] text-[20px]">LEE JONGWON</p>
      </div>
      <div className="w-[1px] h-[752px] bg-black dark:bg-white max-[450px]:hidden"></div>
      <div className="flex flex-col ml-[56px] text-[20px] max-[450px]:ml-[1%] max-[450px]:mt-[40px] max-[450px]:text-[10px]">
        <div>
          <strong className="text-[25px] text-black dark:text-white font-bold">
            Education
          </strong>
          <div className="flex mt-[20px]">
            <div className="flex flex-col gap-[16px] w-[208px] max-[450px]:w-[148px]">
              {ABOUT_ME_DATA[0].data.map((item, index) => {
                return <p key={`${item.date}-${index}`}>{item.date}</p>;
              })}
            </div>
            <div className="flex flex-col gap-[16px] ml-[31px] max-[450px]:ml-[-15px]">
              {ABOUT_ME_DATA[0].data.map((item, index) => {
                return <p key={`${item.date}-${index}`}>{item.content}</p>;
              })}
            </div>
          </div>
        </div>
        <div className="mt-[61px]">
          <strong className="text-[25px] text-black dark:text-white font-bold">
            Awards History
          </strong>
          <div className="flex mt-[20px]">
            <div className="flex flex-col gap-[16px] w-[208px] max-[450px]:w-[148px]">
              {ABOUT_ME_DATA[1].data.map((item, index) => {
                return <p key={`${item.date}-${index}`}>{item.date}</p>;
              })}
            </div>
            <div className="flex flex-col gap-[16px] ml-[31px] max-[450px]:ml-[-15px]">
              {ABOUT_ME_DATA[1].data.map((item, index) => {
                return <p key={`${item.date}-${index}`}>{item.content}</p>;
              })}
            </div>
          </div>
        </div>
        <div className="mt-[65px]">
          <strong className="text-[25px] text-black dark:text-white font-bold">
            Activity
          </strong>
          <div className="flex mt-[20px]">
            <div className="flex flex-col gap-[16px] w-[208px] max-[450px]:w-[148px] max-[450px]:whitespace-nowrap">
              {ABOUT_ME_DATA[2].data.map((item, index) => {
                return <p key={`${item.date}-${index}`}>{item.date}</p>;
              })}
            </div>
            <div className="flex flex-col gap-[16px] ml-[31px] max-[450px]:ml-[-15px]">
              {ABOUT_ME_DATA[2].data.map((item, index) => {
                return <p key={`${item.date}-${index}`}>{item.content}</p>;
              })}
            </div>
          </div>
        </div>
        <div className="mt-[53px]">
          <strong className="text-[25px] text-black dark:text-white font-bold">
            Skills
          </strong>
          <div className="flex mt-[20px]">
            <div className="flex flex-col gap-[16px] w-[208px] max-[450px]:w-[148px]">
              {ABOUT_ME_DATA[3].data.map((item, index) => {
                return <p key={`${item.part}-${index}`}>{item.part}</p>;
              })}
            </div>
            <div className="flex flex-col gap-[16px] ml-[31px] max-[450px]:ml-[-15px]">
              {ABOUT_ME_DATA[3].data.map((item, index) => {
                return <p key={`${item.part}-${index}`}>{item.content}</p>;
              })}
            </div>
          </div>
        </div>
        <div className="mt-[53px]">
          <strong className="text-[25px] text-black dark:text-white font-bold">
            Qualifications
          </strong>
          <div className="flex mt-[20px]">
            <div className="flex flex-col gap-[16px] w-[208px] max-[450px]:w-[148px]">
              {ABOUT_ME_DATA[4].data.map((item, index) => {
                return <p key={`${item.content}-${index}`}>{item.content}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
