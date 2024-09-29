import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink(),
    },
    {
      text: 'Blogs',
      href: getPermalink('/blog'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Privacy',
      href: getPermalink('/privacy'),
    },
    {
      text: 'Terms',
      href: getPermalink('/terms'),
    },

    // {
    //   text: 'Contact',
    //   href: getPermalink('/contact'),
    // },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
};
