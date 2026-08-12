import HalfHero from '@/components/ui/HalfHero';
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
          BGHeroSrc="/images/shared/feeling-this-fairway.jpg"
          imageOffset="-27%"
          imageHeight="170%"
          overlayOpacity=".35"
          heroText="Bar & Grill"
        />
        {/* Page body TBD */}
      </main>
      <Footer />
    </Fragment>
  );
};

export default BarAndGrill;
