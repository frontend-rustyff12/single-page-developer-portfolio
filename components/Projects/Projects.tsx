import type { StaticImageData } from "next/image";
import Button from "@/components/ui/Button";
import { ButtonData } from "@/lib/types";
import "./Projects.css";
import Image from "next/image";
export type Project = {
  title: string;
  img: StaticImageData;

  alt: string;
  tags: string[];
};

export default function Projects({
  projects,
  btn,
}: {
  projects: Project[];
  btn: ButtonData;
}) {
  return (
    <section className="projects-wrapper">
      <div className="projects-header">
        <h2 className="heading-xl">Projects</h2>
        <Button name={btn.name} link={btn.link} />
      </div>
      <div className="cards-section">
        {projects.map((item, index) => (
          <article className="card" key={index}>
            <div className="card-image">
              <Image
                src={item.img}
                alt={item.alt}
                width={342}
                height={255}
                sizes="342px"
                className="card-image"
              />
            </div>
            <div className="card-info">
              <h3>{item.title}</h3>
              <p className="card-tags">
                {item.tags.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </p>
            </div>
            <div className="card-links">
              <Button name="View Project" link="https://www.netlify.com" />
              <Button name="View Code" link="https://www.github.com" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
