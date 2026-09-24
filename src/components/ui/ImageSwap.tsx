'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { cn } from '@/utils/cn';

interface ImageSwapItem {
  src: string;
  alt: string;
}

interface ImageSwapProps {
  items: [ImageSwapItem, ImageSwapItem];
  // Width / height of the main image. The thumbnail uses the same ratio.
  aspectRatio?: number;
  className?: string;
}

// Slot geometry as percentages of the stage, so it scales with the column.
// The thumbnail overhangs the main image's bottom-right corner. It's placed
// with `left` (100% - 28% width + 5% overhang) rather than `right` so both
// slots share the same properties and GSAP can tween straight between them.
const MAIN_SLOT = { left: '0%', top: '0%', width: '100%', height: '100%' };
const THUMB_SLOT = { left: '-5%', top: '80%', width: '28%', height: '28%' };

// Matches StayPlayDining's frame: p-2, rounded-[20px], bg-white, shadow-2xl.
const MAIN_FRAME = { padding: 8, borderRadius: 20, boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)' };
const THUMB_FRAME = { padding: 0, borderRadius: 12, boxShadow: '0px 10px 25px -5px rgba(0, 0, 0, 0.35)' };
const THUMB_HOVER_SHADOW = '0px 18px 40px -8px rgba(0, 0, 0, 0.45)';

const SWAP_DURATION = 0.7;

// One large framed image with a smaller unframed one floating over its
// bottom-right corner. Clicking the small one swaps them: it springs up into
// the main position and gains the frame while the old main image drops
// behind it into the thumbnail spot and loses its frame.
const ImageSwap = ({ items, aspectRatio = 3 / 2, className }: ImageSwapProps) => {
  const [mainIndex, setMainIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isFirstRun = useRef(true);

  useEffect(() => {
    // Initial positions come from the inline styles below; only animate on swaps.
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    const growing = cardRefs.current[mainIndex];
    const shrinking = cardRefs.current[1 - mainIndex];
    if (!growing || !shrinking) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduced ? 0 : SWAP_DURATION;

    const tl = gsap.timeline({ defaults: { duration, overwrite: 'auto' } });
    // The growing image travels in front; the old main image slides behind it.
    tl.set(growing, { zIndex: 3 }, 0)
      .set(shrinking, { zIndex: 1 }, 0)
      // Geometry gets the spring. Frame properties use a plain ease so padding
      // never overshoots below zero.
      .to(growing, { ...MAIN_SLOT, scale: 1, ease: 'back.out(1.4)' }, 0)
      .to(growing, { ...MAIN_FRAME, ease: 'power2.out' }, 0)
      .to(shrinking, { ...THUMB_SLOT, scale: 1, ease: 'back.out(1.4)' }, 0)
      .to(shrinking, { ...THUMB_FRAME, ease: 'power2.out' }, 0)
      // Once it has mostly settled, lift the new thumbnail above the main image
      // so it floats over the corner again.
      .set(shrinking, { zIndex: 2 }, duration * 0.6)
      .set(growing, { zIndex: 1 }, duration * 0.6);

    return () => {
      tl.kill();
    };
  }, [mainIndex]);

  const handleHover = (index: number, entering: boolean) => {
    if (index === mainIndex) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.to(cardRefs.current[index], {
      scale: entering ? 1.05 : 1,
      boxShadow: entering ? THUMB_HOVER_SHADOW : THUMB_FRAME.boxShadow,
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  const swapTo = (index: number) => {
    if (index !== mainIndex) setMainIndex(index);
  };

  return (
    <div className={cn('relative w-full', className)} style={{ aspectRatio }}>
      {items.map((item, index) => {
        // Inline styles reflect the initial layout only (item 0 is main). They
        // never change between renders, so React won't reset what GSAP animates.
        const startsMain = index === 0;
        const isThumb = index !== mainIndex;

        return (
          <div
            key={item.src}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            role={isThumb ? 'button' : undefined}
            tabIndex={isThumb ? 0 : -1}
            aria-label={isThumb ? `Show ${item.alt}` : undefined}
            onClick={() => swapTo(index)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                swapTo(index);
              }
            }}
            onMouseEnter={() => handleHover(index, true)}
            onMouseLeave={() => handleHover(index, false)}
            className={cn(
              'absolute bg-[#ffffff] outline-none focus-visible:ring-2 focus-visible:ring-fr-primary-600',
              isThumb ? 'cursor-pointer' : 'cursor-default',
            )}
            style={{
              ...(startsMain ? MAIN_SLOT : THUMB_SLOT),
              ...(startsMain ? MAIN_FRAME : THUMB_FRAME),
              zIndex: startsMain ? 1 : 2,
            }}>
            <div className="relative h-full w-full overflow-hidden rounded-[12px]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageSwap;
