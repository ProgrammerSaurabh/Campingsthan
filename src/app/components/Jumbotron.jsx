'use client';

import { Gauge, Phone, Star, Users2 } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { contact } from '@/lib/site';

const stats = [
  { value: '5k+', label: 'Happy Campers', icon: Users2 },
  { label: 'Rating', icon: Star },
  { value: '100+', label: 'Max Capacity', icon: Gauge },
];

const Jumbotron = ({ onClick = () => null, rating = null }) => {
  const [phone] = contact.phones;

  return (
    <div className='relative z-10 flex h-full items-center px-4 md:px-8'>
      <div className='mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16'>
        <div className='text-center lg:text-left'>
          <div className='bg-primary mb-6 flex size-16 items-center justify-center rounded-2xl shadow-2xl mx-auto lg:mx-0 lg:size-20'>
            <Image
              src='/media/campingsthan-logo.png'
              alt='Campingsthan Logo'
              width={80}
              height={80}
              className='h-auto w-auto'
              loading='eager'
              decoding='async'
              priority
            />
          </div>

          <h1 className='mb-3 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl'>
            Campingsthan
            <span className='sr-only'>
              Discover the Best Camping & Glamping Experiences in India
            </span>
          </h1>

          <p className='text-primary mb-4 text-xl font-light sm:text-2xl md:text-3xl'>
            Escape to Nature | Glamping & Camping
          </p>

          <p className='text-muted-foreground mx-auto mb-8 max-w-xl text-base sm:text-lg lg:mx-0'>
            Experience tranquility at Pawna Lake with our luxury glamping
            triangles and camping tents. Limited to 50-60 guests for a private
            experience.
          </p>

          <div className='flex flex-wrap items-center justify-center gap-3 lg:justify-start'>
            <Button asChild size='lg'>
              <a href={`tel:${phone.tel}`} aria-label='Call now'>
                <Phone aria-hidden='true' />
                <span>Call now</span>
              </a>
            </Button>

            <Button size='lg' onClick={onClick} aria-label='Book via WhatsApp'>
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
        </div>

        <div
          className='grid grid-cols-3 gap-3 sm:gap-4'
          aria-label='Campingsthan statistics'
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className='surface-glass rounded-2xl p-4 text-center sm:p-6'
            >
              <stat.icon
                className='text-primary mx-auto mb-2 size-7 sm:size-8'
                aria-hidden='true'
              />
              <data
                value={stat.value}
                className='text-primary block text-xl font-bold sm:text-2xl md:text-3xl'
              >
                {stat.label === 'Rating' ? rating ?? '4.6 (130)' : stat.value}
              </data>
              <div className='text-muted-foreground mt-1 text-xs sm:text-sm'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;