import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { FireIcon } from '../svg-components/Logos';

const StayPlayCourse = () => {
  return (
    <section className="py-[4rem] md:py-[7rem] lg:py-[10rem] bg-[#fafafa] md:h-[800px] bg-[url('/images/peoria-ridge/fire-ridge-3.webp')] bg-cover relative">
      <div className="overlay h-full w-full absolute inset-0 bg-[#2020204d]"></div>
      <div className="main-container h-full">
        <div className="grid grid-cols-12 items-center max-lg:gap-y-[3rem] lg:gap-[5rem]">
          <div className="col-span-12 lg:col-span-6">
            {/* <RevealAnimation delay={0.2} direction="left">
              <div className="p-2 rounded-[20px] bg-white shadow-2xl">
                <Image
                  className="rounded-[12px] w-full h-auto"
                  src="/images/peoria-ridge/fire-ridge-2.webp"
                  width={1360}
                  height={1020}
                  alt="A hole on the course at Fire Ridge Golf Course"
                />
              </div>
            </RevealAnimation> */}
          </div>

          <div className="col-span-12 lg:col-span-6 ">
            <RevealAnimation delay={0.1} direction='right'>
              <div className="shadow-lg/40 bg-[#5e0002] p-[4rem]">
                <div className="space-y-3">
                  <div className="flex flex-row pb-5 space-x-2">
                    <FireIcon className="w-6 h-auto fill-taxi-cab" />

                    <span className="monospaced relative -top-[1px] text-[#d7c3c390]">The Course</span>
                  </div>

                  <h2 className="text-[42px] text-accent">
                    Eighteen holes, <br />
                    worth the trip
                  </h2>

                  <p className="text-accent/70 text-[13px] md:text-[15px] pt-1 max-w-[92%]">
                    A championship par 72 designed by Bland Pittman, with water in play across several holes and enough
                    elevation change to keep every round honest.
                  </p>

                  <p className="text-accent/70 text-[13px] md:text-[15px] max-w-[92%]">
                    Book a tee time before you settle in, or line one up for the morning after — either way, the course
                    is the reason the rest of the trip works.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayPlayCourse;
