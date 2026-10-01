"use client";

import { motion } from "motion/react";

/** Gradient underline that draws itself when scrolled into view. */
export function GrowLine() {
  return (
    <motion.span
      aria-hidden="true"
      className="mt-4 block h-[3px] w-24 origin-left rounded-full bg-gradient-accent"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
