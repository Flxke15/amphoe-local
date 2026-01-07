import { subMenu1 } from './subMenu1.js';

const getListMenu = () => [
  { 
    title: 'Home',
    icon: 'mdi-home',
    to: '/Home',
    isActive: true,
  },
  { 
    title: 'About', 
    icon: 'mdi-information',
    subItems: subMenu1.aboutSubMenu
  },
  { 
    title: 'Contact',
    icon: 'mdi-phone',
    to: '/Contact',
    isActive: true,
  },
]

export { getListMenu }