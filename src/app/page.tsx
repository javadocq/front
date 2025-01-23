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
        <Image
          src={Circle}
          alt="원"
          width={600}
          height={600}
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center text-4xl font-bold leading-[3] underline">
          <p>NOW IS</p>
          <p>THE TIME TO CHANGE</p>
          <p>YOUR LIFE</p>
        </div>
        <Image
          src={Cloud}
          alt="구름"
          width={300}
          height={300}
          className="absolute bottom-[15%] left-[27%]"
        />
        <Image
          src={Cloud}
          alt="구름"
          width={300}
          height={300}
          className="absolute top-[15%] right-[25%]"
        />
        <Link
          href="/project"
          className="absolute top-[15%] left-[10%] flex flex-col items-center hover:animate-pulse"
        >
          <p className="text-5xl text-white font-bold">Project</p>
          <Image src={Project} alt="프로젝트" width={200} height={200} />
        </Link>
        <Link
          href="/about"
          className="absolute bottom-[15%] left-[14%] flex flex-col items-center hover:animate-pulse"
        >
          <p className="text-5xl text-white font-bold">About</p>
          <Image src={About} alt="어바웃" width={150} height={150} />
        </Link>
        <Link
          href="/blog"
          className="absolute top-[15%] right-[7%] flex flex-col items-center hover:animate-pulse"
        >
          <p className="text-5xl text-white font-bold">Blog</p>
          <Image src={Blog} alt="블로그" width={200} height={200} />
        </Link>
        <Link
          href="/community"
          className="absolute bottom-[15%] right-[10%] flex flex-col items-center hover:animate-pulse"
        >
          <p className="text-5xl text-white font-bold">Community</p>
          <Image src={Community} alt="커뮤니티" width={200} height={200} />
        </Link>
      </div>
    </div>
  );
}
