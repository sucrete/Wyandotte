import HalfHero from '@/components/ui/HalfHero';
import NewsletterSignup from '@/components/shared/NewsletterSignup';
import Footer from '@/components/shared/footer/Footer';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';

import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Us | Fire Ridge Golf Course in Cottage Grove, OR',
};

const Contact = () => {
  return (
    <Fragment>
      <main>
        <HalfHero
          BGHeroSrc="/images/peoria-ridge/parallax-bg.jpg"
          imageOffset="-20%"
          imageHeight="120%"
          overlayOpacity=".25"
          heroText="Contact Us"
        />
        <ContactInfo />
        <section className="pt-[3rem] pb-[6rem] md:pb-[9rem] lg:pb-[12rem] px-5 bg-background-4">
          <ContactForm />
        </section>
        {/* <NewsletterSignup
          className="bg-background-2"
          inputFieldClass="placeholder:text-black/70 focus:border-black bg-accent"
        /> */}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Contact;
