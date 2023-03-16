import React, { FC, ReactNode } from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";

interface MethodCardType {
  title: string;
  surtitle?: string;
  attributes?: string[];
  imageUrl?: string;
  footer?: ReactNode;
  body?: string;
  className?: string;
}

export const MethodCard: FC<MethodCardType> = ({
  title,
  surtitle,
  attributes,
  imageUrl,
  footer,
  body,
  className: additionalClassNames = "",
}) => {
  return (
    <div
      className={clsx(
        "border border-grey-50 shadow",
        "grid grid-cols-8 gap-5",
        "max-h-min",
        additionalClassNames
      )}
    >
      {imageUrl && (
        <div className="col-span-2 lg:col-span-3 bg-blue-50 overflow-hidden flex items-center justify-center">
          <div className="max-h-32 w-full flex items-center justify-center">
            <img
              src={useBaseUrl(imageUrl)}
              className="-rotate-[20deg] scale-[1.95] md:scale-150 lg:scale-125"
              aria-hidden
            />
          </div>
        </div>
      )}
      <div
        className={clsx(
          imageUrl ? "col-span-6 lg:col-span-5" : "col-span-full",
          "py-4 pr-5",
          !imageUrl && "pl-5",
          "flex flex-row flex-wrap gap-y-6 justify-between"
        )}
      >
        <div className="w-full">
          <div className="grid grid-cols-1">
            <h2 className="prose-h2:text-xl !mt-0 !mb-0 !leading-none hyphens-auto">
              {title}
            </h2>
            {surtitle && (
              <h3
                className={clsx(
                  "order-first",
                  "!my-0",
                  "!text-base !font-normal italic",
                  "!text-grey-300"
                )}
              >
                {surtitle}
              </h3>
            )}
          </div>
          {body && (
            <p className="prose-p:leading-tight !mt-2.5 !mb-0">{body}</p>
          )}
          {attributes && (
            <div className="mt-2.5 flex flex-wrap gap-x-6 gap-y-0.5 text-grey-300 !leading-tight">
              {attributes.map((attribute) => {
                return <span key={attribute}>{attribute}</span>;
              })}
            </div>
          )}
        </div>
        {footer && <footer className="self-end">{footer}</footer>}
      </div>
    </div>
  );
};
