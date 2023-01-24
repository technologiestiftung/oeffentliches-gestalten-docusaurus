import React from "react";

import { useThemeConfig } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import FooterLinks from "@theme/Footer/Links";
import FooterLogo from "@theme/Footer/Logo";
import FooterCopyright from "@theme/Footer/Copyright";
import FooterLayout from "@theme/Footer/Layout";
import {
  CreditsList,
  CreditsListProps,
} from "@site/src/components/CreditsList";

function Footer(): JSX.Element | null {
  const { footer } = useThemeConfig();
  const { siteConfig } = useDocusaurusContext();

  if (!footer) {
    return null;
  }
  const { copyright, links, logo, style } = footer;
  const { customFields } = siteConfig;

  return (
    <FooterLayout
      style={style}
      links={links && links.length > 0 && <FooterLinks links={links} />}
      // @ts-ignore
      credits={
        <CreditsList
          credits={customFields.credits as CreditsListProps["credits"]}
        />
      }
      logo={logo && <FooterLogo logo={logo} />}
      copyright={copyright && <FooterCopyright copyright={copyright} />}
    />
  );
}

export default React.memo(Footer);
