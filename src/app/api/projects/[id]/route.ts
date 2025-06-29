import { NextResponse, NextRequest } from "next/server";

const dummyData = [
  {
    id: 1,
    img: "/project/whenWeWillMeet.png",
    name: "언제 만나요?",
    introduce:
      "현재 나와있는 미팅 서비스들의 단점을 보완해서 만들어본 프로젝트입니다. 기존 서비스에는 없는 기능(자동으로 가장 많은 시간대를 반환, 온/오프라인 유무 체크)들을 포함해 사용자가 좀 더 편리하고 직관적이게 미팅 날짜를 잡을 수 있게 설계하였습니다.",
    role: "프론트엔드 개발 (전체 페이지), 백엔드 개발 (DB 설계 및 RESTAPI 구현)",
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
    role: "프론트엔드 개발 (전체 페이지)",
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
    role: "프론트엔드 개발 (모집 페이지, PR 페이지, 백엔드 연결)",
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
    category: ["NextJS", "tailwindCSS", "Spring", "PostgreSQL"],
    deploy: "https://ericalion.vercel.app/",
    velog: "-",
  },
  {
    id: 4,
    type: "React",
    img: "/project/indiflow.png",
    name: "Indiflow",
    introduce:
      "개인적으로 프로젝트를 진행하는 사람들을 위해 프로젝트 관리 웹 서비스를 제작해보았습니다. 주요 기능으로 Project/Task/SubTask 생성 및 완료가 있으며, 각 프로젝트마다 메모를 작성할 수 있게 추가해두었습니다. 또, 포모도로 타이머를 활용하여 사용자에게 재미성을 부여하기도 하였습니다.",
    role: "프론트엔드 개발 (전체 페이지), 백엔드 개발 (DB 설계 및 RESTAPI 구현)",
    functions: [
      "프로젝트, 태스크, 서브태스크 생성 및 상태 관리 (완료 버튼)",
      "포모도로 타이머 기능을 통해 집중력 향상과 재미 요소 추가",
      "각 프로젝트별 메모 기능으로 자유로운 아이디어 기록 가능",
    ],
    solutions: [
      "포모도로 원형 그래프를 수작업으로 그리기 어려운 상태 ➡️ React Circular Progressbar 라이브러리를 사용하여 원형 그래프를 쉽게 구현",
      "Spring에서는 env 파일을 기본적으로 지원해주지 않는 상황 발생(배포 시 문제) ➡️ Spring에서 dotenv 라이브러리를 사용하여 env 파일을 지원하도록 설정",
      "양방향 연관관계를 그대로 JSON으로 직렬화하면서 무한 루프가 발생함 ➡️ Entity 대신 DTO를 사용해 직렬화 대상 필드를 명확히 제어함으로써 무한 루프 문제 해결",
    ],
    takeaways: [
      "Spring을 배우고 나서 처음으로 풀스택으로 웹 페이지를 구현해보았던 프로젝트인데 좋은 경험이었습니다.",
      "deploy를 처음으로 해보았는데, 배포 과정에서 많은 시행착오가 있었지만 좋은 경험이었습니다.",
      "프론트 측에서는 전역 라이브러리를 사용 못한 점이 아쉬웠습니다.",
    ],
    category: ["React", "Styled-coponents", "Spring", "MySQL"],
    deploy: "https://indiflow-front-p8eaopqg3-javadocqs-projects.vercel.app/",
    velog: "-",
  },
  {
    id: 5,
    type: "React",
    img: "/project/hylight.png",
    name: "HYLIGHT-ESPERO",
    introduce:
      "한양대학교 ERICA의 축제기획단과 협업하여 만든 학교 봄 축제 웹 어플리케이션입니다. 축제 기간 동안 학생들이 참여할 수 있는 다양한 이벤트와 프로그램을 소개합니다. 또한, 축제 관련 공지사항과 공연 일정 등을 확인하고 분실물 등록, 주점 위치 확인 기능도 포함되어 있습니다.",
    role: "프론트엔드 개발 (공연 페이지, 분실물 페이지)",
    functions: [
      "KAKAO 지도 API를 활용한 주점 및 다양한 이벤트 위치 확인 기능",
      "타임 테이블을 통한 공연 일정 확인 기능",
      "분실물 등록 및 확인 기능",
    ],
    solutions: [
      "분실물 등록 시 사용자를 식별할 수 없는 문제가 발생 ➡️ Kakao 로그인 API를 도입하여 간편한 사용자 인증 기능을 구현",
      "웨이팅 기능 불편함으로 축제기획단 하고 갈등 발생 ➡️ 웨이팅 기능을 제외하고, 사용자들이 쉽게 사용할 수 있는 기능들로 대체",
      "초기 타임테이블은 30분 단위로 고정되어 있어 세부 일정 반영 어려움 ➡️ 5분 단위로 조정 가능하도록 개선하여 다양한 프로그램 일정을 유동적으로 관리",
    ],
    takeaways: [
      "학교에서 진행하는 큰 행사에 참여하면서 많은 사람들과 협업하는 경험을 쌓았습니다.",
      "실제 사용자들이 사용하는 웹 어플리케이션을 개발하면서 사용자 경험(UX)의 중요성을 깨달았습니다.",
      "잘하시는 프론트엔드분들과 함께하니 저 또한 성장하는 계기가 되었습니다.",
    ],
    category: ["React", "Styled-coponents", "Spring", "MySQL"],
    deploy: "https://likelion-espero.vercel.app/",
    velog: "-",
  },
];

export async function GET(req: NextRequest) {
  // URL에서 파라미터 추출 (예: /api/projects/[id] 형식)
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  if (id) {
    const projectId = parseInt(id, 10);
    const project = dummyData.find((item) => item.id === projectId);

    if (project) {
      return NextResponse.json(project);
    }
  }

  return NextResponse.json({ error: "Project not found" });
}
