import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["placehold.co", "localhost"],
  },
};

export default nextConfig;
