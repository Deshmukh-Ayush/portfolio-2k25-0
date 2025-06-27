"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type Data = {
  title: string;
  content: {
    title: string;
    description?: string | React.ReactNode;
  }[];
};

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const data: Data[] = [
    {
      title: "2021",
      content: [
        {
          title: "Reached $20k MRR with my VS code fork",
          description: "Reached the raven milestone of 20k MRR",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          title: "Reached $20k MRR with my VS code fork",
          description: "Reached the raven milestone of 20k MRR",
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: "Reached $20k MRR with my VS code fork",
          description: "Reached the raven milestone of 20k MRR",
        },
      ],
    },
    {
      title: "2024",
      content: [
        {
          title: "Reached $20k MRR with my VS code fork",
          description: "Reached the raven milestone of 20k MRR",
        },
      ],
    },
    {
      title: "2025",
      content: [
        {
          title: "Reached $20k MRR with my VS code fork",
          description: "Reached the raven milestone of 20k MRR",
        },
      ],
    },
  ];
  return (
    <div
      ref={ref}
      className="shadow-section-inset my-4 border-y border-neutral-100 px-4 py-4"
    >
      {data.map((year, idx) => (
        <div content="px-4 py-1" key={year.title} className="mb-4">
          <motion.h2
            className="shadow-aceternity w-fit rounded-md px-2 py-1 font-bold text-black"
            animate={{
              filter: isInView ? "blur(0px)" : "blur(10px)",
              opacity: isInView ? 1 : 0.5,
            }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 * idx }}
          >
            {year.title}
          </motion.h2>
          <div className="flex flex-col gap-4">
            {year.content.map((item) => (
              <div key={item.title} className="pl-4">
                <div className="mt-3 flex items-start">
                  <Step isInView={isInView} idx={idx}></Step>
                  <motion.h3
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.2 * idx,
                    }}
                    className="ml-4 text-neutral-600"
                  >
                    {item.title}
                  </motion.h3>
                </div>
                {item.description && (
                  <motion.p
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.3 * idx + 0.1,
                    }}
                    className="pt-0.5 pl-8 text-sm text-neutral-400"
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({
  className,
  children,
  isInView,
  idx,
}: {
  className?: string;
  children?: React.ReactNode;
  isInView: boolean;
  idx: number;
}) => {
  return (
    <motion.div
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2 * idx,
      }}
      className={cn("flex items-start gap-2", className)}
    >
      <IconCircleCheckFilled className="mt-1 h-4 w-4 text-neutral-400" />
      {children}
    </motion.div>
  );
};
