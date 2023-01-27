import React, { FC } from "react";
import clsx from "clsx";

export interface PersonCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

export const PersonCard: FC<PersonCardProps> = ({
  name,
  description,
  imageUrl,
}) => {
  return (
    <div
      className={clsx(
        "grid gap-x-7 gap-y-3 items-start",
        "grid-cols-1 xl:grid-cols-[196px,1fr]",
        "not-prose"
      )}
    >
      <div className="w-24 xl:w-full aspect-square clip-circle-50">
        <div
          className={clsx(
            "w-full h-full",
            "shrink-0",
            "bg-cover bg-grey-500 bg-blend-luminosity"
          )}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>

      <div>
        <h3 className="text-xl md:text-2xl font-extrabold">{name}</h3>
        <p className="mt-2 leading-snug">{description}</p>
      </div>
    </div>
  );
};
