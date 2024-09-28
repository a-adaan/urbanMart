/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "live.staticflickr.com",
      },
    ],
  },
};

export default nextConfig;
