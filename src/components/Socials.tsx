import React, { FC, ReactNode } from "react";
import InstagramIcon from "@site/static/img/icons/instagram.svg";
import TwitterIcon from "@site/static/img/icons/twitter.svg";
import LinkedinIcon from "@site/static/img/icons/linkedin.svg";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { VisualLink } from "./VisualLink";

export interface SocialsProps {
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  className?: string;
}

const ICON_CLASSES = "text-grey-500 transition-colors hover:text-blue-500";

export const Socials: FC<SocialsProps> = ({ className }) => {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;

  const socials = customFields.socials as Pick<
    SocialsProps,
    "instagram" | "twitter" | "linkedin"
  >;

  return (
    <div className={className}>
      {socials.instagram && (
        <VisualLink
          url={socials.instagram}
          title="Instagram"
          visual={<InstagramIcon />}
          className={ICON_CLASSES}
          newTab={true}
        />
      )}
      {socials.twitter && (
        <VisualLink
          url={socials.twitter}
          title="Twitter"
          visual={<TwitterIcon />}
          className={ICON_CLASSES}
          newTab={true}
        />
      )}
      {socials.linkedin && (
        <VisualLink
          url={socials.linkedin}
          title="LinkedIn"
          visual={<LinkedinIcon />}
          className={ICON_CLASSES}
          newTab={true}
        />
      )}
    </div>
  );
};
