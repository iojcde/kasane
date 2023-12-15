"use client";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { useEffect } from "react";

export const Footer = () => {
  useEffect(() => {
    const eases = gsap.context(() => {
      gsap.to(".rounded-wrapper", {
        height: 0,

        scrollTrigger: {
          trigger: ".rounded-div",
          start: "top top",
          end: "center 5%",
          scrub: 1,
        },
        ease: "none",
      });
    });
    return () => {
      eases.kill();
    };
  }, []);
  return (
    <>
      <div className="rounded-wrapper select-none z-10 will-change-[height] h-8 relative overflow-clip w-full">
        <div className="rounded-div rounded-b-[50%] w-[150%] block h-[750%] translate-y-[-86%] z-[100] bg-white absolute left-1/2 -translate-x-1/2"></div>
      </div>
      <footer
        data-scroll
        data-scroll-speed="-0.5"
        className="h-screen relative z-0 w-full bg-black text-white"
      >
        <div className="container font-display py-20">
          <h3 className="xl:text-6xl font-bold">Let&apos;s work together</h3>
          <h3 className="xl:text-6xl font-bold">and make something great.</h3>
          <p className="mt-8"> email io@jcde.xyz</p>
        </div>

        <div className="container flex">
          {" "}
          <Link href="https://twitter.com/kasanestudios">
            <svg
              width="24"
              height="24"
              viewBox="0 0 1200 1227"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </footer>
    </>
  );
};
