import RevealAnimation from '../animation/RevealAnimation';
import Image from 'next/image';

const History = () => {
  return (
    <section className=" pb-[9rem] md:pb-[9rem] lg:pb-[14rem] z-21 relative">
      <div className="main-container flex justify-center relative w-full h-full">
        <div className="overlay absolute bg-fade-to-white w-full h-[300px] z-18 left-0 bottom-[10rem] after:content-[''] after:absolute after:left-0 after:top-[300px] after:w-full after:bg-[#fff] after:h-[250px]"></div>
        <div className="paper absolute w-[850px] h-[600px] max-w-full pt-[5rem] md:pt-[7rem] z-17 lg:pt-[9rem] rounded-[3px] shadow-2xl left-1/2 -translate-x-1/2 top-[-7rem] bg-[#ffffff]">
          <div className="border-box absolute inset-0 w-full h-full p-4">
            <div className="border w-full h-full border-[#cdd4c2]"></div>
          </div>
        </div>
        <div className="copy w-[650px] max-w-full pt-[5rem] md:pt-[7rem] lg:pt-[9rem] -mt-[10rem] relative z-20">
          <RevealAnimation delay={0.1}>
            <h2 className=" text-bushwood-700 pb-5">History</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <Image src={'/images/shared/three-marbles.svg'} className="pb-5" width={30} height={10} alt=""></Image>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="document space-y-5 text-primary/70">
              <p>
                The stunning 18-hole championship golf course, designed by Bland Pittman, features rolling hills, water
                hazards, Bermuda fairways and roughs, and lightning fast bent grass greens.
              </p>
              <p>
                Nestled amidst the serene landscapes of Northeast Oklahoma, Peoria Ridge Golf Course is a Par 72, 18
                hole championship golf course owned by the Peoria Indian Tribe of Oklahoma and designed by renowned
                architect Bland Pittman.
              </p>
              <p>
                Construction on the course began in September of 1998, and the course opened all 18 holes in the Spring
                of 2000. The course features five sets of tee boxes to accommodate the skill level of any golfer. The
                rolling hills and large bodies of water make for some breathtaking vistas and a challenging round of
                golf.
              </p>
              <p>
                Peoria Ridge has a first class practice facility with a driving range, putting and chipping greens. The
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

export default History;
