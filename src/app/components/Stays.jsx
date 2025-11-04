import { useState } from 'react';

const stays = {
  glamping: {
    title: 'Glamping Triangle',
    description:
      'Our triangular luxury tents offer a stylish experience close to nature. Perfect for couples and solo travelers seeking comfort and tranquility. Enjoy soft lighting, cozy bedding, and a private deck under the stars.',
    facilities: [
      '🛏️ Queen size Bed',
      '🔌 Charging Point',
      '🌬️ Fan',
      '🪑 Private Sitting Area',
      '🚻 Shared Washroom',
      '🛜 Wifi',
      '🚗 Parking',
      '⚡ Power Backup',
      '🌿 Lawn Area',
    ],
    price: { weekend: 1499, weekday: 1249 },
    images: [
      {
        url: '/media/IMG_9883.jpg',
        alt: 'Glamping triangle private deck area',
      },
      {
        url: '/media/IMG_9724.png',
        alt: 'Glamping triangle exterior view',
      },
      {
        url: '/media/IMG_9725.png',
        alt: 'Glamping triangle interior with queen bed',
      },
      {
        url: '/media/IMG_9727.jpg',
        alt: 'Glamping triangle private deck area',
      },
      {
        url: '/media/IMG_9901.jpg',
        alt: 'Glamping triangle private deck area',
      },
      {
        url: '/media/IMG_9905.jpg',
        alt: 'Glamping triangle private deck area',
      },
    ],
  },
  camping: {
    title: 'Standard Camping Tent',
    description:
      'Affordable yet magical! These cozy tents are ideal for groups or backpackers who want an authentic camping experience with essential comfort and community vibes.',
    facilities: [
      '🛏️ Sleeping mats, pillows & blankets',
      '🔌 Charging Point',
      '🔥 Bonfire area',
      '🚻 Shared Washroom',
      '🛜 Wifi',
      '🚗 Parking',
      '⚡ Power Backup',
      '🌿 Lawn Area',
    ],
    price: { weekend: 999, weekday: 849 },
    images: [
      {
        url: '/media/IMG_9891.jpg',
        alt: 'Standard Camping Tent tent interior setup',
      },
      {
        url: '/media/IMG_9887.jpg',
        alt: 'Standard Camping Tent tents exterior',
      },
      {
        url: '/media/IMG_9903.jpg',
        alt: 'Camping area with bonfire',
      },
      {
        url: '/media/IMG_9904.jpg',
        alt: 'Camping area with bonfire',
      },
      {
        url: '/media/IMG_9894.jpg',
        alt: 'Glamping triangle private deck area',
      },
      {
        url: '/media/IMG_9895.jpg',
        alt: 'Glamping triangle private deck area',
      },
    ],
  },
};

const foods = [
  'Snacks - Tea & Pav Bhaji or Pakoda',
  'Veg BBQ - Marinated Paneer & Assorted Veggies',
  'Non-Veg BBQ - Marinated Chicken & Assorted Veggies',
  'Veg Dinner - Dal Tadka, Mix-Veg/Paneer, Chapati, Rice, Salad & Sweet',
  'Non-Veg Dinner - Chicken Curry, Egg Curry, Chapati, Rice, Salad & Sweet',
  'Breakfast - Tea & Poha or Upma',
];

const activities = [
  'Bonfire Nights 🔥',
  'Nature Walks & Trails 🌿',
  'Bird Watching 🐦',
  'Outdoor Games',
  'Star Gazing ✨',
  'Boating & Kayaking 🚣',
  'Relaxing by the Lake 🧘‍♀️',
  'Tikona Fort Trekking (DIY) 🏞️',
  'DJ Party (7-10 PM) 🎶',
  '10:30-11:30 PM: Live Music (Sat or on request)',
  '12 AM: Movie Screening 📽️',
];

const places = [
  '🏞️ Pawna Lake: 0km',
  '🏖️ Nirwana Waterfall: 2km',
  '⛰️ Tikona Fort: 4km',
  '🏯 Visapur Fort: 12km',
  '🕳️ Bedse Caves: 12km',
  '💧 Dudhiware Waterfall: 13km',
  '🏯 Lohagad Fort: 15km',
  '⛰️ Tung Fort: 24km',
  '🌆 Lonavala: 24km',
  "💧 Wet'nJoy Water Park: 26km",
];

