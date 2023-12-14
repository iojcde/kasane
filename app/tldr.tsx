"use client";

export const TLDR = () => {
  return (
    <div className="pt-48 h-screen bg-black text-white">
      <div className=" container">
        <div className="text-5xl" data-scroll data-scroll-speed=".2">
          <span className=" font-bold inline-flex  gap-1">
            TL;DR <span className="text-sm">Ⓚ</span>
          </span>{" "}
          <span className="text-sm"> - in short, we:</span>
        </div>

        <div className="space-y-8 mt-12">
          <h3
            className="flex sm:text-4xl"
            data-scroll
            data-scroll-speed=".2"
            data-scroll-delay="0.1"
          >
            are a digital design and development studio based in Seoul.
          </h3>

          <h3
            className="sm:text-4xl"
            data-scroll
            data-scroll-speed=".2"
            data-scroll-delay="0.2"
          >
            design and build digital products.
          </h3>

          <h3
            className="sm:text-4xl"
            data-scroll
            data-scroll-speed=".2"
            data-scroll-delay="0.3"
          >
            specialize in UI design, and full-stack development.
          </h3>
        </div>
      </div>
    </div>
  );
};
