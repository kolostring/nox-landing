"use client";
import { Box, Flex, Image } from "@chakra-ui/react";
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
        position="absolute"
        left="34%"
        top="4.5%"
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
        position="absolute"
        left="-5%"
        bottom="4%"
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
        position="absolute"
        right="-6%"
        bottom="-6%"
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
        top="5%"
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
