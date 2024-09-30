/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Optional, but recommended for specifying the protocol
        hostname: "live.staticflickr.com",
      },
      {
        protocol: "https", // Optional
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
