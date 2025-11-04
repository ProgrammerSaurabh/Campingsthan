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
    images: ['https://www.campingsthan.com/images/glamp1.png'],
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
          color='#5bbad5'
        />
        <meta
          name='msapplication-TileColor'
          content='#da532c'
        />
        <meta
          name='theme-color'
          content='#ffffff'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
