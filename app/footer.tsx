"use client";
import { gsap } from "@/lib/gsap";
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
      <div className="rounded-wrapper will-change-[height] bg-black h-8 relative overflow-hidden w-full">
        <div className="rounded-div rounded-b-[50%] w-[150%] block h-[750%] translate-y-[-86%] z-[100] bg-white absolute left-1/2 -translate-x-1/2"></div>
      </div>
      <footer className="h-[90vh]  w-full bg-black text-white">
        <div className="container font-display py-20">
          <h3 className="text-4xl  font-bold">Let&apos;s work together</h3>
          <h3 className="text-4xl font-bold">and make something great.</h3>
        </div>
      </footer>
    </>
  );
};
