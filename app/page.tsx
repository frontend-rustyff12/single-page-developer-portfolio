import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

import { heroData, socialsData, btnData } from "@/content/hero";
import { projectsData } from "@/content/projects";
import { skillsData } from "@/content/skills";

export default function Home() {
  return (
    <>
      <Hero {...heroData} socials={socialsData} btn={btnData} />
      <Skills skills={skillsData} />
      <Projects projects={projectsData} btn={btnData} />
    </>
  );
}
