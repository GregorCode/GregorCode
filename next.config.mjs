/**
 * @type {import('next').NextConfig}
 */
import path from 'path';
import nextTranslate from 'next-translate';

const nextConfig = {
  ...nextTranslate(),
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/styles')],
  },
  env: {
    COMMENT_BLOG: 'GregorCode/comentarios-del-blog',
  },
};

export default nextConfig;
