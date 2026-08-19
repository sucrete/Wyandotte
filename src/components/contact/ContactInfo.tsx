'use client';

import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import Map from '../shared/Map';
// const DirectionsCircle = () => {
// return (

// )
// }
const contactInfoItems = [
  {
    id: 1,
    src: '/images/icons/map.svg',
    imageSize: { w: 15, h: 15 },
    title: 'Our Address',
    content: '10301 S 600 Rd., Miami, OK 74354',
    link: 'https://maps.app.goo.gl/1HW777MnJyKpHs5L8',
  },
  {
    id: 2,
    src: '/images/icons/email.svg',
    imageSize: { w: 15, h: 15 },
    title: 'Email Us',
    content: 'info@fireridgegolf.com',
    link: 'mailto:info@fireridgegolf.com',
  },
  {
    id: 3,
    src: '/images/icons/lineal-phone.svg',
    imageSize: { w: 15, h: 15 },
    title: 'Call Us',
    content: '(918) 542-7676',
    link: 'tel:9185427676',
  },
];

const ContactInfo = () => {
  return (
    <section
      className=" pt-12 pb-4 md:py-16 lg:py-20 xl:py-[10rem] bg-background-4"
      aria-label="Contact Information and Form">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading */}
          {/* <div className="max-w-[680px] mx-auto text-center space-y-3">
            <RevealAnimation delay={0.2}>
              <div className="badge badge-coral text-[#b85800]">Connect with us</div>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2>Get directions or contact us directly.</h2>
            </RevealAnimation>
          </div> */}
          <div className="flex lg:items-stretch flex-col justify-center items-center gap-4 md:gap-10 lg:flex-row lg:gap-8 xl:gap-10">
            {/* contact info cards */}
            <div className="flex first-column flex-col gap-4 md:gap-8 md:justify-between md:flex-row lg:flex-col max-md:w-full">
              {contactInfoItems.map((item) => (
                <RevealAnimation key={item.id} delay={0.4}>
                  <div className="bg-accent rounded-[20px] p-11 space-y-6 w-full md:max-w-[371px] text-center relative overflow-hidden">
                    <figure className="size-12 mx-auto">
                      <div className="icon-wrapper rounded-[8px] bg-fr-primary-700 p-3 shadow-sm ring ring-inset ring-fr-primary-500/50">
                        <Image
                          src={item.src}
                          alt=""
                          width={item.imageSize.w}
                          height={item.imageSize.h}
                          className="size-full object-cover"
                        />
                      </div>
                    </figure>
                    <div className="space-y-2.5">
                      <p className="text-[18px] text-black">{item.title}</p>
                      <p className="text-black/60 transition-color duration-300 ease-in-out hover:text-black">
                        <Link href={item.link} target="_blank">
                          {item.content}
                        </Link>
                      </p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
            {/* contact form */}
            <div className="second-column flex-1 self-stretch min-h-0 w-full max-w-[847px]">
              <RevealAnimation delay={0.3} className="h-full">
                <div className="rounded-[20px] bg-white p-2.5 w-full h-full">
                  <div className="w-full h-full overflow-hidden rounded-2xl">
                    <Map />
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
