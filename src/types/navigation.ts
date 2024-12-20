export interface NavigationLink {
  name: string;
  path: string;
  submenu?: NavigationLink[];
}

export interface NavigationSection {
  name: string;
  links: NavigationLink[];
}

export interface MainNavLink extends NavigationLink {
  description?: string;
}