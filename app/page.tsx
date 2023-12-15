import Image from "next/image";

import Logo from "./components/logo";
import { Hero } from "./hero";
import { Teto } from "./teto";
import Works from "./works";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="py-32 w-full bg-black dark text-white flex flex-wrap gap-8 justify-between">
        <div className=" container ">
          <div>
            <h2 className="text-xl font-semibold font-display">WHO WE ARE</h2>
            <p className=" max-w-lg text-gray-11 mt-4 text-xl">
              We&apos;re a digital design and development studio based in Seoul.
              With a focus on UI design and full-stack development, we design
              and build digital products.
            </p>
          </div>
        </div>
      </div>

      <Works />
      <div className="py-20 container h-screen">
        <h2 className="text-3xl font-display font-bold">Specialties</h2>
        <ul className="text-5xl space-y-4 mt-8">
          <li>UI design</li>
          <li>Full-stack development</li>
          <li>Branding</li>
          <li>Product design</li>
        </ul>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Kasane studios",
  description: "Interdisciplinary design + development studio.",
};
