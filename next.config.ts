import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/profil",
        permanent: true,
      },
      {
        source: "/berita",
        destination: "/publikasi",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/kontak",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
