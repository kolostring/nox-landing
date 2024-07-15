"use client";
import { Button, Flex, Image, Link } from "@chakra-ui/react";
import { default as NextJsLink } from "next/link";

import NoxLogo from "@/assets/logotipo_nox.svg";

const navLinks = [
  ["Servicios", "#"],
  ["Pasos", "#"],
  ["Nuestro Equipo", "#"],
  ["Trabajos", "#"],
  ["Comentarios", "#"],
  ["Contacto", "#"],
  ["Blog", "#"],
];

export default function Navbar() {
  return (
    <Flex
      as="nav"
      alignItems="center"
      maxWidth="1232px"
      px="8px"
      py="24px"
      mx="auto"
    >
      <Image mr="32px" alt="Nox logo" src={NoxLogo.src} />

      <Flex gap="8px" fontSize="14px" fontWeight="600" color="#111827">
        {navLinks.map(([label, href]) => (
          <Link px="8px" as={NextJsLink} href={href} key={label}>
            {label}
          </Link>
        ))}
      </Flex>

      <Button
        as={NextJsLink}
        ml="auto"
        borderRadius="100vw"
        py="24px"
        px="24px"
        mr="10px"
        lineHeight="24px"
        variant="ghost"
        color="#515151"
        href=""
      >
        Conocer más
      </Button>
      
      <Button
        as={NextJsLink}
        py="24px"
        px="24px"
        position="relative"
        lineHeight="24px"
        borderRadius="100vw"
        overflow="hidden"
        isolation="isolate"
        bgColor="hsl(148, 90%, 40%)"
        color="white"
        shadow="0px 20px 50px hsl(148, 90%, 0%, 20%)"
        href=""
        _hover={{
          "&:before": {
            opacity: "1",
            animationPlayState: "running",
          },
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
    </Flex>
  );
}
