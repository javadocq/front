import Link from "next/link";
import ThreeScene from "./components/ThreeScene";
import { Italianno } from "next/font/google";

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italianno",
});

export default function Home() {
  const categories = ["Project", "Blog", "About", "Community"];
  return (
    <div className={`relative ${italianno.className}`}>
      <ThreeScene />
      <p className="absolute top-[62px] left-[72px] text-[60px] font-[700] text-white max-[727px]:hidden">
        JAVADOCQ
      </p>
      <div className="absolute top-[0px] right-[0px] max-[727px]:top-[-50px] max-[727px]:right-0 max-[727px]:flex max-[727px]:flex-col max-[727px]:justify-center max-[727px]:items-center max-[727px]:w-full max-[727px]:h-screen">
        {categories.map((category, index) => {
          return (
            <div key={index} className="flex flex-col items-center">
              <Link
                href={`/${category.toLowerCase()}`}
                className="mt-[63px] text-[60px] font-[400] text-white"
              >
                {category}
              </Link>
              <div className="mt-[30px] w-[350px] h-[2px] bg-darkBg"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
