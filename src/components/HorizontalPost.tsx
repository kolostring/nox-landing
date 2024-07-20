import { PostInfo } from "@/types/postInfo";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { default as NextJSLink } from "next/link";

import DiagonalArrow from "@/assets/diagonal_arrow.svg";

export type HorizontalPostProps = {
  post: PostInfo | undefined;
};

export default function HorizontalPost({ post }: HorizontalPostProps) {
  if (post === undefined) {
    return <>Unknown Post</>;
  }

  return (
    <NextJSLink href={`/blog/${post.id}`}>
      <Grid
        as="article"
        templateColumns={{base: "1fr 2fr", lg: "19fr 17fr"}}
        gap="0px 0px"
        justifyContent="start"
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
        <GridItem pl="24px">
          <Text
            fontSize="14px"
            fontWeight="600"
            color="#526D64"
          >{`${post.author} • ${post.date}`}</Text>

          <Heading
            as="h3"
            mt="12px"
            fontSize="18px"
            fontWeight="600"
            lineHeight="28px"
          >
            {post.title}
          </Heading>

          <Text
            noOfLines={{base: 2, lg: 3}}
            mt="8px"
            fontSize="16px"
            lineHeight="24px"
            color="#7B7B7B"
          >
            {post.abstract}
          </Text>

          <Flex mt="24px" gap="8px">
            {post.tags.map((tag) => (
              <Tag key={tag} rounded="full" bg="#0AC05E1A" color="#0AC05E">
                {tag}
              </Tag>
            ))}
          </Flex>
        </GridItem>
      </Grid>
    </NextJSLink>
  );
}
