/** @type {import('next').NextConfig} */
const nextConfig = {
  /*
   * Static export: the site is fully rendered at build time and goes to GitHub
   * Pages. There is no backend, so there is nothing to run on the server side.
   */
  output: 'export',
  trailingSlash: true,
  experimental: { globalNotFound: true },
  images: {
    /*
     * The next/image optimizer does not work with `output: 'export'`.
     */
    unoptimized: true,
  },
};

export default nextConfig;
