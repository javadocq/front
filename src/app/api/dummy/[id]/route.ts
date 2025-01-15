import { NextResponse } from "next/server";

const dummyData = [
  {
    id: 1,
    img: "/dummyImg.png",
    name: "프로젝트 이름",
    introduce:
      "프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다. 프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다. 프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다.",
    function: ["TailWind", "DarkMode", "LocalStorage"],
    github: "https://github.com/javadocq",
    velog: "https://velog.io/@javadocq/posts",
  },
  {
    id: 2,
    img: "/dummyImg.png",
    name: "프로젝트 이름",
    introduce:
      "프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다. 프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다. 프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다.",
    function: ["TailWind", "DarkMode", "LocalStorage"],
    github: "https://github.com/javadocq",
    velog: "https://velog.io/@javadocq/posts",
  },
  {
    id: 3,
    img: "/dummyImg.png",
    name: "프로젝트 이름",
    introduce:
      "프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다. 프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다. 프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다.",
    function: ["TailWind", "DarkMode", "LocalStorage"],
    github: "https://github.com/javadocq",
    velog: "https://velog.io/@javadocq/posts",
  },
  {
    id: 4,
    img: "/dummyImg.png",
    name: "프로젝트 이름",
    introduce:
      "프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다. 프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다. 프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다.",
    function: ["TailWind", "DarkMode", "LocalStorage"],
    github: "https://github.com/javadocq",
    velog: "https://velog.io/@javadocq/posts",
  },
  {
    id: 5,
    img: "/dummyImg.png",
    name: "프로젝트 이름",
    introduce:
      "프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다. 프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다. 프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다.",
    function: ["TailWind", "DarkMode", "LocalStorage"],
    github: "https://github.com/javadocq",
    velog: "https://velog.io/@javadocq/posts",
  },
  {
    id: 6,
    img: "/dummyImg.png",
    name: "프로젝트 이름",
    introduce:
      "프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다. 프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다. 프로젝트 소개 문구입니다. 이러한 기능을 사용해서 만든 프로젝트입니다.",
    function: ["TailWind", "DarkMode", "LocalStorage"],
    github: "https://github.com/javadocq",
    velog: "https://velog.io/@javadocq/posts",
  },
];

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const project = dummyData.find((item) => item.id === id);

  if (project) {
    return NextResponse.json(project);
  }
  return NextResponse.json({ error: "Project not found" });
}
