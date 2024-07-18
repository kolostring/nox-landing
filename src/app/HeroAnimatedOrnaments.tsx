"use client";
import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import BigLogo from "@/assets/big_logo.svg";

import Ornament1 from "@/assets/ornament1.png";
import Ornament2 from "@/assets/ornament2.png";
import Ornament3 from "@/assets/ornament3.png";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroAnimatedOrnaments() {
  const { scrollY } = useScroll();
  const parallaxForeground = useTransform(() => scrollY.get() * -0.3);
  const parallaxBackground = useTransform(() => scrollY.get() * 0.3);

  return (
    <>
      {/* Big Logo */}
      <Box
        as={motion.div}
        display="flex"
        position="absolute"
        inset={{ base: "0px", lg: "auto" }}
        mb={{ base: "0px", lg: "auto" }}
        pb={{ lg: "10%" }}
        justifyContent="center"
        alignItems="center"
        zIndex="-20"
        style={{ y: parallaxBackground }}
      >
        <Image alt="" src={BigLogo.src} />
      </Box>

      {/* Ornaments */}
      <Box
        as={motion.div}
        visibility={{ base: "visible", lg: "hidden" }}
        position="absolute"
        top="0%"
        left="2%"
        userSelect="none"

        style={{ y: parallaxForeground }}
      >
        <Grid
          p="12px"
          rounded="8px"
          bg="white"
          boxShadow="0px 80px 70px 0px hsl(0,100%,0%, 7%)"
          templateColumns="1fr 1fr"
          justifyItems="center"
          columnGap="4px"
        >
          <GridItem
            fontSize="30px"
            fontWeight="700"
            color="#0AC05E"
            rowSpan={2}
          >
            20+
          </GridItem>
          <GridItem
            fontSize="8px"
            fontWeight="700"
            alignContent="end"
            color="#888888"
          >
            modernas
          </GridItem>
          <GridItem fontSize="10px" fontWeight="700">
            aplicaciones
          </GridItem>
        </Grid>
      </Box>
      <Box
        as={motion.div}
        visibility={{ base: "visible", lg: "hidden" }}
        position="absolute"
        top="4%"
        right="0%"
        userSelect="none"
        style={{ y: parallaxForeground }}
      >
        <Grid
          p="12px"
          rounded="8px"
          bg="white"
          boxShadow="0px 80px 70px 0px hsl(0,100%,0%, 7%)"
          templateColumns="1fr 1fr"
          justifyItems="center"
          columnGap="4px"
        >
          <GridItem
            fontSize="30px"
            fontWeight="700"
            color="#0AC05E"
            rowSpan={2}
          >
            130+
          </GridItem>
          <GridItem
            fontSize="8px"
            fontWeight="700"
            alignContent="end"
            color="#888888"
          >
            proyectos
          </GridItem>
          <GridItem fontSize="10px" fontWeight="700">
            terminados
          </GridItem>
        </Grid>
      </Box>

      <Box
        as={motion.div}
        display={{ base: "none", lg: "flex" }}
        position="absolute"
        left={{ lg: "34%" }}
        top="0%"
        style={{ y: parallaxForeground }}
      >
        <motion.img
          alt="más de 20 aplicaciones modernas"
          src={Ornament1.src}
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "circInOut" }}
        />
      </Box>

      <Box
        as={motion.div}
        display={{ base: "none", lg: "flex" }}
        position="absolute"
        left="-5%"
        bottom={{ base: "-20%", lg: "4%" }}
        style={{ y: parallaxForeground }}
      >
        <motion.img
          alt=""
          src={Ornament2.src}
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "circInOut",
            delay: 1,
          }}
        />
      </Box>
      <Box
        as={motion.div}
        display={{ base: "none", lg: "flex" }}
        position="absolute"
        right="-6%"
        top={{ base: "70%", lg: "36%" }}
        style={{ y: parallaxForeground }}
      >
        <motion.img
          alt="más de 130 proyectos terminados"
          src={Ornament3.src}
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "circInOut",
            delay: 2,
          }}
        />
      </Box>

      {/* Particles */}
      <Box
        as={motion.div}
        position="absolute"
        w="139px"
        h="118px"
        left="1%"
        top={{ base: "0%", lg: "5%" }}
        zIndex="-10"
        style={{
          y: parallaxBackground,
        }}
      >
        <Box
          position="absolute"
          aspectRatio="1/1"
          rounded="full"
          h="10px"
          bg="#413BB7"
          top="0%"
          right="0%"
        />
        <Box
          position="absolute"
          aspectRatio="1/1"
          rounded="full"
          h="10px"
          bg="#0AC05E"
          left="0%"
          bottom="15%"
        />
        <Box
          position="absolute"
          aspectRatio="1/1"
          rounded="full"
          h="15px"
          bg="#DC0511"
          right="12%"
          bottom="0%"
        />
      </Box>

      <Box
        as={motion.div}
        position="absolute"
        w="126px"
        h="197px"
        right="2%"
        top="4%"
        zIndex="-10"
        style={{
          y: parallaxBackground,
        }}
      >
        <Box
          position="absolute"
          aspectRatio="1/1"
          rounded="full"
          h="10px"
          bg="#413BB7"
          top="0%"
          left="45%"
        />
        <Box
          position="absolute"
          aspectRatio="1/1"
          rounded="full"
          h="15px"
          bg="#0AC05E"
          right="0%"
          bottom="0%"
        />
        <Box
          position="absolute"
          aspectRatio="1/1"
          rounded="full"
          h="10px"
          bg="#DC0511"
          left="0%"
          bottom="50%"
        />
      </Box>
    </>
  );
}
