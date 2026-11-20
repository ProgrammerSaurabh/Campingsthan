'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

import GoogleMap from '@/app/components/GoogleMap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { contact, whatsappUrl, site } from '@/lib/site';

const WhatsAppIcon = () => (
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
);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (formData.email && !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      errors.email = 'Valid email is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const message = [
        'Contact Form Submission',
        '',
        `Name: ${formData.name}`,
        `Email: ${formData.email ? formData.email : 'NA'}`,
        `Message: ${formData.message}`,
      ].join('\n');

      window.open(whatsappUrl(message), '_blank');
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  };

  return (
    <section
      className='bg-card section-pad px-4 md:px-8'
      aria-labelledby='contact-heading'
      id='contact-us'
    >
      <div className='mx-auto max-w-7xl'>
        <div className='mb-10 text-center'>
          <h2
            id='contact-heading'
            className='text-3xl font-extrabold sm:text-4xl md:text-5xl'
          >
            Contact & Location
          </h2>
          <p className='text-muted-foreground mt-3 text-base sm:text-lg'>
            Get in touch with us
          </p>
        </div>

        <div className='grid gap-10 lg:grid-cols-2 lg:gap-14'>
          <div>
            <div className='border-primary mb-6 h-72 overflow-hidden rounded-3xl border-4 shadow-2xl sm:h-96'>
              <GoogleMap />
            </div>

            <Card>
              <CardContent className='p-6'>
                <h3 className='mb-4 text-xl font-bold'>How to Reach</h3>
                <ul className='text-muted-foreground space-y-3'>
                  <li className='flex items-start gap-2'>
                    <span aria-hidden='true'>📍</span>
                    <span>25 km from Lonavala Railway Station.</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span aria-hidden='true'>🛻</span>
                    <span>You can drive or hire a cab directly.</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span aria-hidden='true'>📞</span>
                    <span>
                      Need a cab?{' '}
                      <a
                        href={`tel:${contact.phones[0].tel}`}
                        className='text-primary underline underline-offset-4 hover:opacity-80'
                      >
                        Call Us
                      </a>
                      , we’ll help you arrange one
                    </span>
                  </li>
                </ul>

                <address className='mt-6 space-y-3 not-italic'>
                  <div className='flex items-start gap-3'>
                    <MapPin
                      className='text-primary mt-1 size-5 shrink-0'
                      aria-hidden='true'
                    />
                    <span className='text-muted-foreground'>
                      {site.name}, Thakursai-Aajiwali Rd, Gevhande Khadak, Pawna
                      Lake, Pune, Maharashtra {site.address.postalCode}
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Phone
                      className='text-primary size-4 shrink-0'
                      aria-hidden='true'
                    />
                    <div className='flex flex-wrap gap-3'>
                      {contact.phones.map((phone, i) => (
                        <a
                          key={phone.tel}
                          href={`tel:${phone.tel}`}
                          className={`text-muted-foreground hover:text-primary hover:underline underline-offset-4 ${
                            i < contact.phones.length - 1 ? 'border-r-2 pr-3' : ''
                          }`}
                        >
                          {phone.display}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Mail
                      className='text-primary size-5 shrink-0'
                      aria-hidden='true'
                    />
                    <a
                      href={`mailto:${contact.email}`}
                      className='text-muted-foreground hover:text-primary hover:underline underline-offset-4'
                    >
                      {contact.email}
                    </a>
                  </div>
                </address>
              </CardContent>
            </Card>
          </div>

          <Card className='h-fit'>
            <CardContent className='p-6 sm:p-8'>
              <h3 className='mb-6 text-xl font-bold'>Send us a Message</h3>

              <form onSubmit={handleSubmit} className='space-y-5' noValidate>
                <div>
                  <Label htmlFor='contact-name' className='mb-2'>
                    Name *
                  </Label>
                  <Input
                    id='contact-name'
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder='Your name'
                    required
                    aria-required='true'
                    aria-invalid={!!formErrors.name}
                    className={formErrors.name ? 'border-destructive' : ''}
                  />
                  {formErrors.name && (
                    <p
                      className='mt-1 text-sm text-destructive'
                      role='alert'
                    >
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor='contact-email' className='mb-2'>
                    Email
                  </Label>
                  <Input
                    id='contact-email'
                    type='email'
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder='your@email.com'
                    aria-invalid={!!formErrors.email}
                    className={formErrors.email ? 'border-destructive' : ''}
                  />
                  {formErrors.email && (
                    <p
                      className='mt-1 text-sm text-destructive'
                      role='alert'
                    >
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor='contact-message' className='mb-2'>
                    Message *
                  </Label>
                  <Textarea
                    id='contact-message'
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder='Tell us about your plans...'
                    required
                    aria-required='true'
                    aria-invalid={!!formErrors.message}
                    className={formErrors.message ? 'border-destructive' : ''}
                  />
                  {formErrors.message && (
                    <p
                      className='mt-1 text-sm text-destructive'
                      role='alert'
                    >
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {submitStatus === 'success' && (
                  <p
                    className='rounded-xl bg-green-500/15 px-4 py-2 text-sm text-green-400'
                    role='status'
                  >
                    Message sent successfully via WhatsApp!
                  </p>
                )}

                <Button type='submit' size='lg' className='w-full'>
                  <WhatsAppIcon />
                  <span>Send Message</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;