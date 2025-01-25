import Image from "next/image";
import Circle from "@/../public/main/circle.svg";
import Cloud from "@/../public/main/icon_cloud.svg";
import Project from "@/../public/main/icon_project.svg";
import Blog from "@/../public/main/icon_blog.svg";
import Community from "@/../public/main/icon_community.svg";
import About from "@/../public/main/icon_about.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative bg-MainBlue w-screen h-screen flex flex-col items-center justify-center">
        <div className="absolute top-[3%] box-border flex items-center justify-center bg-white w-56 h-16 rounded-lg mt-10 hidden max-[900px]:flex">
          <p className="text-black text-3xl">Main</p>
        </div>
        <Image
          src={Circle}
          alt="원"
          width={600}
          height={600}
          className="w-[45vw] max-[900px]:hidden"
        />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center text-4xl font-bold leading-[3] underline max-[900px]:hidden">
          <p>NOW IS</p>
          <p>THE TIME TO CHANGE</p>
          <p>YOUR LIFE</p>
        </div>
        <Image
          src={Cloud}
          alt="구름"
          width={300}
          height={300}
          className="absolute bottom-[15%] left-[27%] w-[20vw] max-[900px]:hidden"
        />
        <Image
          src={Cloud}
          alt="구름"
          width={300}
          height={300}
          className="absolute top-[15%] right-[25%] w-[20vw] max-[900px]:hidden"
        />
        <Link
          href="/project"
          className="absolute top-[15%] left-[10%] max-[900px]:top-[25%] flex flex-col items-center hover:animate-pulse"
        >
          <p className="text-5xl max-[900px]:text-3xl text-white font-bold">
            Project
          </p>
          <Image
            src={Project}
            alt="프로젝트"
            width={200}
            height={200}
            className="w-[15vw] max-[900px]:w-[28vw]"
          />
        </Link>
        <Link
          href="/about"
          className="absolute bottom-[15%] left-[10%] max-[900px]:top-[25%] max-[900px]:left-[60%] flex flex-col items-center hover:animate-pulse"
        >
          <p className="text-5xl max-[900px]:text-3xl text-white font-bold">
            About
          </p>
          <Image
            src={About}
            alt="어바웃"
            width={150}
            height={150}
            className="w-[15vw] max-[900px]:w-[28vw]"
          />
        </Link>
        <Link
          href="/blog"
          className="absolute top-[15%] right-[7%] max-[900px]:top-[59%] max-[900px]:right-[60%] flex flex-col items-center hover:animate-pulse"
        >
          <p className="text-5xl max-[900px]:text-3xl text-white font-bold">
            Blog
          </p>
          <Image
            src={Blog}
            alt="블로그"
            width={200}
            height={200}
            className="w-[15vw] max-[900px]:w-[28vw]"
          />
        </Link>
        <Link
          href="/community"
          className="absolute bottom-[15%] right-[3%] max-[900px]:top-[60%] max-[900px]:left-[55%] flex flex-col items-center hover:animate-pulse"
        >
          <p className="text-5xl max-[900px]:text-3xl text-white font-bold">
            Comm
          </p>
          <Image
            src={Community}
            alt="커뮤니티"
            width={200}
            height={200}
            className="w-[15vw] max-[900px]:w-[28vw]"
          />
        </Link>
      </div>
    </div>
  );
}
