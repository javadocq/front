import { NextResponse } from "next/server";

export async function GET() {
  const dummyData = [
    {
      id: 1,
      type: "2023",
      img: "/project/whenWeWillMeet.png",
      name: "언제 만나요? (웹)",
      introduce:
        "현재 나와있는 미팅 서비스들의 단점을 보완해서 만들어본 프로젝트입니다. 기존 서비스에는 없는 기능(자동으로 가장 많은 시간대를 반환, 온/오프라인 유무 체크)들을 포함해 사용자가 좀 더 편리하고 직관적이게 미팅 날짜를 잡을 수 있게 설계하였습니다.",
      function: ["TypeScript", "React", "Django"],
    },
    {
      id: 2,
      type: "2024",
      img: "/project/blog.png",
      name: "JAVADOCQ_BLOG (웹)",
      introduce:
        "나만의 개인 블로그를 만들기 위한 프로젝트입니다. 이전에 사용해보지 않았던 기능들, 예를 들어 Dark Mode와 Framer-motion 등을 적극적으로 활용하여 사용자들에게 독특하고 차별화된 블로그 경험을 제공하고자 했습니다.",
      function: ["NextJS", "TypeScript", "tailwindCSS"],
    },
    {
      id: 3,
      type: "2024",
      img: "/project/ericalion.png",
      name: "멋쟁이사자처럼 :: 한양대 에리카 홈페이지 (웹)",
      introduce:
        "동아리원들과 함께한 프로젝트로, 멋쟁이사자처럼 한양대학교 ERICA 캠퍼스의 홈페이지를 개설하였습니다. 주요 기능으로는 동아리 활동 안내, 프로젝트 및 동아리 운영진 소개, 지원 안내 등이 포함되어 있으며, 사용자 친화적인 UI/UX를 구현하기 위해 노력했습니다.",
      function: ["NextJS", "TypeScript", "tailwindCSS", "Spring", "PostgreSQL"],
    },
    {
      id: 4,
      type: "2024",
      img: "/project/indiflow.png",
      name: "Indiflow (웹)",
      introduce:
        "개인적으로 프로젝트를 진행하는 사람들을 위해 프로젝트 관리 웹 서비스를 제작해보았습니다. 주요 기능으로 Project/Task/SubTask 생성 및 완료가 있으며, 각 프로젝트마다 메모를 작성할 수 있게 추가해두었습니다. 또, 포모도로 타이머를 활용하여 사용자에게 재미성을 부여하기도 하였습니다.",

      function: ["React", "tailwindCSS", "Spring", "MySQL"],
    },
    {
      id: 5,
      type: "2025",
      img: "/project/hylight.png",
      name: "HYLIGHT-ESPERO (웹앱)",
      introduce:
        "한양대학교 ERICA의 축제기획단과 협업하여 만든 학교 봄 축제 웹 어플리케이션입니다. 축제 기간 동안 학생들이 참여할 수 있는 다양한 이벤트와 프로그램을 소개합니다. 또한, 축제 관련 공지사항과 공연 일정 등을 확인하고 분실물 등록, 주점 위치 확인 기능도 포함되어 있습니다.",

      function: ["React", "TypeScript", "styled-components", "Spring", "MySQL"],
    },
    {
      id: 6,
      type: "2025",
      img: "/project/BookPizza.png",
      name: "책을 피자 (앱)",
      introduce:
        "책을 읽으면서 편리하게 메모하고, 감성적인 스톱워치와 함께 독서에 몰입해보세요.",

      function: ["React Native", "styled-components", "Expo", "SQLite"],
    },
  ];

  return NextResponse.json(dummyData);
}
