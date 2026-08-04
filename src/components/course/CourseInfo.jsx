import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { fetchWeather, getWeatherLabel } from '@/utils/weather';
const Weather = async () => {
  const data = await fetchWeather();
  return (
    <>
      {data ? (
        <>
          {Math.round(data.current.temperature_2m)}°F,{' '}
          <span className="capitalize">
            {getWeatherLabel(data.current.weather_code, data.current.wind_speed_10m).toLowerCase()},{' '}
            {Math.round(data.current.wind_speed_10m)}mph wind
          </span>
        </>
      ) : (
        <span>Weather unavailable</span>
      )}
    </>
  );
};
const CourseInfo = async () => {
  const data = await fetchWeather();
  const weatherText = data
    ? `${Math.round(data.current.temperature_2m)}°F, <span className="capitalized">${getWeatherLabel(data.current.weather_code, data.current.wind_speed_10m).toLowerCase()}</span>, ${Math.round(data.current.wind_speed_10m)}mph winds`
    : 'Weather unavailable';

  return (
    <section className="bg-[#f8feda] ">
      <div className="main-container py-7  grid grid-cols-3">
        <div className="col-span-1">
          <RevealAnimation delay={0.3} offset={10}>
            <div className="text-center monospaced text-black/60 pb-1">weather</div>
            <div className="text-center weather">
              <Weather />
            </div>
          </RevealAnimation>
        </div>
        <div className="col-span-1 ">
          <RevealAnimation delay={0.4} offset={10}>
            <div className="text-center monospaced text-black/60 pb-1">date</div>
            <div className="text-center">
              {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
          </RevealAnimation>
        </div>
        <div className="col-span-1 ">
          <RevealAnimation delay={0.5} offset={10}>
            <div className="text-center monospaced text-black/60 pb-1">yardage</div>
            <div className="text-center">White markers: 5,965</div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CourseInfo;
