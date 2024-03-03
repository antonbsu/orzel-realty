type Image = {
  _key: string;
  _ref: string;
  _type: string;
  url: string;
};

type NavigationSubMenu = {
  subLabel: string;
  subLink: string;
};

type NavigationMenuItem = {
  label: string;
  link: string;
  subMenu?: NavigationSubMenu[];
};

export type Navbar = {
  _id: string;
  logo: Image;
  menuItems: NavigationMenuItem[];
};