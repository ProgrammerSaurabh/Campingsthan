'use client';

import { Gauge, Phone, Star, Users2 } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { value: '5k+', label: 'Happy Campers', icon: Users2 },
  { label: 'Rating', icon: Star },
  { value: '100+', label: 'Max Capacity', icon: Gauge },
];

const Jumbotron = ({ onClick = () => null, rating = null }) => {
  return (
    <div className='relative z-10 h-full flex items-center px-4 md:px-12 lg:px-24'>
      <div className='max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center'>
        <div>
          <div className='w-20 h-20 mb-6 bg-accent rounded-2xl flex items-center justify-center shadow-2xl'>
            <Image
              src='/media/campingsthan-logo.png'
              alt='Campingsthan Logo'
              width={80}
              height={80}
              className='h-auto w-auto'
              loading='eager'
              decoding='async'
              priority
              aria-hidden='false'
            />
          </div>

          <h1 className='text-5xl md:text-7xl font-bold mb-4 leading-tight'>
            Campingsthan
          </h1>

          <p className='text-2xl md:text-3xl text-gray-300 font-light mb-8'>
            Escape to Nature | Glamping & Camping
          </p>

          <p className='text-lg text-gray-400 mb-8 max-w-xl'>
            Experience tranquility at Pawna Lake with our luxury glamping
            triangles and camping tents. Limited to 50-60 guests for a private
            experience.
          </p>

          <div className='flex gap-2'>
            <a
              href='tel:7558640623'
              className='cursor-pointer px-8 py-4 bg-accent hover:bg-accent/90 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg flex justify-center items-center gap-2  text-white!'
              aria-label='Call now'
            >
              <Phone />
              <span>Call now</span>
            </a>

            <button
              onClick={onClick}
              className='cursor-pointer px-8 py-4 bg-accent hover:bg-accent/90 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg flex justify-center items-center gap-2'
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
        </div>

        <aside
          className='grid grid-cols-3 gap-2'
          aria-label='Campingsthan statistics'
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className='bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20'
            >
              {stat.icon && (
                <stat.icon
                  className='w-8 h-8 mx-auto mb-3 text-accent'
                  aria-hidden='true'
                />
              )}
              <data
                value={stat.value}
                className='text-xl md:text-3xl font-bold text-accent block'
              >
                {stat.label === 'Rating' ? rating ?? '4.6 (130)' : stat.value}
              </data>
              <div className='text-sm text-gray-300 mt-1'>{stat.label}</div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
};

export default Jumbotron;
