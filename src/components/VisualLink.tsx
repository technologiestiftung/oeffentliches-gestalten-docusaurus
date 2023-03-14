import React, { FC, ReactNode } from "react";

export const VisualLink: FC<{
  url: string;
  title: string;
  visual: ReactNode;
  className?: string;
  newTab?: boolean;
}> = ({ url, title, visual, className, newTab = false }) => {
  return (
    <a
      href={url}
      target={newTab ? "_blank" : null}
      rel={newTab ? "noopener noreferrer" : null}
      aria-label={title}
      className={className}
    >
      {visual}
    </a>
  );
};
