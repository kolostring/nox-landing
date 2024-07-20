import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

import { default as NextJsLink } from "next/link";
import NoxLogo from "@/assets/logotipo_nox.svg";

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

export default function Footer() {
  return (
    <Box as="footer" bgGradient="Linear(to-t, #FAFAFA, #F6F6F6)">
      <Grid
        maxWidth="1248px"
        pt="64px"
        px="16px"
        pb="16px"
        mx="auto"
        templateColumns="1fr 2fr"
        gap="36px"
      >
        <GridItem as={NextJsLink} href="/#hero-section">
          <Image alt="ir a home" src={NoxLogo.src} />
        </GridItem>
        <GridItem
          as={Flex}
          colStart={{ base: 1, lg: 2 }}
          colSpan={{ base: 2, lg: 1 }}
          justifySelf={{ base: "center", lg: "end" }}
          justifyContent={{base: "center", lg: "start"}}
          gap="12px"
          flexWrap="wrap"
        >
          {navLinks.map(([label, href]) => (
            <Link as={NextJsLink} href={href} key={label} color="#757575">
              {label}
            </Link>
          ))}
        </GridItem>
        <GridItem
          as={Text}
          color="#676A70"
          fontSize="14px"
          colSpan={{ base: 2, lg: 1 }}
          textAlign={{ base: "center", lg: "start" }}
        >
          © 2021 Landify UI Kit. All rights reserved
        </GridItem>
        <GridItem
          as={Flex}
          justifyContent="end"
          gap="16px"
          rowStart={{ base: 1, lg: 2 }}
          colStart={2}
        >
          {socialNetworks.map(([imageURL, href]) => (
            <Button
              as={NextJsLink}
              key={imageURL}
              href={href}
              h="24px"
              aspectRatio="1/1"
              minW="0px"
              p="5px"
              rounded="100%"
            >
              <Image h="100%" alt="" src={imageURL} />
            </Button>
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
}
