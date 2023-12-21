import Link from "next/link";
import Logo from "./components/logo-inverse";

const Nav = () => {
  return (
    <div className=" flex items-center text-gray-300 justify-between py-8 px-8 lg:px-12 mix-blend-difference fixed top-0  inset-x-0 z-[251]">
      <Link href="/" className=" align-middle inline-block">
        <Logo />
      </Link>

      <div className="flex leading-none gap-8  items-end  h-6">
        <span className="hidden sm:block">Menu</span>
        <button
          id="nav-button"
          className="group block  outline-none "
          data-cursor="-menu"
          data-cursor-stick=""
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Nav;
