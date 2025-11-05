import './globals.css';

export const metadata = {
  title: 'Campingsthan - Luxury Glamping & Camping at Pawna Lake, Maharashtra',
  description:
    'Experience luxury glamping and camping at Pawna Lake. Enjoy bonfire nights, stargazing, kayaking, and unlimited food. Book your private camping experience now!',
  keywords:
    'camping pawna lake, glamping maharashtra, pawna lake camping, lonavala camping, weekend getaway, luxury camping',
  openGraph: {
    title: 'Campingsthan - Luxury Glamping at Pawna Lake',
    description:
      'Experience tranquility at Pawna Lake with luxury glamping triangles and camping tents. Limited to 50-60 guests.',
    images: ['/media/IMG_9879.jpg'],
    type: 'website',
    url: 'https://www.campingsthan.com',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://www.campingsthan.com',
  },
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

        <title>Campingsthan</title>
        <meta
          name='description'
          content='Find, explore, and book the best camping, glamping, and outdoor stays across India. Experience nature with Campingsthan.'
        />

        <meta
          name='apple-mobile-web-app-title'
          content='Campingsthan'
        />

        <link
          rel='icon'
          href='/favicon.ico'
          sizes='any'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link
          rel='manifest'
          href='/site.webmanifest'
        />
        <link
          rel='mask-icon'
          href='/safari-pinned-tab.svg'
          color='#ED6A10'
        />
        <meta
          name='msapplication-TileColor'
          content='#ED6A10'
        />
        <meta
          name='theme-color'
          content='#ED6A10'
        />

        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://campingsthan.com'
        />
        <meta
          property='og:title'
          content='Campingsthan | Discover the Best Camping Spots in India'
        />
        <meta
          property='og:description'
          content='Explore and book camping and glamping experiences across India with Campingsthan.'
        />
        <meta
          property='og:image'
          content='https://campingsthan.com/og-image.jpg'
        />

        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          name='twitter:url'
          content='https://campingsthan.com'
        />
        <meta
          name='twitter:title'
          content='Campingsthan | Discover the Best Camping Spots in India'
        />
        <meta
          name='twitter:description'
          content='Explore and book camping and glamping experiences across India with Campingsthan.'
        />
        <meta
          name='twitter:image'
          content='https://campingsthan.com/og-image.jpg'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
