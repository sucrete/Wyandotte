'use client';

import { useEffect, useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import { withProtocol } from '@/utils/url';

// e.g. "1" -> "st", "2" -> "nd", "3" -> "rd", "4"-"20" -> "th", then repeats.
const getOrdinalSuffix = (day) => {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

// e.g. "2026-09-01" -> "Tuesday, September 1st"
const formatFullEventDate = (date) => {
  const parsed = new Date(`${date}T00:00:00`);
  const weekday = parsed.toLocaleDateString('en-US', { weekday: 'long' });
  const month = parsed.toLocaleDateString('en-US', { month: 'long' });
  const day = parsed.getDate();

  return `${weekday}, ${month} ${day}${getOrdinalSuffix(day)}`;
};

// Appends " - <end date>" when the event spans multiple days.
const formatEventDateRange = (event) => {
  const start = formatFullEventDate(event.start);
  if (!event.multidayEvent || !event.end) return start;

  return `${start} - ${formatFullEventDate(event.end)}`;
};

// Returns the month and day as two separate elements; .stack-dates stacks them.
const formatEventDate = (date) => {
  const parsed = new Date(`${date}T00:00:00`);

  return (
    <div className="mx-auto w-fit flex flex-col ">
      <span className="event-month text-center monospaced text-fr-primary-800/70">
        {parsed.toLocaleDateString('en-US', { month: 'short' })}
      </span>
      <span className="event-day font-body text-[2.5rem] text-center area-600 leading-[1.1] text-fr-primary-800">
        {parsed.toLocaleDateString('en-US', { day: 'numeric' })}
      </span>
    </div>
  );
};

const EventsPreview = ({ eventsData }) => {
  // Resolved after mount so the list reflects when the visitor actually landed on the
  // page, rather than the moment the page was statically rendered.
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  // Distinguishes "haven't filtered yet" from "filtered and there's truly nothing" —
  // without it the section would hide on every load until the effect below runs
  // (upcomingEvents starts empty on both server and first client render).
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    setUpcomingEvents(
      (eventsData ?? [])
        .filter((event) => new Date(`${event.start}T00:00:00`) >= today)
        .sort((a, b) => a.start.localeCompare(b.start))
        .slice(0, 3),
    );
    setHasChecked(true);
  }, [eventsData]);

  if (hasChecked && upcomingEvents.length === 0) return null;

  return (
    <section className="pt-0 pb-16 md:pb-20 lg:pb-[200px] md:pt-15 lg:pt-[100px] bg-[#fafafa] overflow-hidden">
      <div className="max-w-[1510px] mx-auto px-2 lg:px-20 xl:px-25">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 md:gap-10 lg:gap-24 relative isolate rounded-[21px] p-2 bg-[radial-gradient(ellipse_500%_180%_at_50%_0%,#fff,#f4f4f4)] overflow-hidden before:content-[''] before:absolute before:inset-0 before:-z-10 before:pointer-events-none before:bg-[url('/images/shared/noise-2.png')] before:bg-repeat before:bg-[length:180px_180px] before:opacity-30 shadow-[inset_0_2px_12px_-6px_rgba(0,0,0,0.08)] border-t-[1px] border-t-[rgba(0,0,0,0.0356)] border-b border-white">
          {/* Left — 33% */}
          <div className="lg:col-span-1 flex flex-col justify-between p-[1rem] md:p-[2rem_0rem_2rem_2rem]">
            <div>
              <RevealAnimation delay={0.1}>
                <Image className="size-[50px] md:size-[60px] -ml-3 mb-2 md:mb-0" src="/images/home/golf-ball.png" width={300} height={300} alt="" />
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="leading-[1.1] text-[1.75rem] md:text-[2rem] text-fr-primary-800 pb-2 md:pb-4 -ml-1">
                  Upcoming <br />
                  Events
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-black/60 pb-5 text-[12px] md:text-[14px]">Take a look at what's coming up at Fire Ridge Golf Course!</p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.3}>
              <LinkButton href="/events" className="btn btn-md btn-header-bushwood-v2 hover:btn-white-dark w-fit ml-[2px]">
                See all events
              </LinkButton>
            </RevealAnimation>
          </div>

          {/* Right — 66% */}
          <div className="lg:col-span-2">
            <div className="list-wrap ">
              <ul className="flex flex-col gap-2">
                {upcomingEvents.map((event, index) => (
                  <li key={event._id}>
                    <RevealAnimation delay={0.2 + index * 0.1} offset={20}>
                      <div className="grid grid-cols-5 gap-8 rounded-[15px] overflow-hidden bg-[#ffffff] transition-all duration-300 shadow-[inset_0_0_0px_1px_rgba(0,0,0,.06),0px_1px_6px_-2px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_0_0px_1px_#580001b9,0_1px_1px_rgba(0,0,0,0.005),0_2px_2px_rgba(0,0,0,0.01),0_4px_4px_rgba(0,0,0,0.015),0_8px_8px_rgba(0,0,0,0.02),0_16px_16px_rgba(0,0,0,0.025)]">
                        <div className="col-span-1 w-full flex flex-col justify-center bg-[#fafafa] ml-2 mb-2 mt-2 rounded-[9px] max-md:hidden">
                          {formatEventDate(event.start)}
                        </div>
                        <div className="col-span-5 md:col-span-4 p-5 md:pt-6 md:pr-6 md:pb-6 md:pl-1">
                          <h3 className="text-heading-5 text-black text-[16px] md:text-[18px] pb-2 area-700 tracking-normal">
                            {event.title}
                          </h3>
                          <p className="md:hidden text-[#580001] text-[12px] pb-1 area-600">
                            {formatEventDateRange(event)}
                          </p>
                          <p className={cn("text-black/70 text-[12px] md:text-[14px]", event.linkQuestion ? 'pb-4' : 'pb-0')}>{event.eventDescription}</p>
                          {event.flyerQuestion && event.flyer?.asset?.url && (
                            <LinkButton
                              href={event.flyer.asset.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-very-small btn-flyer w-fit -mb-2 mr-2">
                              View flyer
                            </LinkButton>
                          )}
                          {event.linkQuestion && event.linkDeets?.linkURL && (
                            <LinkButton
                              href={withProtocol(event.linkDeets.linkURL)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-very-small btn-ghost w-fit -mb-2">
                              {event.linkDeets.linkText}
                            </LinkButton>
                          )}
                        </div>
                      </div>
                    </RevealAnimation>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
