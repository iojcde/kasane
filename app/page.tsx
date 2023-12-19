import Image from "next/image";

import Logo from "./components/logo";
import { Hero } from "./hero";
import { Teto } from "./teto";
import Works from "./works/works";

export default function Home() {
  return (
    <main>
      <Hero />
      <div
        data-cursor="-inverse"
        className="py-32 w-full bg-black dark text-white flex flex-wrap gap-8 justify-between"
      >
        <div className=" container grid  sm:grid-cols-[2.5fr_3fr_0.5fr] justify-between">
          <h2 className="text-sm mb-8 sm:text-xl font-medium font-display">
            WHO WE ARE
          </h2>

          <div>
            <h3 className="text-3xl sm:text-4xl leading-snug font-medium font-display">
              Blending Creativity with <br />
              Innovative Technology
            </h3>

            <p className=" text-lg text-gray-11 mt-4 pb-8  ">
              Kasane Studios is a Seoul based digital design and development
              studio. With a focus on UI design and full-stack development, we
              design and build digital products.
              <br />
              <br />
              As a team of designers and developers, we approach projects in a
              holistic manner. We believe that design and development are
              inseparable, and that the best products are made when the two are
              considered together.
              <br />
            </p>
          </div>
        </div>
      </div>

      <Works />
      <div className="py-20 container h-screen">
        <h2 className="text-3xl font-display font-bold ">Services we offer</h2>
        <ul className="xl:text-5xl font-medium [&>*:hover]:text-red-500 [&>*]:text-gray-12 [&>*]:transition font-display space-y-4 mt-8">
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
