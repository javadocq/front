"use client";

import useTheme from "next-theme";
import AboutStack from "../components/AboutStack";
import AboutMe from "../components/AboutMe";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="w-screen flex flex-col justify-center items-center pb-10">
      <AboutMe theme={theme} />
      <AboutStack theme={theme} />
    </div>
  );
}
