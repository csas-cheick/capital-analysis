export type NavChildItem = {
  name: string;
  href: string;
};

export type NavItem = {
  name: string;
  href: string;
  children?: NavChildItem[];
};

export type ServiceItem = {
  title: string;
  description: string;
  link: string;
};

export type Testimonial = {
  name: string;
  position: string;
  content: string;
  rating: number;
};
