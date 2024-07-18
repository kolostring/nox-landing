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
  const parallaxBackground = useTransform(() => scrollY.get() * 0.2);

  return (
    <>
      <Flex
        position="absolute"
        inset={{ base: "0px", lg: "auto" }}
        mb={{ base: "0px", lg: "auto" }}
        pb={{ lg: "10%" }}
        justifyContent="center"
        alignItems="center"
        zIndex="-20"
      >
        <motion.div style={{ y: parallaxBackground }}>
          <Image alt="" src={BigLogo.src} />
        </motion.div>
      </Flex>
      <Box position="absolute" left="34%" top="4.5%" zIndex="-10">
        <motion.div style={{ y: parallaxForeground }}>
          <motion.img
            alt="más de 20 aplicaciones modernas"
            src={Ornament1.src}
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "circInOut" }}
          />
        </motion.div>
      </Box>
      <Box position="absolute" left="-5%" bottom="4%" zIndex="-10">
        <motion.div style={{ y: parallaxForeground }}>
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
        </motion.div>
      </Box>
      <Box position="absolute" right="-6%" bottom="-6%" zIndex="-10">
        <motion.div style={{ y: parallaxForeground }}>
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
        </motion.div>
      </Box>
    </>
  );
}
