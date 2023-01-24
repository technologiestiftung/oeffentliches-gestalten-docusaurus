import React, { ReactNode } from "react";
import clsx from "clsx";
import type { Props } from "@theme/Footer/Layout";
import CopyrightIcons from "@site/static/img/icons_cc-by-sa-4-0.svg";
import CitylabLogo from "@site/static/img/logo_citylab.svg";
import P4tLogo from "@site/static/img/logo_p4t.svg";
import TsbLogo from "@site/static/img/logo_tsb.svg";
import SenatskanzleiLogo from "@site/static/img/logo_senatskanzlei.svg";

export type FooterLayoutProps = Props & { credits: ReactNode };

export default function FooterLayout({
  links,
  credits,
  copyright,
}: FooterLayoutProps): JSX.Element {
  return (
    <footer className={clsx("pt-10", "bg-blue-50")}>
      <div className={clsx("p-6", "grid gap-y-14 grid-cols-12")}>
        <div className="lg:col-start-2 col-span-12 md:col-span-6 lg:col-span-4">
          <p className="mb-4 text-sm">
            Entstanden durch die Zusammenarbeit von
          </p>
          <div className="flex gap-x-3">
            <CitylabLogo className="w-44 h-auto pr-3" />
            <P4tLogo className="w-32 h-auto pr-3" />
          </div>
        </div>
        <div
          className={clsx(
            "lg:col-start-8 col-span-12 md:col-span-6 lg:col-span-4",
            "flex gap-x-6 md:grid md:gap-x-0 grid-cols-2"
          )}
        >
          <div>
            <p className="text-sm">Ein Projekt der</p>
            <TsbLogo className="w-28 h-auto" />
          </div>
          <div>
            <p className="text-sm">Gefördert durch</p>
            <SenatskanzleiLogo className="w-24 h-auto" />
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-blue-300">
        <div
          className={clsx("grid gap-y-6 grid-cols-12", "p-6", "text-grey-500")}
        >
          {copyright && (
            <div className="lg:col-start-2 col-span-6 md:col-span-3 lg:col-span-2 pr-6 text-sm">
              <h4 className="mb-2 text-grey-500">Copyright</h4>
              {copyright}
              <CopyrightIcons className="mt-2" />
            </div>
          )}
          {credits}
        </div>
        {links}
      </div>
    </footer>
  );
}
