import React, { FC, ReactNode } from "react";
import InstagramIcon from "@site/static/img/icons/instagram.svg";
import TwitterIcon from "@site/static/img/icons/twitter.svg";
import LinkedinIcon from "@site/static/img/icons/linkedin.svg";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export interface SocialsProps {
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  className?: string;
}

const LinkIcon: FC<{
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
        <LinkIcon
          url={socials.instagram}
          title="Instagram"
          icon={<InstagramIcon />}
        />
      )}
      {socials.twitter && (
        <LinkIcon
          url={socials.twitter}
          title="Twitter"
          icon={<TwitterIcon />}
        />
      )}
      {socials.linkedin && (
        <LinkIcon
          url={socials.linkedin}
          title="LinkedIn"
          icon={<LinkedinIcon />}
        />
      )}
    </div>
  );
};
