/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost:1337'],
    formats: ['image/webp'],

  },
}

module.exports = nextConfig
