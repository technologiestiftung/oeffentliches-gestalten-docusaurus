import React, { ReactNode } from "react";
import clsx from "clsx";
import type { Props } from "@theme/Footer/Layout";
import CopyrightIcons from "@site/static/img/icons_cc-by-sa-4-0.svg";
import CitylabLogo from "@site/static/img/logo_citylab.svg";
import P4tLogo from "@site/static/img/logo_p4t.svg";
import TsbLogo from "@site/static/img/logo_tsb.svg";
import SenatskanzleiLogo from "@site/static/img/logo_senatskanzlei.svg";
import { VisualLink } from "@site/src/components/VisualLink";

export type FooterLayoutProps = Props & { credits: ReactNode };

export default function FooterLayout({
  links,
  credits,
  copyright,
}: FooterLayoutProps): JSX.Element {
  return (
    <footer
      className={clsx(
        "bg-blue-50",
        "border-t border-blue-200",
        "relative z-10"
      )}
    >
      <div className={clsx("px-6 py-12", "grid gap-y-14 grid-cols-12")}>
        <div className="lg:col-start-2 col-span-12 md:col-span-6 lg:col-span-4">
          <p className="mb-4 text-sm">
            Entstanden durch die Zusammenarbeit von
          </p>
          <div className="flex gap-x-3 gap-y-6 flex-wrap">
            <VisualLink
              url="https://citylab-berlin.org"
              title="CityLAB Berlin"
              visual={<CitylabLogo className="w-44 h-auto pr-3" />}
            />
            <VisualLink
              url="https://www.politicsfortomorrow.eu/"
              title="Politics for Tomorrow"
              visual={<P4tLogo className="w-32 h-auto pr-3" />}
            />
          </div>
        </div>
        <div
          className={clsx(
            "lg:col-start-8 col-span-12 md:col-span-6 lg:col-span-4",
            "flex gap-x-6 flex-wrap gap-y-6 md:grid md:gap-x-0 grid-cols-2"
          )}
        >
          <div>
            <p className="mb-4 text-sm">Ein Projekt der</p>
            <VisualLink
              url="https://www.technologiestiftung-berlin.de/"
              title="Technologiestiftung Berlin"
              visual={<TsbLogo className="w-28 h-auto" />}
            />
          </div>
          <div>
            <p className="mb-4 text-sm">Gefördert durch</p>
            <VisualLink
              url="https://www.berlin.de/rbmskzl/"
              title="Die Regierende Bürgermeisterin von Berlin - Senatskanzlei"
              visual={<SenatskanzleiLogo className="w-24 h-auto" />}
            />
          </div>
        </div>
      </div>
      <div className="border-t border-blue-100">
        <div
          className={clsx(
            "grid gap-y-6 grid-cols-12",
            "px-6 py-12",
            "text-grey-500"
          )}
        >
          {credits}
          {copyright && (
            <div className="lg:col-start-2 col-span-6 md:col-span-8 lg:col-span-10 pr-6 text-sm">
              <h4 className={clsx("mb-2", "font-bold text-base text-grey-500")}>
                Copyright
              </h4>
              {copyright}
              <CopyrightIcons className="mt-2" />
            </div>
          )}
        </div>
        {links}
      </div>
    </footer>
  );
}
