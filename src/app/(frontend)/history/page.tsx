import HalfHero from '@/components/ui/HalfHero';
import HistorySection from '@/components/history/History';
import Footer from '@/components/shared/footer/Footer';

import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'History | Fire Ridge Golf Course',
};

const History = () => {
  return (
    <Fragment>
      <main>
        <HalfHero
          BGHeroSrc="/images/shared/feeling-this-fairway.jpg"
          imageOffset="-27%"
          imageHeight="170%"
          overlayOpacity=".35"
          // heroText="History"
        />
        <HistorySection />
      </main>
      <Footer />
    </Fragment>
  );
};

export default History;
