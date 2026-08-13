import HalfHero from '@/components/ui/HalfHero';
import MembershipsSection from '@/components/memberships/MembershipsSection';
import MembershipInquiryForm from '@/components/memberships/MembershipInquiryForm';
import Footer from '@/components/shared/footer/Footer';

import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

import { sanityFetch } from '@/sanity/lib/live';
import { MEMBERSHIPS_QUERY } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Memberships | Fire Ridge Golf Course',
};

const Memberships = async () => {
  const { data: membershipsData } = await sanityFetch({ query: MEMBERSHIPS_QUERY });

  return (
    <Fragment>
      <main>
        <HalfHero
          BGHeroSrc="/images/peoria-ridge/banner-2.jpg"
          imageOffset="-7%"
          imageHeight="110%"
          overlayOpacity=".35"
          heroText="Memberships"
        />
        <MembershipsSection membershipsData={membershipsData} />
        <section className="py-[6rem] md:py-[9rem] lg:py-[12rem] px-5 bg-[#ffffff] border-t border-[#f2f2f2] grey-to-white-grad">
          <MembershipInquiryForm />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Memberships;
