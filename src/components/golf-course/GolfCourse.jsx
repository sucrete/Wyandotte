import RevealAnimation from '../animation/RevealAnimation';
import Image from 'next/image';
import { FireIcon } from '../svg-components/Logos';
import NewsIcon from '@public/images/icons/newspaper.png';

const GolfCourse = () => {
  return (
    <section className=" pb-[9rem] md:pb-[9rem] lg:pb-[14rem] z-21 relative">
      <div className="main-container flex justify-center relative w-full h-full">
        <div className="overlay absolute bg-fade-to-white w-full h-[300px] z-18 left-[0rem] top-[8rem] after:content-[''] after:absolute after:left-[0rem] after:top-[300px] after:w-full after:bg-[#ffffff] after:h-[250px]"></div>
        <div className="paper absolute w-[95vw] md:w-[850px] h-[600px] max-w-full pt-[5rem] md:pt-[7rem] z-17 shadow-[0_0_10px_-3px_rgb(0_0_0_/_0.25)] md:shadow-2xl left-1/2 -translate-x-1/2 -top-[2rem] md:-top-[4rem] bg-[#ffffff]">
          <div className="border-box absolute inset-0 w-full h-full p-3 md:p-4">
            <div className="border w-full h-full border-fr-primary-800/15"></div>
          </div>
        </div>
        <div className="copy w-[650px] max-w-full mt-[2rem] md:mt-[1rem] relative z-20 px-6 md:px-0">
          <RevealAnimation delay={0.1} offset={10}>
            <FireIcon className="w-8 h-auto fill-fr-primary-600 pb-7" />
          </RevealAnimation>
          <RevealAnimation delay={0.2} offset={20}>
            <h2 className="pb-5 text-[25px] max-md:leading-7 md:text-4xl md:w-1/2 -ml-0.5">The Story of Fire Ridge Golf Course</h2>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <div className="document space-y-5 text-primary/70">
              <p>
                The stunning 18-hole championship golf course, designed by Bland Pittman, features rolling hills, water
                hazards, Bermuda fairways and roughs, and lightning fast bent grass greens.
              </p>
              <p>
                Nestled amidst the serene landscapes of Northeast Oklahoma, Fire Ridge Golf Course is a Par 72, 18 hole
                championship golf course designed by renowned architect Bland Pittman and purchased by the Wyandotte
                Nation in 2026.
              </p>
              <div className="news py-[5px] pl-5 pr-3 border-l-2 border-fr-primary-800">
                <div className="flex flex-row align-middle pb-2">
                  <Image className="size-[13px] mr-2 opacity-80" src={NewsIcon} width={50} height={50} alt=''/>
                  <span className="text-[11px] leading-3 ">News</span>
                </div>
                <a
                  href="https://wyandotte-nation.org/wyandotteagrees-to-purchase-peoria-ridge-golf-course/"
                  target="_blank">
                  <h6 className="md:leading-6.5 capitalize text-[17px] md:text-[19px] area-500 underline underline-offset-3 decoration-fr-primary-800/10 hover:decoration-fr-primary-800">
                    "Wyandotte Nation agrees to purchase <br className='max-md:hidden'/> Peoria Ridge Golf Course"
                  </h6>
                </a>
              </div>
              <p>
                Construction on the course began in September of 1998, and the course opened all 18 holes in the Spring
                of 2000. The course features five sets of tee boxes to accommodate the skill level of any golfer. The
                rolling hills and large bodies of water make for some breathtaking vistas and a challenging round of
                golf.
              </p>
              <p>
                Fire Ridge has a first class practice facility with a driving range, putting and chipping greens. The
                golf course hosts numerous outings during the year and is an ideal location for groups both large and
                small.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default GolfCourse;
