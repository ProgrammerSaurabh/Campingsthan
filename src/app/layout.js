import { Outfit } from 'next/font/google';

import './globals.css';

import { site } from '@/lib/site';
import GoogleAnalytics from '@/components/google-analytics';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: site.keywords,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${site.url}/media/IMG_9879.jpg`,
        width: 1080,
        height: 608,
        alt: 'Glamping triangles at Campingsthan, Pawna Lake',
      },
      {
        url: `${site.url}/media/IMG_9900.jpg`,
        width: 1080,
        height: 608,
        alt: 'Guests at Campingsthan with Pawna Lake behind them',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [`${site.url}/media/IMG_9879.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ED6A10',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en-IN' className={outfit.variable}>
      <body>
        {children}
        <GoogleAnalytics
          measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
        />
      </body>
    </html>
  );
}