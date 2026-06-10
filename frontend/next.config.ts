import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      {
        source: '/products/oud-dubai-serum',
        destination: '/products/aroma-oud-ritual-kit',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
