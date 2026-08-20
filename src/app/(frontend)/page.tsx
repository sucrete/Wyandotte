import Hero from '@/components/home/Hero';

import Links from '@/components/home/Links';
import CourseIntro from '@/components/home/CourseIntro';
import EventsPreview from '@/components/home/EventsPreview';
import Gallery from '@/components/home/Gallery';
import NewsletterSignup from '@/components/shared/NewsletterSignup';

import Footer from '@/components/shared/footer/Footer';

import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

import { sanityFetch } from '@/sanity/lib/live';
import { EVENTS_QUERY, GALLERY_QUERY } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Fire Ridge Golf Course | A scenic golf destination in Cottage Grove, OR.',
};

const Home = async () => {
  const { data: eventsData } = await sanityFetch({ query: EVENTS_QUERY });
  const { data: galleryData } = await sanityFetch({ query: GALLERY_QUERY });

  return (
    <Fragment>
      <main>
        <Hero />
        <Links />
        <CourseIntro />
        <EventsPreview eventsData={eventsData} />
        <Gallery galleryData={galleryData} />

        {/* <NewsletterSignup inputFieldClass="placeholder:text-black/70 focus:border-black bg-accent" /> */}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
