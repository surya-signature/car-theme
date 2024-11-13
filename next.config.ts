import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output :"export"
};

export default nextConfig;

module.exports = {
  images: {
    domains: ['cdn.imagin.studio'],
  },
};