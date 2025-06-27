"use client";
import React from "react";
import { motion, MotionProps } from "motion/react";

export const MotionDiv = (props: MotionProps) => {
  return <motion.div {...props} />;
};
