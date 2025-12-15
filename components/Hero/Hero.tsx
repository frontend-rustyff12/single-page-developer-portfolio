import Image from "next/image";
import "./Hero.css";
import Button from "@/components/ui/Button";
import Break from "@/components/ui/Break";
import type { HeroData, Social, ButtonData } from "@/lib/types";
import rings from "@/public/images/pattern-rings.svg";
import circle from "@/public/images/pattern-circle.svg";

type HeroProps = HeroData & {
  socials: Social[];
  btn: ButtonData;
};

export default function Hero({ title, intro, image, socials, btn }: HeroProps) {
  return (
    <>
      <header className="hero-container">
        <nav className="hero-nav-container">
          <h1>{title}</h1>
          <div>
            <ul>
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={`Visit my ${social.name} profile`}
                  >
                    <Image
                      src={social.image}
                      width={20}
                      height={20}
                      alt=""
                      className="social-icon"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="hero-image-container">
          <picture>
            <source media="(min-width: 1024px)" srcSet={image.desktop.src} />
            <source media="(min-width: 768px)" srcSet={image.tablet.src} />
            <Image src={image.mobile.src} alt={image.alt} fill priority />
          </picture>
        </div>

        <article className="hero-text-container">
          <h2 className="heading-xl">
            Nice to meet you! I'm <span>Adam Keyes</span>.
          </h2>
          <p className="medium-text">{intro}</p>
          <Button name={btn.name} link={btn.link} />
        </article>

        <Image className="rings" src={rings} height={130} alt="" />
        <Image
          className="circle"
          src={circle}
          height={130}
          width={130}
          alt=""
        />
      </header>
      <Break />
    </>
  );
}
