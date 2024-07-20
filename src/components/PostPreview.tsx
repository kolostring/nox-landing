import { PostInfo } from "@/types/postInfo";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

import DiagonalArrow from "@/assets/diagonal_arrow.svg";

export type VerticalPostProps = {
  post: PostInfo | undefined;
  isHorizontal?: boolean | undefined;
};

export default function PostPreview({ post, isHorizontal }: VerticalPostProps) {
  if (post === undefined) {
    return <>Unknown Post</>;
  }

  return (
    <Link href={`/blog/${post.id}`}>
      <Grid
        as="article"
        templateColumns={
          isHorizontal ? { base: "1fr 2fr", lg: "19fr 17fr" } : undefined
        }
        templateRows={isHorizontal ? undefined : "19fr 17fr"}
        gap="0px 0px"
      >
        <GridItem position="relative" overflow="hidden">
          <Image
            position="absolute"
            objectFit="cover"
            bg="#F1F1F1"
            h="full"
            w="full"
            alt=""
            src={post.image}
          />
        </GridItem>
        <GridItem
          pt={isHorizontal ? undefined : "32px"}
          pl={isHorizontal ? "24px" : undefined}
        >
          <Text
            fontSize="14px"
            fontWeight="600"
            color="#526D64"
          >{`${post.author} • ${post.date}`}</Text>

          <Flex>
            <Heading
              as="h3"
              mt="12px"
              fontSize={isHorizontal ? "18px" : "24px"}
              fontWeight="600"
              lineHeight={isHorizontal ? "28px" : "32px"}
            >
              {post.title}
            </Heading>
            <Image
              alt=""
              hidden={isHorizontal}
              src={DiagonalArrow.src}
              ml="auto"
            />
          </Flex>

          <Text
            noOfLines={isHorizontal ? { base: 2, lg: 3 } : 2}
            mt={isHorizontal ? "8px" : "12px"}
            fontSize="16px"
            lineHeight="24px"
            color="#7B7B7B"
          >
            {post.abstract}
          </Text>

          <Flex mt="24px" gap="8px" flexWrap="wrap">
            {post.tags.map((tag) => (
              <Tag key={tag} rounded="full" bg="#0AC05E1A" color="#0AC05E">
                {tag}
              </Tag>
            ))}
          </Flex>
        </GridItem>
      </Grid>
    </Link>
  );
}
