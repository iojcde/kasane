"use client";

import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Sticky({
  children,
  wrapperClass,
  className,
  start = 0,
  end = 0,
  target,
  id = "sticky",
  enabled = true,
  pinType = "fixed",
  snap,
}: {
  pinType?: "fixed" | "transform";
  children: ReactNode;
  wrapperClass?: string;
  className?: string;
  start?: number;
  end?: number | string;
  target?: string;
  snap?:
    | number
    | number[]
    | "labels"
    | "labelsDirectional"
    | ScrollTrigger.SnapFunc
    | ScrollTrigger.SnapVars;
  id?: string;
  enabled?: boolean;
}) {
  const pinSpacer = useRef<any>();
  const trigger = useRef<any>();
  const targetRef = useRef<any>();

  useEffect(() => {
    if (!enabled || !pinSpacer.current || !trigger.current) return;
    gsap.set(trigger.current, { clearProps: "all" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        id: id,
        pinType,
        pinSpacing: false,
        pinSpacer: pinSpacer.current,
        trigger: trigger.current,
        scrub: true,
        pin: true,
        start: `top top+=${start}px`,
        snap,
        // end: () => {
        //   const targetRefRect = (
        //     targetRef.current as HTMLElement
        //   ).getBoundingClientRect()
        //   const triggerRect = trigger.current.getBoundingClientRect()
        //   return `+=${targetRefRect.bottom - triggerRect.bottom + end}`
        // },
        end: end || "bottom bottom",
        invalidateOnRefresh: true,
      },
    });

    return () => {
      timeline.kill();
    };
  }, [id, start, enabled, end, pinType]);

  useEffect(() => {
    if (target) {
      targetRef.current = document.querySelector(target);
    } else {
      targetRef.current = pinSpacer.current.parentNode;
    }
  }, [target]);

  return (
    <div
      ref={(node) => {
        pinSpacer.current = node;
      }}
      className={wrapperClass}
    >
      <div
        ref={(node) => {
          trigger.current = node;
        }}
        className={className}
      >
        {children}
      </div>
    </div>
  );
}
