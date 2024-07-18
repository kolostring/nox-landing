import { Box } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";

export default function Home() {
  return (
    <Box as="main" px="16px" pt="12svh" maxWidth="1248px" mx="auto" textColor="#111827">
      <HeroSection />
      <ServicesSection />
    </Box>
  );
}
