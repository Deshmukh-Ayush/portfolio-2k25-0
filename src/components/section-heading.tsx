"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const SectionHeading = ({
  children,
  delay = 0,
  className,
}: {
  children: string;
  delay?: number;
  className?: string;
}) => {
  return (
    <h2 className={cn("max-w-lg pt-4 text-sm font-normal md:text-sm")}>
      {children.split(" ").map((word, idx) => (
        <motion.span
          key={word + idx}
          initial={{
            opacity: 0,
            y: 5,
            filter: "blur(2px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.3,
            delay: delay + idx * 0.05,
            ease: "easeInOut",
          }}
          className="inline-block"
          viewport={{ once: true }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h2>
  );
};
