import RevealAnimation from '../animation/RevealAnimation';
import { FireIcon } from '../svg-components/Logos';
import Image from 'next/image';
import { Check } from '@/icons';
import ImageSwap from '../ui/ImageSwap';

const HOTEL_IMAGES: [{ src: string; alt: string }, { src: string; alt: string }] = [
  { src: '/images/peoria-ridge/hotel/suite-bar.webp', alt: 'The bar inside a suite at River Bend Casino Hotel' },
  { src: '/images/peoria-ridge/hotel/suite.webp', alt: 'A suite at River Bend Casino Hotel' },
];

const AMENITIES = [
  '43" LED TV',
  'Walk-in shower',
  'In-room safe',
  'Complimentary Wi-Fi',
  'Iron/Ironing board',
  'Blow-dryer',
  'Coffee maker',
  'Complimentary bottled water',
  'All rooms are non-smoking',
];

const StayPlayHotel = () => {
  return (
    <section className="py-[4rem] md:py-[7rem] lg:py-[10rem] bg-[#fff] ">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center max-lg:gap-y-[3rem] lg:gap-[5rem]">
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-3">
              <div className="flex flex-row pb-5 space-x-2">
                {/* <Image src={'/images/shared/three-marbles.svg'} className="pr-2" width={30} height={8} alt=""></Image> */}
                <RevealAnimation instant direction="left" offset={15}>
                  <FireIcon className="w-6 h-auto fill-taxi-cab" />
                </RevealAnimation>
                <RevealAnimation delay={0.1} direction="left" offset={5}>
                  <span className="monospaced relative -top-[1px] text-[#77363690]">Hotel</span>
                </RevealAnimation>
                {/* <RevealAnimation>
                  <Image className="h-auto w-[200px]" src={RiverBend} width={200} height={75} alt="" />
                </RevealAnimation> */}
              </div>
              <RevealAnimation delay={0.2} direction="left">
                <h2 className="text-[42px]">
                  Wake up minutes <br />
                  from the first tee
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3} direction="left">
                <p className="text-black/70 text-[13px] md:text-[15px] pt-1 pb-2 max-w-[92%]">
                  A vacation is closer than you think when you stay at River Bend Casino Hotel! From our chic and
                  luxurious hotel, to our action packed gaming floor and Club 60 West, it’s the perfect getaway for a
                  night of excitement! Discover the bliss of comfort and convenience when you book today!
                </p>
              </RevealAnimation>
              <ul className="inline-grid sm:grid-cols-2 gap-x-10 gap-y-2.5 text-left pb-11">
                {AMENITIES.map((item, index) => (
                  <RevealAnimation key={index} delay={0.3 + index * 0.05} direction="left" offset={35}>
                    <li key={item} className="flex items-start gap-3">
                      <Check className="size-4 shrink-0 text-fr-primary-700 mt-[3px]" />
                      <span className="text-black/70 text-[13px] md:text-[14px]">{item}</span>
                    </li>
                  </RevealAnimation>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.2} direction="right" className="w-full">
              {/* Both hotel photos are 3000x2002. */}
              <ImageSwap items={HOTEL_IMAGES} aspectRatio={3000 / 2002} />
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayPlayHotel;
