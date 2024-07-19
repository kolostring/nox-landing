import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { default as NextJsLink } from "next/link";

import Agent1 from "@/assets/agent_1.png";
import Agent2 from "@/assets/agent_2.png";

export default function HowDoWeWorkSection() {
  return (
    <Box
      as="section"
      aria-labelledby="how_do_we_work-title"
      maxWidth="1248px"
      py="96px"
      px="16px"
      mx="auto"
    >
      <Heading
        as="h2"
        id="how_do_we_work-title"
        fontSize={{ base: "36px", lg: "50px" }}
        fontWeight="700"
        lineHeight={{ lg: "60px" }}
        letterSpacing="-2.5%"
        textAlign="center"
      >
        ¿Cómo trabajamos?
      </Heading>
      <Text
        as="p"
        mt="8px"
        mx="auto"
        fontSize="18px"
        textAlign="center"
        maxW="70ch"
      >
        Le ayudamos a desarrollar cualquier tipo de solución. Debe seguir los
        siguientes pasos para podernos comunicar y conocer sus necesidades.
      </Text>

      <Grid
        templateColumns="repeat(2, minmax(0, 1fr))"
        rowGap={{ base: "56px", lg: "0px" }}
        mt={{ base: "56px", lg: "0px" }}
      >
        <GridItem>
          <Image alt="Paso 1" src={Agent1.src} />
        </GridItem>
        <GridItem alignContent="center">
          <Heading
            as="h3"
            fontSize={{ base: "30px", lg: "40px" }}
            fontWeight="500"
            lineHeight={{ base: "30px", lg: "60px" }}
            letterSpacing="-2.5%"
          >
            Contáctenos
          </Heading>
          <Text mt="15px">
            Lo primero que necesita hacer es contactarnos para poder planificar
            una reunión y poder conocer sus proyecciones y la magnitud de sus
            necesidades
          </Text>

          <Button
            as={NextJsLink}
            py="24px"
            px="24px"
            mt="15px"
            w={{ base: "full", lg: "fit-content" }}
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
        </GridItem>
        <GridItem colStart={{ lg: 2 }}>
          <Image alt="Paso 2" src={Agent2.src} />
        </GridItem>
        <GridItem rowStart={{ lg: 2 }} alignContent="center">
          <Heading
            as="h3"
            fontSize={{ base: "30px", lg: "40px" }}
            fontWeight="500"
            lineHeight={{ base: "30px", lg: "60px" }}
            letterSpacing="-2.5%"
          >
            Obtener Propuesta
          </Heading>
          <Text mt="15px">
            Teniendo una idea de su proyecto, procedemos a crearle una propuesta
            que incluyen requisitos que debe cumplir el sistema y una estimación
            de tiempo y costo
          </Text>

          <Button
            as={NextJsLink}
            py="24px"
            px="24px"
            mt="15px"
            w={{ base: "full", lg: "fit-content" }}
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
            Conocer más
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
}
