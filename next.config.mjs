/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Ensure proper routing
  trailingSlash: false,
}

export default nextConfig
