import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    additionalData: `$var: red;`,
    implementation: "sass-embedded",
    silenceDeprecations: ["legacy-js-api"],
    includePaths: [path.join(__dirname, "styles")],
  },
};

export default nextConfig;
