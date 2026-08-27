'use client';

import RevealAnimation from '../animation/RevealAnimation';

const Rules = [
  {
    id: 1,
    rule: 'All golfers must check in',
  },
  {
    id: 2,
    rule: 'Two carts per foursome',
  },
  {
    id: 3,
    rule: 'One cart per twosome',
  },
  {
    id: 4,
    rule: 'No outside alcohol permitted',
  },
  {
    id: 5,
    rule: 'Riders will be charged and only allowed when carts are available',
  },
];

const BookingEngine = () => {
  return (
    <section>
      <div className="main-container py-[2rem] md:py-[7rem] ">
        <RevealAnimation delay={0.3} offset={40}>
          <div className="max-w-[538px] mx-auto rounded-2xl mb-[2rem] py-6 pr-8 pl-8 bg-[#00000006] border border-[#3b3a3a0c] overflow-hidden relative">
            <div className="absolute w-[20px] h-[80%] bg-[#3b3a3a16] top-1/2 -translate-y-1/2 -translate-x-[48px] rounded-r-[5px]"></div>
            <h6 className=" text-black pb-4 text-[18px] area-600">Course Rules</h6>
            {Rules.map((item) => (
              <div key={item.id} className="justify-between text-[#00000074] mb-2">
                <p className="text-[12px] leading-3.5 ">
                  <span className="">{item.id}. </span>
                  {item.rule}
                </p>
              </div>
            ))}
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.1}>
          <iframe
            src="https://bookateetime.teequest.com/course/129"
            style={{ width: '100%', minHeight: '1000px', border: 'none' }}></iframe>
        </RevealAnimation>
      </div>
    </section>
  );
};
export default BookingEngine;
