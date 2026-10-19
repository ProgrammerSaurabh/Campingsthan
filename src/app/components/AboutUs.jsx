import { Award, Heart, Users } from 'lucide-react';

import Media from '@/components/media';
import { Card, CardContent } from '@/components/ui/card';

const values = [
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
];

const AboutUs = () => {
  return (
    <section
      className='bg-card section-pad px-4 md:px-8'
      aria-labelledby='about-heading'
      id='about-us'
    >
      <div className='mx-auto max-w-7xl'>
        <div className='mb-10 text-center'>
          <h2
            id='about-heading'
            className='text-3xl font-extrabold sm:text-4xl md:text-5xl'
          >
            About Us
          </h2>
          <p className='text-muted-foreground mx-auto mt-3 max-w-3xl text-base sm:text-lg'>
            Your serene escape under the stars, nestled in nature's lap
          </p>
        </div>

        <article className='mb-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-14'>
          <figure className='overflow-hidden rounded-3xl shadow-2xl'>
            <Media
              src='/media/IMG_0937.jpg'
              alt='Glamping triangles lined up on the lawn at Campingsthan, Pawna Lake'
              sizes='(max-width: 1023px) 100vw, 50vw'
              priority
              imageClassName='h-auto w-full'
            />
          </figure>

          <div className='space-y-5'>
            <p className='text-muted-foreground text-base leading-relaxed sm:text-lg'>
              Nestled beside the serene waters of Pawna Lake,{' '}
              <strong className='text-foreground'>Campingsthan</strong> is your
              gateway to tranquility and timeless memories. Here, the whisper of
              the wind, the shimmer of the lake, and the majesty of the Sahyadri
              hills come together to create a perfect escape from the chaos of
              everyday life.
            </p>

            <p className='text-muted-foreground text-base leading-relaxed sm:text-lg'>
              Every glamping triangle and tent at Campingsthan is designed with
              care—merging the raw beauty of nature with the comfort of modern
              amenities. Whether you’re gazing at the stars through your tent
              window or enjoying freshly prepared meals by the bonfire, every
              detail is crafted to help you reconnect.
            </p>

            <blockquote className='border-primary text-muted-foreground border-l-4 pl-5 italic'>
              "At Campingsthan, our mission is to create seamless, soulful
              experiences beneath open skies—where guests enjoy comfort, local
              flavors, and unforgettable adventures in nature’s embrace."
            </blockquote>

            <p className='text-muted-foreground text-base leading-relaxed sm:text-lg'>
              Managed with heart by a passionate local team, Campingsthan has
              become one of Maharashtra’s most loved glamping destinations. We
              welcome{' '}
              <strong className='text-foreground'>
                families, couples, solo travellers, corporate groups, and
                adventure enthusiasts
              </strong>{' '}
              alike.
            </p>
          </div>
        </article>

        <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
          {values.map((item) => (
            <Card key={item.title} className='text-center'>
              <CardContent className='p-6'>
                <item.icon
                  className='text-primary mx-auto mb-4 size-10'
                  aria-hidden='true'
                />
                <h3 className='mb-2 text-lg font-bold sm:text-xl'>
                  {item.title}
                </h3>
                <p className='text-muted-foreground text-sm'>{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;