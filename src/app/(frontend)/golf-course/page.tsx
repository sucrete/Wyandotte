import HalfHero from '@/components/ui/HalfHero';
import GolfCourseSection from '@/components/golf-course/GolfCourse';
import Footer from '@/components/shared/footer/Footer';

import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Golf Course | Fire Ridge Golf Course',
};

const GolfCourse = () => {
  return (
    <Fragment>
      <main>
        <HalfHero
          BGHeroSrc="/images/shared/feeling-this-fairway.jpg"
          imageOffset="-27%"
          imageHeight="170%"
          overlayOpacity=".35"
          // heroText="Golf Course"
        />
        <GolfCourseSection />
      </main>
      <Footer />
    </Fragment>
  );
};

export default GolfCourse;
