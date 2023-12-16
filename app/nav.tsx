import Link from "next/link";
import Logo from "./components/logo-inverse";

const Nav = () => {
  return (
    <div className="container flex items-center text-gray-300 justify-between py-6 mix-blend-difference fixed top-0  inset-x-0 z-50">
      <Link href="/" className=" align-middle inline-block">
        <Logo />
      </Link>

      <div className="flex leading-none gap-8  items-end  h-6">
        <Link className="align-middle inline-block" href="/about">
          About
        </Link>
        <Link href="/works">Works</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Nav;
