import React from "react";
import LinkItem from "@theme/Footer/LinkItem";
import type { Props } from "@theme/Footer/Links/Simple";
import clsx from "clsx";
import InstagramIcon from "@site/static/img/icons/instagram.svg";
import TwitterIcon from "@site/static/img/icons/twitter.svg";
import LinkedinIcon from "@site/static/img/icons/linkedin.svg";

function SimpleLinkItem({ item }: { item: Props["links"][number] }) {
  return item.html ? (
    <span
      className="footer__link-item"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: item.html }}
    />
  ) : (
    <LinkItem item={item} />
  );
}

export default function FooterLinksSimple({ links }: Props): JSX.Element {
  return (
    <div
      className={clsx(
        "p-6",
        "grid gap-y-6 grid-cols-12",
        "border-t border-blue-100"
      )}
    >
      <div
        className={clsx(
          "lg:col-start-2 col-span-12 md:col-span-8",
          "flex gap-4",
          "text-sm"
        )}
      >
        {links.map((item, i) => (
          <React.Fragment key={i}>
            <SimpleLinkItem item={item} />
          </React.Fragment>
        ))}
      </div>
      <div
        className={clsx(
          "md:col-start-10 col-span-4 md:col-span-2 w-full",
          "md:justify-end flex gap-x-4"
        )}
      >
        <a
          href="https://www.instagram.com/citylabbln/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-grey-500 transition-colors hover:text-blue-500"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://twitter.com/citylabberlin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-grey-500 transition-colors hover:text-blue-500"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.linkedin.com/company/technologiestiftung/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-grey-500 transition-colors hover:text-blue-500"
        >
          <LinkedinIcon />
        </a>
      </div>
    </div>
  );
}
