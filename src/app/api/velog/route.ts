import { NextResponse } from "next/server";
import Parser from "rss-parser";
import cache from "memory-cache";

const parser = new Parser();
const CACHE_KEY = process.env.CACHE_KEY || "default_cache_key";
const CACHE_DURATION = 1000 * 60 * 60; // 1시간 동안 캐싱

export async function GET() {
  try {
    const cachedData = cache.get(CACHE_KEY);
    if (cachedData) {
      return NextResponse.json(cachedData, { status: 200 });
    }

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

    cache.put(CACHE_KEY, posts, CACHE_DURATION);
    return NextResponse.json(posts, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch Velog posts" },
      { status: 400 }
    );
  }
}
