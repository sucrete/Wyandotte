'use client';


import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const LessonInfo = () => {
  return (
    <section id="contact-for-lesson" className="pt-[100px] pb-[100px] md:pb-[200px] bg-background-3">
      <div className="main-container">
        <div className="grid grid-cols-12 max-lg:gap-y-[100px] lg:gap-[100px]">
          <div className="col-span-12 lg:col-span-8 flex flex-col justify-center items-center">
            <div className="text-left space-y-5 mb-[30px]">
              <div className="space-y-3">
                <RevealAnimation delay={0.3} direction="left">
                  <div className="badge badge-yellow mb-6">golf 101</div>
                </RevealAnimation>
                <RevealAnimation delay={0.4} direction="left">
                  <h2>Understand the game <br/>from start to finish.</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.6} direction="left">
                  <p className="max-w-[90%] pt-1 pl-1">
                    We offer lessons for adult beginners. Beginners’ lessons entail the basics of golf; etiquette, club
                    handling and selection, addressing the ball, stance, putting, chipping, driving, and bunker escapes.
                    The lessons are in a small group of five. They meet Wednesdays, and Fridays from 5:30 to 7:30. There
                    are four consecutive lessons, and the cost is only $48.00. For all. On the final lesson, the group
                    will be taken out onto the course and practice under true course conditions.
                  </p>
                </RevealAnimation>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <RevealAnimation delay={0.6} direction="right">
              <div className="p-2 lg:p-2 rounded-[20px] bg-white border border-[#80808021] shadow-2xl">
               <Image className='rounded-[12px]' src='/images/lessons/close-up-golf-ball.webp' width={600} height={600} alt=''/>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LessonInfo;
