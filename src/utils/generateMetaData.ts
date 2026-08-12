import type { Metadata } from 'next';

// TODO: replace with the real production domain once the course name is finalized.
export const DEFAULT_URL = 'https://wyandottegolf.com/';
export const DEFAULT_TITLE = 'Fire Ridge Golf Course | Miami, Oklahoma';
export const DEFAULT_DESCRIPTION =
  'Fire Ridge Golf Course in Miami, OK, a scenic par 72 public golf course designed by renowned architect Bland Pittman';
export const DEFAULT_IMAGE_URL = `${DEFAULT_URL}images/hero-images/carts-amongst-the-pines.jpg`;


//* This is just an object that sets default metadata
const defaultMetadata: Metadata = {
  metadataBase: new URL(DEFAULT_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: '/images/icons/fire.svg',
  },
  openGraph: {
    type: 'website',
    siteName: 'Fire Ridge Golf Course',
    url: DEFAULT_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: DEFAULT_IMAGE_URL, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_IMAGE_URL],
  },
};

const generateMetadata = (title?: string, description?: string, canonicaUrl?: string, imageUrl?: string): Metadata => {
  return {
    ...defaultMetadata,
    title: title ?? defaultMetadata.title,
    description: description ?? defaultMetadata.description,
    alternates: {
      canonical: canonicaUrl,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title ?? defaultMetadata.openGraph?.title,
      description: description ?? defaultMetadata.openGraph?.description,
      url: canonicaUrl ?? defaultMetadata.openGraph?.url,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : defaultMetadata.openGraph?.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title ?? defaultMetadata.twitter?.title,
      description: description ?? defaultMetadata.twitter?.description,
      images: imageUrl ? [imageUrl] : defaultMetadata.twitter?.images,
    },
  };
};

export { defaultMetadata, generateMetadata };
