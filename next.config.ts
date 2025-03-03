import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: String(process.env.NOTION_IMAGE_HOSTNAME),
      },
    ],
  },
};

export default nextConfig;
