import Image from "next/image";
import MainProject from "@/../../public/main/MainProject.png";

export default function MainProjectView() {
  return (
    <div className="w-screen h-full flex flex-col items-center mt-[190px]">
      <strong className="text-[35px] font-bold text-black dark:text-white max-[450px]:text-[30px]">
        PROJECT PREVIEW
      </strong>
      <div className="w-[1350px] max-[450px]:w-[310px] h-[700px] max-[450px]:h-[200px] rounded-[5px] bg-lightBg dark:bg-darkBg flex items-center justify-center mt-[62px]">
        <Image
          src={MainProject}
          alt="메인 프로젝트"
          width={1300}
          height={650}
        />
      </div>
    </div>
  );
}
