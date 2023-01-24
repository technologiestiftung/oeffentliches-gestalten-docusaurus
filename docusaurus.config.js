// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Öffentliches Gestalten",
  tagline: "Handbuch für innovatives Arbeiten in der Verwaltung",
  baseUrl: "/",
  url: "https://oeffentliches-gestalten.org",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "CityLAB Berlin", // Usually your GitHub org/user name.
  projectName: "oeffentliches-gestalten", // Usually your repo name.

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
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Öffentliches Gestalten",
        logo: {
          alt: "Icon zum Handbuch Öffentliches Gestalten",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "vorwort",
            position: "left",
            label: "Handbuch",
          },
          { to: "/blog", label: "Methodenbox", position: "left" },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            label: "Kontakt",
            href: "https://citylab-berlin.org/de/projects/handbuch/",
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
        copyright: `CC BY-NC-SA 4.0 ${new Date().getFullYear()} Technologiestiftung Berlin`,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
