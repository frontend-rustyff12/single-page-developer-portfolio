import Image from "next/image";
import "./Skills.css";
import rings from "@/public/images/pattern-rings.svg";
import Break from "../ui/Break";
type Skill = {
  name: string;
  years: number;
};

type Props = {
  skills: Skill[];
};

export default function Skills({ skills }: Props) {
  return (
    <div className="skills-wrapper">
      <section id="skills">
        {skills.map((item, index) => (
          <div key={index} className="skill-container">
            <h3 className="skill heading-l">{item.name}</h3>
            <p className="experience">{item.years} Years Experience</p>
          </div>
        ))}
      </section>
      <Break hideLarge={true} />
      <Image className="skills-rings" src={rings} height={130} alt="" />
    </div>
  );
}
