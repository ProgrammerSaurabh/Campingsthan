import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className='bg-black py-12 px-4 md:px-12 lg:px-24 relative'
      role='contentinfo'
    >
      <div
        className='absolute inset-0 bg-linear-to-br from-black/10 via-black/10 to-black/10'
        aria-hidden='true'
      />
      <Image
        src='/media/footer.png'
        alt='Decorative footer background'
        fill
        className='absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none'
        loading='lazy'
        decoding='async'
        priority={false}
        aria-hidden='true'
        sizes='100vw'
        unoptimized={false}
      />
      <div className='max-w-7xl mx-auto relative z-10'>
        <nav
          className='grid md:grid-cols-4 gap-8 mb-8'
          aria-label='Footer navigation'
        >
          <div>
            <h2 className='text-2xl font-bold mb-4 text-accent'>
              Campingsthan
            </h2>
            <p className='text-gray-400'>
              Your gateway to unforgettable outdoor experiences at Pawna Lake.
            </p>
          </div>

          <div>
            <h3 className='font-semibold mb-4 text-lg'>Quick Links</h3>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <a
                  href='#stays'
                  className='hover:text-accent transition-colors focus:text-accent focus:outline-none focus:underline'
                >
                  Our Stays
                </a>
              </li>
              <li>
                <a
                  href='#gallery'
                  className='hover:text-accent transition-colors focus:text-accent focus:outline-none focus:underline'
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href='#about-us'
                  className='hover:text-accent transition-colors focus:text-accent focus:outline-none focus:underline'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#contact-us'
                  className='hover:text-accent transition-colors focus:text-accent focus:outline-none focus:underline'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold mb-4 text-lg'>Policies</h3>
            <ul className='space-y-2 text-gray-400'>
              <li>Check-in: 4:00 PM</li>
              <li>Check-out: 10:00 AM</li>
              <li>50% Advance Required</li>
              <li>Valid ID Required</li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold mb-4 text-lg'>Contact</h3>
            <address className='space-y-3 text-gray-400 not-italic'>
              <div className='flex items-center gap-2'>
                <Phone
                  className='w-4 h-4'
                  aria-hidden='true'
                />
                <div className='flex gap-2'>
                  <a
                    href='tel:+917558640623'
                    className='hover:text-accent transition-colors focus:text-accent focus:outline-none focus:underline border-r-2 pr-3'
                    aria-label='Call us at 7558640623'
                  >
                    +91 7558640623
                  </a>
                  <a
                    href='tel:+918530760323'
                    className='hover:text-accent transition-colors focus:text-accent focus:outline-none focus:underline'
                    aria-label='Call us at 8530760323'
                  >
                    +91 8530760323
                  </a>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <Mail
                  className='w-4 h-4'
                  aria-hidden='true'
                />
                <a
                  href='mailto:campingsthan@gmail.com'
                  className='hover:text-accent transition-colors focus:text-accent focus:outline-none focus:underline'
                  aria-label='Email us at campingsthan@gmail.com'
                >
                  campingsthan@gmail.com
                </a>
              </div>
              <div className='flex items-start gap-2'>
                <MapPin
                  className='w-4 h-4 mt-1 shrink-0'
                  aria-hidden='true'
                />
                <span>Pawna Lake, Gevhande Khadak, Maharashtra 412108</span>
              </div>
            </address>
          </div>
        </nav>

        <div className='border-t border-gray-800 pt-8 text-center text-gray-400'>
          <p>&copy; {currentYear} Campingsthan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
