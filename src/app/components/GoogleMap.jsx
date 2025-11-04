import React, { useEffect, useRef, useState } from 'react';

const GoogleMap = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  const locations = [
    { lat: 18.6342, lng: 73.4965, title: 'Campingsthan' },
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

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    if (!mapRef.current) return;

    const mapInstance = new google.maps.Map(mapRef.current, {
      center: { lat: 18.6342, lng: 73.4965 },
      zoom: 12,
    });

    locations.forEach((location, index) => {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: mapInstance,
        title: location.title,
        icon:
          index === 0
            ? {
                url: '/media/campingsthan-logo.png',
                scaledSize: new google.maps.Size(40, 40),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(20, 40),
              }
            : null,
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `<div style="font-size: 14px; font-weight: 600; padding: 1rem; background: hsl(0deg 0% 20.78%);">${location.title}</div>`,
        disableAutoPan: true,
      });

      marker.addListener('click', () => {
        infoWindow.open(mapInstance, marker);
      });
    });

    setMap(mapInstance);
  };

  return (
    <div className='w-full h-[500px] flex flex-col'>
      <div
        ref={mapRef}
        className='flex-1 w-full'
      />
    </div>
  );
};

export default GoogleMap;
