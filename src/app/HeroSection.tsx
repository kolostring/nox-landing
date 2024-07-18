import { Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { default as NextJsLink } from "next/link";
import HeroAnimatedOrnaments from "./HeroAnimatedOrnaments";

export default function HeroSection() {
  return (
    <Stack
      as="section"
      id="hero-section"
      aria-labelledby="hero-title"
      position="relative"
      width="full"
      height={{lg: "88svh" }}
      maxHeight="667px"
      pt={{ base: "120px", lg: "0px" }}
      alignItems={{ lg: "center" }}
      justifyContent={{ lg: "center" }}
      isolation="isolate"
    >
      <Text
        as="h1"
        id="hero-title"
        fontSize={{ base: "36px", lg: "50px" }}
        fontWeight="700"
        lineHeight={{ base: "36px", lg: "50px" }}
        letterSpacing="-2.5%"
        maxWidth="30ch"
        textAlign="center"
      >
        ¿Quieres automatizar tu negocio y no sabes a quién acudir?
      </Text>
      <Text
        as="p"
        fontSize="18px"
        lineHeight="28px"
        maxWidth="89ch"
        textAlign="center"
        mt="16px"
      >
        Somos la solución a tus necesidades. Tenemos las habilidades, el
        compromiso y la creatividad para llevar tus idea y tu negocio a otro
        nivel ofertándote la posibilidad de crear un sistema que se adapte a tus
        necesidades. <br /> Con Nox no existen barreras contáctenos para poderle
        ayudar.
      </Text>
      <Flex
        mt={{ base: "64px", lg: "32px" }}
        mb={{ base: "90px", lg: "0px" }}
        mx="auto"
      >
        <Button
          as={NextJsLink}
          py="24px"
          px="24px"
          mr="16px"
          position="relative"
          lineHeight="24px"
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
          as={NextJsLink}
          position="relative"
          borderRadius="100vw"
          bg="none"
          py="24px"
          px="24px"
          lineHeight="24px"
          color="#515151"
          overflow="hidden"
          href="#"
          _hover={{}}
          _before={{
            content: '""',
            position: "absolute",
            h: "500%",
            w: "500%",
            zIndex: "-10",
            bgGradient:
              "Conic(from 45deg, hsl(148, 90%, 40%), hsl(78, 100%, 57%), hsl(148, 90%, 40%))",
            animation: "rotate 3s linear infinite",
          }}
          _after={{
            content: '""',
            position: "absolute",
            boxSizing: "border",
            inset: "1.5px",
            rounded: "1000px",
            zIndex: "-5",
            bg: "white",
            transition: "background-color 300ms ease",
          }}
        >
          Conocer más
        </Button>
      </Flex>

      <HeroAnimatedOrnaments />
    </Stack>
  );
}
