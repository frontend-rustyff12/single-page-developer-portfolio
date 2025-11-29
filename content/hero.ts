import desktop from "@/public/images/image-profile-desktop.webp";
import tablet from "@/public/images/image-profile-tablet.webp";
import mobile from "@/public/images/image-profile-mobile.webp";
import github from "@/public/images/icon-github.svg";
import frontend from "@/public/images/icon-frontend-mentor.svg";
import linkedin from "@/public/images/icon-linkedin.svg";
import twitter from "@/public/images/icon-twitter.svg";

export const heroData = {
  title: "adamkeyes",
  heroTitle: "Nice to meet you! I'm ",
  name: "Adam Keyes",
  intro:
    "Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.",
  image: {
    desktop,
    tablet,
    mobile,
    alt: "Profile image of Alex Keyes",
  },
};

export const socialsData = [
  { name: "Github", link: "https://www.github.com", image: github },
  {
    name: "Frontend-Mentor",
    link: "https://www.frontendmentor.io/home",
    image: frontend,
  },
  { name: "Linkedin", link: "https://www.linkedin.com/", image: linkedin },
  { name: "twitter", link: "https://x.com/home", image: twitter },
];

export const btnData = {
  link: "#",
  name: "Contact Me",
};
