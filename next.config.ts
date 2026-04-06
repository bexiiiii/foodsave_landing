import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loveresta.by",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "foodsave.kz",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
  },
};

export default nextConfig;
