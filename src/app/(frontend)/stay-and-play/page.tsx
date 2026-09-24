import HalfHero from '@/components/ui/HalfHero';
import StayPlayCasino from '@/components/stay-and-play/StayPlayCasino';
import StayPlayHotel from '@/components/stay-and-play/StayPlayHotel';
import StayPlayDining from '@/components/stay-and-play/StayPlayDining';
import StayPlayCourse from '@/components/stay-and-play/StayPlayCourse';
import Footer from '@/components/shared/footer/Footer';

import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Stay & Play | Fire Ridge Golf Course in Miami, OK',
};

const StayAndPlay = () => {
  return (
    <Fragment>
      <main>
        <HalfHero
          BGHeroSrc="/images/peoria-ridge/hotel/river-bend.webp"
          imageOffset="-15%"
          imageHeight="130%"
          overlayOpacity=".9"
          heroText="Stay & Play"
        />
        <StayPlayCasino />
        <StayPlayHotel />
        <StayPlayDining />
        {/* <StayPlayCourse /> */}
      </main>
      <Footer />
    </Fragment>
  );
};

export default StayAndPlay;
