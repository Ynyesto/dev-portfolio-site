import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security headers to improve Lighthouse scores
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Cache optimization headers
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Specific headers for static assets
      {
        source: "/(.*)\\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance optimizations
  experimental: {
    optimizePackageImports: ["@next/font"],
    // Reduce main thread blocking
    optimizeServerReact: true,
  },

  // Compression
  compress: true,

  // Powered by header removal
  poweredByHeader: false,

  // Bundle analyzer for optimization insights
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // More aggressive modern browser targeting
      config.target = ["web", "es2022"];

      // Better chunk splitting and tree shaking
      config.optimization.splitChunks = {
        chunks: "all",
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          default: {
            minChunks: 1,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            priority: -10,
            reuseExistingChunk: true,
          },
          // Separate large libraries
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: "react",
            chunks: "all",
            priority: 10,
          },
          // Separate font libraries
          fonts: {
            test: /[\\/]node_modules[\\/](@next[\\/]font|@fontsource)[\\/]/,
            name: "fonts",
            chunks: "all",
            priority: 10,
          },
        },
      };

      // Enable tree shaking
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;

      // Reduce bundle size
      config.optimization.minimize = true;
    }
    return config;
  },
};

export default nextConfig;
