import { Box } from "@chakra-ui/react";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import HowDoWeWorkSection from "../components/sections/HowDoWeWorkSection";
import TeamSection from "../components/sections/TeamSection";
import WorksSection from "../components/sections/WorksSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <Box as="main" pt="12svh" textColor="#111827">
      <HeroSection />
      <ServicesSection />
      <HowDoWeWorkSection />
      <TeamSection />
      <WorksSection />
      <TestimonialsSection />
      <ContactSection />
    </Box>
  );
}
