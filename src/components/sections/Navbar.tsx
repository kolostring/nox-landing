"use client";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { default as NextJsLink } from "next/link";

import NoxLogo from "@/assets/logotipo_nox.svg";
import MenuIcon from "@/assets/menu_icon.svg";
import { useLayoutEffect, useRef } from "react";
import useScroll from "@/hooks/useScroll";

import InstagramIcon from "@/assets/instagram_icon.svg";
import BasketballIcon from "@/assets/basketball_icon.svg";
import TwitterIcon from "@/assets/twitter_icon.svg";
import YoutubeIcon from "@/assets/youtube_icon.svg";

const navLinks = [
  ["Servicios", "/#services-section"],
  ["Pasos", "/#how_do_we_work-section"],
  ["Nuestro Equipo", "/#team-section"],
  ["Trabajos", "/#works-section"],
  ["Comentarios", "/#testimonials-section"],
  ["Contacto", "/#contact-section"],
  ["Blog", "/blog"],
];

const socialNetworks = [
  [InstagramIcon.src, "#"],
  [BasketballIcon.src, "#"],
  [TwitterIcon.src, "#"],
  [YoutubeIcon.src, "#"],
];

const scrollValueTrigger = 100;

export default function Navbar() {
  const { scrollPosition } = useScroll(35, 1000);
  const lastScrollRef = useRef<number>(0);
  const visibilityPercent = useRef<number>(100);

  const responsiveMenuDisclosure = useDisclosure();

  useLayoutEffect(() => {
    const scrollDelta = lastScrollRef.current - scrollPosition;

    if (Math.abs(scrollDelta) > 0.1 && scrollPosition > scrollValueTrigger) {
      visibilityPercent.current = scrollDelta < 0 ? 100 : 0;
    }

    lastScrollRef.current = scrollPosition;
  }, [scrollPosition]);

  return (
    <Box
      as="nav"
      bgGradient="linear-gradient(180deg, rgba(240, 250, 244, 1) 0%, rgba(243, 251, 246, 0.8) 50%, transparent)"
      backdropFilter={
        scrollPosition > scrollValueTrigger * 0.7 ? "auto" : "none"
      }
      backdropBlur="4px"
      position="fixed"
      w="100%"
      zIndex="100"
      transform={scrollPosition > scrollValueTrigger ? "auto" : "none"}
      translateY={`${-visibilityPercent.current}%`}
      transition="transform 300ms ease, background-color 1s ease-out, filter 1s ease-out"
    >
      <Flex alignItems="center" maxWidth="1248px" px="16px" py="24px" mx="auto">
        <Button as={NextJsLink} href="/#hero-section" variant="link" mr="32px">
          <Image alt="Nox logo" src={NoxLogo.src} />
        </Button>

        <Flex
          display={{ base: "none", lg: "flex" }}
          gap="8px"
          fontSize="14px"
          fontWeight="600"
          color="#111827"
        >
          {navLinks.map(([label, href]) => (
            <Link px="8px" as={NextJsLink} href={href} key={label}>
              {label}
            </Link>
          ))}
        </Flex>

        <Button
          as={NextJsLink}
          variant="ghost"
          display={{ base: "none", lg: "flex" }}
          ml="auto"
          borderRadius="100vw"
          py="24px"
          px="24px"
          mr="10px"
          color="#515151"
          href="#"
        >
          Conocer más
        </Button>

        <Button
          as={NextJsLink}
          display={{ base: "none", lg: "flex" }}
          py="24px"
          px="24px"
          position="relative"
          borderRadius="100vw"
          overflow="hidden"
          isolation="isolate"
          bgColor="hsl(148, 90%, 40%)"
          color="white"
          shadow="0px 20px 50px hsl(148, 90%, 0%, 20%)"
          href="#"
          _hover={{
            "&:before": {
              opacity: "1",
              animationPlayState: "running",
            },
            shadow:
              "0px 20px 50px hsl(148, 90%, 0%, 20%), 0px 0px 20px hsl(108, 92%, 67%, 70%)",
          }}
          _active={{
            bgColor: "hsl(108, 82%, 67%)",
          }}
          _before={{
            content: '""',
            position: "absolute",
            h: "100%",
            w: "100%",
            zIndex: "-10",
            opacity: "0",
            bgGradient:
              "Linear(to-r, hsl(108, 72%, 57%,30%) 20%, hsl(108, 72%, 57%) 50%,  hsl(108, 72%, 57%,30%) 90%)",
            bgSize: "600% 100%",
            animation: "bgHorizontalMovement 2s infinite linear",
            transition: "opacity 300ms ease",
            animationPlayState: "paused",
          }}
        >
          Contactar
        </Button>

        <Button
          variant="ghost"
          display={{ base: "block", lg: "none" }}
          aspectRatio="1/1"
          p="6px"
          ml="auto"
          rounded="100%"
          onClick={responsiveMenuDisclosure.onToggle}
        >
          <Image alt="Menu" src={MenuIcon.src} h="100%" />
        </Button>

        <Drawer
          isOpen={responsiveMenuDisclosure.isOpen}
          onClose={responsiveMenuDisclosure.onClose}
          placement="right"
        >
          <DrawerOverlay />
          <DrawerContent bgGradient="Linear(to-t, #FAFAFA, #F6F6F6)">
            <DrawerHeader>
              <DrawerCloseButton />
              <Button as={NextJsLink} href="/#hero-section" variant="link">
                <Image alt="Nox logo" src={NoxLogo.src} />
              </Button>
            </DrawerHeader>
            <DrawerBody>
              <Divider mb="32px" />
              <Stack gap="24px">
                {navLinks.map(([label, href]) => (
                  <Link as={NextJsLink} href={href} key={label} color="#515151">
                    {label}
                  </Link>
                ))}
              </Stack>
              <Divider mt="24px" mb="32px" />

              <Stack>
                <Button
                  as={NextJsLink}
                  variant="outline"
                  borderRadius="100vw"
                  py="24px"
                  px="24px"
                  mt="auto"
                  lineHeight="24px"
                  color="#515151"
                  href="#"
                >
                  Conocer más
                </Button>

                <Button
                  as={NextJsLink}
                  py="24px"
                  px="24px"
                  lineHeight="24px"
                  borderRadius="100vw"
                  isolation="isolate"
                  bgColor="hsl(148, 90%, 40%)"
                  color="white"
                  shadow="0px 20px 50px hsl(148, 90%, 0%, 20%)"
                  href="#"
                  _active={{
                    bgColor: "hsl(108, 82%, 67%)",
                  }}
                  _hover={{
                    bgColor: "hsl(148, 82%, 37%)",
                  }}
                >
                  Contactar
                </Button>
              </Stack>
            </DrawerBody>
            <DrawerFooter>
              <Stack>
                <Flex justifyContent="end" gap="16px">
                  {socialNetworks.map(([imageURL, href]) => (
                    <Button
                      as={NextJsLink}
                      key={imageURL}
                      href={href}
                      aspectRatio="1/1"
                      minW="0px"
                      p="5px"
                      rounded="100%"
                    >
                      <Image h="100%" alt="" src={imageURL} />
                    </Button>
                  ))}
                </Flex>
                <Text color="#676A70">
                  © 2021 Landify UI Kit. All rights reserved
                </Text>
              </Stack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}
