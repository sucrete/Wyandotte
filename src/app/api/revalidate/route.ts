import { revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

// Sanity POSTs here on every publish / unpublish / delete.
//
// This exists because <SanityLive /> only revalidates when a visitor's browser
// tab happens to be open to receive the live event — with next-sanity setting
// `revalidate: false` in production, a missed event leaves a cache entry stale
// indefinitely. This webhook is server-driven, so it fires on every mutation
// whether or not anyone is looking at the site.
//
// Every sanityFetch tags its cache entry with "sanity" by default, so
// invalidating that one tag refreshes every query across the site.
export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET;

    // Fail loudly rather than returning a confusing 401 when the env var is
    // simply missing (e.g. set locally but never added in Vercel).
    if (!secret) {
      console.error('SANITY_REVALIDATE_SECRET is not set — cannot verify webhook signatures.');
      return new Response('Webhook secret not configured', { status: 500 });
    }

    // parseBody verifies the signature and, by default, waits ~3s for Content
    // Lake eventual consistency — so the refetch triggered below sees the new
    // data rather than racing it.
    const { isValidSignature, body } = await parseBody<{ _type: string }>(req, secret);

    if (!isValidSignature) {
      return new Response('Invalid signature', { status: 401 });
    }

    if (!body?._type) {
      return new Response('Bad request: missing document type', { status: 400 });
    }

    // Next 16 requires a cache-life profile. 'max' (expire: 1y) is the
    // conservative pick — the invalidation record needs to outlive any cache
    // entry it might apply to.
    revalidateTag('sanity', 'max');

    return NextResponse.json({
      revalidated: true,
      type: body._type,
      now: Date.now(),
    });
  } catch (error) {
    console.error('Sanity revalidation webhook failed:', error);
    return new Response('Internal server error', { status: 500 });
  }
}
