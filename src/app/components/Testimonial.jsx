'use client';

import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export default function TestimonialSection({ testimonials = [] }) {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section
      className='bg-background section-pad px-4 md:px-8'
      aria-labelledby='testimonials-heading'
      id='testimonials'
    >
      <div className='mx-auto max-w-4xl'>
        <div className='mb-10 text-center'>
          <h2
            id='testimonials-heading'
            className='text-3xl font-extrabold sm:text-4xl md:text-5xl'
          >
            What Our Guests Say
          </h2>
          <p className='text-muted-foreground mt-3 text-base sm:text-lg'>
            Real experiences from real campers
          </p>
        </div>

        <Carousel opts={{ align: 'start', loop: true }}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className='sm:basis-1/2 lg:basis-1/3'>
                <Card className='h-full'>
                  <CardContent className='relative flex h-full flex-col p-6 text-center'>
                    <div className='flex flex-col items-center gap-4 sm:flex-row sm:text-left'>
                      <figure className='relative shrink-0'>
                        <Image
                          src={testimonial.profile_photo_url}
                          alt=''
                          width={72}
                          height={72}
                          className='border-primary size-16 rounded-full border-2 object-cover shadow-lg sm:size-18'
                          loading='lazy'
                          decoding='async'
                        />
                        <span
                          className='bg-primary absolute -top-1 -right-1 rounded-full p-1 shadow-lg'
                          aria-hidden='true'
                        >
                          <Quote className='size-3 text-white' />
                        </span>
                      </figure>

                      <div className='min-w-0'>
                        {testimonial.rating && (
                          <div
                            className='mb-2 flex justify-center gap-0.5 sm:justify-start'
                            role='img'
                            aria-label={`${testimonial.rating} out of 5 stars`}
                          >
                            {Array.from({ length: testimonial.rating }).map(
                              (_, i) => (
                                <Star
                                  key={i}
                                  className='text-primary size-4'
                                  aria-hidden='true'
                                  fill='currentColor'
                                />
                              )
                            )}
                          </div>
                        )}

                        <blockquote className='text-muted-foreground text-sm leading-relaxed italic'>
                          "{testimonial.text}"
                        </blockquote>

                        <figcaption className='mt-3 text-base font-bold'>
                          {testimonial.author_name}
                        </figcaption>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}