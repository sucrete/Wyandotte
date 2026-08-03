import HalfHero from '@/components/ui/HalfHero';
import CourseInfo from '@/components/course/CourseInfo';
import NewsletterSignup from '@/components/shared/NewsletterSignup';

import Footer from '@/components/shared/footer/Footer';

import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Course Layout | A preview of each hole at Wyandotte Golf Course.',
};

const Course = () => {
  return (
    <Fragment>
      <main>
        <HalfHero
          BGHeroSrc="/images/shared/bl-1.webp"
          imageOffset="-25%"
          imageHeight="200%"
          overlayOpacity=".25"
          heroText="Course"
        />
        <CourseInfo />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Course;
