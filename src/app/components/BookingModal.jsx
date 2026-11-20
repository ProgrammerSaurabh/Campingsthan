'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  stays,
  bookingPolicies,
  whatsappUrl,
  MAX_ADULTS,
} from '@/lib/site';

const today = () => new Date().toISOString().split('T')[0];

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

const BookingModal = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    type: 'cocoon-glamp',
    date: today(),
    name: '',
    email: '',
    adults: '',
    childs510: '',
    childs05: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.date) errors.date = 'Check-in date is required';
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (
      formData.email &&
      !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    )
      errors.email = 'Valid email is required';

    const adults = parseInt(formData.adults, 10);
    if (!formData.adults || Number.isNaN(adults) || adults < 1)
      errors.adults = 'At least one adult is required';
    else if (adults > MAX_ADULTS)
      errors.adults = `Maximum ${MAX_ADULTS} adults allowed`;

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const stay = stays[formData.type];

    const message = [
      'New Booking Request',
      '',
      `Stay: ${stay.title}`,
      `Date: ${formData.date}`,
      `Name: ${formData.name}`,
      `Email: ${formData.email ? formData.email : 'NA'}`,
      `Adults: ${formData.adults}`,
      `Children (5-10): ${formData.childs510 || 0}`,
      `Children (0-5): ${formData.childs05 || 0}`,
      '',
      `Rate: Rs ${stay.price.weekend} (weekend) / Rs ${stay.price.weekday} (weekday) per person`,
    ].join('\n');

    window.open(whatsappUrl(message), '_blank');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-h-[92dvh] max-w-2xl overflow-y-auto'>
        <DialogHeader>
          <DialogTitle>Book Your Stay</DialogTitle>
          <DialogDescription>
            Fill in your details and continue on WhatsApp to confirm.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className='space-y-5' noValidate>
          <fieldset>
            <legend className='mb-2 text-sm font-medium'>
              Choose your stay
            </legend>
            <div className='grid grid-cols-1 gap-2 sm:grid-cols-3'>
              {Object.entries(stays).map(([key, stay]) => (
                <Button
                  key={key}
                  type='button'
                  variant={formData.type === key ? 'default' : 'secondary'}
                  className='text-xs'
                  onClick={() => setFormData({ ...formData, type: key })}
                >
                  {stay.title}
                </Button>
              ))}
            </div>
          </fieldset>

          <div className='grid gap-4 sm:grid-cols-2'>
            <div>
              <Label htmlFor='booking-date' className='mb-2'>
                Check-in Date *
              </Label>
              <Input
                id='booking-date'
                type='date'
                value={formData.date}
                min={today()}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                required
                aria-required='true'
                aria-invalid={!!formErrors.date}
                className={formErrors.date ? 'border-destructive' : ''}
              />
              {formErrors.date && (
                <p className='mt-1 text-sm text-destructive' role='alert'>
                  {formErrors.date}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor='adults' className='mb-2'>
                Adults (Maximum {MAX_ADULTS}) *
              </Label>
              <Input
                id='adults'
                type='number'
                min='1'
                max={MAX_ADULTS}
                value={formData.adults}
                onChange={(e) =>
                  setFormData({ ...formData, adults: e.target.value })
                }
                required
                aria-required='true'
                aria-invalid={!!formErrors.adults}
                className={formErrors.adults ? 'border-destructive' : ''}
              />
              {formErrors.adults && (
                <p className='mt-1 text-sm text-destructive' role='alert'>
                  {formErrors.adults}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor='childs510' className='mb-2'>
                Children 5-10 years (50% charge)
              </Label>
              <Input
                id='childs510'
                type='number'
                min='0'
                value={formData.childs510}
                onChange={(e) =>
                  setFormData({ ...formData, childs510: e.target.value })
                }
              />
            </div>

            <div>
              <Label htmlFor='childs05' className='mb-2'>
                Children 0-5 years (Free)
              </Label>
              <Input
                id='childs05'
                type='number'
                min='0'
                value={formData.childs05}
                onChange={(e) =>
                  setFormData({ ...formData, childs05: e.target.value })
                }
              />
            </div>

            <div className='sm:col-span-2'>
              <Label htmlFor='booking-name' className='mb-2'>
                Full Name *
              </Label>
              <Input
                id='booking-name'
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder='John Doe'
                required
                aria-required='true'
                aria-invalid={!!formErrors.name}
                className={formErrors.name ? 'border-destructive' : ''}
              />
              {formErrors.name && (
                <p className='mt-1 text-sm text-destructive' role='alert'>
                  {formErrors.name}
                </p>
              )}
            </div>

            <div className='sm:col-span-2'>
              <Label htmlFor='booking-email' className='mb-2'>
                Email
              </Label>
              <Input
                id='booking-email'
                type='email'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder='john@example.com'
                aria-invalid={!!formErrors.email}
                className={formErrors.email ? 'border-destructive' : ''}
              />
              {formErrors.email && (
                <p className='mt-1 text-sm text-destructive' role='alert'>
                  {formErrors.email}
                </p>
              )}
            </div>
          </div>

          <Card className='bg-background/60'>
            <CardContent className='p-4'>
              <h3 className='mb-2 text-sm font-semibold'>
                Booking Information
              </h3>
              <ul className='text-muted-foreground space-y-1 text-sm'>
                {bookingPolicies.map((policy) => (
                  <li key={policy}>• {policy}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Button type='submit' size='lg' className='w-full'>
            <WhatsAppIcon />
            <span>Confirm Booking</span>
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;