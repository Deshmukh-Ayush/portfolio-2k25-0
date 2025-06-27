import React from "react";
import Marquee from "react-fast-marquee";
import { SectionHeading } from "./section-heading";
import Image from "next/image";

export const Testimonials = () => {
  const data = [
    {
      quote:
        "Ayush is an amazing person to work with. He is very professional and always delivers high quality work.",
      name: "Elizabeth Smith",
      avatar:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&auto=format&fit=crop&q=60",
    },
    {
      quote:
        "Working with Ayush was a pleasure. He communicates clearly and always meets deadlines.",
      name: "Michael Johnson",
      avatar:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60",
    },
    {
      quote:
        "Ayush brings creativity and dedication to every project. Highly recommended!",
      name: "Sophia Lee",
      avatar:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60",
    },
    {
      quote:
        "His attention to detail and problem-solving skills are top-notch.",
      name: "David Kim",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60",
    },
    {
      quote: "Ayush is reliable, talented, and a great team player.",
      name: "Maria Garcia",
      avatar:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=500&auto=format&fit=crop&q=60",
    },
  ];
  return (
    <div className="shadow-section-inset my-4 border-y border-neutral-100 px-4 py-4">
      <SectionHeading className="pb-4" delay={0.8}>
        People Love My Work
      </SectionHeading>
      <div className="flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee speed={10} pauseOnHover={true} className="py-4">
          {data.map((item, idx) => (
            <TestimonialCard key={`testimonial-${idx}`} {...item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  quote,
  name,
  avatar,
}: {
  quote: string;
  name: string;
  avatar: string;
}) => {
  return (
    <div className="shadow-aceternity mx-4 flex h-50 w-full max-w-60 flex-col justify-between gap-4 rounded-xl p-4 transition-shadow duration-300 ease-in-out hover:shadow-lg">
      <p className="text-sm text-neutral-700">{quote}</p>
      <div className="flex w-40 items-center gap-4">
        {avatar && (
          <Image
            src={avatar}
            alt={name || "User avatar"}
            width={16} // size-4 is typically 16px
            height={16} // size-4 is typically 16px
            className="size-4 rounded-full object-cover"
          />
        )}
        <p className="text-sm text-neutral-500">{name}</p>
      </div>
    </div>
  );
};
