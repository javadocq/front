"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function MainProjectView() {
  const [projectImg, setProjectImg] = useState<string[]>([]);

  useEffect(() => {
    handleProjectGet();
  }, []);

  const handleProjectGet = async () => {
    const response = await axios.get("/api/projects");
    setProjectImg((prev) => [
      ...prev,
      ...response.data.map((project: { img: string }) => project.img),
    ]);
  };
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
          autoplay={{ delay: 100, disableOnInteraction: false }}
          loop={projectImg.length > 3}
          speed={2000}
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
