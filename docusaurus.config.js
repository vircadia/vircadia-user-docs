// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vircadia User Docs',
  tagline: 'Vircadia User Documentation',
  url: 'https://docs.vircadia.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'vircadia',
  projectName: 'vircadia-user-docs',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
            docs: {
                sidebarPath: require.resolve('./sidebars.js'),
                routeBasePath: '/',
                editUrl: 'https://github.com/vircadia/vircadia-user-docs/edit/master/',
            },
            theme: {
                customCss: require.resolve('./src/css/custom.css'),
            },
        }),
    ],
],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'User Docs',
        logo: {
            alt: 'Vircadia',
            src: 'img/vircadia-banner.png',
        },
        items: [
            {
                href: 'https://github.com/vircadia/vircadia-user-docs',
                label: 'Git',
                position: 'right',
            },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More Docs',
            items: [
                {
                    label: 'API Docs',
                    to: 'https://apidocs.vircadia.dev/'
                },
                {
                    label: 'Developer Docs',
                    to: 'https://docs.vircadia.dev/'
                }
            ],
          },
          {
            title: 'Community',
            items: [
                {
                    label: 'Forum',
                    href: 'https://forum.vircadia.com/'
                },
                {
                    label: 'Discord',
                    href: 'https://discordapp.com/invite/Pvx2vke'
                },
                {
                    label: 'Matrix',
                    href: 'https://matrix.to/#/#vircadia:matrix.vircadia.org'
                }
            ],
          },
          {
              title: 'More',
              items: [
                  {
                      label: 'Website',
                      to: 'https://vircadia.com/',
                  },
                  {
                      label: 'Git',
                      href: 'https://github.com/vircadia/',
                  },
              ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DigiSomni LLC. | Copyright © ${new Date().getFullYear()} Vircadia contributors.`,      },
        announcementBar: {
            id: 'integration_help',
            content: '<a target="_blank" id="integration_help" rel="noopener noreferrer" href="https://vircadia.com/#contact">Need assistance integrating Vircadia with your company or organization? 🚀</a>',
            backgroundColor: '#001A29',
            textColor: '#CCCCCC',
            isCloseable: false,
        },
        prism: {
            theme: themes.github,
            darkTheme: themes.dracula,
        },
    }),
};

module.exports = config;
