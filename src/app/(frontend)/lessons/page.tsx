import HalfHero from '@/components/ui/HalfHero';
import NewsletterSignup from '@/components/shared/NewsletterSignup';
import Lessons from '@/components/lessons/Lessons';

import Footer from '@/components/shared/footer/Footer';

import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';
import LessonInfo from '@/components/lessons/LessonInfo';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Golf Lessons | Wyandotte Golf Course in Cottage Grove, OR',
};

const GreensFees = () => {
  return (
    <Fragment>
      <main>
        <HalfHero
          BGHeroSrc="/images/shared/feeling-this-fairway.jpg"
          imageOffset="-27%"
          imageHeight="170%"
          overlayOpacity=".35"
          heroText="Lessons"
        />
        <LessonInfo />
        {/* <NewsletterSignup inputFieldClass='placeholder:text-black/70 focus:border-black bg-accent'/> */}
      </main>
      <Footer />
    </Fragment>
  );
};

export default GreensFees;
