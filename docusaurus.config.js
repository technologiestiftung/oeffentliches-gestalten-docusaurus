// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

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
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
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
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
        items: [
          {
            type: "doc",
            docId: "einfuehrung/vorwort",
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
    team: {
      title: "Die Autor:innen",
      members: [
        {
          name: "Caroline Paulick-Thiel",
          description:
            "Als Direktorin von Politics for Tomorrow und Mitbegründerin der Creative Bureaucracy Festival Academy, setze ich mich für das kreative Beantworten konkreter öffentlicher Fragestellungen ein. Für mich ist das Buch eine belastbare Brücke zwischen Theorie und Praxis, um öffentliche Innovations-prozesse eigenständig und verantwortungsvoll zu gestalten.",
          /** Filename with extension. To be placed in ./static/img/ */
          imageFileName: "portrait-cpt.webp",
        },
        {
          name: "Joshua Pacheco",
          description:
            "Kollaboration und Partizipation bei der Gestaltung für öffentliche Interessen zu ermöglichen, beschäftigt mich als Service Designer im CityLAB Berlin. Um beim Navigieren durch die komplexen Herausforderungen zu nachhaltigen und wirkungsvollen Ergebnissen zu gelangen, sind verschiedene Ansätze möglich – dieses Buch ist einer der vielversprechenden.",
          /** Filename with extension. To be placed in ./static/img/ */
          imageFileName: "portrait-jp.webp",
        },
        {
          name: "Henrike Arlt",
          description:
            "Wie können Veränderungen ermöglicht werden, wenn der zentrale Erfolgsfaktor von Verwaltung seit Jahrzehnten Beständigkeit lautet? Als Innovationsagentin und Beraterin im Inhouse Consulting der Bundesagentur für Arbeit versuche ich dieses Leitmotiv auf den Kopf zu stellen und neu zu interpretieren. Meine wichtigsten Erkenntnisse auf dem bisherigen Weg sind in dieses Buch eingeflossen.",
          /** Filename with extension. To be placed in ./static/img/ */
          imageFileName: "portrait-ra.webp",
        },
        {
          name: "Andrej Balaz",
          description:
            "Von Huch? zu Aha! Die Reise von Innovationsfragen über Erkenntnisgewinnung bis hin zur Kreation besserer Dienstleistungen beschäftigt mich als Service Designer seit mehr als 8 Jahren. Das Handbuch sehe ich als den perfekten Katalysator, um bereits heute Neues auszu-probieren – damit die bessere Welt von morgen nicht länger auf uns warten muss.",
          /** Filename with extension. To be placed in ./static/img/ */
          imageFileName: "portrait-ab.webp",
        },
        {
          name: "Andrea Ramírez Sabat",
          description:
            "Als Designerin weiß ich, wie wichtig es ist, über einen zuverlässigen Satz von Werkzeugen und Methoden zu verfügen, mit denen sich Teams auf eine Innovationsreise begeben können. Ich bin davon überzeugt, dass dieses Buch mehr als nur eine Anleitung für diejenigen ist, die im öffentlichen Sektor etwas bewirken wollen. Es kann den langfristigen Kompetenzaufbau in der öffentlichen Verwaltung unterstützen.",
          /** Filename with extension. To be placed in ./static/img/ */
          imageFileName: "portrait-ars.webp",
        },
        {
          name: "Bettina Köbler",
          description:
            "Als Service Designerin und Dozentin begleite ich multidisziplinäre Teams, einen unvoreingenommenen und radikal nutzerzentrierten Blick auf die Gestaltung dessen zu entwickeln, was sein könnte. Mit dem Handbuch möchte ich dazu befähigen Innovationsprozesse in der öffentlichen Verwaltung zu etablieren und sich bei der Bewältigung gesellschaftlicher Herausforderungen von den Bedürfnissen der Bürger:innen leiten zu lassen.",
          /** Filename with extension. To be placed in ./static/img/ */
          imageFileName: "portrait-bk.webp",
        },
      ],
    },
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
