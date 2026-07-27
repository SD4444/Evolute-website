import { type NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  /**
   * Redirects for URLs that existed on the Framer site but not here, so the
   * domain switch does not 404 pages that are already indexed and linked.
   * 26 of the old 32 URLs carried over unchanged; these are the six that did not.
   * `permanent: true` emits a 308, which search engines treat as permanent.
   */
  async redirects() {
    return [
      // The investor services section was dropped.
      {
        destination: "/services",
        permanent: true,
        source: "/services/investors/:path*",
      },
      // Per-person contact pages were dropped. Wildcarded because the old site
      // may have had person pages beyond the two still in its sitemap.
      // `:path+` not `:path*`: the latter also matches zero segments, which
      // makes /contact redirect to itself.
      {
        destination: "/contact",
        permanent: true,
        source: "/contact/:path+",
      },
      // Slug cleanup: dropped the period after "inc" and the curly apostrophe.
      // Matching the apostrophe literally fails (the request arrives
      // percent-encoded as %E2%80%99), so match the ASCII prefix and swallow
      // the rest of the segment.
      {
        destination: "/insights/eu-inc-europes-28th-regime-and-the-quest-for-scale",
        permanent: true,
        source: "/insights/eu-inc.-europe:rest(.*)",
      },
    ];
  },
};

export default nextConfig;
