'use client';

import { FireRidgeLogoFull } from '../../svg-components/Logos';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/utils/cn';

interface LogoBoxProps {
  isScrolled?: boolean;
  className?: string;
}
const LogoBox = ({ isScrolled }: LogoBoxProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', checkViewport);
    checkViewport();

    return () => {
      window.removeEventListener('resize', checkViewport);
    };
  }, []);

  return (
    <div
      className={`absolute left-[1rem] lg:left-[6rem] -translate-y-1/2 w-[120px] md:w-[130px] duration-400 ${isScrolled ? '-top-[45%] md:-top-[30%] scale-100 md:scale-140' : '-top-[45%] md:top-[100%] scale-100 md:scale-110'}`}>
      <Link href="/">
        <span className="sr-only">Home</span>
        <figure className="max-w-[100%] duration-500">
          <FireRidgeLogoFull className='fiery' isMobile={isMobile} transparent={isScrolled} />
        </figure>
      </Link>
    </div>
  );
};

export default LogoBox;
