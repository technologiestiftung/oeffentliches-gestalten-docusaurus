import React, { ReactNode } from "react";
import { FC } from "react";
import WarningIcon from "@site/static/img/icons/duotone/warning.svg";

interface HintProps {
  children?: ReactNode;
}

export const Hint: FC<HintProps> = ({ children }) => {
  return (
    <p className="flex gap-x-4 items-start">
      <WarningIcon className="shrink-0 w-6 h-auto overflow-visible translate-y-0.5" />
      <span>{children}</span>
    </p>
  );
};
