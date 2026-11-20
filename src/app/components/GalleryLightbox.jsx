'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const GalleryLightbox = ({
  open,
  onOpenChange,
  images = [],
  currentIndex = 0,
  setCurrentIndex = () => null,
}) => {
  const goPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className='fixed inset-0 flex h-dvh w-screen max-w-none translate-x-0 translate-y-0 flex-col gap-3 rounded-none border-0 bg-black/95 p-3 shadow-none sm:p-6'
      >
        <DialogTitle className='sr-only'>Gallery image viewer</DialogTitle>
        <DialogDescription className='sr-only'>
          Use the previous and next buttons to browse the gallery.
        </DialogDescription>

        <button
          type='button'
          onClick={() => onOpenChange(false)}
          className='absolute top-3 right-3 z-10 cursor-pointer rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:top-5 sm:right-5'
          aria-label='Close gallery'
        >
          <X className='size-5 sm:size-6' aria-hidden='true' />
        </button>

        {images.length > 0 && (
          <>
            <div className='relative flex min-h-0 flex-1 items-center justify-center'>
              <Image
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1} of ${images.length}`}
                fill
                sizes='100vw'
                className='object-contain'
                priority
              />
            </div>

            <div className='flex shrink-0 items-center justify-center gap-3 sm:gap-5'>
              <button
                type='button'
                onClick={goPrev}
                className='cursor-pointer rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20'
                aria-label='Previous image'
              >
                <ChevronLeft className='size-5 sm:size-6' aria-hidden='true' />
              </button>

              <p
                className='min-w-20 rounded-full bg-white/10 px-4 py-1.5 text-center text-sm font-medium text-white'
                role='status'
                aria-live='polite'
              >
                {currentIndex + 1} / {images.length}
              </p>

              <button
                type='button'
                onClick={goNext}
                className='cursor-pointer rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20'
                aria-label='Next image'
              >
                <ChevronRight className='size-5 sm:size-6' aria-hidden='true' />
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GalleryLightbox;