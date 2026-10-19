/** @type {import('next').NextConfig} */

// React's development build evaluates code for its debugging tools, so the dev
// server needs 'unsafe-eval'. Production never does - it stays locked down.
const isDev = process.env.NODE_ENV !== 'production';

// Baseline security headers. Kept in sync with what a static marketing site
// needs: no framing, no sniffing, a locked-down referrer and permissions
// policy, and a CSP that only allows this site's own assets plus the two
// third parties the page actually uses (Google Maps and Google Analytics).
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(self)',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "object-src 'none'",
      "img-src 'self' data: blob: https://*.googleusercontent.com https://*.ggpht.com https://www.googletagmanager.com https://*.google-analytics.com",
      "media-src 'self' blob:",
      `script-src 'self' 'unsafe-inline'${
        isDev ? " 'unsafe-eval'" : ''
      } https://maps.googleapis.com https://maps.gstatic.com https://www.googletagmanager.com`,
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      "connect-src 'self' https://maps.googleapis.com https://maps.gstatic.com https://*.googleapis.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
      "frame-src 'self' https://www.google.com https://maps.google.com https://www.googletagmanager.com",
      "upgrade-insecure-requests",
    ].join('; '),
  },
];

const nextConfig = {
  reactCompiler: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/media/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;