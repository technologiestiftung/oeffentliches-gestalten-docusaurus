import clsx from "clsx";
import React, { FC, ReactNode } from "react";

interface StepItemProps {
  surtitle?: string;
  title: string;
  subtitle?: string;
  visual?: ReactNode;
  className?: string;
}

export const StepItem: FC<StepItemProps> = ({
  surtitle,
  title,
  subtitle,
  visual,
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex gap-x-3 lg:gap-x-4 items-center",
        className,
        "not-prose"
      )}
    >
      {visual}
      <div>
        {surtitle && (
          <p
            className={clsx(
              "leading-none sm:leading-tight md:leading-none",
              "text-sm md:text-base",
              "text-grey-300"
            )}
          >
            {surtitle}
          </p>
        )}
        <h2
          className={clsx(
            "text-xl sm:text-2xl md:text-3xl lg:text-[40px]",
            "leading-tight sm:leading-none",
            "font-extrabold",
            "not-prose"
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={clsx(
              "text-lg sm:text-xl md:text-2xl lg:text-[32px]",
              "leading-tight md:leading-snug lg:leading-snug",
              "italic"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
