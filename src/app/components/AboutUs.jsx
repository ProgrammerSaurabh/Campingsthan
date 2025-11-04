import { Users, Award, Heart } from 'lucide-react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section
      className='py-20 px-4 md:px-12 lg:px-24 bg-linear-to-b from-[hsl(0,0%,20.78%)] to-[hsl(0,0%,15%)]'
      aria-labelledby='about-heading'
      id='about-us'
    >
      <div className='max-w-7xl mx-auto'>
        <h2
          id='about-heading'
          className='text-5xl font-bold text-center mb-4'
        >
          About Us
        </h2>
        <p className='text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto'>
          Your serene escape under the stars, nestled in nature's lap
        </p>

        <article className='grid lg:grid-cols-2 gap-12 items-start mb-16'>
          <figure className='relative h-150 rounded-3xl overflow-hidden shadow-2xl'>
            <Image
              src='/media/IMG_0937.jpg'
              alt='Campingsthan glamping tents at Pawna Lake'
              width={800}
              height={600}
              className='object-cover'
              priority
              decoding='async'
              quality={[100, 75]}
            />
          </figure>

          <div className='space-y-6'>
            <p className='text-lg text-gray-300 leading-relaxed'>
              Nestled beside the serene waters of Pawna Lake,{' '}
              <strong>Campingsthan</strong> is your gateway to tranquility and
              timeless memories. Here, the whisper of the wind, the shimmer of
              the lake, and the majesty of the Sahyadri hills come together to
              create a perfect escape from the chaos of everyday life.
            </p>

            <p className='text-lg text-gray-300 leading-relaxed mt-4'>
              Every glamping triangle and tent at Campingsthan is designed with
              care—merging the raw beauty of nature with the comfort of modern
              amenities. Whether you’re gazing at the stars through your tent
              window or enjoying freshly prepared meals by the bonfire, every
              detail is crafted to help you reconnect—with yourself, your loved
              ones, and the outdoors.
            </p>

            <blockquote className='border-l-4 border-primary pl-6 italic text-gray-300 mt-6'>
              "At Campingsthan, our mission is to create seamless, soulful
              experiences beneath open skies—where guests enjoy comfort, local
              flavors, and unforgettable adventures in nature’s embrace."
            </blockquote>

            <p className='text-lg text-gray-300 leading-relaxed mt-4'>
              Managed with heart by a passionate local team, Campingsthan has
              become one of Maharashtra’s most loved glamping destinations. We
              welcome{' '}
              <strong>
                families, couples, solo travelers, corporate groups, and
                adventure enthusiasts
              </strong>{' '}
              alike to immerse themselves in the magic of lakeside living.
            </p>
          </div>
        </article>

        <div
          className='grid md:grid-cols-3 gap-8'
          role='list'
        >
          {[
            {
              icon: Heart,
              title: 'Our Vision',
              text: 'To create joyful, authentic outdoor experiences—where nature, connection and simplicity blend effortlessly.',
            },
            {
              icon: Award,
              title: 'Our Promise',
              text: 'Quality stays, unlimited food, curated activities, and memories that last a lifetime.',
            },
            {
              icon: Users,
              title: 'Our Community',
              text: 'A warm, welcoming space for families, couples, and adventure seekers from all walks of life.',
            },
          ].map((item, idx) => (
            <article
              key={idx}
              className='bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20'
              role='listitem'
            >
              <item.icon
                className='w-12 h-12 mx-auto mb-4 text-accent'
                aria-hidden='true'
              />
              <h3 className='text-xl font-bold mb-3'>{item.title}</h3>
              <p className='text-gray-300'>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
