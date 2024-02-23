/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    }
  }
}

export default nextConfig
