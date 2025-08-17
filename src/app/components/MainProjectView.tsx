"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

export default function MainProjectView() {
  const projectImg: string[] = [
    "/project/hylight.png",
    "/project/ericalion.png",
    "/project/blog.png",
    "/project/indiflow.png",
    "/project/whenWeWillMeet.png",
  ];
  return (
    <div className="w-screen h-full flex flex-col items-center mt-[190px]">
      <strong className="text-[35px] font-bold text-black dark:text-white max-[450px]:text-[30px]">
        PROJECT PREVIEW
      </strong>
      <div className="w-[1350px] max-[450px]:w-[310px] rounded-[5px] flex items-center justify-center mt-[62px]">
        <Swiper
          className="w-full h-full"
          spaceBetween={50}
          slidesPerView={3}
          modules={[Autoplay]}
          autoplay={{ delay: 100, disableOnInteraction: false }} // 유저가 터치/드래그해도 계속 자동재생
          loop //반복 재생
          speed={2000} //속도 조절
        >
          {projectImg.map((img, index) => (
            <SwiperSlide key={index} className="h-full">
              <Link
                className="w-full h-full flex items-center justify-center"
                href={`/project`}
              >
                <Image
                  src={img}
                  alt={`메인 프로젝트 ${index + 1}`}
                  width={600}
                  height={300}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg dark:shadow-black/60"
                  priority={index === 0}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
