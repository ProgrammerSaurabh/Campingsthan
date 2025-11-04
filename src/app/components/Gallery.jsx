import Image from 'next/image';

const galleryImages = [
  {
    url: '/media/IMG_9878.jpg',
    alt: 'Campingsthan tent setup at sunset',
  },
  {
    url: '/media/IMG_9880.jpg',
    alt: 'Campingsthan tent setup at sunset',
  },
  {
    url: '/media/IMG_9881.jpg',
    alt: 'Campingsthan tent setup at sunset',
  },
  {
    url: '/media/IMG_9900.jpg',
    alt: 'Campingsthan tent setup at sunset',
  },
  {
    url: '/media/IMG_9899.jpg',
    alt: 'Campingsthan tent setup at sunset',
  },
  {
    url: '/media/IMG_9898.jpg',
    alt: 'Campingsthan tent setup at sunset',
  },
  {
    url: '/media/IMG_9897.jpg',
    alt: 'Campingsthan tent setup at sunset',
  },
  {
    url: '/media/IMG_9892.jpg',
    alt: 'Campingsthan tent setup at sunset',
  },
  {
    url: '/media/IMG_9890.jpg',
    alt: 'Campingsthan tent setup at sunset',
  },
  {
    url: '/media/IMG_9889.jpg',
    alt: 'Campingsthan tent setup at sunset',
  },
  {
    url: '/media/IMG_9888.jpg',
    alt: 'Campingsthan tent setup at sunset',
  },
  {
    url: '/media/IMG_9886.jpg',
    alt: 'Campingsthan tent setup at sunset',
  },
  {
    url: '/media/IMG_9884.jpg',
    alt: 'Campingsthan tent setup at sunset',
  },
];

const Gallery = ({
  setCurrentImageIndex = () => null,
  setModalImages = () => null,
  setGalleryModalOpen = () => null,
}) => {
  const handleImageClick = (idx) => {
    setCurrentImageIndex(idx);
    setModalImages(galleryImages.map((img) => img.url));
    setGalleryModalOpen(true);
  };

  return (
    <section
      className='py-20 px-4 md:px-12 lg:px-24 bg-[hsl(0,0%,20.78%)]'
      aria-labelledby='gallery-heading'
      id='gallery'
    >
      <div className='max-w-7xl mx-auto'>
        <h2
          id='gallery-heading'
          className='text-5xl font-bold text-center mb-4'
        >
          Gallery
        </h2>
        <p className='text-center text-gray-400 mb-12 text-lg'>
          Moments from Campingsthan
        </p>

        <div
          className='masonry-grid'
          role='list'
        >
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className='masonry-item group'
              onClick={() => handleImageClick(idx)}
              role='listitem'
            >
              <button
                className='w-full text-left'
                aria-label={`View ${img.alt}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleImageClick(idx);
                }}
              >
                <figure className='relative overflow-hidden rounded-2xl shadow-xl cursor-pointer'>
                  <Image
                    src={img.url}
                    alt={img.alt || 'Gallery image'}
                    width={800}
                    height={600}
                    className='w-full h-auto transform group-hover:scale-110 transition-transform duration-500'
                    loading='lazy'
                    decoding='async'
                    quality={[100, 75]}
                    priority={false}
                    unoptimized={false}
                  />
                  <div
                    className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center'
                    aria-hidden='true'
                  >
                    <span className='text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold'>
                      View Image
                    </span>
                  </div>
                </figure>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
