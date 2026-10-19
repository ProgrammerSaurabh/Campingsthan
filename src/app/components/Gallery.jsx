'use client';

import { useState } from 'react';

import { galleryImages } from '@/lib/site';
import Media from '@/components/media';
import { Button } from '@/components/ui/button';

const MOBILE_PREVIEW_COUNT = 10;

const Gallery = ({
  setCurrentImageIndex = () => null,
  setModalImages = () => null,
  setGalleryModalOpen = () => null,
}) => {
  const [showAll, setShowAll] = useState(false);

  const handleImageClick = (idx) => {
    setCurrentImageIndex(idx);
    setModalImages(galleryImages.map((img) => img.url));
    setGalleryModalOpen(true);
  };

  const hiddenCount = galleryImages.length - MOBILE_PREVIEW_COUNT;

  return (
    <section
      className='bg-card section-pad px-4 md:px-8'
      aria-labelledby='gallery-heading'
      id='gallery'
    >
      <div className='mx-auto max-w-7xl'>
        <div className='mb-10 text-center'>
          <h2
            id='gallery-heading'
            className='text-3xl font-extrabold sm:text-4xl md:text-5xl'
          >
            Gallery
          </h2>
          <p className='text-muted-foreground mt-3 text-base sm:text-lg'>
            Real moments from our guests at Campingsthan
          </p>
        </div>

        <div className='masonry-wrap'>
          <div className='masonry-grid'>
            {galleryImages.map((img, idx) => (
              <figure
                key={img.url}
                className={`masonry-item group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg ${
                  idx >= MOBILE_PREVIEW_COUNT && !showAll ? 'max-sm:hidden' : ''
                }`}
              >
                <button
                  type='button'
                  className='block w-full'
                  aria-label={`View image ${idx + 1} of ${galleryImages.length}: ${img.alt}`}
                  onClick={() => handleImageClick(idx)}
                >
                  <Media
                    src={img.url}
                    alt={img.alt}
                    sizes='(max-width: 639px) 50vw, (max-width: 1023px) 33vw, (max-width: 1535px) 33vw, 25vw'
                    imageClassName='h-auto w-full transform transition-transform duration-500 group-hover:scale-105'
                  />
                  <div
                    className='absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40'
                    aria-hidden='true'
                  >
                    <span className='text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                      View Image
                    </span>
                  </div>
                </button>
              </figure>
            ))}
          </div>
        </div>

        {hiddenCount > 0 && !showAll && (
          <div className='mt-6 flex justify-center sm:hidden'>
            <Button variant='outline' size='lg' onClick={() => setShowAll(true)}>
              View all {galleryImages.length} photos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;