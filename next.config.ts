import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/port",
  assetPrefix: "/port",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
