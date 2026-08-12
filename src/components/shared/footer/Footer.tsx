import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import { Logo, FireRidgeLogoFull } from '@/components/svg-components/Logos';
import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import WeatherModule from './WeatherModule';

import TQSGears from './TQSGears';

interface FooterOneProps {
  className?: string;
}

const FooterOne: FC<FooterOneProps> = ({ className }) => {
  return (
    <footer
      className={cn(
        'bg-[#00251e] relative h-auto xl:h-[600px] bg-[radial-gradient(ellipse_400%_120%_at_40%_0%,#330000,#110000)]',
        className,
      )}>
      <div className="main-container">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-15 md:gap-y-16 pt-16 pb-12 xl:pt-[6rem]">
          <div className="col-span-12 xl:col-span-4">
            <RevealAnimation delay={0.3}>
              <div className="max-w-[306px] flex flex-col items-center mx-auto xl:mx-0">
                <Link href="/">
                  <figure className="max-w-[175px] mt-[5px]">
                    <FireRidgeLogoFull />
                  </figure>
                </Link>
                <div className="flex items-center gap-3 mt-5">
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/PeoriaRidgeGolfCourse/#"
                    className="footer-social-link">
                    <span className="sr-only">Facebook</span>
                    <Image className="size-6" src={facebook} alt="Facebook" />
                  </Link>
                  <div className="bg-stroke-1/25 h-6 w-px"></div>
                  <Link target="_blank" href="https://www.instagram.com/peoriaridgegc/" className="footer-social-link">
                    <span className="sr-only">Instagram</span>
                    <Image className="size-6" src={instagram} alt="Instagram" />
                  </Link>
                </div>

                <div className="flex items-center gap-3 mt-2"></div>
                {/* <p className="text-accent/60 text-tagline-1 mt-4 text-center">
                  Pro Shop Hours: 7:30am - 9pm, Clubhouse Hours: 8:00am - 9:00pm
                </p> */}

                <div className=" flex flex-col text-center">
                  <Link
                    target="_blank"
                    href="tel:9185427676"
                    className="text-accent/60 text-tagline-1 mt-4 hover:text-accent transition duration-250">
                    (918) 542-7676
                  </Link>
                  <Link
                    target="_blank"
                    href="https://maps.app.goo.gl/1HW777MnJyKpHs5L8"
                    className="text-accent/60 text-tagline-1 mt-4 hover:text-accent transition duration-250">
                    10301 S 600 Rd.
                    <br />
                    Miami, OK 74354
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-16 md:gap-y-8 xl:col-span-8">
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.4}>
                <div className="space-y-5 flex flex-col items-center md:items-start">
                  <p className=" text-tagline-1 text-accent/60 ">Pages</p>
                  <ul className="space-y-0 sm:space-y-1 text-center md:text-left">
                    <li>
                      <Link href="/greens-fees" className="footer-link">
                        Green Fees
                      </Link>
                    </li>
                    <li>
                      <Link href="/memberships" className="footer-link">
                        Memberships
                      </Link>
                    </li>
                    <li>
                      <Link href="/course" className="footer-link">
                        Course
                      </Link>
                    </li>
                    <li>
                      <Link href="/events" className="footer-link">
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link href="/bar-and-grill" className="footer-link">
                        Bar & Grill
                      </Link>
                    </li>
                    <li>
                      <Link href="/history" className="footer-link">
                        History
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="footer-link">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="/book-tee-time" className="footer-link">
                        Book Tee Time
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-8">
              <RevealAnimation delay={0.5}>
                <div>
                  <WeatherModule />
                </div>
              </RevealAnimation>

              <div className="flex flex-col space-y-3 text-center md:text-right pt-[3rem]">
                <RevealAnimation delay={0.7} offset={5} start="top 105%">
                  <Link href="/studio" className="" target="_blank">
                    <p className="text-tagline-1 text-accent/60">
                      Copyright Fire Ridge Golf Course © {new Date().getFullYear()}
                    </p>
                  </Link>
                </RevealAnimation>

                <RevealAnimation delay={0.75} offset={5} start="top 105%">
                  <div className="TQS-attribution-wrapper flex flex-row justify-center md:justify-end">
                    <TQSGears />
                    <p className="text-tagline-1 text-accent/60">Powered by TeeQuest</p>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="relative pt-[35px] pb-[100px] text-center">
          <RevealAnimation delay={0.7} offset={5} duration={2}>
            <div>
              <Logo className="fill-[#012d25]" markClassName="fill-[#012d25]" />
            </div>
          </RevealAnimation>
        </div> */}
      </div>
    </footer>
  );
};

export default FooterOne;
