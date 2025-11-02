import { Lato } from 'next/font/google';
import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
});

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
      <body className={`${lato.className}`}>{children}</body>
    </html>
  );
}
