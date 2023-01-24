import React, { FC, ReactNode } from "react";

export const TwoColumnGrid: FC<{ gap?: string; children: ReactNode }> = ({
  gap = "2rem",
  children,
}) => {
  return (
    <div
      className="grid grid-cols-2"
      style={{ gap: gap }}
    >
      {children}
    </div>
  );
};
