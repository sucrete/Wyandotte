'use client';

import Image, { StaticImageData } from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import Masonry from 'react-masonry-css';
import RevealAnimation from '../animation/RevealAnimation';
import Lightbox from './Lightbox';
import { Expand } from '../ui/Icons';

import fr4 from '@public/images/peoria-ridge/gallery/fire-ridge-4.webp';
import fr7 from '@public/images/peoria-ridge/gallery/fire-ridge-7.webp';
import fr8 from '@public/images/peoria-ridge/gallery/fire-ridge-8.webp';
import fr1 from '@public/images/peoria-ridge/gallery/fire-ridge-1.webp';
import pin from '@public/images/peoria-ridge/gallery/pin-flag.jpg';
import shot8 from '@public/images/peoria-ridge/gallery/sh-8.webp';
import gorg from '@public/images/peoria-ridge/gallery/gorg.jpg';
import unnamed from '@public/images/peoria-ridge/gallery/unnamed.webp';
import unnamed2 from '@public/images/peoria-ridge/gallery/unnamed-2.webp';
import wyandotteVert from '@public/images/peoria-ridge/gallery/wyandotte-vert.jpg';

// Fallback set — shown only when the Studio's Gallery document has no images
// uploaded yet.
const fallbackImages = [fr4, shot8, fr7, unnamed2, fr8, gorg, fr1, pin, unnamed, wyandotteVert];

const breakpointColumns = {
  default: 4,
  1280: 3,
  768: 2,
  500: 1,
};

interface GalleryData {
  images?: {
    asset?: {
      url?: string;
      metadata?: { dimensions?: { width?: number; height?: number } };
    };
  }[];
}

interface GalleryProps {
  galleryData?: GalleryData | null;
}

const Gallery = ({ galleryData }: GalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryImages = useMemo<StaticImageData[]>(() => {
    const studioImages = (galleryData?.images ?? [])
      .filter((image) => image.asset?.url && image.asset?.metadata?.dimensions?.width && image.asset?.metadata?.dimensions?.height)
      .map((image) => ({
        src: image.asset!.url!,
        width: image.asset!.metadata!.dimensions!.width!,
        height: image.asset!.metadata!.dimensions!.height!,
      }));

    return studioImages.length > 0 ? studioImages : fallbackImages;
  }, [galleryData]);

  const handleNavigate = useCallback(
    (direction: -1 | 1) => {
      setSelectedIndex((current) => {
        if (current === null) return current;
        return (current + direction + galleryImages.length) % galleryImages.length;
      });
    },
    [galleryImages.length],
  );

  return (
    <section className="relative py-16 md:py-20 lg:py-[200px] bg-[#ffffff] overflow-hidden border-t border-[#f2f2f2]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding flex flex-col gap-4">
          {galleryImages.map((image, index) => (
            <RevealAnimation key={image.src} delay={0.05 * (index % 6)} offset={20}>
              <div
                onClick={() => setSelectedIndex(index)}
                className="brick group relative w-full overflow-hidden rounded-[16px] cursor-pointer"
                style={{ aspectRatio: `${image.width} / ${image.height}` }}>
                <Image
                  src={image}
                  alt={`Fire Ridge Golf Course — photo ${index + 1}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 500px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute bottom-3 right-3 flex size-9 translate-y-1 items-center justify-center rounded-full bg-black/40 opacity-0 backdrop-blur-sm transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <Expand className="size-4 fill-white" />
                </div>
              </div>
            </RevealAnimation>
          ))}
        </Masonry>
      </div>

      <Lightbox
        images={galleryImages}
        index={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onNavigate={handleNavigate}
      />
    </section>
  );
};

export default Gallery;
