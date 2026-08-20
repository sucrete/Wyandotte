import { Fragment } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import { FireIcon } from '../svg-components/Logos';
import Image from 'next/image';
import { cn } from '@/utils/cn';

interface MenuSectionData {
  title?: string;
  description?: string;
  items?: string[];
}

interface MenuData {
  entrees?: MenuSectionData;
  quickBites?: MenuSectionData;
  grabAndGo?: MenuSectionData;
  drinks?: MenuSectionData;
}

interface MenuProps {
  menuData?: MenuData;
}

// Fixed per-category photo — the Studio's Food list only holds text (title,
// description, items), so imagery stays mapped here rather than in Sanity.
const CATEGORY_IMAGES: Record<string, string> = {
  entrees: '/images/peoria-ridge/food/patty-melt.webp',
  quickBites: '/images/peoria-ridge/food/Cheese-Sticks.webp',
  grabAndGo: '/images/peoria-ridge/food/Hot-Dog-2.webp',
  drinks: '/images/peoria-ridge/food/Beer-Bucket.webp',
};

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

const Menu = ({ menuData }: MenuProps) => {
  const categories = (['entrees', 'quickBites', 'grabAndGo', 'drinks'] as const)
    .map((key) => ({ key, data: menuData?.[key] }))
    .filter((category): category is { key: keyof MenuData; data: MenuSectionData } => Boolean(category.data));

  return (
    <section className=" pb-[9rem] md:pb-[9rem] lg:pb-[14rem] z-21 relative">
      <div className="main-container flex justify-center relative w-full h-full">
        <div className="overlay absolute bg-fade-to-white w-full h-[300px] z-18 left-[0rem] top-[8rem] after:content-[''] after:absolute after:left-[0rem] after:top-[300px] after:w-full after:bg-[#ffffff] after:h-[250px]"></div>
        <div className="paper absolute w-[95vw] md:w-[1100px] h-[600px] max-w-full z-17 shadow-[0_0_10px_-3px_rgb(0_0_0_/_0.25)] md:shadow-2xl left-1/2 -translate-x-1/2 -top-[2rem] md:-top-[4rem] bg-[#ffffff]">
          <div className="faux-menu border-box absolute inset-0 w-full h-full p-4">
            <div className="border w-full h-full border-fr-primary-800/15"></div>
          </div>
        </div>
        <div className="copy w-[900px] max-w-full mt-[2rem] md:mt-[2rem] relative z-20 px-2 md:px-0">
          <RevealAnimation delay={0.1} offset={10}>
            <h2 className="pb-9 md:text-4xl text-center px-8 md:px-0">Bar & Grill Menu</h2>
          </RevealAnimation>
          <div className="intro-wrapper mx-auto max-w-full flex flex-col gap-5 pb-14 ">
            <RevealAnimation delay={0.2} offset={10}>
              <div className="main-container flex flex-row gap-3 items-center">
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
              <p className="text-center text-[12px] lg:px-14 pb-2 text-[#696969] px-8 md:px-0">
                To complement our relaxed atmosphere at Peoria Ridge, we have a full-service bar with all the snacks,
                sandwiches, hot dogs, drinks, and beer to keep you satisfied while playing our championship course.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4} offset={10}>
              <Divider />
            </RevealAnimation>
          </div>

          <div className="document space-y-14 text-primary/70">
            {categories.map((category, index) => {
              const { key, data } = category;
              // Alternates left/right per category, matching the original hand-built layout.
              const imageFirst = index % 2 === 1;
              const twoColumn = (data.items?.length ?? 0) > 4;
              const delay = index % 2 === 0 ? 0.5 : 0.1;

              const textBlock = (
                <div className={cn('col-span-7 md:col-span-4 px-8 md:pt-0 md:pb-0 md:pr-0', !imageFirst && 'md:pl-5')}>
                  <div className="h-full flex flex-col justify-center">
                    <h3 className={cn('-ml-1', data.description ? 'pb-1' : 'pb-3')}>{data.title}</h3>
                    {data.description && <p className="text-[12px] pb-2.5 text-[#696969]">{data.description}</p>}
                    {data.items && data.items.length > 0 && (
                      <ul
                        className={cn(
                          'text-[12px] space-y-2 list-[square] ps-3.5 marker:text-fr-primary-800/15',
                          twoColumn && 'columns-2',
                        )}>
                        {data.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );

              const imageBlock = (
                <div className="col-span-3 hidden md:block">
                  <Image className="w-full h-auto" src={CATEGORY_IMAGES[key]} width={700} height={300} alt="" />
                </div>
              );

              return (
                <Fragment key={key}>
                  <RevealAnimation delay={delay} offset={20}>
                    <div className="category-wrapper grid grid-cols-7 gap-10">
                      {imageFirst ? (
                        <>
                          {imageBlock}
                          {textBlock}
                        </>
                      ) : (
                        <>
                          {textBlock}
                          {imageBlock}
                        </>
                      )}
                    </div>
                  </RevealAnimation>
                  {index < categories.length - 1 && (
                    <RevealAnimation offset={10}>
                      <Divider />
                    </RevealAnimation>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
