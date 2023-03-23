import clsx from "clsx";
import React, { FC } from "react";

export const PhaseHero: FC<{
  header?: string;
  title: string;
  surtitle: string;
  quote: string;
  quoteAuthor: string;
  imageUrl: string;
  className?: string;
}> = ({
  header,
  title,
  surtitle,
  quote,
  quoteAuthor,
  imageUrl,
  className: additionalClassNames = "",
}) => {
  return (
    <div className={clsx("not-prose", additionalClassNames)}>
      {header}
      <div
        className={clsx(
          "w-full",
          "grid grid-cols-[1fr,auto] gap-x-1 sm:gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-5 lg:gap-y-8"
        )}
      >
        <div className={clsx("col-span-2", "grid grid-cols-1")}>
          <h1
            className={clsx(
              "text-grey-500",
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold hyphens-auto",
              "-translate-y-2",
              "!mb-0"
            )}
          >
            {title}
          </h1>
          <h2 className="order-first text-lg sm:text-2xl">{surtitle}</h2>
        </div>
        <figure>
          <blockquote className="text-lg sm:text-2xl border-l-0 pl-0 italic leading-snug text-grey-500">
            {quote}
          </blockquote>
          <hr className="h-px w-16 border-0 bg-grey-100 mb-3 mt-4" />
          <figcaption className="text-xs font-bold text-grey-500">
            {quoteAuthor}
          </figcaption>
        </figure>

        <img
          src={imageUrl}
          alt="sdfsdfsd"
          className={clsx(
            "w-24 sm:w-40 md:w-42 lg:w-48 xl:w-64 h-auto",
            "lg:scale-150",
            "lg:translate-x-10",
            "-translate-y-6 lg:-translate-y-6 xl:-translate-y-12"
          )}
        />
      </div>
    </div>
  );
};
