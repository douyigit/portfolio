"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";

/** Gradient line that draws down the timeline as you scroll past it. */
export function TimelineLine() {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 50%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  return (
    <span ref={ref} aria-hidden="true" className="absolute -left-px top-0 h-full w-[2px]">
      <motion.span style={{ scaleY }} className="block h-full w-full origin-top bg-gradient-to-b from-accent to-accent-2" />
    </span>
  );
}
