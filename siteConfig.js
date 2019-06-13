const path = require('path');

const users = [
  {
    caption: 'GSD',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/logo-dark.png',
    infoLink: 'https://gsd.outxu.cn',
    pinned: true,
  },
];

const consoleConfig = {
  url: '/login'
}

const siteConfig = {
  title: 'Great Static Data', // Title for your website.
  tagline: '业务静态数据解决方案',
  url: 'https://gsd.outxu.cn', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'gsd',
  organizationName: 'NEUQer',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    // {page: 'wip', label: '文档'},
    // {page: 'wip', label: 'API'},
    // {page: 'wip', label: '帮助'},
    // {blog: true, label: '发布日志'},
    {href: consoleConfig.url, label: '开始使用'},
  ],

  // If you have users set above, you add it here:
  users,
  consoleConfig,

  disableHeaderTitle: true,
  /* path to images for header/footer */
  headerIcon: 'img/logo-full.png',
  footerIcon: 'img/logo-full.png',
  favicon: 'favicon.ico',

  // custom docs path
  customDocsPath: path.parse(__dirname).name + '/docs',

  /* Colors for website */
  colors: {
    primaryColor: '#011528',
    secondaryColor: '#55215a',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} John.Xu`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
