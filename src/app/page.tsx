import { Box } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import HowDoWeWorkSection from "./HowDoWeWorkSection";
import TeamSection from "./TeamSection";
import WorksSection from "./WorksSection";
import TestimonialsSection from "./TestimonialsSection";

export default function Home() {
  return (
    <Box as="main" pt="12svh" textColor="#111827">
      <HeroSection />
      <ServicesSection />
      <HowDoWeWorkSection />
      <TeamSection />
      <WorksSection />
      <TestimonialsSection />
    </Box>
  );
}
