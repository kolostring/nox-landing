import { Box } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import HowDoWeWorkSection from "./HowDoWeWorkSection";
import TeamSection from "./TeamSection";
import WorksSection from "./WorksSection";

export default function Home() {
  return (
    <Box as="main" px="16px" pt="12svh" maxWidth="1248px" mx="auto" textColor="#111827">
      <HeroSection />
      <ServicesSection />
      <HowDoWeWorkSection />
      <TeamSection />
      <WorksSection />
    </Box>
  );
}
