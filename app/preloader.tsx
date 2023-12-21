"use client";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import { useEffect } from "react";

import { SplitText } from "@/lib/splitText.js";

let resolver: (v?: any) => void;

export let cursor: any;

import MouseFollower from "mouse-follower";
import Magnetic from "@/lib/magnetic";

export const promise = new Promise((resolve) => {
  resolver = resolve;
});

const Loader = () => {
  useEffect(() => {
    MouseFollower.registerGSAP(gsap);

    cursor = new MouseFollower({
      speed: 0.3,
    });

    document.addEventListener("mousedown", () => {
      cursor.addState("-down");
    });

    document.addEventListener("mouseup", () => {
      cursor.removeState("-down");
    });

    new Magnetic(document.querySelector("#nav-button") as HTMLDivElement, {
      x: 0.08,
      y: 0.08,
      s: 0.2,
      rs: 0.5,
    });

    // const pageAccessedByReload =
    //   (window.performance.navigation &&
    //     window.performance.navigation.type === 1) ||
    //   window.performance
    //     .getEntriesByType("navigation")
    //     .map((nav) => nav.entryType)
    //     .includes("reload");
    const text1 = document.querySelector(".kasane-jp");
    const split1 = new SplitText(text1);

    const eases = gsap.context(async () => {
      gsap.set(text1, { autoAlpha: 1 });

      await gsap.from(split1.chars, {
        autoAlpha: 0,
        stagger: 0.01,
      });

      await gsap.to(".loader", {
        autoAlpha: 0,
        delay: 0.5,
        duration: 0.5,
        ease: "power3.out",
      });
      resolver();
    });

    return () => {
      eases.kill();
      cursor.destroy();
    };
  }, []);
  return (
    <div
      id="loader"
      data-cursor="-inverse"
      className=" bg-black dark loader fixed inset-0 z-[500] flex items-center justify-center"
    >
      <div className="space-y-8 flex flex-col w-[30rem] text-white">
        <div className="text-gray-12 text-center name origin-center relative  flex items-center justify-center aspect-square  ">
          <h2 className="invisible kasane-jp text-xl sm:text-3xl font-display font-semibold">
            Kasane Studios
          </h2>
        </div>
      </div>

      <div className="progress absolute  inset-x-0 bottom-0 origin-left bg-white h-8 w-screen scale-x-0"></div>
    </div>
  );
};

export default Loader;
