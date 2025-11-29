import type { StaticImageData } from "next/image";

export type Project = {
  title: string;
  img: {
    small: StaticImageData;
    large: StaticImageData;
    alt: string;
  };
  tags: string[];
};

export default function Projects() {
  return (
    <>
      <h2>Projects goes here</h2>
    </>
  );
}