const Stays = ({
  setCurrentImageIndex = () => null,
  setModalImages = () => null,
  setGalleryModalOpen = () => null,
}) => {
  const [activeTab, setActiveTab] = useState('glamping');

  const handleImageClick = (idx) => {
    setCurrentImageIndex(idx);
    setModalImages(stays[activeTab].images.map((img) => img.url));
    setGalleryModalOpen(true);
  };

  return (
    <section
      className='py-20 px-4 md:px-12 lg:px-24 bg-linear-to-b from-[hsl(0,0%,20.78%)] to-[hsl(0,0%,15%)]'
      aria-labelledby='stays-heading'
      id='stays'
    >
      <div className='max-w-7xl mx-auto'>
        <h2
          id='stays-heading'
          className='text-5xl font-bold text-center mb-4'
        >
          Our Stays
        </h2>
        <p className='text-center text-gray-400 mb-12 text-lg'>
          Choose your perfect accommodation
        </p>

        <div
          className='flex justify-center gap-4 mb-12'
          role='tablist'
          aria-label='Accommodation types'
        >
          {Object.keys(stays).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`cursor-pointer px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-accent text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
              role='tab'
              aria-selected={activeTab === key}
              aria-controls={`${key}-panel`}
              id={`${key}-tab`}
            >
              {stays[key].title}
            </button>
          ))}
        </div>

        <article
          id={`${activeTab}-panel`}
          role='tabpanel'
          aria-labelledby={`${activeTab}-tab`}
          className='grid lg:grid-cols-2 gap-12 items-center'
        >
          <div className='masonry-grid'>
            {stays[activeTab].images.map((img, idx) => (
              <div
                key={idx}
                className='masonry-item cursor-pointer group'
              >
                <button
                  onClick={() => handleImageClick(idx)}
                  className='w-full text-left'
                  aria-label={`View ${img.alt}`}
                >
                  <figure className='relative overflow-hidden rounded-2xl shadow-xl'>
                    <img
                      src={img.url}
                      alt={img.alt}
                      className='w-full h-auto transform group-hover:scale-110 transition-transform duration-500'
                      loading='lazy'
                    />
                    <div
                      className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300'
                      aria-hidden='true'
                    />
                  </figure>
                </button>
              </div>
            ))}
          </div>

          <div>
            <h3 className='text-3xl font-bold mb-4'>
              {stays[activeTab].title}
            </h3>
            <p className='text-gray-300 mb-6 leading-relaxed'>
              {stays[activeTab].description}
            </p>

            <section className='mt-6 mb-6'>
              <h4 className='text-xl font-semibold mb-3'>🏕️ Facilities</h4>
              <ul
                className='flex flex-wrap gap-2'
                role='list'
              >
                {stays[activeTab].facilities.map((facility, idx) => (
                  <li
                    key={idx}
                    className='px-3 py-1 bg-white/10 rounded-full text-sm'
                  >
                    {facility}
                  </li>
                ))}
              </ul>
            </section>

            <aside
              className='bg-white/10 rounded-2xl p-6 backdrop-blur-xl border border-white/20 shadow-lg'
              aria-label='Pricing information'
            >
              <h4 className='text-2xl font-semibold text-white mb-6 text-center'>
                💰 Pricing
              </h4>

              <div className='grid grid-cols-2 gap-6'>
                <div className='p-4 rounded-xl bg-white/5 hover:bg-white/10 transition'>
                  <div className='text-sm uppercase tracking-wide text-gray-300 mb-2 text-center'>
                    Weekend
                  </div>
                  <div className='text-3xl font-bold text-accent text-center'>
                    ₹{stays[activeTab].price.weekend}{' '}
                    <span className='text-sm font-normal'>per person</span>
                  </div>
                </div>

                <div className='p-4 rounded-xl bg-white/5 hover:bg-white/10 transition'>
                  <div className='text-sm uppercase tracking-wide text-gray-300 mb-2 text-center'>
                    Weekday
                  </div>
                  <div className='text-3xl font-bold text-accent text-center'>
                    ₹{stays[activeTab].price.weekday}{' '}
                    <span className='text-sm font-normal'>per person</span>
                  </div>
                </div>
              </div>

              <p className='mt-6 text-sm text-gray-400 text-center'>
                Taxes & fees may apply · Prices vary by season
              </p>
            </aside>
          </div>

          <section className='mt-6 lg:col-span-2'>
            <h4 className='text-xl font-semibold mb-3'>🍽️ Food & Dining</h4>
            <ul
              className='flex flex-wrap gap-2'
              role='list'
            >
              {foods.map((food, idx) => (
                <li
                  key={`food-${idx}`}
                  className='px-3 py-1 bg-white/10 rounded-full text-sm'
                >
                  {food}
                </li>
              ))}
            </ul>
          </section>

          <section className='mt-6 lg:col-span-2'>
            <h4 className='text-xl font-semibold mb-3'>
              🎉 Activities & Entertainment
            </h4>
            <ul
              className='flex flex-wrap gap-2'
              role='list'
            >
              {activities.map((activity, idx) => (
                <li
                  key={`activity-${idx}`}
                  className='px-3 py-1 bg-white/10 rounded-full text-sm'
                >
                  {activity}
                </li>
              ))}
            </ul>
          </section>

          <section className='mt-6 lg:col-span-2'>
            <h4 className='text-xl font-semibold mb-3'>📍 Nearby Places</h4>
            <ul
              className='flex flex-wrap gap-2'
              role='list'
            >
              {places.map((place, idx) => (
                <li
                  key={`place-${idx}`}
                  className='px-3 py-1 bg-white/10 rounded-full text-sm'
                >
                  {place}
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </section>
  );
};

export default Stays;
