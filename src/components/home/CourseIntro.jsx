'use client';

import copse from '@public/images/peoria-ridge/promo-1.jpg';
import vertImage from '@public/images/peoria-ridge/wyandotte-vert.jpg';

import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RevealAnimation from '../animation/RevealAnimation';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CourseIntro = () => {
  const sectionRef = useRef(null);
  const floatingRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(floatingRef.current, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="pt-0 pb-16 md:py-20 lg:py-[100px] bg-background-2 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-24 lg:items-center py-[50px] lg:py-[80px]">
          {/* Left — text */}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-row">
              {/* <Image src={'/images/shared/three-marbles.svg'} className="pr-2" width={30} height={8} alt=""></Image> */}
              <RevealAnimation delay={.6} direction="left" offset={10}>
                <span className="green-circle size-[9px] bg-taxi-cab rounded-full inline-block mr-2"></span>
              </RevealAnimation>
              <RevealAnimation delay={.2} direction="left" offset={10}>
                <span className="monospaced relative -top-[1px] text-[#949494]">About Us</span>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.2} direction="left" offset={20}>
              <h2
                className="leading-[1.1] text-[3rem] text-bushwood-
              700">
                A rewarding experience from tee one.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3} direction="left" offset={20}>
              <div className="space-y-4">
                <p className="text-primary/70">
                  Nestled amidst the serene landscapes of Northeast Oklahoma, Fire Ridge offers an inviting 18-hole,
                  Par 72 championship experience designed by renowned architect Bland Pittman. Five sets of tee boxes
                  accommodate golfers of every skill level, ensuring both challenge and enjoyment.
                </p>
                <p className="text-primary/70">
                  Beyond the greens, our Pro Shop offers a curated selection of premium apparel and equipment for your
                  every need. After the round, unwind at the Clubhouse Bar &amp; Grill, where fresh American entrées and
                  a full-service bar set the scene for well-earned relaxation.
                </p>
                <p className="text-primary/70">
                  Planning something special? Our 2,500-square-foot banquet center offers versatile catering for
                  gatherings of any size, while the panoramic patio delivers picturesque views of the greens and ponds
                  year-round — a destination where casual comfort meets professional excellence, and every visit feels
                  like a retreat.
                </p>
              </div>
            </RevealAnimation>
          </div>

          {/* Right — images */}
          <div className="relative h-[520px] lg:h-[620px]">
            {/* Large portrait image */}
            <RevealAnimation delay={0.2} direction="right" className="absolute left-0 top-0 w-[85%] lg:w-[68%] h-full">
              <div className="relative h-full rounded-2xl overflow-hidden shadow-lg">
                <Image src={vertImage} alt="Fire Ridge Golf Course" fill className="object-cover" />
              </div>
            </RevealAnimation>

            {/* Floating parallax image */}
            <div
              ref={floatingRef}
              className="absolute bottom-[-10px] right-0 w-[52%] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-white "
              style={{ willChange: 'transform' }}>
              <Image src={copse} alt="cute dog hanging out on a Fire Ridge fairway" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseIntro;
