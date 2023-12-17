"use client";

import { gsap } from "@/lib/gsap";
import { useEffect } from "react";

const Method = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".method.container",
        {
          scrollTrigger: {
            trigger: ".method.container",
            start: "top center",
            end: "+=500",
          },
        },
        {}
      );
    });
  }, []);

  return (
    <div className="method container ">
      <div>
        <h1 className="text-8xl">Method</h1>

        <p className="text-lg mt-8">
          We believe that design and development are inseparable, and that the
          best products are made when the two are considered together. <br />
        </p>
      </div>
    </div>
  );
};
export default Method;
