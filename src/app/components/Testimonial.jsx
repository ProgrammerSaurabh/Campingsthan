import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Absolutely magical experience! The glamping tents were luxurious and comfortable. The bonfire night and stargazing were unforgettable. The team was incredibly hospitable and the food was delicious. Perfect weekend getaway!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  },
  {
    name: 'Rahul Desai',
    location: 'Pune',
    rating: 5,
    text: 'Best camping experience ever! The location by Pawna Lake is stunning. Activities were well organized and the live music night was amazing. Great value for money. Highly recommend for couples and families.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
  {
    name: 'Anjali Patel',
    location: 'Ahmedabad',
    rating: 5,
    text: 'Perfect blend of adventure and comfort. The staff was friendly and attentive. Loved the morning nature walk and the sunset views. The tents were clean and well-maintained. Will definitely return with friends!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
  },
  {
    name: 'Vikram Singh',
    location: 'Delhi',
    rating: 5,
    text: 'Outstanding service and beautiful location! The unlimited food was tasty and varied. Kayaking and boating were highlights. The DJ party was so much fun. A must-visit for anyone looking to disconnect and unwind.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
  },
  {
    name: 'Sneha Reddy',
    location: 'Bangalore',
    rating: 5,
    text: 'Incredible experience with nature! The glamping triangles are gorgeous and Instagram-worthy. The team made us feel at home. Perfect for a romantic getaway. The starlit sky and peaceful atmosphere were exactly what we needed.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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
                    <img
                      src={testimonials[currentIndex].image}
                      alt={`${testimonials[currentIndex].name} from ${testimonials[currentIndex].location}`}
                      className='w-32 h-32 rounded-full object-cover border-4 border-accent shadow-xl'
                      loading='lazy'
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
                  <div
                    className='flex justify-center md:justify-start gap-1 mb-4'
                    role='img'
                    aria-label={`${testimonials[currentIndex].rating} out of 5 stars`}
                  >
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className='w-5 h-5 fill-accent text-accent'
                          aria-hidden='true'
                        />
                      )
                    )}
                  </div>

                  <blockquote className='text-lg md:text-xl text-gray-200 mb-6 leading-relaxed italic'>
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  <figcaption>
                    <div className='text-2xl font-bold text-white mb-1'>
                      {testimonials[currentIndex].name}
                    </div>
                    <p className='text-gray-400 flex items-center justify-center md:justify-start gap-2'>
                      <span
                        className='w-2 h-2 bg-accent rounded-full'
                        aria-hidden='true'
                      />
                      {testimonials[currentIndex].location}
                    </p>
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
