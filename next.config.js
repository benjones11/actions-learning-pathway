/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },

  reactStrictMode: true,

  eslint: {
    // Example options
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
