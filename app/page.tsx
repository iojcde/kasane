import Image from "next/image";

import Logo from "./components/logo";
import { TLDR } from "./tldr";

export default function Home() {
  return (
    <main>
      <section className="text-3xl h-screen py-48  container">
        <div className="relative z-0 select-none  pointer-events-none mt-8">
          <h1 className="text-[5.5rem] leading-[1] text-gray-11 inline-flex items-end gap-4">
            <Logo className="h-24 text-black" /> studios
          </h1>
          <h2>
            Interdisciplinary design + development
            {` `}studio.
          </h2>

          <div className="bg-gray-3  max-w-fit border rounded-full flex gap-3 text-sm items-center px-4 py-1 mt-8 text-gray-11">
            <div className="dot bg-green-500 w-2 h-2 rounded-full" /> Available
            for new projects
          </div>
        </div>{" "}
      </section>

      <TLDR />
    


      <div className="py-20 container w-full flex flex-wrap gap-8 justify-between">
        <div className="mt-8">
          <h2 className="text-5xl font-display font-bold">Introduction</h2>

          <p className="text-gray-11 mt-4 text-lg max-w-md">
            Kasane is a digital design and development studio based in Seoul. We
            hand-craft digital products that aim to be beautiful, functional,
            and accessible. We work with clients of all sizes to bring ideas to
            life through thoughtful, client-focused design and development.
          </p>
        </div>

        <Image
          alt=""
          width={500}
          height={333}
          data-scroll
          data-scroll-delay="0.01"
          data-scroll-speed="-0.3"
          src="https://images.unsplash.com/photo-1525286335722-c30c6b5df541?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>  

      <div className="py-20 container ">
        <h2 className="text-3xl font-display font-bold">Specialties</h2>
        <ul>
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
