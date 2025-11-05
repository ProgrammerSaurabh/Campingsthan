import './globals.css';

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
      </head>
      <body>{children}</body>
    </html>
  );
}
