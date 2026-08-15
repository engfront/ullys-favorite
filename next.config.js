/** @type {import('next').NextConfig} */
// ULLYS_BASE_PATH="":  kosong (domain root, for Vercel)
// ULLYS_BASE_PATH unset:  "/ullys" (bridge lokal di :9876/ullys)
const basePath =
  process.env.ULLYS_BASE_PATH !== undefined
    ? (process.env.ULLYS_BASE_PATH || "")
    : "/ullys";

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: false,
  images: { unoptimized: true },
};

module.exports = nextConfig;