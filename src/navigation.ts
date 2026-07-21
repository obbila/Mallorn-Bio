import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Why Mallorn', href: getPermalink('/#why-mallorn') },
    { text: 'Our approach', href: getPermalink('/#approach') },
    { text: 'Living laboratory', href: getPermalink('/#living-lab') },
    { text: 'Research', href: getPermalink('/#research') },
  ],
  actions: [{ text: 'Contact', href: getPermalink('/#contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Explore',
      links: [
        { text: 'Why Mallorn', href: getPermalink('/#why-mallorn') },
        { text: 'Our approach', href: getPermalink('/#approach') },
        { text: 'Research areas', href: getPermalink('/#research') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `© ${new Date().getFullYear()} Mallorn Bio Ltd. All rights reserved.`,
};
