/** @type {import('next').NextConfig} */
const nextConfig = {
  // Images are pre-optimised WebP files in /public/images, so we serve them
  // as-is. This also keeps `next build`, `next start` and static export
  // working without the sharp dependency.
  images: { unoptimized: true },
};

export default nextConfig;
