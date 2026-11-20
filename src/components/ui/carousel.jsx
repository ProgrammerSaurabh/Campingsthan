'use client';

import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

function Carousel({ orientation = 'horizontal', opts, setApi, className, children, ...props }) {
  const [carouselRef, api] = useEmblaCarousel(
    { ...opts, axis: orientation === 'horizontal' ? 'x' : 'y' },
    setApi
  );

  React.useEffect(() => {
    if (api && setApi) setApi(api);
  }, [api, setApi]);

  return (
    <div
      className={cn('relative', className)}
      role='region'
      aria-roledescription='carousel'
      {...props}
    >
      <div ref={carouselRef} className='overflow-hidden'>
        <div
          className={cn(
            'flex',
            orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
            'touch-pan-y'
          )}
        >
          {children}
        </div>
      </div>

      <CarouselPrevious />
      <CarouselNext />
    </div>
  );
}

function CarouselPrevious({ className, variant = 'outline', size = 'icon' }) {
  const { scrollPrev, canScrollPrev } = useCarouselContext();

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        'absolute top-1/2 -left-4 size-11 -translate-y-1/2 rounded-full shadow-xl md:-left-6',
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      aria-label='Previous slide'
    >
      <ArrowLeft aria-hidden='true' />
    </Button>
  );
}

function CarouselNext({ className, variant = 'outline', size = 'icon' }) {
  const { scrollNext, canScrollNext } = useCarouselContext();

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        'absolute top-1/2 -right-4 size-11 -translate-y-1/2 rounded-full shadow-xl md:-right-6',
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      aria-label='Next slide'
    >
      <ArrowRight aria-hidden='true' />
    </Button>
  );
}

const CarouselContext = React.createContext(null);

function useCarouselContext() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarouselContext must be used within a <Carousel />');
  }
  return context;
}

// Wrap the internals so the context is available to the control buttons.
function CarouselWithContext(props) {
  const [api, setApi] = React.useState(null);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((embla) => {
    if (!embla) return;
    setCanScrollPrev(embla.canScrollPrev());
    setCanScrollNext(embla.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  const handleKeyDown = React.useCallback((event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollPrev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollNext();
    }
  }, [scrollPrev, scrollNext]);

  return (
    <CarouselContext.Provider
      value={{ canScrollPrev, canScrollNext, scrollPrev, scrollNext }}
    >
      <CarouselInner
        {...props}
        api={api}
        setApi={setApi}
        onSelect={onSelect}
        onKeyDownCapture={handleKeyDown}
      />
    </CarouselContext.Provider>
  );
}

function CarouselInner({ api, setApi, onSelect, onKeyDownCapture, ...props }) {
  return (
    <Carousel
      {...props}
      setApi={(embla) => {
        setApi(embla);
        onSelect(embla);
        if (embla) embla.on('select', onSelect).on('reInit', onSelect);
      }}
      onKeyDownCapture={onKeyDownCapture}
    />
  );
}

export {
  CarouselWithContext as Carousel,
  CarouselContent,
  CarouselItem,
};

function CarouselContent({ className, ...props }) {
  return <div className={cn('min-w-0 shrink-0 grow-0 basis-full pl-4', className)} {...props} />;
}

function CarouselItem({ className, ...props }) {
  return <div className={cn('min-w-0 shrink-0 grow-0 basis-full', className)} {...props} />;
}