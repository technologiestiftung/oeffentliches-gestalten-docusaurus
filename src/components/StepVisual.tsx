import clsx from "clsx";
import React, { FC } from "react";

interface StepVisualProps {
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
    shape === "square" ? "clip-standing-square" : "clip-circle";
  return (
    <div
      className={clsx(
        "w-12 md:w-16 lg:w-20",
        "h-12 md:h-16 lg:h-20",
        bgColorClass,
        "text-white font-bold",
        "flex items-center justify-center shrink-0",
        SHAPE_CLASSES
      )}
    >
      <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl leading-none font-mono">
        {stepIndex}
      </p>
    </div>
  );
};
