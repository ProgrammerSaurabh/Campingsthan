'use client';

import { useState } from 'react';

import { stays, foods, activities, places } from '@/lib/site';
import Media from '@/components/media';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Stays = ({
  setCurrentImageIndex = () => null,
  setModalImages = () => null,
  setGalleryModalOpen = () => null,
}) => {
  const [activeTab, setActiveTab] = useState('cocoon-glamp');

  const handleImageClick = (idx, stayImages) => {
    setCurrentImageIndex(idx);
    setModalImages(stayImages.map((img) => img.url));
    setGalleryModalOpen(true);
  };

  return (
    <section
      className='bg-background section-pad px-4 md:px-8'
      aria-labelledby='stays-heading'
      id='stays'
    >
      <div className='mx-auto max-w-7xl'>
        <div className='mb-10 text-center'>
          <h2
            id='stays-heading'
            className='text-3xl font-extrabold sm:text-4xl md:text-5xl'
          >
            Our Stays
          </h2>
          <p className='text-muted-foreground mt-3 text-base sm:text-lg'>
            Choose your perfect accommodation
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList aria-label='Accommodation types'>
            {Object.entries(stays).map(([key, stay]) => (
              <TabsTrigger key={key} value={key}>
                {stay.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(stays).map(([key, stay]) => (
            <TabsContent key={key} value={key}>
              <Card>
                <CardContent className='p-6 md:p-8'>
                  <div className='grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12'>
                    <div>
                      <h3 className='text-2xl font-bold sm:text-3xl'>
                        {stay.title}
                      </h3>
                      <p className='text-muted-foreground mt-3 leading-relaxed'>
                        {stay.description}
                      </p>

                      <h4 className='mt-6 mb-3 text-base font-semibold'>
                        🏕️ Facilities
                      </h4>
                      <ul className='flex flex-wrap gap-2'>
                        {stay.facilities.map((facility) => (
                          <li key={facility} className='min-w-0'>
                            <Badge variant='muted'>{facility}</Badge>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className='bg-background/40 rounded-2xl border border-border p-5'
                      aria-label='Pricing information'
                    >
                      <h4 className='mb-4 text-center text-lg font-semibold'>
                        💰 Pricing
                      </h4>
                      <div className='grid grid-cols-2 gap-3'>
                        <div className='bg-card rounded-xl p-4 text-center'>
                          <div className='text-muted-foreground text-xs tracking-wide uppercase'>
                            Weekend
                          </div>
                          <div className='text-primary mt-1 text-2xl font-bold'>
                            ₹{stay.price.weekend}
                          </div>
                          <div className='text-muted-foreground text-xs'>
                            per person
                          </div>
                        </div>
                        <div className='bg-card rounded-xl p-4 text-center'>
                          <div className='text-muted-foreground text-xs tracking-wide uppercase'>
                            Weekday
                          </div>
                          <div className='text-primary mt-1 text-2xl font-bold'>
                            ₹{stay.price.weekday}
                          </div>
                          <div className='text-muted-foreground text-xs'>
                            per person
                          </div>
                        </div>
                      </div>
                      <p className='text-muted-foreground mt-4 text-center text-xs'>
                        Prices vary by season
                      </p>
                    </div>
                  </div>

                  <div className='masonry-wrap mt-8'>
                    <div className='masonry-grid'>
                      {stay.images.map((img, idx) => (
                        <figure
                          key={img.url}
                          className='masonry-item group relative cursor-pointer overflow-hidden rounded-2xl shadow-md'
                        >
                          <button
                            type='button'
                            className='block w-full'
                            aria-label={`View ${img.alt}`}
                            onClick={() => handleImageClick(idx, stay.images)}
                          >
                            <Media
                              src={img.url}
                              alt={img.alt}
                              sizes='(max-width: 639px) 50vw, 25vw'
                              imageClassName='h-auto w-full transition-transform duration-500 group-hover:scale-105'
                            />
                          </button>
                        </figure>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className='mt-12 grid gap-6 lg:grid-cols-3'>
          <Card>
            <CardContent className='p-6'>
              <h4 className='mb-4 text-lg font-semibold'>🍽️ Food & Dining</h4>
              <ul className='flex flex-wrap gap-2'>
                {foods.map((food) => (
                  <li key={food} className='min-w-0'>
                    <Badge
                      variant='muted'
                      className='h-auto max-w-full py-1.5 text-left whitespace-normal'
                    >
                      {food}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6'>
              <h4 className='mb-4 text-lg font-semibold'>
                🎉 Activities & Entertainment
              </h4>
              <ul className='flex flex-wrap gap-2'>
                {activities.map((activity) => (
                  <li key={activity} className='min-w-0'>
                    <Badge
                      variant='muted'
                      className='h-auto max-w-full py-1.5 text-left whitespace-normal'
                    >
                      {activity}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6'>
              <h4 className='mb-4 text-lg font-semibold'>📍 Nearby Places</h4>
              <ul className='flex flex-wrap gap-2'>
                {places.map((place) => (
                  <li key={place} className='min-w-0'>
                    <Badge
                      variant='muted'
                      className='h-auto max-w-full py-1.5 text-left whitespace-normal'
                    >
                      {place}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Stays;