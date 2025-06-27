import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { Container } from "../container";

export const Footer = () => {
  return (
    <Container className="flex justify-between border-t border-neutral-100 px-10 py-3">
      <p className="text-xs text-neutral-500">
        Built With ❤️ by Ayush Deshmukh
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link href="https://x.com/everywhereayush">
          <IconBrandX className="h-4 w-4 text-neutral-500 hover:text-neutral-700" />
        </Link>

        <Link href="https://www.linkedin.com/in/ayush-deshmukh-144a86277/">
          <IconBrandLinkedin className="h-4 w-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://github.com/Deshmukh-Ayush">
          <IconBrandGithub className="h-4 w-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </div>
    </Container>
  );
};
