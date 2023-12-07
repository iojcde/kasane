import Link from "next/link";
import Logo from "./components/logo-inverse";

const Nav = () => {
  return (
    <div className="container py-3 mix-blend-difference fixed top-0  inset-x-0 z-50">
      <Link href="/">
        <Logo />
      </Link>
    </div>
  );
};

export default Nav;
