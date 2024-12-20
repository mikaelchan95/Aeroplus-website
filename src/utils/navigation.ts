import { MainNavLink, NavigationSection } from '../types/navigation';

export const mainNavLinks: MainNavLink[] = [
  { name: 'About', path: '/about' },
  {
    name: 'Solutions',
    path: '/solutions',
    submenu: [
      { name: 'Aviation Asset Trading', path: '/solutions/aviation-asset-trading' },
      { name: 'Travel Payment', path: '/solutions/travel-payment' },
      { name: 'Virtual Cards', path: '/solutions/virtual-cards' },
      { name: 'Supply Chain', path: '/solutions/supply-chain' }
    ]
  },
  { name: 'Leadership', path: '/leadership' },
  { name: 'News', path: '/news' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' }
];

export const footerSections: NavigationSection[] = [
  {
    name: 'Company',
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'Leadership', path: '/leadership' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' }
    ]
  },
  {
    name: 'Solutions',
    links: [
      { name: 'Aviation Asset Trading', path: '/solutions/aviation-asset-trading' },
      { name: 'Travel Payment', path: '/solutions/travel-payment' },
      { name: 'Virtual Cards', path: '/solutions/virtual-cards' },
      { name: 'Supply Chain', path: '/solutions/supply-chain' }
    ]
  },
  {
    name: 'Legal',
    links: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' }
    ]
  }
];