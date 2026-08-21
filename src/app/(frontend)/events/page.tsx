import HalfHero from '@/components/ui/HalfHero';
import CalendarComponent from '@/components/events/Calendar';
import Footer from '@/components/shared/footer/Footer';

import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

import { sanityFetch } from '@/sanity/lib/live';
import { EVENTS_QUERY } from '@/sanity/lib/queries';

// Forces a fresh Sanity fetch on every request — see (frontend)/page.tsx for why.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Events | Fire Ridge Golf Course',
};

const Events = async () => {
  const { data: eventsData } = await sanityFetch({ query: EVENTS_QUERY });

  return (
    <Fragment>
      <main>
        <HalfHero
          BGHeroSrc="/images/peoria-ridge/fire-ridge-3.webp"
          imageOffset="-15%"
          imageHeight="250%"
          overlayOpacity=".5"
          heroText="Events"
        />
        <CalendarComponent eventsData={eventsData} />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Events;
