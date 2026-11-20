import { Outfit } from 'next/font/google';
import Script from 'next/script';

import './globals.css';

import { site } from '@/lib/site';

const GTM_ID = process.env.GTM_ID;
const IS_VALID_GTM_ID = /^GTM-[A-Z0-9]+$/i.test(GTM_ID || '');

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
      <head>
        {IS_VALID_GTM_ID && (
          <Script id='google-tag-manager' strategy='afterInteractive'>
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
      </head>
      <body>
        {IS_VALID_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
              title='Google Tag Manager'
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}