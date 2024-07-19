"use client";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

import Quote from "@/assets/quote.svg";
import LeftArrow from "@/assets/left_arrow.svg";
import RightArrow from "@/assets/right_arrow.svg";

const testimonials = [
  "Estamos muy satisfechos con el trabajo realizado por el equipo de nox. Desde un inicio se evidencia un equipo muy profesional y comprometidos con lo que hacen.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti voluptatem et aliquam? Similique repudiandae aliquid deserunt modi repellat numquam inventore asperiores porro, consequuntur, vitae qui ipsa tempore, possimus dolore! Sunt beatae consectetur, reprehenderit hic ipsa commodi vel quas ipsum quod quae inventore! Voluptatem vero ea hic enim alias quaerat!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minus, molestiae quam amet voluptas illo doloribus blanditiis architecto velit sapiente enim ipsam consequatur consectetur! Sit porro aliquid quod reprehenderit autem.",
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <Box
      as="section"
      aria-labelledby="testimonials-title"
      py={{ base: "46px", lg: "96px" }}
      minH={{ lg: "100svh" }}
      bg="#F8F8F8"
    >
      <Heading
        as="h2"
        id="testimonials-title"
        fontSize={{ base: "36px", lg: "50px" }}
        fontWeight="700"
        lineHeight={{ lg: "60px" }}
        letterSpacing="-2.5%"
        textAlign="center"
      >
        Nuestros Clientes Hablan
      </Heading>

      <Text mt="8px" mx="auto" fontSize="18px" textAlign="center" maxW="70ch">
        Hemos pedido a alguno de nuestros clientes que emitan su valoración y
        estos son sus comentarios
      </Text>

      <Flex
        alignItems="center"
        gap="10px"
        maxWidth="1248px"
        px="16px"
        mx="auto"
      >
        <Button
          h="56px"
          aspectRatio="1/1"
          rounded="full"
          variant="outline"
          flexShrink={0}
          onClick={() =>
            setCurrentTestimonial(
              currentTestimonial === 0
                ? testimonials.length - 1
                : currentTestimonial - 1
            )
          }
        >
          <Image alt="testimonio anterior" src={LeftArrow.src} />
        </Button>

        <Box
          position="relative"
          maxW="1000px"
          w="full"
          mx="auto"
          pt="40px"
          overflow="hidden"
          isolation="isolate"
        >
          <Box
            position="absolute"
            zIndex="10"
            w="full"
            h="300%"
            inset="0px"
            shadow={{lg: "inset 0px 0px 40px 40px #F8F8F8"}}
            m="auto"
          />
          <Flex
            w="full"
            transform="auto"
            translateX={-currentTestimonial * 100 + "%"}
            transition="transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1)"
          >
            {testimonials.map((testimonial) => (
              <Stack
                key={testimonial}
                w="full"
                h="full"
                flexShrink={0}
                position="relative"
              >
                <Image alt="" src={Quote.src} top="0px" mx="auto" />
                <Text
                  py="46px"
                  maxW="800px"
                  mx="auto"
                  fontSize={{ base: "14px", lg: "24px" }}
                  fontWeight="500"
                  textAlign="center"
                >
                  {testimonial}
                </Text>
              </Stack>
            ))}
          </Flex>

          <Flex w="full" justifyContent="center" gap="8px">
            {testimonials.map((testimonial, index) => (
              <Box
                key={testimonial}
                h="2px"
                w="32px"
                bg={index === currentTestimonial ? "#C4C4C4" : "#E5E7EB"}
                transition="background-color 300ms cubic-bezier(0.075, 0.82, 0.165, 1)"
              />
            ))}
          </Flex>
        </Box>

        <Button
          h="56px"
          aspectRatio="1/1"
          rounded="full"
          variant="outline"
          flexShrink={0}
          onClick={() =>
            setCurrentTestimonial(
              currentTestimonial === testimonials.length - 1
                ? 0
                : currentTestimonial + 1
            )
          }
        >
          <Image alt="siguiente testimonio" src={RightArrow.src} />
        </Button>
      </Flex>
    </Box>
  );
}
