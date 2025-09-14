/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Allow Next/Image to load from Sanity’s CDN
  images: {
    domains: ['cdn.sanity.io'],
  },

  // (Optional) If you’re using experimental app router features:
  experimental: {
    appDir: true,
  },

  // (Optional) If you need environment variables at build time:
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
};

module.exports = nextConfig;
