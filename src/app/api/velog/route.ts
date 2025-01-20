import { NextResponse } from "next/server";
import Parser from "rss-parser";
const parser = new Parser();

export async function GET() {
  try {
    const feed = await parser.parseURL("https://v2.velog.io/rss/javadocq");

    const posts = feed.items.map((item) => {
      return {
        title: item.title,
        link: item.link,
        summary: item.contentSnippet?.slice(0, 100),
        pubDate: item.pubDate,
        profile: feed.image?.url,
      };
    });
    if (!posts.length) {
      return NextResponse.json({ error: "No posts found" }, { status: 404 });
    }
    return NextResponse.json(posts, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch Velog posts" },
      { status: 400 }
    );
  }
}
