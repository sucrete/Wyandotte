import HalfHero from '@/components/ui/HalfHero';
import MembershipsSection from '@/components/memberships/MembershipsSection';
import MembershipInquiryForm from '@/components/memberships/MembershipInquiryForm';
import Footer from '@/components/shared/footer/Footer';
import Separator from '@/components/shared/Separator';

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
      <main className="bg-[#f3f3f3]">
        <HalfHero
          BGHeroSrc="/images/peoria-ridge/banner-2.jpg"
          imageOffset="-7%"
          imageHeight="110%"
          overlayOpacity=".35"
          heroText="Memberships"
        />
        <MembershipsSection membershipsData={membershipsData} />
        <Separator />
        <section className="pb-[6rem] md:pb-[9rem] lg:pb-[12rem] pt-[1rem] md:pt-[3rem] lg:pt-[8rem] px-5">
          <MembershipInquiryForm />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Memberships;
