import { Users, Award, Heart } from 'lucide-react';

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
          <figure className='relative h-96 rounded-3xl overflow-hidden shadow-2xl'>
            <img
              src='https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200'
              alt='Campingsthan glamping tents at Pawna Lake'
              className='w-full h-full object-cover'
              loading='lazy'
            />
          </figure>

          <div className='space-y-6'>
            <p className='text-lg text-gray-300 leading-relaxed'>
              Campingsthan is your gateway to peace, located beside the pristine
              Pawna Lake. Crafted thoughtfully, our glamping triangles and
              camping tents bring you closer to nature—without sacrificing
              comfort.
            </p>

            <blockquote className='border-l-4 border-primary pl-6 italic text-gray-300'>
              "At Campingsthan, our mission is to offer seamless, memorable
              nights under the sky—with quality stays, unlimited food, and
              curated activities."
            </blockquote>

            <p className='text-lg text-gray-300 leading-relaxed'>
              Run with heart by a local team, Campingsthan is among
              Maharashtra's most sought-after camping retreats—ideal for
              families, couples, adventure seekers and peace lovers.
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
