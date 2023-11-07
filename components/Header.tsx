import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="bg-black flex justify-center items-center max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={74} height={29} />
      </Link>
    </nav>
  );
};

export default Header;
