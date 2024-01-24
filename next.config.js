/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: {
    resolve: {
      fallback: {
        crypto: false
      },
    },
    mode: 'development'
  }
}

module.exports = nextConfig
