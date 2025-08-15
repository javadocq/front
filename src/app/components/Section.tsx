"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useRef, PropsWithChildren } from "react";

export default function Section({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.75, 1],
    [0, 0.25, 1, 1, 0]
  );

  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [24, 0, -8, -16]);

  const blurPx = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [8, 0, 1, 2]
  );
  const filter = useMotionTemplate`blur(${blurPx}px)`;

  return (
    <motion.section
      ref={ref}
      style={{
        opacity,
        y,
        filter,
        willChange: "opacity, transform, filter",
      }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.section>
  );
}
