/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Configure for better performance
  swcMinify: true,
}

module.exports = nextConfig