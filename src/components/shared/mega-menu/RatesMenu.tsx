import { ratesMenuItems } from '@/data/header';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import MegaMenuItem from './MegaMenuItem';

interface RatesMenuProps {
  className?: string;
  isScrolled?: boolean;
}

const RatesMenu = ({ className, isScrolled }: RatesMenuProps) => {
  return (
    <div>
      <div className="fixed top-full left-1/2 z-50 hidden w-full max-w-[1920px] -translate-x-1/2 overflow-hidden bg-transparent py-6 transition-all duration-200 group-focus-within/nav:flex group-hover/nav:flex "></div>
      <div
        // cn() allows you to merge fed-in className(s) with inline className(s), overriding previous tailwind classes, like CSS
        className={cn(
          `shadow-[_0_10px_15px_-3px_rgba(0,0,0,0.05),_0_4px_6px_-4px_rgba(0,0,0,0.05)] pointer-events-none absolute top-[90%] left-[-1rem] z-50 w-full min-w-[525px] translate-y-2 opacity-0 transition-all duration-300 group-hover/nav:pointer-events-auto group-hover/nav:translate-y-0 group-hover/nav:opacity-100 rounded-[20px] ${isScrolled ? 'bg-[#fffffff7] backdrop-blur-sm' : 'bg-[#ffffffe4] backdrop-blur-sm'}`,
          className,
        )}>
        <div className="flex flex-row p-2 overflow-hidden rounded-[20px]">
          <div className="w-[60%]">
            <ul className="space-y-5 px-8 py-11 h-full">
              {ratesMenuItems.map((item) => (
                <MegaMenuItem key={item.id} item={item} />
              ))}
            </ul>
          </div>

          <Image src="/images/header/fleet-of-carts.jpeg" width={333} height={600} className="rounded-[13px] w-[230px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default RatesMenu;
