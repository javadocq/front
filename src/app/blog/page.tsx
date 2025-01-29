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
      <div className="box-border flex items-center justify-center bg-black dark:bg-darkBg w-56 h-16 rounded-lg mt-10">
        <p className="text-white dark:text-white text-3xl font-bold">BLOG</p>
      </div>
      <div className="grid grid-cols-4 gap-16 mt-16 max-[1380px]:grid-cols-3 max-[1080px]:grid-cols-2 max-[765px]:grid-cols-1">
        {posts.map((post, index) => {
          return (
            <Link
              href={post.link}
              key={index}
              className="box-border border-1 w-[282px] h-[250px] pb-2 rounded-lg flex flex-col items-center bg-lightBg dark:bg-darkBg cursor-pointer shadow-[4px_4px_4px_rgba(0,0,0,0.7)]"
            >
              <div className=" bg-[#FFFFFF]/[0.3] w-[252px] h-[70px] border-white dark:border-white w-[252px] h-[58px] rounded-lg flex items-center justify-center mt-4 px-[20px] shadow-[3px_2px_6px_rgba(0,0,0,0.2)]">
                <p className="text-[14px] font-[600] text-black dark:text-white text-left w-64 mt-1 text-center line-clamp-2 leading-[23px]">
                  {post.title}
                </p>
              </div>

              <p className="text-[12px] text-black dark:text-white text-left w-[252px] mt-4 ml-[8px] line-clamp-3 leading-[30px]">
                {post.summary}
              </p>
              <div className="box-border border-[1px] border-white dark:border-white w-full mt-1"></div>
              <div className="flex items-center justify-between w-full px-2 h-8">
                <div className="flex items-center gap-2 mt-5 ml-[8px]">
                  <Image
                    src={post.profile}
                    alt="프로필 사진"
                    width={24}
                    height={24}
                    className="box-border border-2 rounded-full"
                  />
                  <p className="text-[12px] text-black dark:text-white font-bold">
                    JAVADOCQ
                  </p>
                </div>
                <p className="text-black text-[12px] dark:text-white mt-5 mr-[10px]">
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
