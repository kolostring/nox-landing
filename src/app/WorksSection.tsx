"use client";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const filters = [
  ["webdev", "Web development"],
  ["appdev", "App development"],
  ["webdesign", "Web design"],
  ["illustration", "Illustrations"],
  ["pvc", "Trabajos en PVC"],
];

export default function WorksSection() {
  const [selectedFilter, setSelectedFilter] = useState(filters[0][0]);

  return (
    <Box as="section" aria-labelledby="works-title" py="96px">
      <Heading
        as="h2"
        id="works-title"
        fontSize={{ base: "36px", lg: "50px" }}
        fontWeight="700"
        lineHeight={{ lg: "60px" }}
        letterSpacing="-2.5%"
        textAlign="center"
      >
        Selección de trabajos
      </Heading>

      <Text mt="8px" mx="auto" fontSize="18px" textAlign="center" maxW="70ch">
        Estos son algunos trabajos que hemos trabajado
      </Text>

      <Flex mt="25px" wrap="wrap" gap="10px">
        {filters.map(([key, label]) => (
          <Button
            key={key}
            py="24px"
            px="24px"
            lineHeight="24px"
            borderRadius="100vw"
            _hover={selectedFilter === key ? {} : undefined}
            bgColor={
              selectedFilter === key ? "hsl(148, 90%, 40%)" : "transparent"
            }
            color={selectedFilter === key ? "white" : "#515151"}
            shadow={
              selectedFilter === key
                ? "0px 20px 50px hsl(148, 90%, 0%, 20%)"
                : "none"
            }
            onClick={()=>setSelectedFilter(key)}
          >
            {label}
          </Button>
        ))}
      </Flex>

      <Grid mt="25px" gridGap="1rem" templateColumns="repeat(auto-fit, minmax(min(100%, 230px), 1fr))">
        {[... new Array(12)].map((val, index)=>(<GridItem bg={index%2?"hsl(88, 90%, 40%)":"hsl(148, 90%, 40%)"} h="230px" w="full" key={index}></GridItem>))}
      </Grid>
    </Box>
  );
}
