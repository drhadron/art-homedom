import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import StudioSection from "@/components/StudioSection";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <StudioSection />
      <ServicesSection />
    </div>
  );
}
