"use client";
import { gsap } from "@/lib/gsap";
import { useEffect } from "react";
import { SplitText } from "@/lib/splitText.js";
import Image from "next/image";
import { promise } from "./preloader";

export const Hero = () => {
  useEffect(() => {
    const ctx = gsap.context(async () => {
      await promise;

      const split = new SplitText(".split-this", {});

      split.lines.forEach((line: HTMLDivElement) => {
        line.style.overflow = "hidden";
        line.setAttribute("data-scroll", "");
        line.setAttribute("data-scroll-speed", ".3");
      });

      split.chars.forEach((c) => {
        if (c.textContent === "＋") {
          c.classList.add("text-red-500");
        }
      });

      gsap.set(".split-this", { autoAlpha: 1 });
      gsap.to(".split_line:nth-child(1) > .split_word:nth-child(3)", {
        rotate: 360,
        delay: 0.65,
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
    });

    return () => {
      ctx.kill();
    };
  }, []);

  return (
    <section className="hero relative h-[calc(100vh-24px)] flex flex-col xl:justify-end justify-center   ">
      <Image
        alt=""
        src="https://images.unsplash.com/photo-1588345921489-f61ad896c562"
        className="object-cover absolute inset-0 w-full h-full -z-10 brightness-105"
        fill
      />
      <div className="relative z-10   pointer-events-none py-20 container">
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
        <h1 className="split-this relative z-20 invisible uppercase mt-8 sm:text-8xl text-[2.9rem] leading-[1] text-gray-12 font-display font-semibold items-end gap-2 sm:gap-4">
          Pioneering design ＋ development studio //
        </h1>
      </div>{" "}
    </section>
  );
};
