"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Post {
  title: string;
  link: string;
  summary: string;
  pubDate: string;
  profile: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchVelogPosts = async () => {
      const response = await fetch("/api/velog");
      const data = await response.json();
      setPosts(data);
    };

    fetchVelogPosts();
  }, []);

  return (
    <div className="w-screen flex flex-col items-center pb-[20px]">
      <div className="box-border flex items-center justify-center bg-black dark:bg-slate-50 w-56 h-16 rounded-lg mt-10">
        <p className="text-white dark:text-black text-3xl">BLOG</p>
      </div>
      <div className="grid grid-cols-4 gap-16 mt-16 max-[1380px]:grid-cols-3 max-[1080px]:grid-cols-2 max-[765px]:grid-cols-1">
        {posts.map((post, index) => {
          return (
            <Link
              href={post.link}
              key={index}
              className="box-border border-2 w-72 h-60 pb-2 rounded-lg flex flex-col items-center bg-zinc-100 dark:bg-gray-400 cursor-pointer"
            >
              <div className="box-border border-2 border-black dark:border-white w-64 h-16 rounded-lg flex items-center justify-center mt-4 px-3">
                <p className="text-base font-bold text-left w-64 mt-1 text-center line-clamp-2">
                  {post.title}
                </p>
              </div>

              <p className="text-base text-left w-64 mt-4 line-clamp-3">
                {post.summary}
              </p>
              <div className="box-border border-2 w-full mt-4"></div>
              <div className="flex items-center justify-between w-full px-2 h-8">
                <div className="flex items-center gap-2 mt-2">
                  <Image
                    src={post.profile}
                    alt="프로필 사진"
                    width={24}
                    height={24}
                    className="box-border border-2 rounded-full"
                  />
                  <p className="text-sm font-bold">JAVADOCQ</p>
                </div>
                <p className="text-slate-400 dark:text-black mt-2">
                  {post.pubDate.slice(5, 16)}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
