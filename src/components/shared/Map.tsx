

// src/components/shared/Map.tsx
'use client';

import { useState, useEffect } from 'react';

const Map = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a skeleton or placeholder that matches the SSR dimensions
    return <div className="w-full h-full bg-gray-200 animate-pulse" />;
  }

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.0011791586203!2d-94.80661339999999!3d36.866390599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c815fc997f8b75%3A0x959d3be2b8ac33b5!2sPeoria%20Ridge%20Golf%20Course!5e0!3m2!1sen!2sus!4v1785422687391!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"
      className="min-h-[300px] lg:min-h-[450px] h-full"
    />
  );
};

export default Map;