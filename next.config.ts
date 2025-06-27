import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      {
        hostname: "aceternity.com",
      },
    ],
  },
};

export default nextConfig;
