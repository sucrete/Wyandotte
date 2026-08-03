import HalfHero from '@/components/ui/HalfHero';
import CalendarComponent from '@/components/events/Calendar';
import Footer from '@/components/shared/footer/Footer';

import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

import { sanityFetch } from '@/sanity/lib/live';
import { EVENTS_QUERY } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Events | Wyandotte Golf Course',
};

const Events = async () => {
  const { data: eventsData } = await sanityFetch({ query: EVENTS_QUERY });

  return (
    <Fragment>
      <main>
        <HalfHero
          BGHeroSrc="/images/shared/feeling-this-fairway.jpg"
          imageOffset="-27%"
          imageHeight="170%"
          overlayOpacity=".35"
          heroText="Events"
        />
        <CalendarComponent eventsData={eventsData} />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Events;
