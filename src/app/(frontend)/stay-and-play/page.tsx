import HalfHero from '@/components/ui/HalfHero';
import StayPlayPromo from '@/components/stay-and-play/StayPlayPromo';
import StayPlayDetails from '@/components/stay-and-play/StayPlayDetails';
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
          BGHeroSrc="/images/peoria-ridge/fire-ridge-3.webp"
          imageOffset="-15%"
          imageHeight="140%"
          overlayOpacity=".75"
          heroText="Stay & Play"
        />
        <StayPlayDetails />
        <StayPlayPromo />
      </main>
      <Footer />
    </Fragment>
  );
};

export default StayAndPlay;
