import { NextResponse, type NextRequest } from "next/server";

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
    img: "/project/blog.png",
    name: "JAVADOCQ_BLOG",
    introduce:
      "이 프로젝트는 나만의 개인 블로그를 제작하는 것을 목표로 합니다. 프로젝트 및 학습 내용을 정리하여 공유하면서, 동시에 나 자신을 효과적으로 PR할 수 있도록 구성했습니다. 이 블로그는 이력서처럼 활용될 수 있으며, 새롭게 학습한 Next.js 프레임워크를 사용하여 SSR 렌더링 방식을 적용함으로써 SEO 성능을 향상시켰습니다.",
    role: "프론트엔드 개발 (전체 페이지)",
    functions: [
      "토글을 이용한 다크모드/라이트모드 변환",
      "farmer-motion을 이용한 애니메이션 구현",
      "RSS를 활용한 velog 글 가져오기",
      "supabase를 활용한 댓글 기능",
    ],
    solutions: [
      "기존의 블로그에서 올리던 글을 프로젝트에서도 똑같이 작성을 해야 하는 단점 ➡️ RSS를 활용해 요약본을 가져와서 나타내고 링크로 연결할 수 있게 설정",
      "velog 글을 가져오다니 로딩시간이 너무 길어진다는 단점 ➡️ memory-cache를 활용하여 시간 단축 (553ms -> 153ms)",
      "프로젝트의 상세 소개나 블로그 글의 소개를 그대로 코드에서 나타내려면 길이가 방대해지고 가독성이 떨어진다는 단점 ➡️ Next.js의 API Route 기능을 사용하여 가독성 및 코드의 길이를 축소",
      "백엔드 없이 프론트엔드만으로 댓글 기능을 구현해야 하는 단점 ➡️ supabase를 활용하여 간단한 댓글 기능 구현",
    ],
    takeaways: [
      "외부에서 데이터를 가져오는 게 의외로 로딩속도가 느려서 처음으로 캐시를 활용해보았는데 여러가지로 좋은 경험이었습니다.",
      "Git의 버전관리에 대해 좀 더 공부해볼 수 있었고 배포까지 해보는 좋은 경험이었습니다.",
      "supabase를 활용하여 백엔드 없이 댓글 기능을 구현해보았는데, 프론트엔드 개발자로서의 역량을 한층 더 높일 수 있었습니다.",
    ],
    category: ["NextJS", "tailwindCSS", "Django", "Darkmode", "API-Route"],
    deploy: "https://front-ashen-eight.vercel.app/",
    velog: "https://velog.io/@javadocq/Next.js-시작하기",
  },
  {
    id: 3,
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
  {
    id: 6,
    img: "/project/BookPizza.png",
    name: "책을 피자",
    introduce:
      "책을 읽으면서 편리하게 메모하고, 감성적인 스톱워치와 함께 독서에 몰입해보세요.",
    role: "프론트엔드 개발 (전체 페이지)",
    functions: [
      "메모들을 한 곳에서 편리하게 추가하고 관리",
      "책장 별로 읽고 있는 책들을 모아보기",
      "책 별로 독서 기록을 관리",
      "독서에 몰입할 수 있는 감성 스톱워치 기능",
    ],
    solutions: [
      "로컬 갤러리 이미지가 빌드/업데이트 시 사라지는 문제 ➡️ 이미지 파일 경로 의존을 제거하고 base64 Data URL로 변환해 앱 내부에 영구 보관",
      "서버 비용 절감(트래픽/스토리지 미발생) ➡️ SQLite3(react-native-sqlite-storage 또는 Expo SQLite)로 로컬 영속 저장소 구성",
      "Maze 기반 A/B 테스트에서 드러난 UX 오류 ➡️ 재현→원인/분석→수정(예: 터치 히트 영역 확대·로딩 상태 표시·에러 핸들링)",
      "앱 배포 전 사용자 피드백 수집 및 반영 ➡️ 외부 테스터 5인의 피드백을 바탕으로 UI/UX 개선 및 버그 수정",
    ],
    takeaways: [
      "Expo에서 시작해 Bare Workflow까지 전환하면서 앱 빌드와 배포 과정 전반을 직접 경험하며 모바일 앱 개발에 대한 이해를 넓혔습니다.",
      "앱스토어 심사, 광고(AdMob) 설정, 개인정보 처리 방침 등록 등 실제 서비스 운영에 필요한 과정을 겪으며 서비스 개발이 단순한 코드 작성이 아님을 배웠습니다.",
      "책 메모 앱을 개발하며 로컬 DB 관리, UI/UX 설계, 컴포넌트 구조화 등의 고민을 통해 사용자 경험 중심의 사고를 기를 수 있었습니다.",
      "개발 과정에서 마주한 에러와 문제들을 해결하는 과정 자체가 큰 학습이 되었고, 작은 개선들이 쌓여 서비스 완성도로 이어진다는 점을 깨달았습니다.",
    ],
    category: ["React Native", "styled-components", "Expo", "SQLite"],
    deploy:
      "https://apps.apple.com/kr/app/%EC%B1%85%EC%9D%84-%ED%94%BC%EC%9E%90-%EC%A0%9C%EC%9D%BC-%ED%8E%B8%EB%A6%AC%ED%95%98%EA%B3%A0-%EA%B0%90%EC%84%B1%EC%A0%81%EC%9D%B8-%EB%8F%85%EC%84%9C-%EA%B8%B0%EB%A1%9D-%EC%95%B1/id6748723998",
    velog:
      "https://velog.io/@javadocq/%EC%B1%85%EC%9D%84-%ED%94%BC%EC%9E%90-%EA%B0%9C%EB%B0%9C%EA%B8%B0-1-%EA%B0%90%EC%84%B1-%EB%8F%85%EC%84%9C-%EC%95%B1%EC%9D%84-%EB%A7%8C%EB%93%A4%EA%B8%B0%EB%A1%9C-%ED%95%9C-%EC%9D%B4%EC%9C%A0",
  },
  {
    id: 7,
    img: "/project/bobtory.png",
    name: "밥토리",
    introduce:
      "간단한 혼밥 레벨 테스트로 나의 혼밥 성향을 알아보고, 1인 메뉴와 좌석 구조까지 한눈에 볼 수 있는 식당을 추천받으세요.",
    role: "프론트엔드 개발 (필터, 디자인 시스템, 가게 상세 페이지, 제보 및 리뷰 페이지)",
    functions: [
      "가게 상세 페이지에서 가게 정보를 확인할 수 있습니다.",
      "제보 및 리뷰 페이지에서 가게에 대한 제보와 리뷰를 작성할 수 있습니다.",
    ],
    solutions: [
      "혼밥 조건에 맞는 가게를 찾기 어려운 문제 ➡️ 혼밥 가능 여부, 음식 카테고리, 거리 기준 등의 필터 기능을 제공하여 사용자 맞춤 탐색 경험 구현",
      "UI 요소가 늘어나면서 디자인 일관성이 깨지는 문제 ➡️ 버튼, 태그, 카드 컴포넌트를 중심으로 간단한 디자인 시스템을 구축하여 일관된 UI 유지",
      "이미 리뷰를 작성한 가게에 다시 리뷰를 작성하려 할 때 혼란이 발생 ➡️ 기존 리뷰 여부를 사전에 확인하여 수정 UI 또는 안내 메시지를 제공하는 UX 설계",
      "리뷰 작성 과정에서 사용자의 행동 흐름이 끊기는 문제 ➡️ 작성 완료, 수정, 중복 작성 불가 등 상태에 따라 다른 UI 피드백을 제공하여 자연스러운 리뷰 UX 구현",
    ],
    takeaways: [
      "필터와 위치 기반 기능을 구현하며 단순한 화면 개발이 아니라 사용자 탐색 흐름을 설계하는 프론트엔드 역할을 경험할 수 있었습니다.",
      "디자인 시스템을 직접 정리하면서 UI 일관성이 유지되지 않을 때 유지보수가 얼마나 어려워지는지 체감했습니다.",
      "Geolocation API와 외부 가게 추천 API를 연동하며 비동기 데이터 처리와 예외 상황 대응의 중요성을 배웠습니다.",
      "리뷰 UX를 설계하며 사용자의 상태(이미 작성한 경우, 수정하는 경우 등)에 따라 다른 UI를 제공하는 것이 서비스 완성도를 높인다는 것을 느꼈습니다.",
    ],
    category: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "Expo",
    ],
    deploy: "https://bobtory.com/",
    velog: "",
  },
  {
    id: 8,
    img: "/project/picoWorld.png",
    name: "Pico World",
    introduce:
      "Pico World는 선택한 캐릭터가 나의 감정에 맞춰 답장을 남겨주는 감정 기록 앱이에요. 감정을 그대로 적고, 친구와 나누거나 나만의 공간에 담아두며, 감정의 흐름을 편안하게 바라볼 수 있어요.",
    role: "프론트엔드 개발 (로그인 관련 페이지, 온보딩 페이지 페이지, 감정 상세 페이지)",
    functions: [
      "나의 감정을 기록하고 피드백을 받을 수 있습니다.",
      "다양한 AI 캐릭터를 통해 피드백을 받을 수 있습니다.",
      "나의 감정을 공유하고 친구와 나눌 수 있습니다.",
    ],
    solutions: [
      "바텀 내비게이션 탭 이동 시 반응이 느린 문제 ➡️ 탭 전환 시 0.4초 이내로 반응하도록 렌더링 및 애니메이션 성능을 최적화했습니다.",
      "cloneElement 사용으로 SVG 아이콘이 매 렌더링마다 재생성되는 문제 ➡️ 아이콘을 React Element가 아닌 컴포넌트 자체로 관리하여 불필요한 재렌더링을 제거했습니다.",
      "Animated API 사용으로 JS 스레드가 바쁠 경우 애니메이션이 지연되는 문제 ➡️ Reanimated를 도입해 UI 스레드에서 애니메이션을 처리하도록 개선했습니다.",
      "탭 변경 시 모든 아이콘이 함께 리렌더링되는 문제 ➡️ React.memo와 props 비교를 적용해 상태가 변경된 아이콘만 렌더링되도록 최적화했습니다.",
      "Image 컴포넌트에 직접 shadow를 적용할 경우 이미지가 일부만 보이는 문제 ➡️ shadow를 View로 분리해 감싸는 구조로 변경하여 정상 렌더링을 보장했습니다.",
    ],
    takeaways: [
      "UI 반응 속도 저하의 원인을 단순한 느낌이 아니라 렌더링 구조와 스레드 관점에서 분석하는 경험을 할 수 있었습니다.",
      "React Element 생성 방식과 렌더링 비용의 관계를 이해하며 성능 관점에서 컴포넌트 설계의 중요성을 배웠습니다.",
      "JS 스레드와 UI 스레드의 역할 차이를 이해하고, 애니메이션 구현 방식에 따라 사용자 체감 성능이 크게 달라질 수 있음을 체감했습니다.",
      "React.memo를 활용해 상태 변화 범위를 제한함으로써, 작은 최적화가 전체 UX에 큰 영향을 줄 수 있다는 것을 경험했습니다.",
      "플랫폼별 UI 특성(RN shadow 처리)을 고려한 구조 설계의 중요성을 배웠습니다.",
    ],
    category: ["React Native", "TypeScript", "styled-components", "Expo"],
    deploy:
      "https://apps.apple.com/kr/app/%ED%94%BC%EC%BD%94%EC%9B%94%EB%93%9C-pico-world-ai%ED%94%BC%EB%93%9C%EB%B0%B1-%EC%B9%9C%EA%B5%AC-%EA%B3%B5%EC%9C%A0/id6755540527 피코월드 Pico World - AI피드백&친구 공유",
    velog: "",
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
