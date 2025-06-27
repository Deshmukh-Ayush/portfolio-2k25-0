import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Image from "next/image";

export function Collage() {
  const items = [
    {
      title: "Delhi",
      image:
        "https://images.unsplash.com/photo-1685719763808-5a0b958abe67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRlbGhpfGVufDB8fDB8fHww",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVtYmFpfGVufDB8fDB8fHww",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Bangalore",
      image:
        "https://images.unsplash.com/photo-1698332137428-3c4296198e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZ2Fsb3JlfGVufDB8fDB8fHww",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Jaipur",
      image:
        "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGphaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Hyderabad",
      image:
        "https://images.unsplash.com/photo-1657981630164-769503f3a9a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh5ZGVyYWJhZHxlbnwwfHwwfHx8MA%3D%3D",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Kolkata",
      image:
        "https://images.unsplash.com/photo-1603813507806-0d311a6eecd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtvbGthdGF8ZW58MHx8MHx8fDA%3D",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Pune",
      image:
        "https://images.unsplash.com/photo-1572782252655-9c8771392601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UHVuZXxlbnwwfHwwfHx8MA%3D%3D",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-[30rem] w-full items-center justify-center overflow-clip">
      {items.map((item, index) => (
        <DraggableCardBody key={index} className={item.className}>
          {item.image && (
            <Image
              src={item.image}
              alt={item.title || "Collage item"}
              width={320} // w-80 is typically 320px
              height={160} // h-40 is typically 160px
              className="pointer-events-none relative z-10 h-40 w-80 object-cover"
            />
          )}
          <h3 className="mt-4 text-center text-base font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
