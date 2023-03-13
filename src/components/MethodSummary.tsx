import clsx from "clsx";
import React, { FC, ReactNode } from "react";

interface MethodSummaryType {
  title: string;
  attributes?: { label: string; content: string }[];
  footer?: string | ReactNode;
  children?: ReactNode;
}

export const MethodSummary: FC<MethodSummaryType> = ({
  title,
  attributes,
  footer,
  children,
}) => {
  return (
    <article
      className={clsx(
        "px-7 py-6",
        "grid grid-cols-1 xl:grid-cols-[5fr,3fr] gap-x-6 gap-y-5 md:gap-y-12"
      )}
    >
      <h2 className="xl:col-span-2 !mb-0">
        <span className="font-normal italic">Methode</span>
        <br />
        {title}
      </h2>
      <main className="prose-h3:my-0 prose-h3:text-lg">{children}</main>
      <aside className="align-start h-min grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-5 xl:grid-cols-1">
        {attributes &&
          attributes.map((attribute) => {
            return (
              <div>
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
