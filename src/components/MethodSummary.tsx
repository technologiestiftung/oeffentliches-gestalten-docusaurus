import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import Translate, { translate } from "@docusaurus/Translate";

interface MethodSummaryType {
  title: string;
  time?: string;
  attributes?: { label: string; content: string }[];
  footer?: string | ReactNode;
  className?: string;
  children?: ReactNode;
}

export const MethodSummary: FC<MethodSummaryType> = ({
  title,
  time,
  attributes,
  footer,
  className: additionalClassNames = "",
  children,
}) => {
  const sidebarItems: MethodSummaryType["attributes"] = [
    time && {
      label: translate({ message: "Zeitrahmen", id: "timeframe" }),
      content: time,
    },
    ...attributes,
  ].filter(Boolean);

  return (
    <article
      className={clsx(
        "bg-white border border-grey-50",
        "px-7 py-6",
        "grid grid-cols-1 xl:grid-cols-[5fr,3fr] gap-x-6 gap-y-5 md:gap-y-12",
        additionalClassNames
      )}
    >
      <h2 className="xl:col-span-2 !mb-0">
        <span className="font-normal italic !text-2xl">
          <Translate id="methodSummary.surtitle">Methode</Translate>
        </span>
        <br />
        {title}
      </h2>
      <main className="prose-h3:my-0 prose-h3:text-lg">{children}</main>
      <aside className="align-start h-min grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-5 xl:grid-cols-1">
        {sidebarItems &&
          sidebarItems.map((attribute) => {
            return (
              <div key={attribute.label}>
                <h3 className="!text-lg font-bold !mt-0 !mb-0">
                  {attribute.label}
                </h3>
                <p className="!text-sm !leading-tight !mb-0">
                  {attribute.content}
                </p>
              </div>
            );
          })}
      </aside>
      {footer && (
        <footer>
          <hr className="h-1 bg-grey-100 w-1/2 !mt-0 !mb-2" />
          <div>
            {typeof footer === "string" ? (
              <p className="text-sm">{footer}</p>
            ) : (
              footer
            )}
          </div>
        </footer>
      )}
    </article>
  );
};
