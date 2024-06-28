/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["images.stockx.com"],
  },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    FIREBASE_KEY: process.env.FIREBASE_KEY,
    FIREBASE_AUTH: process.env.FIREBASE_AUTH,
    FIREBASE_ID: process.env.FIREBASE_ID,
    FIREBASE_BUCKET: process.env.FIREBASE_BUCKET,
    FIREBASE_SENDER: process.env.FIREBASE_SENDER,
    FIREBASE_APP: process.env.FIREBASE_APP,
    FIREBASE_MEASUREMENT: process.env.FIREBASE_MEASUREMENT,
  },
};

module.exports = nextConfig;
