"use client";

import { ReactNode, useEffect, useRef } from "react"; 

import { gsap } from "@/lib/gsap";

export const LenisProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {

    let locomotiveScroll;
    import("@iojcde/locomotive-scroll").then((locomotiveModule) => {
      locomotiveScroll = new locomotiveModule.default({
        initCustomTicker: (render: any) => {
          gsap.ticker.add(render);
        },
        destroyCustomTicker: (render: any) => {
          gsap.ticker.remove(render);
        },
      })
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return <>{children}</>;
};
