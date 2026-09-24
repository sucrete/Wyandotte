import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import Image from 'next/image';
import { Check } from '@/icons';
import Dice from '@public/images/icons/dice.png';
import Chips from '@public/images/icons/chips.png';
import { FireIcon } from '../svg-components/Logos';

const PACKAGE_INCLUDES = [
  'Eighteen holes on our championship par 72 layout',
  'Cart included with every round',
  'Access to the practice green and range',
  'Bar & Grill open before and after your round',
  'Group rates available for foursomes',
  'Flexible tee times throughout the weekend',
];

const StayPlayCasino = () => {
  return (
    <section className="bg-[#5e0002] py-[4rem] md:py-[7rem] lg:py-[9rem] bg-[url('/images/shared/grid.svg')] bg-cover">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center max-lg:gap-y-[3rem] max-md:gap-y-[2.5rem] lg:gap-[5rem]">
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="absolute w-fit h-fit -top-10 -left-[4rem] max-md:-top-8 max-md:-left-[1rem] z-10">
              <RevealAnimation className="" delay={0.7} direction="left" offset={20}>
                <Image
                  className="w-[180px] max-md:w-[110px] h-auto drop-shadow-stacked"
                  src={Dice}
                  width={200}
                  height={200}
                  alt=""
                />
              </RevealAnimation>
            </div>

            <div className="absolute w-fit h-fit -bottom-[4.5rem] -right-[4rem] max-md:-bottom-[2.5rem] max-md:-right-[1rem] z-10">
              <RevealAnimation className="" delay={0.1} direction="right" offset={20}>
                <Image
                  className="w-[220px] max-md:w-[130px] h-auto drop-shadow-stacked"
                  src={Chips}
                  width={200}
                  height={200}
                  alt=""
                />
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.2} direction="left" className="w-full">
              <div className="p-2 rounded-[20px] bg-[#780200] shadow-2xl/55">
                <Image
                  className="rounded-[12px] w-full h-auto"
                  src={'/images/peoria-ridge/hotel/casino.webp'}
                  width={1360}
                  height={1020}
                  alt="A meal from the Bar & Grill at Fire Ridge Golf Course"
                />
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-3">
              <div className="flex flex-row pb-5 space-x-2">
                {/* <Image src={'/images/shared/three-marbles.svg'} className="pr-2" width={30} height={8} alt=""></Image> */}
                <RevealAnimation instant direction="right" offset={15}>
                  <FireIcon className="w-6 h-auto fill-taxi-cab" />
                </RevealAnimation>
                <RevealAnimation delay={0.1} direction="right" offset={5}>
                  <span className="monospaced relative -top-[1px] text-taxi-cab">Casino</span>
                </RevealAnimation>
                {/* <RevealAnimation>
                  <Image className="h-auto w-[200px]" src={RiverBend} width={200} height={75} alt="" />
                </RevealAnimation> */}
              </div>
              <RevealAnimation delay={0.2} direction="right">
                <h2 className="text-[42px] max-md:text-[32px] text-accent">Make a weekend of it!</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3} direction="right">
                <p className="text-white/70 text-[13px] md:text-[15px] pt-1 pb-6 max-w-[92%] max-md:max-w-none">
                  Step inside and experience the action when you enter the gaming floor. Boasting over 700 of the
                  hottest{' '}
                  <a href="https://riverbendcasino.com/casino/slots" className="inline-anchor-light" target="_blank">
                    slots
                  </a>
                  , your favorite{' '}
                  <a
                    href="https://riverbendcasino.com/casino/table-games"
                    className="inline-anchor-light"
                    target="_blank">
                    table games
                  </a>
                  , and a High Limit Room; you’ll enter a world of excitement no matter the game. Make the experience
                  personal by joining{' '}
                  <a
                    href="https://riverbendcasino.com/casino/club-wyandotte"
                    className="inline-anchor-light"
                    target="_blank">
                    {' '}
                    Club Wyandotte
                  </a>
                  , where as a member you’ll begin earning rewards instantly and enjoy exclusive access to promotions,
                  special offers, FREE PLAY and more!
                </p>
              </RevealAnimation>

              <RevealAnimation delay={0.2} offset={50} direction="right">
                <LinkButton
                  href="https://riverbendcasino.com/casino/club-wyandotte"
                  className="btn btn-header-bushwood transition-all shadow-lg/20 hover:shadow-lg/20 hover:btn-white-dark hover:bg-[#4d0100] border-none"
                  target="_blank">
                  Join Club Wyandotte!
                </LinkButton>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayPlayCasino;
