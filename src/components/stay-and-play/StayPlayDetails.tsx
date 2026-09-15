import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { FireIcon } from '../svg-components/Logos';

const StayPlayDetails = () => {
  return (
    <section className="py-[4rem] md:py-[7rem] lg:py-[10rem] bg-[#ffffff]">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center max-lg:gap-y-[3rem] lg:gap-[5rem]">
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.2} direction="left">
              <div className="p-2 rounded-[20px] bg-white shadow-2xl">
                <Image
                  className="rounded-[12px] w-full h-auto"
                  src="/images/peoria-ridge/patio.webp"
                  width={1360}
                  height={1020}
                  alt="Morning light across the fairways at Fire Ridge Golf Course"
                />
              </div>
            </RevealAnimation>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-3">
              <div className="flex flex-row pb-5 space-x-2">
                {/* <Image src={'/images/shared/three-marbles.svg'} className="pr-2" width={30} height={8} alt=""></Image> */}
                <RevealAnimation delay={0.2} direction="right" offset={15}>
                  <FireIcon className="w-6 h-auto fill-taxi-cab" />
                </RevealAnimation>
                <RevealAnimation delay={0.5} direction="right" offset={5}>
                  <span className="monospaced relative -top-[1px] text-[#77363690]">About Us</span>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.4} direction="right">
                <h2>
                  Wake up minutes <br />
                  from the first tee
                </h2>
              </RevealAnimation>

              <RevealAnimation delay={0.7} direction="right">
                <p className="text-black/70 text-[13px] md:text-[15px] pt-1 max-w-[92%]">
                  Fire Ridge sits on rolling terrain just outside Miami, Oklahoma — a championship par 72 designed by
                  Bland Pittman, with water in play across several holes and enough elevation change to keep every round
                  honest. It is an easy drive from town, which makes it a natural anchor for a weekend rather than a
                  single afternoon.
                </p>
              </RevealAnimation>

              <RevealAnimation delay={0.1} direction="right">
                <p className="text-black/70 text-[13px] md:text-[15px] max-w-[92%]">
                  Tell us how many are coming and which days you have in mind, and we will help you line up tee times
                  that fit the trip.
                </p>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayPlayDetails;
