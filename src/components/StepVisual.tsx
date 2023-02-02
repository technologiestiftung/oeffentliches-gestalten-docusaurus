import clsx from "clsx";
import React, { FC } from "react";

export interface StepVisualProps {
  stepIndex: number;
  shape?: "circle" | "square";
  bgColorClass?: string;
}

export const StepVisual: FC<StepVisualProps> = ({
  stepIndex,
  shape = "square",
  bgColorClass = "bg-grey-500",
}) => {
  const SHAPE_CLASSES =
    shape === "square" ? "clip-standing-square" : "rounded-full -scale-[87%]";
  return (
    <div
      className={clsx(
        "relative",
        "w-12 md:w-16 lg:w-20",
        "h-12 md:h-16 lg:h-20",
        "shrink-0",
        "not-prose"
      )}
    >
      <div
        className={clsx(
          "absolute top-0 left-0",
          "w-full h-full",
          bgColorClass,
          SHAPE_CLASSES
        )}
      ></div>
      <p
        className={clsx(
          "absolute",
          "top-1/2 -translate-x-1/2",
          "left-1/2 -translate-y-1/2",
          "text-lg sm:text-xl md:text-2xl lg:text-4xl",
          "leading-none",
          "font-mono font-bold text-white"
        )}
      >
        {stepIndex}
      </p>
    </div>
  );
};
