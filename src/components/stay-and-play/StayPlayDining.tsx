import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

import TwinBridges from '@public/images/logos/twin-bridges.svg';
import { FireIcon } from '../svg-components/Logos';

const StayPlayDining = () => {
  return (
    <section
      className="py-[4rem] md:pt-[5rem] md:pb-[7rem] lg:pt-[8rem] lg:pb-[11rem] border-t border-[#f5f5f5] bg-[url('/images/shared/grid-light.svg'),radial-gradient(ellipse_400%_120%_at_50%_0%,#fdfdfd,#ebe8e6)]
">
      <div className="main-container">
        <div className="pb-[2rem]">
          <RevealAnimation className="items-center w-full" delay={0.1}>
            <Image
              className="w-[350px] max-md:w-[240px] h-auto mx-auto"
              src={TwinBridges}
              width={300}
              height={100}
              alt="twin bridges restaurant logo"
            />
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 items-center max-lg:gap-y-[3rem] lg:gap-[5rem]">
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.2} direction="left">
              <div className="p-2 rounded-[20px] bg-white shadow-2xl">
                <Image
                  className="rounded-[12px] w-full h-auto"
                  src={'/images/peoria-ridge/hotel/mac.webp'}
                  width={1360}
                  height={1020}
                  alt="A meal from the Bar & Grill at Fire Ridge Golf Course"
                />
              </div>
            </RevealAnimation>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-3">
              <div className="flex flex-row pb-5 max-md:pb-2 space-x-2">
                {/* <RevealAnimation delay={0.2} direction="right" offset={15}>
                  <FireIcon className="w-6 h-auto fill-taxi-cab" />
                </RevealAnimation>
                <RevealAnimation delay={0.5} direction="right" offset={5}>
                  <span className="monospaced relative -top-[1px] text-[#77363690]">Dining</span>
                </RevealAnimation> */}
                <RevealAnimation delay={0.25} direction="right">
                  <h2 className="text-[42px] max-md:text-[32px]">Never leave hungry</h2>
                </RevealAnimation>
              </div>

              <RevealAnimation delay={0.3} direction="right">
                <p className="text-black/70 text-[13px] md:text-[15px] max-w-[92%] max-md:max-w-none pl-[3px]">
                  Satisfy your appetite with any of our outstanding dining selections. Enjoy a more secluded dining
                  experience in{' '}
                  <a
                    className="inline-anchor"
                    href="https://riverbendcasino.com/dining/twin-bridges-restaurant"
                    target="_blank">
                    Twin Bridges Restaurant
                  </a>{' '}
                  with award-winning selections such as, 10 OZ. Bourbon Rib Eye, Sweet Smoked Honey Grilled Chicken or
                  Blackened Salmon with Blue Crab; ending on a sweet note with a treat like Vanilla Bean Crème Brûlée.
                  Or perhaps you’d prefer a more fast paced option, which can be found at the{' '}
                  <a
                    className="inline-anchor"
                    href="https://riverbendcasino.com/dining/twin-bridges-restaurant"
                    target="_blank">
                    Casino Deli
                  </a>
                  ! Offering Burgers, Pizza, Wings and more; you’ll find your favorite classic and be served in no time
                  so you can get back to your favorite games!
                </p>
              </RevealAnimation>

              {/* <RevealAnimation delay={0.1} direction="right">
                <p className="text-black/70 text-[13px] md:text-[15px] max-w-[92%]">
                  Whether you are grabbing something quick between the front and back nine or settling in afterward,
                  there is a table waiting.
                </p>
              </RevealAnimation> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayPlayDining;
