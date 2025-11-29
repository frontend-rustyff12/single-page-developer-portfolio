import Hero from "@/components/Hero/Hero";
import { heroData, socialsData, btnData } from "@/content/hero";
export default function Home() {
  return (
    <>
      <Hero {...heroData} socials={socialsData} btn={btnData} />
    </>
  );
}
