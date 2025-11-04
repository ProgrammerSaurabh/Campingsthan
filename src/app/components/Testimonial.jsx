import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Image from 'next/image';

export default function TestimonialSection({ testimonials = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    let interval = null;

    if (testimonials.length > 0) {
      clearInterval(interval);

      setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section
      className='py-20 px-4 md:px-12 lg:px-24 bg-linear-to-b from-[hsl(0,0%,15%)] to-[hsl(0,0%,20.78%)]'
      aria-labelledby='testimonials-heading'
      id='testimonials'
    >
      <div className='max-w-7xl mx-auto'>
        <h2
          id='testimonials-heading'
          className='text-5xl font-bold text-center mb-4 text-white'
        >
          What Our Guests Say
        </h2>
        <p className='text-center text-gray-400 mb-12 text-lg'>
          Real experiences from real campers
        </p>

        <div className='relative'>
          <article className='bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 min-h-[400px] flex items-center'>
            <div className='w-full'>
              <div className='flex flex-col md:flex-row items-center gap-8'>
                <figure className='shrink-0'>
                  <div className='relative'>
                    <Image
                      src={testimonials[currentIndex].profile_photo_url}
                      alt={testimonials[currentIndex].author_name}
                      width={128}
                      height={128}
                      className='rounded-full object-cover border-4 border-accent shadow-xl'
                      loading='lazy'
                      decoding='async'
                      priority={false}
                    />
                    <div
                      className='absolute -top-2 -right-2 bg-accent rounded-full p-2 shadow-lg'
                      aria-hidden='true'
                    >
                      <Quote className='w-6 h-6 text-white' />
                    </div>
                  </div>
                </figure>

                <div className='flex-1 text-center md:text-left'>
                  {testimonials[currentIndex]?.rating && (
                    <div
                      className='flex justify-center md:justify-start gap-1 mb-4'
                      role='img'
                      aria-label={`${testimonials[currentIndex].rating} out of 5 stars`}
                    >
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className='w-5 h-5 text-accent'
                            aria-hidden='true'
                            fill='hsl(26.7deg 87.21% 57.06%)'
                          />
                        )
                      )}
                    </div>
                  )}

                  <blockquote className='text-lg md:text-xl text-gray-200 mb-6 leading-relaxed italic'>
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  <figcaption>
                    <div className='text-2xl font-bold text-white mb-1'>
                      {testimonials[currentIndex].author_name}
                    </div>
                  </figcaption>
                </div>
              </div>
            </div>
          </article>

          <button
            onClick={goToPrevious}
            className='cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 p-3 md:p-4 bg-accent hover:bg-accent/90 rounded-full transition-all duration-300 shadow-2xl transform hover:scale-110'
            aria-label='Previous testimonial'
          >
            <ChevronLeft
              className='w-6 h-6 text-white'
              aria-hidden='true'
            />
          </button>

          <button
            onClick={goToNext}
            className='cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 p-3 md:p-4 bg-accent hover:bg-accent/90 rounded-full transition-all duration-300 shadow-2xl transform hover:scale-110'
            aria-label='Next testimonial'
          >
            <ChevronRight
              className='w-6 h-6 text-white'
              aria-hidden='true'
            />
          </button>

          <nav
            className='flex justify-center gap-2 mt-8'
            aria-label='Testimonial navigation'
          >
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-accent'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial from ${testimonial.name}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
