import { NextResponse } from "next/server";

export async function GET() {
  const dummyData = [
    {
      id: 1,
      type: "React",
      img: "/project/dummyImg.png",
      name: "프로젝트 이름",
      introduce:
        "프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다.",
      function: ["TailWind", "DarkMode", "LocalStorage"],
    },
    {
      id: 2,
      type: "React",
      img: "/project/dummyImg.png",
      name: "프로젝트 이름",
      introduce:
        "프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다.",
      function: ["TailWind", "DarkMode", "LocalStorage"],
    },
    {
      id: 3,
      type: "TypeScript",
      img: "/project/dummyImg.png",
      name: "프로젝트 이름",
      introduce:
        "프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다.",
      function: ["TailWind", "DarkMode", "LocalStorage"],
    },
    {
      id: 4,
      type: "TypeScript",
      img: "/project/dummyImg.png",
      name: "프로젝트 이름",
      introduce:
        "프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다.",
      function: ["TailWind", "DarkMode", "LocalStorage"],
    },
    {
      id: 5,
      type: "TypeScript",
      img: "/project/dummyImg.png",
      name: "프로젝트 이름",
      introduce:
        "프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다.",
      function: ["TailWind", "DarkMode", "LocalStorage"],
    },
    {
      id: 6,
      type: "Next",
      img: "/project/dummyImg.png",
      name: "프로젝트 이름",
      introduce:
        "프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다.",
      function: ["TailWind", "DarkMode", "LocalStorage"],
    },
  ];

  return NextResponse.json(dummyData);
}
