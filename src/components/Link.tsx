import React, { FC, ReactNode } from "react";
import DocusaurusLink from "@docusaurus/Link";
import clsx from "clsx";

export const Link: FC<{
  href: string;
  ariaLabel?: string;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
}> = ({
  href,
  ariaLabel,
  icon,
  className: additionalClassNames = "",
  children,
}) => {
  const isIconOnly = icon && !children;
  if (isIconOnly && !ariaLabel) {
    throw new Error("Icon-only links need to have an aria-label.");
  }
  return (
    <DocusaurusLink
      to={href}
      aria-label={ariaLabel}
      className={clsx(
        "!font-normal",
        icon && "flex items-center gap-x-1.5",
        additionalClassNames
      )}
    >
      {icon}
      {children}
    </DocusaurusLink>
  );
};
