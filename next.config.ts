import type { NextConfig } from "next";
import { legacyRedirects } from "./src/content/redirects";

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;
