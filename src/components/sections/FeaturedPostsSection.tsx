"use client";
import getFeaturedPosts from "@/test/mocks/get-featured-posts.mock";
import { PostInfo } from "@/types/postInfo";
import { Box, Grid, GridItem, Heading, Skeleton } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import VerticalPost from "../VerticalPost";
import HorizontalPost from "../HorizontalPost";

export default function FeaturedPostsSection() {
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
        minH="434px"
        templateColumns="1fr 1fr"
        templateRows="1fr 1fr"
        gap="32px"
      >
        <GridItem as={Skeleton} rowSpan={2} isLoaded={!isLoading.current}>
          <VerticalPost post={data[0]} />
        </GridItem>
        <GridItem as={Skeleton} isLoaded={!isLoading.current}>
          <HorizontalPost post={data[1]} />
        </GridItem>
        <GridItem as={Skeleton} isLoaded={!isLoading.current}>
          <HorizontalPost post={data[2]} />
        </GridItem>
      </Grid>
    </Box>
  );
}
