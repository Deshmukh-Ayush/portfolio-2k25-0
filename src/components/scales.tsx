import React from "react";

const Scales = () => {
  return (
    <>
      <div
        className="absolute top-0 right-0 h-full w-8 border-r border-l border-neutral-200 dark:border-neutral-600"
        style={{
          backgroundImage: `repeating-linear-gradient(
              45deg,
              var(--pattern-fg) 0px,
              var(--pattern-fg) 1px,
              transparent 1px,
              transparent 8px
            )`,
          backgroundSize: "8px 8px",
        }}
      ></div>

      {/* Left border pattern */}
      <div
        className="absolute top-0 left-0 h-full w-8 border-r border-l border-neutral-200 dark:border-neutral-600"
        style={{
          backgroundImage: `repeating-linear-gradient(
              45deg,
              var(--pattern-fg) 0px,
              var(--pattern-fg) 1px,
              transparent 1px,
              transparent 8px
            )`,
          backgroundSize: "8px 8px",
        }}
      ></div>
    </>
  );
};

export default Scales;
