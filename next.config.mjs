/**
 * Next.js Configuration for Discord Role Guardian Website
 * @see https://nextjs.org/docs/app/api-reference/config/next-config-js
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* TypeScript - ignore build errors for faster development */
  typescript: {
    ignoreBuildErrors: true,
  },

  /* Images - unoptimized for static export compatibility */
  images: {
    unoptimized: true,
  },
}

export default nextConfig