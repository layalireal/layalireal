import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      {
        source: '/products/oud-dubai-serum',
        destination: '/',
        permanent: true,
      },
      {
        source: '/products/aroma-oud-ritual-kit',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
