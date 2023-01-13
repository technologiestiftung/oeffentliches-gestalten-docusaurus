import React, { FC, ReactNode } from "react";

export const TwoColumnGrid: FC<{ gap?: string; children: ReactNode }> = ({
  gap = "2rem",
  children,
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: gap,
      }}
    >
      {children}
    </div>
  );
};
