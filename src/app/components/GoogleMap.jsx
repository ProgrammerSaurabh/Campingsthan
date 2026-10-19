'use client';

import { useEffect, useRef } from 'react';

const campingsthan = { lat: 18.6342, lng: 73.4965, title: 'Campingsthan' };

const locations = [
  campingsthan,
  { lat: 18.681559, lng: 73.49507, title: '🏞️ Pawna Lake' },
  { lat: 18.6788, lng: 73.4926, title: '🏖️ Nirwana Waterfall' },
  { lat: 18.6317, lng: 73.5128, title: '⛰️ Tikona Fort' },
  { lat: 18.7214, lng: 73.4928, title: '🏯 Visapur Fort' },
  { lat: 18.7114, lng: 73.5566, title: '🕳️ Bedse Caves' },
  { lat: 18.7048, lng: 73.4683, title: '💧 Dudhiware Waterfall' },
  { lat: 18.6943, lng: 73.4873, title: '🏯 Lohagad Fort' },
  { lat: 18.6562, lng: 73.4547, title: '⛰️ Tung Fort' },
  { lat: 18.7481, lng: 73.4072, title: '🌆 Lonavala' },
  { lat: 18.7626, lng: 73.514, title: "💧 Wet'nJoy Water Park" },
];

const GoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

    if (!apiKey) {
      return;
    }

    let cancelled = false;

    const initMap = () => {
      if (cancelled || !mapRef.current || !window.google) return;

      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: { lat: campingsthan.lat, lng: campingsthan.lng },
        zoom: 12,
      });

      locations.forEach((location, index) => {
        const marker = new window.google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: mapInstance,
          title: location.title,
          ...(index === 0 && {
            icon: {
              url: '/media/campingsthan-logo.png',
              scaledSize: new window.google.maps.Size(40, 40),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(20, 40),
            },
          }),
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `<div style="font-size:14px;font-weight:600;padding:1rem;background:hsl(0 0% 20.78%);color:hsl(0 0% 98%)">${location.title}</div>`,
        });

        marker.addListener('click', () => infoWindow.open({ map: mapInstance, anchor: marker }));
      });
    };

    if (window.google?.maps) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className='h-full w-full' role='application' aria-label='Map showing Campingsthan and nearby attractions'>
      <div ref={mapRef} className='h-full w-full' />
    </div>
  );
};

export default GoogleMap;