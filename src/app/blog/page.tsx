import AllPostsSection from "@/components/sections/AllPostsSection";
import FeaturedPostsSection from "@/components/sections/FeaturedPostsSection";
import { Box } from "@chakra-ui/react";

export default function BlogPage(){
  return <Box as="main" pt="118px">
    <FeaturedPostsSection />
    <AllPostsSection />
  </Box>
}