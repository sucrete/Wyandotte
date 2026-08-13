import { Logo, FireRidgeLogoFull } from '../../svg-components/Logos';
import Link from 'next/link';

interface LogoBoxProps {
  isScrolled?: boolean;
  className?: string;
}
const LogoBox = ({ isScrolled }: LogoBoxProps) => {
  return (
    <div
      className={`absolute left-[6rem] -translate-y-1/2 w-[120px] md:w-[130px] duration-400 ${isScrolled ? '-top-[30%] scale-140' : 'top-[75%] md:top-[100%] scale-100 md:scale-110'}`}>
      <Link href="/">
        <span className="sr-only">Home</span>
        <figure className="max-w-[100%] duration-500">
          <FireRidgeLogoFull className='fiery' transparent={isScrolled} />
        </figure>
      </Link>
    </div>
  );
};

export default LogoBox;
