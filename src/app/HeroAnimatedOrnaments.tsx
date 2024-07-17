"use client";
import { Box } from "@chakra-ui/react";

import Ornament1 from "@/assets/ornament1.png";
import Ornament2 from "@/assets/ornament2.png";
import Ornament3 from "@/assets/ornament3.png";
import { motion } from "framer-motion";

export default function HeroAnimatedOrnaments() {
  return (
    <>
      <Box position="absolute" left="34%" top="4.5%" zIndex="-10">
        <motion.img
          alt=""
          src={Ornament1.src}
          style={{ y: 0 }}
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "circInOut" }}
        />
      </Box>
      <Box position="absolute" left="-5%" bottom="4%" zIndex="-10">
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
      </Box>
      <Box position="absolute" right="-6%" bottom="-6%" zIndex="-10">
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
      </Box>
    </>
  );
}
