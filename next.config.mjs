/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'mldahyvnxhwfksrcjbmk.supabase.co'
      }
    ],
  }
};

export default nextConfig;
