"use client";
import getAllPosts from "@/test/mocks/get-posts.mock";
import { PostInfo } from "@/types/postInfo";
import { Box, Grid, Heading, Skeleton, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import VerticalPost from "../VerticalPost";
import HorizontalPost from "../HorizontalPost";
import Pagination from "../Pagination";

export default function AllPostsSection() {
  const [isLargeScreen] = useMediaQuery("(min-width: 992px)", {
    ssr: true,
    fallback: false,
  });

  const [data, setData] = useState<PostInfo[]>([...Array(9)]);
  const isLoading = useRef(true);

  useEffect(() => {
    getAllPosts().then((posts) => {
      isLoading.current = false;
      setData(posts);
    });
  }, []);

  return (
    <Box
      as="section"
      aria-labelledby="posts-title"
      py="50px"
      px="16px"
      mx="auto"
      maxW="1248px"
    >
      <Heading
        as="h2"
        id="posts-title"
        fontSize="24px"
        fontWeight="600"
        lineHeight="32px"
      >
        Todos los posts
      </Heading>
      <Grid
        as="section"
        mt="32px"
        gap="30px"
        templateColumns={{
          base: "1fr",
          lg: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
        }}
      >
        {data.map((post) => (
          <Skeleton
            key=""
            minH={{ base: "180px", lg: "434px" }}
            isLoaded={!isLoading.current}
          >
            {isLargeScreen ? (
              <VerticalPost post={post} />
            ) : (
              <HorizontalPost post={post} />
            )}
          </Skeleton>
        ))}
      </Grid>

      <Pagination
        currentPage={0}
        maxCount={3}
        onPaginationChange={(pagination) => console.log(pagination)}
      />
    </Box>
  );
}
