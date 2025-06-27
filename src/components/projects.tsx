"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { Subheading } from "./subheading";
import { Project, projects as defaultProjects } from "@/constants/projects";
import { SectionHeading } from "./section-heading";

export const Projects = ({
  projects = defaultProjects,
}: {
  projects?: Project[];
}) => {
  return (
    <div className="shadow-section-inset my-4 border-y border-neutral-100 px-4">
      <SectionHeading delay={0.2}>A lifetime in projects</SectionHeading>
      <div className="grid grid-cols-1 gap-2 py-4 md:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
            key={project.title}
            className="group relative h-72"
          >
            <Image
              src={project.src}
              alt={project.title}
              height={400}
              width={400}
              className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
            />
            <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
              {project.title}
            </h2>
            <p className="max-width-sm mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
