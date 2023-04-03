import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import DocusaurusLink from "@docusaurus/Link";

interface PhaseItemProps {
  surtitle?: string;
  title: string;
  subtitle?: string;
  visual?: ReactNode;
  href: string;
  className?: string;
}

export const PhaseItem: FC<PhaseItemProps> = ({
  surtitle,
  title,
  subtitle,
  visual,
  href,
  className,
}) => {
  return (
    <DocusaurusLink
      to={href}
      className={clsx(
        "flex gap-x-3 lg:gap-x-4 items-center",
        "px-1 py-2 rounded-md",
        "transition-colors hover:bg-grey-50 hover:bg-opacity-25",
        "hover:no-underline",
        className
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
    </DocusaurusLink>
  );
};
