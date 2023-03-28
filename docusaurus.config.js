// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Öffentliches Gestalten",
  tagline: "Handbuch für innovatives Arbeiten in der Verwaltung",
  baseUrl: "/",
  url: "https://oeffentliches-gestalten-docusaurus.vercel.app",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
  },

  plugins: [
    async function myPlugin() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/buch",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-default.png",
      metadata: [
        {
          name: "description",
          content: "Handbuch für innovatives Arbeiten in der Verwaltung",
        },
      ],
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Öffentliches Gestalten",
        logo: {
          alt: "Icon zum Handbuch Öffentliches Gestalten",
          src: "img/logo.svg",
        },
      },
      footer: {
        style: "light",
        links: [
          {
            label: "Kontakt",
            href: "https://citylab-berlin.org/de/projects/handbuch/",
          },
          {
            label: "Literaturverzeichnis",
            href: "/literaturverzeichnis",
          },
          {
            label: "Quellcode",
            href: "https://github.com/technologiestiftung/oeffentliches-gestalten-docusaurus",
          },
          {
            label: "Datenschutz",
            href: "https://www.technologiestiftung-berlin.de/datenschutz",
          },
          {
            label: "Impressum",
            href: "https://www.technologiestiftung-berlin.de/impressum",
          },
        ],
        copyright:
          "Dieses Werk ist lizenziert unter der Creative Commons Attribution-NonCommercial ShareAlike 4.0 International (CC BY-NC-SA 4.0).",
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
  customFields: {
    credits: {
      concept: {
        title: "Konzept",
        people: ["Caroline Paulick-Thiel", "Benjamin Seibel", "Joshua Pacheco"],
      },
      authors: {
        title: "Autorinnen",
        people: ["Caroline Paulick-Thiel", "Henrike Arlt", "Bettina Köbler"],
      },
      editing: {
        title: "Redaktion",
        people: ["Joshua Pacheco", "Benjamin Seibel"],
      },
      design: {
        title: "Gestaltung",
        people: [{ name: "Andrej Balaz", url: "www.balaz.de" }],
      },
      illustration: {
        title: "Illustration",
        people: [{ name: "Andrea Ramírez Sabat", url: "www.andrea-rmz.com" }],
      },
    },
    socials: {
      twitter: "https://twitter.com/citylabberlin",
      instagram: "https://www.instagram.com/citylabbln/",
      linkedin: "https://www.linkedin.com/company/technologiestiftung/",
    },
  },
};

module.exports = config;
