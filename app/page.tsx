import Image from "next/image";

import Logo from "./components/logo";
import { TLDR } from "./tldr";
import { Hero } from "./hero";
import { Teto } from "./teto";

export default function Home() {
  return (
    <main>
      <Hero />
      <TLDR />
      <div className="py-20 container w-full flex flex-wrap gap-8 justify-between">
        <div className="mt-8">
          <div className="relative mb-8 border rounded-lg p-6">
            <Teto />
            <h3 className="font-semibold text-3xl ">かさね [重ね]</h3>
            <span className="text-gray-11 inline-block mt-4">Noun</span>
            <p>
              1. pile; heap; layers (e.g. of clothing); set (e.g. of boxes);
              course (e.g. of stones)​
            </p>
          </div>

          <p className="max-w-prose prose">
            We&apos;re a digital design and development studio based in Seoul.
            With a focus on UI design and full-stack development, we design and
            build digital products.
          </p>
        </div>

        <Image
          alt=""
          width={500}
          height={333}
          data-scroll
          data-scroll-delay="0.1"
          data-scroll-speed=".2"
          src="https://images.unsplash.com/photo-1525286335722-c30c6b5df541?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>{" "}
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
