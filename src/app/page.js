'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import TestimonialSection from './components/Testimonial';
import Jumbotron from './components/Jumbotron';
import Stays from './components/Stays';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Image from 'next/image';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Campingsthan',
  description:
    'Luxury glamping and camping experience at Pawna Lake, Maharashtra. Limited to 50-60 guests for a private experience.',
  image: 'https://www.campingsthan.com/images/glamp1.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'JFMW+MHQ, Thakursai-Aajiwali Road, Gevhande Khadak',
    addressLocality: 'Pawna Lake',
    addressRegion: 'Maharashtra',
    postalCode: '412108',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.7,
    longitude: 73.4,
  },
  hasMap:
    'https://www.google.com/maps?q=JFMW%2BMHQ,+Gevhande+Khadak,+Maharashtra+412108&output=embed',
  telephone: '+91-7558640623',
  email: 'campingsthan@gmail.com',
  priceRange: '₹849 - ₹1499',
  starRating: {
    '@type': 'Rating',
    ratingValue: '4.8',
    bestRating: '5',
  },
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Free Wifi',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Parking Facility',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Bonfire Area',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Lake View',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Outdoor Games',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Boating & Kayaking',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Private Sitting Area',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Shared Washrooms',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Power Backup',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'DJ & Live Music Nights',
      value: true,
    },
  ],
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
  const [modalImages, setModalImages] = useState([]);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  const [formData, setFormData] = useState({
    type: 'glamping',
    date: new Date().toISOString().split('T')[0],
    name: '',
    email: '',
    message: '',
    adults: '',
    childs510: '',
    childs05: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const heroRef = useRef(null);

  const [rating, setRating] = useState(null);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function fetchRating() {
      try {
        const res = await fetch('/api/google-rating');
        const data = await res.json();

        setRating(`${data.rating} (${data.userRatingsTotal})`);

        setTestimonials(data.reviews);
      } catch (err) {}
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (bookingModalOpen || galleryModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [bookingModalOpen, galleryModalOpen]);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      errors.email = 'Valid email is required';
    if (!formData.adults.trim() || parseInt(formData.adults) < 1)
      errors.adults = 'At least one adult is required';
    if (parseInt(formData.adults) > 10)
      errors.adults = 'Maximum 10 adults allowed';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const whatsappNumber = '917558640623';

      const message = encodeURIComponent(
        `New Booking Request\n\nType: ${
          formData.type.charAt(0).toUpperCase() + formData.type.slice(1)
        }\nDate: ${formData.date}\nName: ${formData.name}\nEmail: ${
          formData.email
        }\nAdults: ${formData.adults}\nChildren (5-10): ${
          formData.childs510 || 0
        }\nChildren (0-5): ${formData.childs05 || 0}`
      );

      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
      setBookingModalOpen(false);
    }
  };

  const handleBooking = () => {
    setBookingModalOpen(true);
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className='bg-[hsl(0,0%,20.78%)] text-white'>
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-white px-4 py-2 rounded'
        >
          Skip to main content
        </a>

        <header
          ref={heroRef}
          className='relative h-screen overflow-hidden'
          role='banner'
        >
          {/* <Image
            src='/media/IMG_9879.JPG'
            className='absolute inset-0 w-full h-full object-cover opacity-50'
          /> */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className='absolute inset-0 w-full h-full object-cover opacity-50'
            aria-hidden='true'
          >
            <source
              src='/media/home-video.mov'
              type='video/mp4'
            />
            <track kind='captions' />
          </video>

          <div
            className='absolute inset-0 bg-linear-to-br from-black/70 via-black/50 to-black/70'
            aria-hidden='true'
          />

          <Jumbotron
            onClick={handleBooking}
            rating={rating}
          />
        </header>

        {showFloatingCTA && (
          <div className='flex flex-col gap-2 fixed bottom-8 right-8 z-50'>
            <a
              href='tel:7558640623'
              className='cursor-pointer px-8 py-4 bg-accent hover:bg-accent/90 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl text-md flex justify-center items-center gap-2  text-white!'
              aria-label='Call now'
            >
              <Phone />
              <span>Call now</span>
            </a>
            <button
              onClick={handleBooking}
              className='cursor-pointer px-6 py-3 bg-accent hover:bg-accent/90 rounded-full font-semibold shadow-2xl transition-all duration-300 transform hover:scale-110 flex justify-center items-center gap-2'
              aria-label='Book your camping experience via WhatsApp'
            >
              <img
                src='/media/whatsapp.svg'
                alt='WhatsApp Icon'
                width={20}
                height={20}
                className='w-5 h-5'
                loading='lazy'
                decoding='async'
                aria-hidden='true'
              />
              <span>Book Now</span>
            </button>
          </div>
        )}

        <main id='main-content'>
          <Stays
            setCurrentImageIndex={setCurrentImageIndex}
            setModalImages={setModalImages}
            setGalleryModalOpen={setGalleryModalOpen}
          />

          <Gallery
            setCurrentImageIndex={setCurrentImageIndex}
            setModalImages={setModalImages}
            setGalleryModalOpen={setGalleryModalOpen}
          />

          <AboutUs />

          <TestimonialSection testimonials={testimonials} />

          <ContactUs />
        </main>

        <Footer />

        {bookingModalOpen && (
          <div
            className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm'
            role='dialog'
            aria-modal='true'
            aria-labelledby='booking-modal-title'
          >
            <div className='bg-[hsl(0,0%,25%)] rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto'>
              <div className='sticky top-0 bg-[hsl(0,0%,25%)] p-6 border-b border-gray-700 flex justify-between items-center z-10'>
                <h2
                  id='booking-modal-title'
                  className='text-3xl font-bold'
                >
                  Book Your Stay
                </h2>
                <button
                  onClick={() => setBookingModalOpen(false)}
                  className='p-2 hover:bg-gray-700 rounded-full transition-colors'
                  aria-label='Close booking modal'
                >
                  <X
                    className='w-6 h-6'
                    aria-hidden='true'
                  />
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className='p-8 pt-0 space-y-6'
              >
                <div className='flex justify-center items-center gap-2 w-full'>
                  <button
                    className={`cursor-pointer px-5 py-4 rounded-full text-sm flex-1 ${
                      formData.type === 'glamping' ? 'bg-accent' : 'bg-white/10'
                    }`}
                    type='button'
                    onClick={() =>
                      setFormData({ ...formData, type: 'glamping' })
                    }
                  >
                    Glamping Triangle
                  </button>
                  <button
                    className={`cursor-pointer px-5 py-4 rounded-full text-sm flex-1 ${
                      formData.type === 'classic' ? 'bg-accent' : 'bg-white/10'
                    }`}
                    type='button'
                    onClick={() =>
                      setFormData({ ...formData, type: 'classic' })
                    }
                  >
                    Standard Camping Tent
                  </button>
                </div>

                <div>
                  <label
                    htmlFor='booking-date'
                    className='block text-sm font-medium mb-2'
                  >
                    Check-in Date *
                  </label>
                  <input
                    id='booking-date'
                    type='date'
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    min={new Date().toISOString().split('T')[0]}
                    className='w-full px-4 py-3 rounded-xl bg-secondary border border-gray-700 focus:border-primary focus:outline-none transition-colors'
                    required
                    aria-required='true'
                  />
                </div>

                <div>
                  <label
                    htmlFor='adults'
                    className='block text-sm font-medium mb-2'
                  >
                    Adults (Maximum 10) *
                  </label>
                  <input
                    id='adults'
                    type='number'
                    min='1'
                    max='10'
                    value={formData.adults}
                    onChange={(e) =>
                      setFormData({ ...formData, adults: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl bg-secondary border ${
                      formErrors.adults ? 'border-red-500' : 'border-gray-700'
                    } focus:border-primary focus:outline-none transition-colors`}
                    required
                    aria-required='true'
                    aria-invalid={!!formErrors.adults}
                    aria-describedby={
                      formErrors.adults ? 'adults-error' : undefined
                    }
                  />
                  {formErrors.adults && (
                    <p
                      id='adults-error'
                      className='text-red-400 text-sm mt-1'
                      role='alert'
                    >
                      {formErrors.adults}
                    </p>
                  )}
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='childs510'
                      className='block text-sm font-medium mb-2'
                    >
                      Children 5-10 years (50% charge)
                    </label>
                    <input
                      id='childs510'
                      type='number'
                      min='0'
                      value={formData.childs510}
                      onChange={(e) =>
                        setFormData({ ...formData, childs510: e.target.value })
                      }
                      className='w-full px-4 py-3 rounded-xl bg-secondary border border-gray-700 focus:border-primary focus:outline-none transition-colors'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='childs05'
                      className='block text-sm font-medium mb-2'
                    >
                      Children 0-5 years (Free)
                    </label>
                    <input
                      id='childs05'
                      type='number'
                      min='0'
                      value={formData.childs05}
                      onChange={(e) =>
                        setFormData({ ...formData, childs05: e.target.value })
                      }
                      className='w-full px-4 py-3 rounded-xl bg-secondary border border-gray-700 focus:border-primary focus:outline-none transition-colors'
                    />
                  </div>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='booking-name'
                      className='block text-sm font-medium mb-2'
                    >
                      Full Name *
                    </label>
                    <input
                      id='booking-name'
                      type='text'
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl bg-secondary border ${
                        formErrors.name ? 'border-red-500' : 'border-gray-700'
                      } focus:border-primary focus:outline-none transition-colors`}
                      placeholder='John Doe'
                      required
                      aria-required='true'
                      aria-invalid={!!formErrors.name}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='booking-email'
                      className='block text-sm font-medium mb-2'
                    >
                      Email *
                    </label>
                    <input
                      id='booking-email'
                      type='email'
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl bg-secondary border ${
                        formErrors.email ? 'border-red-500' : 'border-gray-700'
                      } focus:border-primary focus:outline-none transition-colors`}
                      placeholder='john@example.com'
                      required
                      aria-required='true'
                      aria-invalid={!!formErrors.email}
                    />
                  </div>
                </div>

                <aside
                  className='bg-accent/20 rounded-2xl p-6 border border-primary/30'
                  aria-label='Booking policies'
                >
                  <h3 className='font-semibold mb-3'>Booking Information</h3>
                  <ul className='space-y-2 text-sm text-gray-300'>
                    <li>• Check-in: 4:00 PM | Check-out: 10:00 AM</li>
                    <li>• 50% advance payment required</li>
                    <li>• Valid government ID required at check-in</li>
                    <li>• Children 0-5 years: FREE | 5-10 years: 50% charge</li>
                    <li>
                      • Cancellation: 7+ days = 70% refund, 5 days = 50% refund
                    </li>
                  </ul>
                </aside>

                <button
                  type='submit'
                  className='cursor-pointer w-full py-4 bg-accent hover:bg-accent/90 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg text-lg flex justify-center items-center gap-2'
                  aria-label='Confirm booking via WhatsApp'
                >
                  <img
                    src='/media/whatsapp.svg'
                    alt='WhatsApp Icon'
                    width={20}
                    height={20}
                    className='w-5 h-5'
                    loading='lazy'
                    decoding='async'
                    aria-hidden='true'
                  />
                  <span>Confirm Booking</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {galleryModalOpen && (
          <div
            className='fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm'
            role='dialog'
            aria-modal='true'
            aria-label='Gallery image viewer'
            onClick={(e) => {
              if (e.target === e.currentTarget) setGalleryModalOpen(false);
            }}
          >
            <button
              onClick={() => setGalleryModalOpen(false)}
              className='absolute top-4 right-4 p-3 hover:bg-white/10 rounded-full transition-colors z-10'
              aria-label='Close gallery'
            >
              <X
                className='w-8 h-8'
                aria-hidden='true'
              />
            </button>

            <button
              onClick={() =>
                setCurrentImageIndex(
                  (prev) => (prev - 1 + modalImages.length) % modalImages.length
                )
              }
              className='absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors'
              aria-label='Previous image'
            >
              <ChevronLeft
                className='w-8 h-8'
                aria-hidden='true'
              />
            </button>

            <figure className='max-w-5xl max-h-[80vh]'>
              <Image
                src={modalImages[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1} of ${
                  modalImages.length
                }`}
                fill
                className='object-contain rounded-2xl shadow-2xl'
                priority
                decoding='async'
                loading='eager'
                unoptimized={false}
              />
              <figcaption className='sr-only'>
                Gallery image {currentImageIndex + 1} of {modalImages.length}
              </figcaption>
            </figure>

            <button
              onClick={() =>
                setCurrentImageIndex((prev) => (prev + 1) % modalImages.length)
              }
              className='absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors'
              aria-label='Next image'
            >
              <ChevronRight
                className='w-8 h-8'
                aria-hidden='true'
              />
            </button>

            <div
              className='absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-lg font-medium bg-black/50 px-4 py-2 rounded-full'
              role='status'
              aria-live='polite'
            >
              {currentImageIndex + 1} / {modalImages.length}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
