// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DemocracyCraft',
  tagline: 'Build a democracy, conquer the markets!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.democracycraft.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MinecraftCitiesNetwork', // Usually your GitHub org/user name.
  projectName: 'democracycraft-wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MinecraftCitiesNetwork/democracycraft-wiki/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/feature-banner.webp',
      navbar: {
        title: 'DemocracyCraft',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guides',
          },
          {
            label: 'Rules',
            to: '/rules',
          },
          {
            label: 'Blog',
            to: '/blog',
          },
          {
            href: 'https://github.com/MinecraftCitiesNetwork/democracycraft-wiki/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forums',
                href: 'https://www.democracycraft.net',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/democracy',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/democracycraft',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Changelog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/MinecraftCitiesNetwork/democracycraft-wiki/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DemocracyCraft. This server is not operated by Mojang or Microsoft and is not affiliated with/supported by Mojang AB or Microsoft.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
