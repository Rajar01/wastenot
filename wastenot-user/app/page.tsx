import HeroSection from "@/components/organisms/home/HeroSection.tsx";
import AboutUsSection from "@/components/organisms/home/AboutUsSection.tsx";
import DonatorsSection from "@/components/organisms/home/DonatorsSection.tsx";
import FAQSection from "@/components/organisms/home/FAQSection.tsx";
import CausesSection from "@/components/organisms/home/CausesSection.tsx";

export function generateMetadata({}: Props): Promise<Metadata> {
  return {
    title: "WasteNot - Home",
  };
}

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
