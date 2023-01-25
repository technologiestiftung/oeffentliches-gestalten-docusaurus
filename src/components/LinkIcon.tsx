import React, { FC, ReactNode } from "react";

export const LinkIcon: FC<{
  url: string;
  title: string;
  icon: ReactNode;
}> = ({ url, title, icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
      className="text-grey-500 transition-colors hover:text-blue-500"
    >
      {icon}
    </a>
  );
};
