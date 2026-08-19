import HalfHero from '@/components/ui/HalfHero';
import NewsletterSignup from '@/components/shared/NewsletterSignup';
import Footer from '@/components/shared/footer/Footer';

import BookingEngine from '@/components/book-tee-time/BookingEngine';

import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Book Tee Time | Reserve your round at Fire Ridge Golf Course in Cottage Grove, OR.',
};

const BookTeeTime = () => {
  return (
    <Fragment>
      <main>
        <HalfHero
          BGHeroSrc="/images/peoria-ridge/fire-ridge-5.webp"
          imageOffset="-17%"
          imageHeight="170%"
          overlayOpacity=".35"
        />
        <BookingEngine />
        {/* <NewsletterSignup className='bg-white' inputFieldClass="placeholder:text-black/70 focus:border-black bg-accent" /> */}
      </main>
      <Footer />
    </Fragment>
  );
};

export default BookTeeTime;
