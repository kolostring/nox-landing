"use client";
import { Box, Image } from "@chakra-ui/react";
import BigLogo from "@/assets/big_logo.svg";

import Ornament1 from "@/assets/ornament1.png";
import Ornament2 from "@/assets/ornament2.png";
import Ornament3 from "@/assets/ornament3.png";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroAnimatedOrnaments() {
  const { scrollY } = useScroll();
  const parallaxYLevel1 = useTransform(() => scrollY.get() * 0.2);
  const parallaxYLevel2 = useTransform(() => scrollY.get() * 0.35);

  return (
    <>
      <Box
        position="absolute"
        inset={{ base: "0px", lg: "auto" }}
        m="auto"
        mb={{ base: "0px", lg: "auto" }}
        pb={{ lg: "10%" }}
        zIndex="-20"
      >
        <motion.div style={{ y: parallaxYLevel2 }}>
          <Image alt="" src={BigLogo.src} />
        </motion.div>
      </Box>
      <Box position="absolute" left="34%" top="4.5%" zIndex="-10">
        <motion.div style={{ y: parallaxYLevel1 }}>
          <motion.img
            alt="20"
            src={Ornament1.src}
            style={{ y: 0 }}
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "circInOut" }}
          />
        </motion.div>
      </Box>
      <Box position="absolute" left="-5%" bottom="4%" zIndex="-10">
        <motion.div style={{ y: parallaxYLevel1 }}>
          <motion.img
            alt=""
            src={Ornament2.src}
            style={{ y: 0 }}
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
        <motion.div style={{ y: parallaxYLevel1 }}>
          <motion.img
            alt=""
            src={Ornament3.src}
            style={{ y: 0 }}
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
