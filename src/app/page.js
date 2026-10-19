'use client';

import { useState, useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';

import TestimonialSection from './components/Testimonial';
import Jumbotron from './components/Jumbotron';
import Stays from './components/Stays';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import BookingModal from './components/BookingModal';
import GalleryLightbox from './components/GalleryLightbox';
import { Button } from '@/components/ui/button';
import { contact, site } from '@/lib/site';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: contact.phones[0].tel,
  email: contact.email,
  priceRange: site.priceRange,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '130',
    bestRating: '5',
  },
  amenityFeature: [
    'Free Wifi',
    'Parking Facility',
    'Bonfire Area',
    'Lake View',
    'Outdoor Games',
    'Boating & Kayaking',
    'Private Sitting Area',
    'Shared Washrooms',
    'Power Backup',
    'DJ & Live Music Nights',
  ].map((name) => ({
    '@type': 'LocationFeatureSpecification',
    name,
    value: true,
  })),
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '16:00',
    closes: '10:00',
  },
};

export default function CampingsthanWebsite() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  const [rating, setRating] = useState(null);
  const [testimonials, setTestimonials] = useState([]);

  const heroRef = useRef(null);

  useEffect(() => {
    async function fetchRating() {
      try {
        const res = await fetch('/api/google-rating');
        if (!res.ok) return;
        const data = await res.json();

        if (data.rating) {
          setRating(`${data.rating} (${data.userRatingsTotal})`);
        }
        if (Array.isArray(data.reviews)) {
          setTestimonials(data.reviews);
        }
      } catch {
        // The rating block falls back to a static value; nothing else depends on it.
      }
    }

    fetchRating();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setShowFloatingCTA(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryProps = {
    setCurrentImageIndex,
    setModalImages,
    setGalleryModalOpen,
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <a
        href='#main-content'
        className='bg-primary sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 rounded px-4 py-2 text-white'
      >
        Skip to main content
      </a>

      <header
        ref={heroRef}
        className='relative h-screen overflow-hidden'
        role='banner'
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute inset-0 h-full w-full object-cover opacity-20'
          aria-hidden='true'
        >
          <source src='/media/home-video.mp4' type='video/mp4' />
          <track kind='captions' />
        </video>

        <div
          className='absolute inset-0 bg-linear-to-br from-black/70 via-black/50 to-black/70'
          aria-hidden='true'
        />

        <Jumbotron
          onClick={() => setBookingModalOpen(true)}
          rating={rating}
        />
      </header>

      {showFloatingCTA && (
        <div className='fixed right-4 bottom-4 z-50 flex flex-col gap-2 sm:right-8 sm:bottom-8'>
          <Button asChild size='lg' className='shadow-2xl'>
            <a
              href={`tel:${contact.phones[0].tel}`}
              aria-label='Call now'
            >
              <Phone aria-hidden='true' />
              <span>Call now</span>
            </a>
          </Button>

          <Button
            size='lg'
            className='shadow-2xl'
            onClick={() => setBookingModalOpen(true)}
            aria-label='Book your camping experience via WhatsApp'
          >
            <img
              src='/media/whatsapp.svg'
              alt='WhatsApp Icon'
              width={20}
              height={20}
              className='size-5'
              loading='lazy'
              decoding='async'
              aria-hidden='true'
            />
            <span>Book Now</span>
          </Button>
        </div>
      )}

      <main id='main-content'>
        <Stays {...galleryProps} />
        <Gallery {...galleryProps} />
        <AboutUs />
        <TestimonialSection testimonials={testimonials} />
        <ContactUs />
      </main>

      <Footer />

      <BookingModal
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
      />

      <GalleryLightbox
        open={galleryModalOpen}
        onOpenChange={setGalleryModalOpen}
        images={modalImages}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
      />
    </>
  );
}