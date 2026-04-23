/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) config.cache = false
    return config
  },
  async rewrites() {
    return [
      {
        source: '/lnt-island-cove-mahim',
        destination: '/',
      },
      {
        source: '/lnt-island-cove-mahim/privacy-policy',
        destination: '/privacy-policy',
      },
    ]
  },
}
module.exports = nextConfig
