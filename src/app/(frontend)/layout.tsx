import '@/app/globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';

import Navbar from '@/components/shared/header/Navbar';
import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { AppContextProvider } from '@/context/AppContext';

import { sanityFetch } from '@/sanity/lib/live';
import { TICKER_QUERY } from '@/sanity/lib/queries';

import { SanityLive } from '@/sanity/lib/live';

import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

import { ReactNode, Suspense } from 'react';

export const metadata: Metadata = {
  ...generateMetadata(),
};

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { data: tickerData } = await sanityFetch({ query: TICKER_QUERY });

  return (
    <>
      <AppContextProvider>
        <Navbar notices={tickerData?.tickerArray ?? []} tickerVisible={tickerData?.tickerQuestion ?? false} />
        <Suspense>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </Suspense>
      </AppContextProvider>
      <SanityLive />
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
    </>
  );
}
