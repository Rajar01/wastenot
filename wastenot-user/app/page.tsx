import HeroSection from "@/components/organisms/home/HeroSection.tsx";
import AboutUsSection from "@/components/organisms/home/AboutUsSection.tsx";
import DonatorsSection from "@/components/organisms/home/DonatorsSection.tsx";
import FAQSection from "@/components/home/FAQSection.tsx";
import CausesSection from "@/components/home/CausesSection.tsx";

export default function Root() {
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
