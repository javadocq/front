import { NextResponse, NextRequest } from "next/server";

const dummyData = [
  {
    id: 1,
    img: "/project/whenWeWillMeet.png",
    name: "언제 만나요?",
    introduce:
      "현재 나와있는 미팅 서비스들의 단점을 보완해서 만들어본 프로젝트입니다. 기존 서비스에는 없는 기능(자동으로 가장 많은 시간대를 반환, 온/오프라인 유무 체크)들을 포함해 사용자가 좀 더 편리하고 직관적이게 미팅 날짜를 잡을 수 있게 설계하였습니다.",
    function: ["TypeScript", "React", "Django", "Styled-Components", "SQLite"],
    deploy: "https://when-we-will-meet.co.kr",
    velog: "https://velog.io/@javadocq/",
  },
  {
    id: 2,
    img: "/project/myBlog.png",
    name: "JAVADOCQ_BLOG",
    introduce:
      "나만의 개인 블로그를 만들기 위한 프로젝트입니다. 이전에 사용해보지 않았던 기능들, 예를 들어 Dark Mode와 Three.js 등을 적극적으로 활용하여 사용자들에게 독특하고 차별화된 블로그 경험을 제공하고자 했습니다.",
    function: [
      "NextJS",
      "tailwindCSS",
      "Django",
      "Darkmode",
      "Three.js",
      "API-Route",
    ],
    deploy: "https://github.com/javadocq",
    velog: "https://velog.io/@javadocq/Next.js-시작하기",
  },
];

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  const project = dummyData.find((item) => item.id === id);

  if (project) {
    return NextResponse.json(project);
  }
  return NextResponse.json({ error: "Project not found" });
}
