import { Logo } from '../../svg-components/Logos';
import Link from 'next/link';

interface LogoBoxProps {
  isScrolled?: boolean;
  className?: string;
}
const LogoBox = ({ isScrolled }: LogoBoxProps) => {
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] md:w-[260px] duration-400 ${isScrolled ? 'top-[52%] scale-100' : 'top-[55%] md:top-[50%] scale-100 md:scale-110'}`}>
      <Link href="/">
        <span className="sr-only">Home</span>
        <figure className="max-w-[100%] duration-500">
          <Logo className={isScrolled ? 'fill-black' : 'fill-white'} />
        </figure>
      </Link>
    </div>
  );
};

export default LogoBox;
