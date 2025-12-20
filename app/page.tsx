import Hero from "@/components/Hero";
import FurnitureSection from "@/components/FurnitureSection";
import ServicesSection from "@/components/ServicesSection";
import StudioSection from "@/components/StudioSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StudioSection />
      <ServicesSection />
      <FurnitureSection />
    </>
  );
}
