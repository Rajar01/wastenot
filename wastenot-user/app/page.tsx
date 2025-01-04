import HeroSection from "@/components/home/HeroSection.tsx";
import AboutUsSection from "@/components/home/AboutUsSection.tsx";
import DonatorsSection from "@/components/home/DonatorsSection.tsx";
import FAQSection from "@/components/home/FAQSection.tsx";
import CausesSection from "@/components/home/CausesSection.tsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <DonatorsSection />
      <FAQSection />
      <CausesSection />
    </>
  );
}
