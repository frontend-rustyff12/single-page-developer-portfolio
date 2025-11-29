import { StaticImageData } from "next/image";

export type Social = {
  name: string;
  link: string;
  image: StaticImageData;
};

export type ButtonData = {
  link: string;
  name: string;
};

export type ResponsiveImage = {
  desktop: StaticImageData;
  tablet: StaticImageData;
  mobile: StaticImageData;
  alt: string;
};

export type HeroData = {
  title: string;
  heroTitle: string;
  name: string;
  intro: string;
  image: ResponsiveImage;
};
