export const site = {
  name: 'Campingsthan',
  url: 'https://www.campingsthan.com',
  title:
    'Campingsthan - Luxury Glamping & Camping at Pawna Lake, Maharashtra',
  description:
    'Luxury glamping and camping at Pawna Lake, Maharashtra. Bonfires, stargazing, kayaking and unlimited food for families, couples and groups. Book on WhatsApp.',
  keywords: [
    'camping pawna lake',
    'glamping maharashtra',
    'pawna lake camping',
    'lonavala camping',
    'weekend getaway',
    'luxury camping',
    'pawna lake tents',
    'glamping india',
  ],
  address: {
    street:
      'JFMW+MHQ, Thakursai-Aajiwali Road, Gevhande Khadak',
    locality: 'Pwna Lake',
    region: 'Maharashtra',
    postalCode: '412108',
    country: 'IN',
  },
  geo: { latitude: 18.7, longitude: 73.4 },
  priceRange: '₹849 - ₹5499',
};

// WhatsApp expects the number without '+' or spaces, country code first.
const WHATSAPP_NUMBER = '917558640623';

export const contact = {
  whatsappNumber: WHATSAPP_NUMBER,
  phones: [
    { display: '+91 75586 40623', tel: '+917558640623' },
    { display: '+91 85307 60323', tel: '+918530760323' },
  ],
  email: 'campingsthan@gmail.com',
};

export function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

export const stays = {
  'cocoon-glamp': {
    title: 'Cocoon Glamp',
    description:
      'Redefining your vacation with stylish stays, scenic escapes, and premium comfort.',
    facilities: [
      '🛏️ Queen size bed',
      '❄️ Air Conditioner',
      '🔥 Bonfire Area',
      '🚻 Attached Washroom',
      '🧴 Exclusive Toiletries',
      '🛜 Wifi',
      '🚗 Parking',
      '⚡ Power Backup',
      '🌿 Lawn Area',
    ],
    price: { weekend: 5499, weekday: 4499 },
    images: [
      {
        url: '/media/IMG_4057.jpg',
        alt: 'Cocoon glamp exterior lit with fairy lights at dusk',
      },
      {
        url: '/media/IMG_4475.jpg',
        alt: 'Cocoon glamp interior with a queen bed and attached washroom',
      },
      {
        url: '/media/IMG_4236.jpg',
        alt: 'Cocoon glamp bed beside a window overlooking the lawn',
      },
      {
        url: '/media/IMG_4068.jpg',
        alt: 'Cocoon glamp interior with a queen bed and wood-panelled wall',
      },
    ],
  },
  glamping: {
    title: 'Glamping Triangle',
    description:
      'Our triangular luxury tents offer a stylish experience close to nature. Perfect for couples and solo travellers seeking comfort and tranquility. Enjoy soft lighting, cosy bedding, and a private deck under the stars.',
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
        alt: 'Glamping triangle tents with a table and chairs on the lawn',
      },
      {
        url: '/media/IMG_9724.png',
        alt: 'Glamping triangle interior with a bed and hanging lights',
      },
      {
        url: '/media/IMG_9725.png',
        alt: 'Glamping triangle interior with a queen bed and ceiling fan',
      },
      {
        url: '/media/IMG_9727.jpg',
        alt: 'Glamping triangle interior with a queen bed and ceiling fan',
      },
      {
        url: '/media/IMG_9901.jpg',
        alt: 'Glamping triangle interior with a blue bed',
      },
      {
        url: '/media/IMG_9905.jpg',
        alt: 'A mother and her two children inside a glamping triangle tent',
      },
    ],
  },
  camping: {
    title: 'Standard Camping Tent',
    description:
      'Affordable yet magical! These cosy tents are ideal for groups or backpackers who want an authentic camping experience with essential comfort and community vibes.',
    facilities: [
      '🛏️ Sleeping Mats, Pillows & Blankets',
      '🔌 Charging Point',
      '🔥 Bonfire Area',
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
        alt: 'Dome camping tents with chairs and tables on the lawn',
      },
      {
        url: '/media/IMG_9887.jpg',
        alt: 'Dome camping tents at dusk with string lights',
      },
      {
        url: '/media/IMG_9903.jpg',
        alt: 'Interior of a dome camping tent with bedding',
      },
      {
        url: '/media/IMG_9904.jpg',
        alt: 'Dome camping tent interior at sunset',
      },
      {
        url: '/media/IMG_9894.jpg',
        alt: 'Camping tent with string lights at dusk',
      },
      {
        url: '/media/IMG_9895.jpg',
        alt: 'Camping tents with string lights at dusk',
      },
    ],
  },
};

