/*!
 * Cuberto Magnetic
 *
 * @version 1.5.0
 * @author Cuberto (cuberto.com)
 * @licence Copyright (c) 2020, Cuberto. All rights reserved.
 */

import gsap from "gsap";

interface Options {
  x: number;
  y: number;
  s: number;
  rs: number;
}
function getOffset(element: HTMLElement) {
  if (!element.getClientRects().length) {
    return { top: 0, left: 0 };
  }

  const rect = element.getBoundingClientRect();
  const win = element.ownerDocument.defaultView as Window;
  return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset,
  };
}

export default class Magnetic {
  el: HTMLElement;
  x: number;
  y: number;
  width: number;
  height: number;
  options: Options;
  constructor(
    el: HTMLElement,
    options: Options = { x: 0.2, y: 0.2, s: 0.2, rs: 0.7 }
  ) {
    this.el = el;

    this.y = 0;
    this.x = 0;
    this.width = 0;
    this.height = 0;
    this.options = options;
    this.bind();
  }

  bind() {
    this.el.addEventListener(`mouseenter`, () => {
      this.y = getOffset(this.el).top - window.pageYOffset;
      this.x = getOffset(this.el).left - window.pageXOffset;
      this.width = this.el.clientWidth;
      this.height = this.el.clientHeight;
    });

    this.el.addEventListener(`mousemove`, (e) => {
      const y = (e.clientY - this.y - this.height / 2) * this.options.y;
      const x = (e.clientX - this.x - this.width / 2) * this.options.x;
      this.move(x, y, this.options.s);
    });

    this.el.addEventListener(`mouseleave`, (e) => {
      this.move(0, 0, this.options.rs);
    });
  }

  move(x: number, y: number, speed: number) {
    gsap.to(this.el, {
      y: y,
      x: x,
      overwrite: true,
      duration: speed,
    });
  }
}
export { Magnetic };
