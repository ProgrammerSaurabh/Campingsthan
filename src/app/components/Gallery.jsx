const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800',
    alt: 'Campingsthan tent setup at sunset',
  },
  {
    url: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800',
    alt: 'Glamping triangle tents at Pawna Lake',
  },
  {
    url: 'https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800',
    alt: 'Bonfire night at Campingsthan',
  },
  {
    url: 'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=800',
    alt: 'Scenic lake view from camping site',
  },
  {
    url: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=800',
    alt: 'Outdoor activities at Pawna Lake',
  },
  {
    url: 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800',
    alt: 'Night camping under stars',
  },
  {
    url: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800',
    alt: 'Camping tents with mountain backdrop',
  },
  {
    url: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800',
    alt: 'Guests enjoying camping experience',
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
                  <img
                    src={img.url}
                    alt={img.alt}
                    className='w-full h-auto transform group-hover:scale-110 transition-transform duration-500'
                    loading='lazy'
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
