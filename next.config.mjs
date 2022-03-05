/**
 * @type {import('next').NextConfig}
 */
import path from 'path';

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join('src', 'styles')],
  },
};

export default nextConfig;
