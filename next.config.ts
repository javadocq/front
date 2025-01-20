import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["velog.velcdn.com"], // 허용할 도메인 추가
  },
};

export default nextConfig;
