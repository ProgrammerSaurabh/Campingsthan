import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

import { Separator } from '@/components/ui/separator';
import { contact, site } from '@/lib/site';

const policies = [
  'Check-in: 4:00 PM',
  'Check-out: 10:00 AM',
  '50% Advance Required',
  'Valid ID Required',
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-background relative px-4 py-12 md:px-8'>
      <Image
        src='/media/footer.png'
        alt=''
        fill
        sizes='100vw'
        className='pointer-events-none absolute inset-0 object-cover opacity-5 select-none'
        aria-hidden='true'
      />
      <div className='relative z-10 mx-auto max-w-7xl'>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
          <div className='col-span-2 md:col-span-1'>
            <h2 className='mb-3 text-xl font-bold text-primary sm:text-2xl'>
              {site.name}
            </h2>
            <p className='text-muted-foreground text-sm'>
              Your gateway to unforgettable outdoor experiences at Pawna Lake.
            </p>
          </div>

          <nav aria-label='Footer navigation'>
            <h3 className='mb-4 text-base font-semibold text-foreground sm:text-lg'>
              Quick Links
            </h3>
            <ul className='text-muted-foreground space-y-2 text-sm'>
              <li>
                <a
                  href='#stays'
                  className='hover:text-primary transition-colors'
                >
                  Our Stays
                </a>
              </li>
              <li>
                <a
                  href='#gallery'
                  className='hover:text-primary transition-colors'
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href='#about-us'
                  className='hover:text-primary transition-colors'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#contact-us'
                  className='hover:text-primary transition-colors'
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className='mb-4 text-base font-semibold text-foreground sm:text-lg'>
              Policies
            </h3>
            <ul className='text-muted-foreground space-y-2 text-sm'>
              {policies.map((policy) => (
                <li key={policy}>{policy}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='mb-4 text-base font-semibold text-foreground sm:text-lg'>
              Contact
            </h3>
            <address className='text-muted-foreground space-y-3 text-sm not-italic'>
              <div className='flex items-center gap-2'>
                <Phone className='size-4 shrink-0' aria-hidden='true' />
                <div className='flex flex-wrap gap-3'>
                  {contact.phones.map((phone, i) => (
                    <a
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className={`hover:text-primary transition-colors ${
                        i < contact.phones.length - 1
                          ? 'border-r-2 pr-3'
                          : ''
                      }`}
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <Mail className='size-4 shrink-0' aria-hidden='true' />
                <a
                  href={`mailto:${contact.email}`}
                  className='hover:text-primary transition-colors'
                >
                  {contact.email}
                </a>
              </div>
              <div className='flex items-start gap-2'>
                <MapPin className='mt-0.5 size-4 shrink-0' aria-hidden='true' />
                <span>
                  Pawna Lake, Gevhande Khadak, Maharashtra{' '}
                  {site.address.postalCode}
                </span>
              </div>
            </address>
          </div>
        </div>

        <Separator className='my-8' />

        <div className='text-muted-foreground text-center text-sm'>
          <p>
            &copy; {currentYear} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;