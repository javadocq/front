import { NextResponse } from "next/server";

export async function GET() {
  const dummyData = [
    {
      id: 1,
      img: "/dummyImg.png",
      name: "프로젝트 이름",
      introduce:
        "프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다.",
      function: ["TailWind", "DarkMode", "LocalStorage"],
    },
    {
      id: 2,
      img: "/dummyImg.png",
      name: "프로젝트 이름",
      introduce:
        "프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다.",
      function: ["TailWind", "DarkMode", "LocalStorage"],
    },
    {
      id: 3,
      img: "/dummyImg.png",
      name: "프로젝트 이름",
      introduce:
        "프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다.",
      function: ["TailWind", "DarkMode", "LocalStorage"],
    },
    {
      id: 4,
      img: "/dummyImg.png",
      name: "프로젝트 이름",
      introduce:
        "프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다.",
      function: ["TailWind", "DarkMode", "LocalStorage"],
    },
    {
      id: 5,
      img: "/dummyImg.png",
      name: "프로젝트 이름",
      introduce:
        "프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다.",
      function: ["TailWind", "DarkMode", "LocalStorage"],
    },
    {
      id: 6,
      img: "/dummyImg.png",
      name: "프로젝트 이름",
      introduce:
        "프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다.",
      function: ["TailWind", "DarkMode", "LocalStorage"],
    },
  ];

  return NextResponse.json(dummyData);
}