export const foods = [
  'Snacks - Tea & Pav Bhaji or Pakoda',
  'Veg BBQ - Marinated Paneer & Assorted Veggies',
  'Non-Veg BBQ - Marinated Chicken & Assorted Veggies',
  'Veg Dinner - Dal Tadka, Mix-Veg/Paneer, Chapati, Rice, Salad & Sweet',
  'Non-Veg Dinner - Chicken Curry, Egg Curry, Chapati, Rice, Salad & Sweet',
  'Breakfast - Tea & Poha or Upma',
];

export const activities = [
  'Bonfire Nights 🔥',
  'Nature Walks & Trails 🌿',
  'Bird Watching 🐦',
  'Outdoor Games',
  'Star Gazing ✨',
  'Boating & Kayaking 🚣',
  'Relaxing by the Lake 🧘',
  'Tikona Fort Trekking (DIY) 🏞️',
  'DJ Party (7-10 PM) 🎶',
  'Live Music (10:30-11:30 PM, Sat or on request)',
  'Movie Screening (12 AM) 📽️',
];

export const places = [
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

export const galleryImages = [
  { url: '/media/IMG_4057.jpg', alt: 'Cocoon glamp exterior lit with fairy lights at dusk' },
  { url: '/media/IMG_4068.jpg', alt: 'Cocoon glamp interior with a queen bed and wood-panelled wall' },
  { url: '/media/IMG_4236.jpg', alt: 'Cocoon glamp bed beside a window overlooking the lawn' },
  { url: '/media/IMG_4475.jpg', alt: 'Cocoon glamp interior with a queen bed and attached washroom' },
  { url: '/media/IMG_9878.jpg', alt: 'Guests posing in front of the glamping tents' },
  { url: '/media/IMG_9880.jpg', alt: 'Guests gathered at night under string lights' },
  { url: '/media/IMG_9881.jpg', alt: 'Guests stargazing with a telescope at night' },
  { url: '/media/IMG_9900.jpg', alt: 'A large group of guests with Pawna Lake and the hills behind them' },
  { url: '/media/IMG_9899.jpg', alt: 'A guest reading a book on a picnic blanket at sunset' },
  { url: '/media/IMG_9898.jpg', alt: 'A guest reading a book outdoors at sunset' },
  { url: '/media/IMG_9897.jpg', alt: 'Guests sharing snacks on a picnic blanket' },
  { url: '/media/IMG_9892.jpg', alt: 'A musician playing guitar at night under string lights' },
  { url: '/media/IMG_9890.jpg', alt: 'A large group of guests in front of the glamping tents' },
  { url: '/media/IMG_9889.jpg', alt: 'Guests standing under a flowering tree' },
  { url: '/media/IMG_9888.jpg', alt: 'A birthday celebration with a cake under string lights at night' },
  { url: '/media/IMG_9886.jpg', alt: 'A tree decorated with fairy lights at dusk' },
  { url: '/media/IMG_9884.jpg', alt: 'Guests playing cricket on the lawn' },
];

export const bookingPolicies = [
  'Check-in: 4:00 PM | Check-out: 10:00 AM',
  '50% advance payment required',
  'Valid government ID required at check-in',
  'Children 0-5 years: FREE | 5-10 years: 50% charge',
  'Cancellation: 7+ days = 70% refund, 5 days = 50% refund',
];

export const MAX_ADULTS = 10;