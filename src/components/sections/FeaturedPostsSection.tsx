"use client";
import getFeaturedPosts from "@/test/mocks/get-featured-posts.mock";
import { PostInfo } from "@/types/postInfo";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Skeleton,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import PostPreview from "../PostPreview";

export default function FeaturedPostsSection() {
  const [isLargeScreen] = useMediaQuery("(min-width: 992px)", {
    ssr: true,
    fallback: true,
  });

  const [data, setData] = useState<PostInfo[]>([]);
  const isLoading = useRef(true);

  useEffect(() => {
    getFeaturedPosts().then((posts) => {
      isLoading.current = false;
      setData(posts);
    });
  }, []);

  return (
    <Box
      as="section"
      aria-labelledby="featured_posts-title"
      py="50px"
      px="16px"
      mx="auto"
      maxW="1248px"
    >
      <Heading
        as="h2"
        id="featured_posts-title"
        fontSize="24px"
        fontWeight="600"
        lineHeight="32px"
      >
        Post destacados
      </Heading>

      <Grid
        pt="32px"
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap="32px"
      >
        <GridItem rowSpan={{ lg: 2 }}>
          <PostPreview post={data[0]} isLoading={isLoading.current} />
        </GridItem>
        <GridItem>
          <PostPreview
            post={data[1]}
            isHorizontal={isLargeScreen}
            isLoading={isLoading.current}
          />
        </GridItem>
        <GridItem minH={{ base: "434px", lg: "180px" }}>
          <PostPreview
            post={data[2]}
            isHorizontal={isLargeScreen}
            isLoading={isLoading.current}
          />
        </GridItem>
      </Grid>
    </Box>
  );
}
