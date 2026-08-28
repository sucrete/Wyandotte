import RevealAnimation from '../animation/RevealAnimation';
import Image from 'next/image';
import ParallaxImageBackground from '../ui/ParallaxImageBackground';
import TemperaturePaneCard from './TemperaturePaneCard';
import { fetchWeather, getWeatherLabel } from '@/utils/weather';

import { FireIcon } from '../svg-components/Logos';
import Arrow from '@public/images/home/reg-arrow.svg';
import FancyArrow from '@public/images/home/fancy-arrow.svg';

const Hero = async () => {
  const data = await fetchWeather();
  const currentTemp = data ? Math.round(data.current.temperature_2m) : '--';
  const label = data ? getWeatherLabel(data.current.weather_code, data.current.wind_speed_10m) : '';
  const HeadingContent = () => (
    <>
      Welcome to Fire Ridge
      <br /> Golf Course!
    </>
  );

  return (
    // saved classNames -> h-[99svh] xl:max-h-[90svh]
    <section className="bg-cover bg-[url('/images/peoria-ridge/fire-ridge-3.webp')] bg-top bg-no-repeat relative z-20 h-[600px] md:h-[99svh]">
      <ParallaxImageBackground
        src="/images/peoria-ridge/fire-ridge-3.webp"
        offset="-12%"
        sizes="(max-width: 768px) 200vw, 100vw"
      />
      <div className="top-0 left-0 absolute h-[100%] w-[100%] -z-1 bg-scrim-hero-darker opacity-30"></div>
      <div className="absolute left-1/2 -bottom-7 -translate-x-1/2 -translate-y-1/2 md:hidden">
        <Image className="animated-arrow" src={FancyArrow} width={15} height={75} alt="" />
      </div>
      {/* <div className="facebook-link absolute left-6 md:left-[13rem] bottom-[3rem] md:bottom-10 hidden md:block w-fit">
        <RevealAnimation delay={0.3} direction="left" offset={5} instant>
          <a
            href="https://www.facebook.com/PeoriaRidgeGolfCourse/#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fire Ridge Golf Course on Facebook (opens in new tab)"
            className="block group w-[42px] h-[42px] hover:w-[124px] transition-[width] duration-[250ms] ease-in-out overflow-hidden rounded-full backdrop-blur-xl bg-white/10 border border-[#ffffff30] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.08),0_10px_10px_-5px_rgba(0,0,0,0.02),inset_0_0_10px_rgba(236,236,236,0.18)]">
            <img
              src="/images/icons/f.svg"
              alt=""
              aria-hidden="true"
              className="absolute left-[16px] top-1/2 -translate-y-1/2 h-[17px] w-auto"
            />
            <img
              src="/images/icons/acebook.svg"
              alt=""
              aria-hidden="true"
              className="absolute left-[25px] top-1/2 -translate-y-1/2 h-[17px] w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </a>
        </RevealAnimation>
      </div> */}

      <div className="temperature-pane hidden md:block absolute md:right-[13rem] md:bottom-[3rem]">
        {/* shadow-[0_20px_25px_-5px_rgba(0,0,0,0.08),0_10px_10px_-5px_rgba(0,0,0,0.02),inset_0_0_20px_rgba(236,236,236,0.18)] */}
        <TemperaturePaneCard currentTemp={currentTemp} label={label} />
      </div>
      <div className="main-container center-it top-[54%] min-w-[90vw] md:min-w-[1290px]">
        <div className="text-center md:space-y-4 space-y-1">
          <RevealAnimation delay={0.1} offset={10}>
            {/* 1. Relative Container for the "Stack" */}
            <div className="relative inline-block max-w-[90vw] md:max-w-[776px] mx-auto leading-[1.1] text-center overflow-visible h-fit">
              {/* 2. The Real Heading (Visible Gradient) */}
              <h1 className="hero-heading text-[1.5rem] sm:text-[3.5rem] md:text-[3rem] -tracking-[.5px] pb-[0.25em] -mb-[0.25em] relative text-[#fff]">
                <HeadingContent />
              </h1>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3} offset={20}>
            <div className="flex flex-row gap-3 items-center max-w-[60vw] md:max-w-[476px] mx-auto">
              <div className="flex-auto">
                <div className="border-t border-[#ffffff49] h-[1px] "></div>
              </div>
              <div className="div">
                <FireIcon className="fill-[#ffffff97] size-[13px] md:size-[15px]" />
              </div>
              <div className="flex-auto">
                <div className="border-t border-[#ffffff49] h-[1px] "></div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5} offset={10}>
            <p className="initial-descriptiion lg:max-w-[600px] md:max-w-[600px] sm:max-w-[500px] max-w-[380px] mx-auto text-[#ffffffea] wna-text-shadow text-[12px] md:text-[14px]">
              Step onto our pristine course and feel instantly immersed in the beautiful Oklahoma surroundings.{' '}
              <span className="max-md:hidden">
                With rolling terrain, natural obstacles, and sparkling water features, every visit offers a round of
                memorable and engaging golf.
              </span>
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
