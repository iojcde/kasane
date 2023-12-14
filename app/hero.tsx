"use client";
import { gsap } from "@/lib/gsap";
import { use, useEffect } from "react";
import { SplitText } from "@/lib/splitText.js";
import Logo from "./components/logo";

export const Hero = () => {
  // useEffect(() => {}, []);

  return (
    <section className=" h-screen flex flex-col justify-end  container">
      <div className="relative z-0   pointer-events-none py-16 ">
        <div
          data-scroll
          data-scroll-speed=".3"
          data-scroll-delay="0.1"
          className="bg-gray-3  max-w-fit border rounded-full flex gap-3 text-xs sm:text-sm items-center px-4 py-1 text-gray-11"
        >
          <div className="dot bg-green-500 w-2 h-2 rounded-full" /> Available
          for new projects
        </div>
        <h1
          data-scroll
          data-scroll-speed=".16"
          data-scroll-delay="0.1"
          className="uppercase mt-4 sm:text-[5.5rem] text-4xl leading-[1] text-gray-12 font-display font-semibold items-end gap-2 sm:gap-4"
        >
          Pioneering design +
        </h1>
        <h1
          data-scroll
          data-scroll-speed=".15"
          data-scroll-delay="0.1"
          className="uppercase mt-4 sm:text-[5.5rem] text-4xl leading-[1] text-gray-12 font-display font-semibold items-end gap-2 sm:gap-4"
        >
          {" "}
          development studio //
        </h1>
      </div>{" "}
    </section>
  );
};
