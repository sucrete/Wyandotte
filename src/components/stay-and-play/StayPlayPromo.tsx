import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const PACKAGE_INCLUDES = [
  'Eighteen holes on our championship par 72 layout',
  'Cart included with every round',
  'Access to the practice green and range',
  'Bar & Grill open before and after your round',
  'Group rates available for foursomes',
  'Flexible tee times throughout the weekend',
];

const Check = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <path
      d="M3.5 8.5L6.5 11.5L12.5 5"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StayPlayPromo = () => {
  return (
    <section className="bg-[#5e0002] py-[4rem] md:py-[7rem] lg:py-[9rem] bg-[url('/images/shared/grid.svg')] bg-cover">
      <div className="main-container">
        <div className="max-w-[760px] mx-auto text-center">
          <RevealAnimation delay={0.1} offset={10}>
            <div className="monospaced text-taxi-cab pb-4">stay &amp; play</div>
          </RevealAnimation>

          <RevealAnimation delay={0.2} offset={10}>
            <h2 className="text-white pb-4">Make a weekend of it</h2>
          </RevealAnimation>

          <RevealAnimation delay={0.3} offset={10}>
            <p className="text-white/70 text-[13px] md:text-[15px] max-w-[560px] mx-auto pb-10">
              Pair your stay with a round at Fire Ridge. Bring the group, settle in, and give yourselves more than one
              morning on the course.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4} offset={10}>
            {/* inline-grid so the list block stays centered while the items
                themselves remain left-aligned and readable */}
            <ul className="inline-grid sm:grid-cols-2 gap-x-10 gap-y-3.5 text-left pb-11">
              {PACKAGE_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="size-4 shrink-0 text-white/45 mt-[3px]" />
                  <span className="text-white/90 text-[13px] md:text-[14px]">{item}</span>
                </li>
              ))}
            </ul>
          </RevealAnimation>

          <RevealAnimation delay={0.5} offset={10}>
            <LinkButton href="/contact" className="btn btn-header-bushwood transition-all shadow-lg/20 hover:shadow-lg/20 hover:btn-white-dark hover:bg-[#4d0100] border-none">
              Plan your trip
            </LinkButton>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default StayPlayPromo;
