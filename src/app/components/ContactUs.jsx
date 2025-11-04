import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import GoogleMap from './GoogleMap';

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
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      errors.email = 'Valid email is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const whatsappNumber = '917558640623';
      const message = encodeURIComponent(
        `Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
      );
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  };

  return (
    <section
      className='py-20 px-4 md:px-12 lg:px-24 bg-[hsl(0,0%,20.78%)]'
      aria-labelledby='contact-heading'
      id='contact-us'
    >
      <div className='max-w-7xl mx-auto'>
        <h2
          id='contact-heading'
          className='text-5xl font-bold text-center mb-4'
        >
          Contact & Location
        </h2>
        <p className='text-center text-gray-400 mb-12 text-lg'>
          Get in touch with us
        </p>

        <div className='grid lg:grid-cols-2 gap-12'>
          <div>
            <div className='rounded-3xl overflow-hidden shadow-2xl h-96 mb-6 border-4 border-primary'>
              <GoogleMap />
            </div>

            <article className='space-y-4'>
              <h3 className='text-2xl font-bold mb-4'>How to Reach</h3>
              <ul className='text-gray-300 space-y-2'>
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
                      href='tel:+917558640623'
                      className='underline hover:text-accent transition-colors focus:text-accent focus:outline-none'
                      aria-label='Call us at 7558640623 for cab assistance'
                    >
                      Call Us
                    </a>
                    , we'll help you arrange one
                  </span>
                </li>
              </ul>

              <address className='space-y-3 mt-6 not-italic'>
                <div className='flex items-start gap-3'>
                  <MapPin
                    className='w-5 h-5 mt-1 text-accent shrink-0'
                    aria-hidden='true'
                  />
                  <span className='text-gray-300'>
                    Campingsthan, Thakursai-Aajiwali Rd, Gevhande Khadak, Pawna
                    lake, Pune, Maharashtra 412108
                  </span>
                </div>
                <div className='flex items-center gap-3 flex-wrap'>
                  <Phone
                    className='w-5 h-5 text-accent'
                    aria-hidden='true'
                  />
                  {['7558640623', '8530760323'].map((phone) => (
                    <a
                      href={`tel:+91${phone}`}
                      key={`phone-${phone}`}
                      className='text-gray-300 hover:text-accent transition-colors focus:text-accent focus:outline-none focus:underline'
                      aria-label={`Call ${phone}`}
                    >
                      +91 {phone}
                    </a>
                  ))}
                </div>
                <div className='flex items-center gap-3'>
                  <Mail
                    className='w-5 h-5 text-accent'
                    aria-hidden='true'
                  />
                  <a
                    href='mailto:campingsthan@gmail.com'
                    className='text-gray-300 hover:text-accent transition-colors focus:text-accent focus:outline-none focus:underline'
                    aria-label='Email us at campingsthan@gmail.com'
                  >
                    campingsthan@gmail.com
                  </a>
                </div>
              </address>
            </article>
          </div>

          <div className='bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20'>
            <h3 className='text-2xl font-bold mb-6'>Send us a Message</h3>

            <form
              onSubmit={handleSubmit}
              className='space-y-6'
              noValidate
            >
              <div>
                <label
                  htmlFor='contact-name'
                  className='block text-sm font-medium mb-2'
                >
                  Name *
                </label>
                <input
                  id='contact-name'
                  type='text'
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-xl bg-secondary border ${
                    formErrors.name ? 'border-red-500' : 'border-gray-700'
                  } focus:border-primary focus:outline-none transition-colors`}
                  placeholder='Your name'
                  required
                  aria-required='true'
                  aria-invalid={!!formErrors.name}
                  aria-describedby={formErrors.name ? 'name-error' : undefined}
                />
                {formErrors.name && (
                  <p
                    id='name-error'
                    className='text-red-400 text-sm mt-1'
                    role='alert'
                  >
                    {formErrors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='contact-email'
                  className='block text-sm font-medium mb-2'
                >
                  Email *
                </label>
                <input
                  id='contact-email'
                  type='email'
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-xl bg-secondary border ${
                    formErrors.email ? 'border-red-500' : 'border-gray-700'
                  } focus:border-primary focus:outline-none transition-colors`}
                  placeholder='your@email.com'
                  required
                  aria-required='true'
                  aria-invalid={!!formErrors.email}
                  aria-describedby={
                    formErrors.email ? 'email-error' : undefined
                  }
                />
                {formErrors.email && (
                  <p
                    id='email-error'
                    className='text-red-400 text-sm mt-1'
                    role='alert'
                  >
                    {formErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='contact-message'
                  className='block text-sm font-medium mb-2'
                >
                  Message *
                </label>
                <textarea
                  id='contact-message'
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-xl bg-secondary border ${
                    formErrors.message ? 'border-red-500' : 'border-gray-700'
                  } focus:border-primary focus:outline-none transition-colors resize-none`}
                  placeholder='Tell us about your plans...'
                  required
                  aria-required='true'
                  aria-invalid={!!formErrors.message}
                  aria-describedby={
                    formErrors.message ? 'message-error' : undefined
                  }
                />
                {formErrors.message && (
                  <p
                    id='message-error'
                    className='text-red-400 text-sm mt-1'
                    role='alert'
                  >
                    {formErrors.message}
                  </p>
                )}
              </div>

              {submitStatus === 'success' && (
                <div
                  className='bg-green-500/20 text-green-300 px-4 py-2 rounded-xl'
                  role='status'
                >
                  Message sent successfully via WhatsApp!
                </div>
              )}

              <button
                type='submit'
                className='cursor-pointer w-full py-4 bg-accent hover:bg-accent/90 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg text-lg flex justify-center items-center gap-2'
                aria-label='Send message via WhatsApp'
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
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
