import { NextRequest, NextResponse } from "next/server";

const comments: { id: number; name: string; comment: string }[] = [];
let commentId: number = 1;

const REQUEST_LIMIT = 1; // 시간당 최대 요청 수
const TIME_WINDOW = 60 * 5000; // 5분
const requests: Map<string, number[]> = new Map(); // IP별 요청 기록 저장

// Rate Limiting 미들웨어
export async function middleware(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]; // x-forwarded-for 헤더에서 IP 추출
  const currentTime = Date.now();

  if (!ip) {
    return NextResponse.json({ error: "IP not found" }, { status: 400 });
  }

  const userRequests = requests.get(ip) || [];
  // 최근 요청들만 남기고 필터링 (1분 이내의 요청들만 필터링)
  const recentRequests = userRequests.filter(
    (timestamp: number) => currentTime - timestamp < TIME_WINDOW
  );

  if (recentRequests.length >= REQUEST_LIMIT) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // 새로운 요청 추가
  requests.set(ip, [...recentRequests, currentTime]);

  return NextResponse.next(); // 요청을 계속 진행
}

// GET 요청 처리
export async function GET() {
  return NextResponse.json(comments);
}

// POST 요청 처리
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, comment } = body;

  if (name && comment) {
    const message = {
      id: commentId++,
      name: name,
      comment: comment,
      date: Date.now(),
    };

    comments.push(message);

    return NextResponse.json(comments, { status: 200 });
  }

  return NextResponse.json(
    { error: "Name and Comment are required." },
    { status: 400 }
  );
}
