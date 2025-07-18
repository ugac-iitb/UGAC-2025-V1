import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: isProd ? '/UGAC-IITB' : '',
  assetPrefix: isProd ? '/UGAC-IITB' : '',
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  }


export default nextConfig;
