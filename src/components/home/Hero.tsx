import heroVectorImg from '@public/images/home-page-34/hero-vector.svg';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import TemperaturePaneCard from './TemperaturePaneCard';
import ParallaxImageBackground from '../ui/ParallaxImageBackground';
import Image from 'next/image';
import { fetchWeather, getWeatherLabel } from '@/utils/weather';

const Hero = async () => {
  const data = await fetchWeather();
  const currentTemp = data ? Math.round(data.current.temperature_2m) : '--';
  const label = data ? getWeatherLabel(data.current.weather_code, data.current.wind_speed_10m) : '';
  const HeadingContent = () => (
    <>
      Welcome to Fire Ridge<br/> Golf Course!
    </>
  );

  return (
    // saved classNames -> h-[99svh] xl:max-h-[90svh]
    <section className="bg-cover bg-[url('/images/peoria-ridge/Peoria-photog.webp')] bg-top bg-no-repeat relative z-20 h-[600px] md:h-[99svh]">
      <ParallaxImageBackground
        src="/images/peoria-ridge/Peoria-photog.webp"
        offset="-20%"
        sizes="(max-width: 768px) 200vw, 100vw"
      />
      <div className="top-0 left-0 absolute h-[100%] w-[100%] -z-1 bg-scrim-hero-darker"></div>

      <div className="facebook-link absolute left-6 md:left-[13rem] bottom-[3rem] md:bottom-10 hidden md:block w-fit">
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
      </div>

      <div className="temperature-pane hidden md:block absolute md:right-[13rem] md:bottom-[3rem]">
        {/* shadow-[0_20px_25px_-5px_rgba(0,0,0,0.08),0_10px_10px_-5px_rgba(0,0,0,0.02),inset_0_0_20px_rgba(236,236,236,0.18)] */}
        <TemperaturePaneCard currentTemp={currentTemp} label={label} />
      </div>
      <div className="main-container center-it top-[54%] min-w-[90vw] md:min-w-[1290px]">
        <div className="text-center md:space-y-4 space-y-5">
          <RevealAnimation delay={0.1}>
            {/* 1. Relative Container for the "Stack" */}
            <div className="relative inline-block max-w-[90vw] md:max-w-[776px] mx-auto leading-[1.1] text-center overflow-visible h-fit">
              {/* 2. The Real Heading (Visible Gradient) */}
              <h1
                className="hero-heading text-[1.75rem] sm:text-[3.5rem] md:text-[3rem] -tracking-[.5px] pb-[0.25em] -mb-[0.25em] relative text-[#fff]"
                style={{
                  // background: '#ffffff',
                  // backgroundImage: 'linear-gradient(160deg, #ffffff 0%, #f7f7f7 35%, #dedede 50%, #b5b5b5 100%)',
                  // // textShadow: '0 0 45px white',
                  // backgroundClip: 'text',
                  // WebkitBackgroundClip: 'text',
                  // WebkitTextFillColor: 'transparent',
                  // WebkitBoxDecorationBreak: 'clone',
                  // boxDecorationBreak: 'clone',
                }}>
                <HeadingContent />
              </h1>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="initial-descriptiion lg:max-w-[600px] md:max-w-[600px] sm:max-w-[500px] max-w-[380px] mx-auto text-[#ffffffea] wna-text-shadow">
              Step onto our pristine courses and feel instantly immersed in the lush surroundings. With rolling terrain,
              natural obstacles, and sparkling water features, every visit offers a round of memorable and engaging
              golf.
            </p>
          </RevealAnimation>
        </div>
        {/* <ul className="flex items-center gap-4 justify-center md:flex-row flex-col mt-10">
          <RevealAnimation delay={0.6} direction="left" offset={50}>
            <li className="w-full sm:w-auto text-center sm:text-left">
              <LinkButton
                href="/book-tee-time"
                className="btn hover:btn-secondary text-center border-0 btn-green btn-xl md:w-auto w-[90%] realistic-shadow-md hover:realistic-shadow-light hover:text-ns-green">
                Book Tee Time
              </LinkButton>
            </li>
          </RevealAnimation>
          <RevealAnimation delay={0.7} direction="left" offset={50}>
            <li className="w-full sm:w-auto text-center sm:text-left">
              <LinkButton
                href="/events"
                className="unique-class btn btn-dark hover:btn-green hover:border-0 text-center btn-xl md:w-auto w-[90%] text-ns-green realistic-shadow-md hover:realistic-shadow-light bg-[#1a1a1c]">
                Events at Bushwood
              </LinkButton>
            </li>
          </RevealAnimation>
        </ul> */}
        {/* <RevealAnimation delay={0.8} instant>
          <div className="lg:mt-[100px] mt-[50px]">
            <figure className="xl:max-w-[1240px] lg:max-w-[900px] max-w-[700px] mx-auto rounded-2xl overflow-hidden">
              <Image src={heroImg} className="w-full h-full object-cover " alt="Forex trading" />
              <Image src={heroDarkImg} className="w-full h-full object-cover hidden " alt="Forex trading" />
            </figure>
          </div>
        </RevealAnimation> */}
      </div>
    </section>
  );
};

export default Hero;
