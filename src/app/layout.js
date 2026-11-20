import './globals.css';
import Script from 'next/script';

const GTM_ID = process.env.GTM_ID;
const IS_VALID_GTM_ID = /^GTM-[A-Z0-9]+$/i.test(GTM_ID || '');

export const metadata = {
  title: 'Campingsthan - Luxury Glamping & Camping at Pawna Lake, Maharashtra',
  description:
    'Experience luxury glamping and camping at Pawna Lake. Enjoy bonfire nights, stargazing, kayaking, and unlimited food. Book your private camping experience now!',
  keywords:
    'camping pawna lake, glamping maharashtra, pawna lake camping, lonavala camping, weekend getaway, luxury camping, pawna lake tents, capcut camping vlog, glamping india',
  openGraph: {
    title:
      'Campingsthan - Luxury Glamping & Camping at Pawna Lake, Maharashtra',
    description:
      'Experience tranquility at Pawna Lake with luxury glamping triangles and camping tents. Capacity of 100+ guests.',
    images: [
      {
        url: 'https://www.campingsthan.com/media/IMG_9879.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury Glamping at Pawna Lake - Campingsthan',
      },
      {
        url: 'https://www.campingsthan.com/media/IMG_9882.jpg',
        width: 1080,
        height: 1080,
        alt: 'Bonfire & Lakeside Tents - Campingsthan',
      },
    ],
    type: 'website',
    url: 'https://www.campingsthan.com',
    siteName: 'Campingsthan',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Campingsthan - Luxury Glamping & Camping at Pawna Lake',
    description:
      'Glamp at Pawna Lake with bonfires, kayaking, stargazing & unlimited food. Book your private lakeside stay now!',
    images: [
      'https://www.campingsthan.com/media/IMG_9879.jpg',
      'https://www.campingsthan.com/media/IMG_9882.jpg',
    ],
  },
  alternates: {
    canonical: 'https://www.campingsthan.com',
  },
  metadataBase: new URL('https://www.campingsthan.com'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#ED6A10',
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />

        <meta
          name='apple-mobile-web-app-title'
          content='Campingsthan'
        />

        <meta
          name='msapplication-TileColor'
          content='#ED6A10'
        />
        {IS_VALID_GTM_ID && (
          <Script id="google-tag-manager" strategy="afterInteractive">
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
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
