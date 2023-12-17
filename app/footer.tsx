"use client";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { useEffect } from "react";

export const Footer = () => {
  return (
    <>
      <footer className="h-screen relative z-0 w-full flex flex-col justify-between dark bg-black text-white">
        <div className="container font-display flex flex-col mt-12 justify-center h-full items-center">
          <h2 className="text-4xl text-center sm:text-5xl font-medium">
            Have a project in mind?
          </h2>

          <a
            href="mailto:io@jcde.xyz"
            className="contact-container relative text-4xl mt-8 rounded-full border-white  px-12 py-4 group border-2 overflow-hidden"
          >
            <div className="ripple bg-white rounded-t-[50%] group-hover:rounded-none w-full h-full translate-y-[101%] absolute delay-[50ms] inset-0 transition-all duration-300 group-hover:-translate-y-0"></div>

            <div className="contact-us inline-block after:inline-block relative group-hover:translate-y-[-130%] transition duration-300 after:[content:'Contact_us_→'] after:text-black after:absolute after:top-[130%] after:left-0 ">
              Contact us &rarr;
            </div>
          </a>
        </div>
        <div className="container text-center py-8 text-gray-10">
          <h3 className="text-xs  ">Socials</h3>
          <div className="flex justify-center mt-4 gap-8">
            <Link href="https://twitter.com/kasanestudios">
              <svg
                width="16"
                height="16"
                viewBox="0 0 1200 1227"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};
