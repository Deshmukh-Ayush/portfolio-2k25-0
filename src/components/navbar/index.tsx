"use client";

import React, { useState } from "react";
import { Container } from "../container";
import Image from "next/image";
import { Link } from "next-view-transitions";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

export const Navbar = () => {
  const navItems = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blogs",
      href: "/blog",
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState<boolean>(false);

  const y = useTransform(scrollY, [0, 300], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["61%", "55%"]);

  // Create blur effect that increases with scroll
  const backdropFilter = useMotionTemplate`blur(${useTransform(scrollY, [0, 300], [12, 40])}px)`;

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container>
      <motion.nav
        style={{
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
          width,
          y,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-4xl items-center justify-between rounded-full px-3 py-2"
      >
        <motion.div
          style={{
            backdropFilter,
          }}
          className="absolute inset-0 rounded-full bg-white/20 dark:bg-neutral-900/20"
        />

        <Link href={"/"} className="relative z-10">
          <Image
            className="h-10 w-10 rounded-full"
            src="/avatar.jpeg"
            height="100"
            width="100"
            alt="Avatar"
          />
        </Link>

        <div className="relative z-10 flex items-center">
          {navItems.map((item, idx) => (
            <Link
              className="relative px-2 py-1 text-sm"
              href={item.href}
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
};
