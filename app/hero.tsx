"use client";
import { gsap } from "@/lib/gsap";
import { useEffect } from "react";
import { SplitText } from "@/lib/splitText.js";
import Image from "next/image";
import { promise } from "./preloader";

export const Hero = () => {
  useEffect(() => {
    const ctx = gsap.context(async () => {
      const split = new SplitText(".split-this", {});

      split.lines.forEach((line: HTMLDivElement) => {
        line.style.overflow = "hidden";
        line.setAttribute("data-scroll", "");
        line.setAttribute("data-scroll-speed", ".2");
      });

      await promise;

      await gsap.to(".hero-bg", {
        height: "100%",
        duration: 1,
        ease: "expo.out",
      });

      const plus = split.chars.find((c) => c.textContent === "＋"); // fullwidth plus
      plus.classList.add("text-red-500");

      gsap.set(".split-this", { autoAlpha: 1 });
      gsap.to(plus, {
        rotate: 360,
        delay: 0.65,
        onComplete: () => {
          plus.addEventListener("mouseenter", () => {
            gsap.to(plus, {
              rotate: "720deg",
              duration: 0.5,
            });
          });

          plus.addEventListener("mouseleave", () => {
            gsap.to(plus, {
              rotate: "360deg",
              duration: 0.5,
            });
          });
        },
      });
      await gsap.from(split.chars, {
        y: 100,
        opacity: 0,
        stagger: 0.02,
      });

      gsap.fromTo(
        ".available",
        {
          y: 100,
          autoAlpha: 0,
          duration: 0.5,
        },
        {
          y: 0,
          autoAlpha: 1,
        }
      );
      gsap.to(".scroll-indicator-container", {
        autoAlpha: 1,
        delay: 1,
      });
      gsap.from(".scroll-indicator-container", {
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "10% top",
          onEnter: () =>
            gsap.to(".scroll-indicator-container", {
              opacity: 1,
              duration: 0.5,
            }),
          onLeave: () =>
            gsap.to(".scroll-indicator-container", {
              opacity: 0,
              duration: 0.5,
            }),
          onEnterBack: () =>
            gsap.to(".scroll-indicator-container", {
              opacity: 1,
              duration: 0.5,
            }),
        },
      });
    });

    return () => {
      ctx.kill();
    };
  }, []);

  return (
    <section className="hero relative h-[calc(100vh-24px)]  flex flex-col xl:justify-end justify-center   ">
      <Image
        data-scroll
        data-scroll-speed="-.2"
        alt=""
        src="https://images.unsplash.com/photo-1588345921489-f61ad896c562"
        width={4000}
        height={2667}
        className="hero-bg object-cover dark:invert select-none  absolute bottom-0 inset-x-0 h-0  w-full -z-10 brightness-105"
      />
      <div className="relative z-10 py-4 container">
        <div className="available invisible">
          <div
            data-scroll
            data-scroll-speed=".4"
            className="bg-gray-1  max-w-fit border rounded-full flex gap-3 text-xs  items-center px-4 py-1 text-gray-11"
          >
            <div className="dot bg-green-500 w-2 h-2 rounded-full" /> Available
            for new projects
          </div>
        </div>
        <h1 className="split-this relative z-20 invisible uppercase mt-8 xl:text-8xl sm:text-7xl text-[2.8rem] text-gray-12 font-display font-semibold items-end gap-2 sm:gap-4">
          Pioneering design ＋ development studio //
        </h1>
      </div>

      <div className="invisible text-gray-11 ml-auto scroll-indicator-container p-6">
        (SCROLL)
      </div>
    </section>
  );
};
