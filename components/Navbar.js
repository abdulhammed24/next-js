import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return (
      <nav>
        <div className="logo">
          <Image src="/brass-health.svg" alt="logo" width={150} height={50} />
        </div>

        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/abdul">
          <a>Abdul Listing</a>
        </Link>
      </nav>
    );
}
 
export default Navbar;