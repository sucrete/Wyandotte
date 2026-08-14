import HalfHero from '@/components/ui/HalfHero';
import Menu from '@/components/bar-and-grill/Menu';
import Footer from '@/components/shared/footer/Footer';

import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Bar & Grill | Fire Ridge Golf Course',
};

const BarAndGrill = () => {
  return (
    <Fragment>
      <main>
        <HalfHero
          BGHeroSrc="/images/peoria-ridge/banquet-room.jpg"
          imageOffset="-7%"
          imageHeight="110%"
          overlayOpacity=".35"
          // heroText="Bar & Grill"
        />
        <Menu/>
      </main>
      <Footer />
    </Fragment>
  );
};

export default BarAndGrill;
