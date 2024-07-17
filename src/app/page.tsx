import { Box } from "@chakra-ui/react";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <Box as="main" px="16px" pt="12svh" maxWidth="1248px" mx="auto">
      <HeroSection />
    </Box>
  );
}
