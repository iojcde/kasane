"use client";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import { useEffect } from "react";

import { SplitText } from "@/lib/splitText.js";
import { Loader2 } from "lucide-react";

let resolver: (v?: any) => void;

export const promise = new Promise((resolve) => {
  resolver = resolve;
});

const Loader = () => {
  useEffect(() => {
    const pageAccessedByReload =
      (window.performance.navigation &&
        window.performance.navigation.type === 1) ||
      window.performance
        .getEntriesByType("navigation")
        .map((nav) => nav.entryType)
        .includes("reload");
    const text1 = document.querySelector(".kasane-jp");
    const split1 = new SplitText(text1);

    const text2 = document.querySelector(".kasane-desc");
    const split2 = new SplitText(text2);

    const eases = gsap.context(async () => {
      gsap.set(text1, { autoAlpha: 1 });

      !pageAccessedByReload && gsap.set(text2, { autoAlpha: 1 });

      gsap.from(split1.chars, {
        autoAlpha: 0,
        stagger: 0.01,
      });

      gsap.from(split2.chars, {
        autoAlpha: 0,
        stagger: 0.02,
      });

      if (pageAccessedByReload) {
        await gsap.to(".loader", {
          autoAlpha: 0,
          delay: 0.7,
          duration: 0.5,
          ease: "power3.out",
        });

        resolver();
        return;
      }
      gsap.to(".loader .name", {
        autoAlpha: 1,
        duration: 1,
        scale: 1,
        ease: "power3.out",
      });

      await gsap.to(".loader .progress", {
        scaleX: 1,
        duration: 2,
        ease: "power2.in",
      });
      await gsap.to(".loader", {
        autoAlpha: 0,
        delay: 0.5,
        duration: 0.5,
        ease: "power3.out",
      });
      resolver();
    });

    return () => eases.kill();
  }, []);
  return (
    <div
      id="loader"
      className=" bg-black dark loader fixed inset-0 z-[100] flex items-center justify-center"
    >
      <div className="space-y-8 flex flex-col w-[30rem] text-white">
        <div className="text-gray-12 text-center name origin-center scale-[0.8]  ">
          <h2 className="invisible kasane-jp text-xl sm:text-3xl font-display font-semibold">
            重ね [ka·sa·ne]
          </h2>
          <p className="  invisible kasane-desc text-gray-11 mt-4 text-xs sm:text-sm">
            1. layering; piling up; overlaying; superimposing;
          </p>
        </div>
      </div>
      <div className="absolute bottom-16 sm:text-lg left-8 flex gap-2 items-center text-gray-10">
        {" "}
        Loading <Loader2 className="animate-spin" size={20} />
      </div>

      <div className="progress absolute  inset-x-0 bottom-0 origin-left bg-white h-12 w-screen scale-x-0"></div>
    </div>
  );
};

export default Loader;
