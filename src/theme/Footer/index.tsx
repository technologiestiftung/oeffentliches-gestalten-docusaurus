import React from "react";

import { useThemeConfig } from "@docusaurus/theme-common";
import FooterLinks from "@theme/Footer/Links";
import FooterLogo from "@theme/Footer/Logo";
import FooterCopyright from "@theme/Footer/Copyright";
import FooterLayout from "@theme/Footer/Layout";
import { Credits, CreditsProps } from "@site/src/components/Credits";
import Translate from "@docusaurus/Translate";

function Footer(): JSX.Element | null {
  const { footer } = useThemeConfig();

  if (!footer) {
    return null;
  }

  const { copyright, links, logo, style } = footer;

  const credits = {
    concept: {
      id: "Konzept",
      title: <Translate id="creditsCol1">Konzept</Translate>,
      people: ["Caroline Paulick-Thiel", "Benjamin Seibel", "Joshua Pacheco"],
    },
    authors: {
      id: "Autorinnen",
      title: <Translate id="creditsCol2">Autorinnen</Translate>,
      people: ["Caroline Paulick-Thiel", "Henrike Arlt", "Bettina Köbler"],
    },
    editing: {
      id: "Redaktion",
      title: <Translate id="creditsCol3">Redaktion</Translate>,
      people: ["Joshua Pacheco", "Benjamin Seibel"],
    },
    design: {
      id: "Gestaltung",
      title: <Translate id="creditsCol4">Gestaltung</Translate>,
      people: [{ name: "Andrej Balaz", url: "www.balaz.de" }],
    },
    illustration: {
      id: "Illustration",
      title: <Translate id="creditsCol5">Illustration</Translate>,
      people: [{ name: "Andrea Ramírez Sabat", url: "www.andrea-rmz.com" }],
    },
  }

  return (
    <FooterLayout
      style={style}
      links={links && links.length > 0 && <FooterLinks links={links} />}
      // @ts-ignore
      credits={
        <Credits credits={credits as CreditsProps["credits"]} />
      }
      logo={logo && <FooterLogo logo={logo} />}
      copyright={copyright && <FooterCopyright copyright={copyright} />}
    />
  );
}

export default React.memo(Footer);
