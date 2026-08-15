/** @type {import('next').NextConfig} */
const basePath = process.env.ULLYS_BASE_PATH || "/ullys";
const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: false,
  images: { unoptimized: true },
};

module.exports = nextConfig;