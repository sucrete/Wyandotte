'use client';

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const TIER_IMAGES = {
  individual: '/images/memberships/individual.webp',
  family: '/images/memberships/family.webp',
  corporate: '/images/memberships/corporate.webp',
  seniorIndividual: '/images/memberships/senior-individual.webp',
  seniorCouple: '/images/memberships/senior-couple.webp',
};

const MembershipsSection = ({ membershipsData }) => {
  if (!membershipsData) return null;
  const { individual, family, corporate, seniorIndividual, seniorCouple } = membershipsData;

  const tiers = [
    { data: individual, prefix: 'individual' },
    { data: family, prefix: 'family' },
    { data: corporate, prefix: 'corporate' },
    { data: seniorIndividual, prefix: 'seniorIndividual' },
    { data: seniorCouple, prefix: 'seniorCouple' },
  ].filter((tier) => tier.data);

  return (
    <section className="rates-section  bg-background-2" id="memberships">
      <div className="bg-[#f7f4e7]">
        <div className="main-container py-7 flex flex-row justify-center">
          <RevealAnimation delay={0.2} offset={10} className="w-[550px]">
            <div className="text-center">All rates subject to sales tax.</div>
          </RevealAnimation>
        </div>
      </div>

      <div className="main-container pt-[2rem] md:pt-[5rem] lg:pt-[8rem] pb-[6rem] md:pb-[9rem] lg:pb-[12rem]">
        {/* flex-wrap + justify-center (rather than a grid) so a trailing, not-quite-full
            row of cards centers itself instead of hugging the left edge. Each card's
            width is set to a 33% share on large screens (minus its portion of the gap). */}
        <div className="bombala flex flex-wrap justify-center items-stretch gap-6">
          {tiers.map((tier, index) => {
            const { data, prefix } = tier;
            const heading = data[`${prefix}Heading`];
            const description = data[`${prefix}Description`];
            const monthly = data[`${prefix}Monthly`];
            const yearly = data[`${prefix}Yearly`];
            const pdfUrl = data[`${prefix}Pdf`]?.asset?.url;

            return (
              <RevealAnimation
                key={prefix}
                delay={0.1 + index * 0.05}
                className="shrink-0 min-w-0 basis-[calc(33.333%_-_1rem)]">
                <div className="group relative rounded-[20px] overflow-hidden bg-white h-full flex flex-col text-center shadow-[0_2px_2px_rgba(0,0,0,0.01),0_4px_4px_rgba(0,0,0,0.015),0_8px_8px_rgba(0,0,0,0.02),0_16px_16px_rgba(0,0,0,0.025)]">
                  {/* Inset ring lives on its own overlay (not on .group) since a parent's own
                      box-shadow always paints beneath its children, regardless of z-index —
                      this z-10 overlay is what actually keeps it visible above the image. Kept
                      separate from the hover-gradient overlay below so it isn't tied to hover opacity. */}
                  {/* <div className="pointer-events-none absolute inset-0 z-10 rounded-[20px] shadow-[inset_0_0_0_1px_oklab(0.93_0_0/0.35)]" /> */}
                  {/* Gradient only visible on hover — cue taken from HeroUI's card component */}
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-fr-primary-800/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative h-[175px] w-full shrink-0 image-section">
                    <Image src={TIER_IMAGES[prefix]} alt="" fill className="object-cover" />
                    {/* Eases the image into the white card body below it, rather than a hard edge */}
                    <div className="absolute inset-x-0 bottom-0 h-[80px] bg-fade-to-white" />
                  </div>

                  <div className="px-8 pt-6 pb-11 flex flex-col flex-1 h-full justify-between">
                    <div className="section-1">
                      <h3 className="text-heading-5 md:text-[1.75rem] pb-4 ">{heading}</h3>

                      {description && <p className="text-primary/70">{description}</p>}
                      <div className="flex justify-center gap-8 pt-4">
                        <div>
                          <div className="monospaced text-black/60 pb-1">Monthly</div>
                          <div>{monthly}</div>
                        </div>
                        <div>
                          <div className="monospaced text-black/60 pb-1">Yearly</div>
                          <div>{yearly}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto pt-6 section-2">
                      {pdfUrl && (
                        <div className="pt-4">
                          <LinkButton
                            href={pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-sm btn-ghost">
                            View Application
                          </LinkButton>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MembershipsSection;
