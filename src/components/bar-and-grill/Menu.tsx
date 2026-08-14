import RevealAnimation from '../animation/RevealAnimation';
import { FireIcon } from '../svg-components/Logos';
import Image from 'next/image';
import { cn } from '@/utils/cn';

const Divider = () => {
  return (
    <div className="main-container flex flex-row items-center ">
      <div className="flex-auto">
        <div className="border-t border-fr-primary-800/15 h-[1px] "></div>
      </div>
      <div className="flex-auto">
        <div className="border-t border-fr-primary-800/15 h-[1px] "></div>
      </div>
    </div>
  );
};
const Menu = () => {
  return (
    <section className=" pb-[9rem] md:pb-[9rem] lg:pb-[14rem] z-21 relative">
      <div className="main-container flex justify-center relative w-full h-full">
        <div className="overlay absolute bg-fade-to-white w-full h-[300px] z-18 left-[0rem] top-[3rem] after:content-[''] after:absolute after:left-[0rem] after:top-[300px] after:w-full after:bg-[#ffffff] after:h-[250px]"></div>
        <div className="paper absolute w-[1100px] h-[600px] max-w-full pt-[5rem] md:pt-[7rem] z-17 lg:pt-[9rem] shadow-2xl left-1/2 -translate-x-1/2 top-[-7rem] bg-[#ffffff]">
          <div className="faux-menu border-box absolute inset-0 w-full h-full p-4">
            <div className="border w-full h-full border-fr-primary-800/15"></div>
          </div>
        </div>
        <div className="copy w-[900px] max-w-full pt-[5rem] md:pt-[7rem] lg:pt-[10rem] -mt-[10rem] relative z-20">
          <RevealAnimation delay={0.1} offset={10}>
            <h2 className="pb-6 text-4xl text-center">Bar & Grill Menu</h2>
          </RevealAnimation>
          <div className="intro-wrapper mx-auto max-w-full flex flex-col gap-5 pb-[4rem]">
            <RevealAnimation delay={0.2} offset={10}>
              <div className="main-container flex flex-row gap-3 items-center ">
                <div className="flex-auto">
                  <div className="border-t border-fr-primary-800/15 h-[1px] "></div>
                </div>
                <div className="div">
                  <FireIcon className="fill-fr-primary-600 size-[15px]" />
                </div>
                <div className="flex-auto">
                  <div className="border-t border-fr-primary-800/15 h-[1px] "></div>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.3} offset={10}>
              <p className="text-center text-[12px] lg:px-14 pb-2 text-[#696969]">
                To compliment our relaxed atmosphere at Peoria Ridge, we have a full-service bar with all the snacks,
                sandwiches, hot dogs, drinks, and beer to keep you satisfied while playing our championship course.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4} offset={10}>
              <Divider />
            </RevealAnimation>
          </div>

          <div className="document space-y-5 text-primary/70">
            <div className="category-wrapper grid grid-cols-7 gap-8">
              <div className="col-span-4">
                <div className="h-full flex flex-col justify-center">
                  <h3 className="-ml-1 pb-1">Entrées</h3>
                  <p className="text-[12px] pb-2.5 text-[#696969]">Includes side of fries.</p>
                  <ul className="columns-2 text-[12px] space-y-2">
                    <li>BLT Sandwich</li>
                    <li>Ham Sandwich</li>
                    <li>Club Sandwich</li>
                    <li>Bacon Cheeseburger</li>
                    <li>Chicken Strip Basket</li>
                    <li>Turkey Sandwich</li>
                    <li>Chicken Sandwich</li>
                    <li>Patty Melt</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-3">
                <Image
                  className="w-full h-auto"
                  src="/images/peoria-ridge/food/patty-melt.webp"
                  width={700}
                  height={300}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
