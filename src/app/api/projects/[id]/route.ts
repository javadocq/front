import { NextResponse, NextRequest } from "next/server";

const dummyData = [
  {
    id: 1,
    img: "/project/whenWeWillMeet.png",
    name: "언제 만나요?",
    introduce:
      "현재 나와있는 미팅 서비스들의 단점을 보완해서 만들어본 프로젝트입니다. 기존 서비스에는 없는 기능(자동으로 가장 많은 시간대를 반환, 온/오프라인 유무 체크)들을 포함해 사용자가 좀 더 편리하고 직관적이게 미팅 날짜를 잡을 수 있게 설계하였습니다.",
    functions: [
      "자동으로 가장 많이 참석하는 시간대 표시",
      "응답자 수를 조정할 수 있는 항목을 추가",
      "시간 및 응답자 클릭 시 세부 항목들이 보여지게 구현",
    ],
    solutions: [
      "육안으로는 구별하기 힘든 참여가 많은 시간대 확인 ➡️ 자동으로 가장 많은 시간대를 표시하면서 사용자 경험을 대폭 개선",
      "미팅 날짜를 설정하는 과정이 복잡할 수 있다는 단점 ➡️ 세부 항목들을 나열하면서 각 항목을 쉽게 확인하고 직관적으로 날짜를 선택할 수 있도록 구현",
      "다소 복잡한 UI ➡️ 다양한 기능들을 결합하면서도 쉽게 미팅을 생성하고 참여할 수 있도록 직관적인 인터페이스 제공",
    ],
    takeaways: [
      "사용자의 관점으로 UI/UX를 설계하는 과정이 되게 중요한 부분인 것을 깨달았습니다.",
      "처음으로 백엔드를 같이 설계하였는데 되게 좋은 경험이었던 것 같습니다.",
      "도메인을 직접 구입해서 연결을 해보았는데 설정 과정이 어려웠지만 나름 재미있었습니다.",
    ],
    catrgory: ["TypeScript", "React", "Django", "Styled-Components", "SQLite"],
    deploy: "https://when-we-will-meet.co.kr",
    velog: "-",
  },
  {
    id: 2,
    img: "/main/MainProject.png",
    name: "JAVADOCQ_BLOG",
    introduce:
      "이 프로젝트는 나만의 개인 블로그를 제작하는 것을 목표로 합니다. 프로젝트 및 학습 내용을 정리하여 공유하면서, 동시에 나 자신을 효과적으로 PR할 수 있도록 구성했습니다. 이 블로그는 이력서처럼 활용될 수 있으며, 새롭게 학습한 Next.js 프레임워크를 사용하여 SSR 렌더링 방식을 적용함으로써 SEO 성능을 향상시켰습니다.",
    functions: [
      "토글을 이용한 다크모드/라이트모드 변환",
      "farmer-motion을 이용한 애니메이션 구현",
      "RSS를 활용한 velog 글 가져오기",
    ],
    solutions: [
      "기존의 블로그에서 올리던 글을 프로젝트에서도 똑같이 작성을 해야 하는 단점 ➡️ RSS를 활용해 요약본을 가져와서 나타내고 링크로 연결할 수 있게 설정",
      "velog 글을 가져오다니 로딩시간이 너무 길어진다는 단점 ➡️ memory-cache를 활용하여 시간 단축 (553ms -> 153ms)",
      "프로젝트의 상세 소개나 블로그 글의 소개를 그대로 코드에서 나타내려면 길이가 방대해지고 가독성이 떨어진다는 단점 ➡️ Next.js의 API Route 기능을 사용하여 가독성 및 코드의 길이를 축소",
    ],
    takeaways: [
      "외부에서 데이터를 가져오는 게 의외로 로딩속도가 느려서 처음으로 캐시를 활용해보았는데 여러가지로 좋은 경험이었습니다.",
      "Git의 버전관리에 대해 좀 더 공부해볼 수 있었고 배포까지 해보는 좋은 경험이었습니다.",
    ],
    category: ["NextJS", "tailwindCSS", "Django", "Darkmode", "API-Route"],
    deploy: "https://front-ashen-eight.vercel.app/",
    velog: "https://velog.io/@javadocq/Next.js-시작하기",
  },
  {
    id: 3,
    type: "Next",
    img: "/project/ericalion.png",
    name: "멋쟁이사자처럼 :: 한양대 에리카 홈페이지",
    introduce:
      "동아리원들과 함께한 프로젝트로, 멋쟁이사자처럼 한양대학교 ERICA 캠퍼스의 홈페이지를 개설하였습니다. 주요 기능으로는 동아리 활동 안내, 프로젝트 및 동아리 운영진 소개, 지원 안내 등이 포함되어 있으며, 사용자 친화적인 UI/UX를 구현하기 위해 노력했습니다.",
    functions: [
      "3D 효과를 이용한 메인 페이지 구성",
      "모바일, 태블릿, 데스크탑 환경에 맞춘 반응형 디자인",
      "Cloud 배포를 통해 이미지와 데이터 관리",
    ],
    solutions: [
      "동기 방식으로 데이터를 받아오다보니 페이지 로딩이 느려지는 문제 발생 ➡️ 비동기 방식의 Promise을 사용하여 데이터를 받아오는 방식으로 변경",
      "img 태그를 사용하다보니 빌드 오류가 발생 ➡️ Next.js의 Image 컴포넌트를 사용하여 이미지를 불러오고 최적화하여 빌드 오류 해결",
      "반응형 디자인을 적용하다보니 디자인이 깨지는 문제 발생 ➡️ tailwindCSS를 사용하여 반응형 디자인을 적용하고 디자인을 유지",
    ],
    takeaways: [
      "처음으로 총괄을 맡아서 진행해보았는데, 팀원들과의 소통과 협업이 중요하다는 것을 느꼈습니다.",
      "혼자 만드는 것이 아니라 동아리원들과 함께하는 프로젝트라서 서로의 의견을 존중하고 수용하는 것이 중요하다는 것을 배웠습니다.",
    ],
    category: ["NextJS", "tailwindCSS", "Django", "Darkmode", "API-Route"],
    deploy: "https://ericalion.vercel.app/",
    velog: "-",
  },
];

export async function GET(req: NextRequest) {
  // URL에서 파라미터 추출 (예: /api/projects/[id] 형식)
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop(); // URL 경로에서 마지막 부분인 id를 추출

  if (id) {
    const projectId = parseInt(id, 10); // id를 정수로 변환
    const project = dummyData.find((item) => item.id === projectId);

    if (project) {
      return NextResponse.json(project);
    }
  }

  return NextResponse.json({ error: "Project not found" });
}
