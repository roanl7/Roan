export const SITE = {
  name: 'ROAN',
  tagline: 'Smart choices for modern living.',
  description:
    'ROAN is an editorial shopping guide helping readers discover useful products, tools, books and ideas worth considering.',
  contactEmail: 'roanlcontat@gmail.com',
  url: 'https://roan.example.com',
};

export type CategorySlug = 'tech' | 'skincare-beauty' | 'books' | 'audible' | 'tools';

export interface Category {
  slug: CategorySlug;
  path: string;
  label: string;
  shortLabel: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    slug: 'tech',
    path: '/tech',
    label: 'Tech',
    shortLabel: 'Tech',
    description:
      'Everyday tech worth having on your desk, in your bag, or on your ears — chosen for how it actually gets used.',
  },
  {
    slug: 'skincare-beauty',
    path: '/skincare-beauty',
    label: 'Skincare & Beauty',
    shortLabel: 'Skincare',
    description:
      'A considered edit of skincare and beauty products, from cult-favorite serums to at-home tools.',
  },
  {
    slug: 'books',
    path: '/books',
    label: 'Books & E-books',
    shortLabel: 'Books',
    description: 'Reading recommendations and e-book picks for people who like to learn and unwind on their own terms.',
  },
  {
    slug: 'audible',
    path: '/audible',
    label: 'Audible & Audiobooks',
    shortLabel: 'Audible',
    description: 'Audiobooks and listening picks for commutes, workouts, and quiet evenings in.',
  },
  {
    slug: 'tools',
    path: '/tools',
    label: 'Tools & Services',
    shortLabel: 'Tools',
    description: 'Apps, platforms, and services that make modern life a little easier to manage.',
  },
];

export const MAIN_NAV = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'Tech', path: '/tech' },
  { label: 'Skincare & Beauty', path: '/skincare-beauty' },
  { label: 'Books', path: '/books' },
  { label: 'Audible', path: '/audible' },
  { label: 'Tools & Services', path: '/tools' },
  { label: 'Journal', path: '/journal' },
  { label: 'About', path: '/about' },
];

export const FOOTER_LINKS = {
  categories: CATEGORIES.map((c) => ({ label: c.label, path: c.path })),
  company: [
    { label: 'About ROAN', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Journal', path: '/journal' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/legal/privacy-policy' },
    { label: 'Terms of Use', path: '/legal/terms-of-use' },
    { label: 'Affiliate Disclosure', path: '/legal/affiliate-disclosure' },
  ],
};
