"use client";
import { Image, Stack, Text } from "@chakra-ui/react";

import Service1 from "@/assets/service_icon_1.svg";
import Service2 from "@/assets/service_icon_2.svg";
import Service3 from "@/assets/service_icon_3.svg";
import Service4 from "@/assets/service_icon_4.svg";
import Service5 from "@/assets/service_icon_5.svg";
import Service6 from "@/assets/service_icon_6.svg";
import { motion } from "framer-motion";

const services = [
  [
    "Gestión",
    "Desarrollo de software de gestión de la información de tu negocio",
    Service1,
  ],
  [
    "Landing Page",
    "Desarrollo de tu página principal de tu negocio de cara a internet ",
    Service2,
  ],
  [
    "Móviles",
    "Desarrollo de aplicaciones móviles Android modernas y rápidas",
    Service3,
  ],
  [
    "Descentralización",
    "Desarrollamos aplicaciones descentralizadas de cara a la Blockchain con web3",
    Service4,
  ],
  [
    "Ilustración",
    "Ilustramos todas tus ideas, realizamos carteles, personajes 2D y mucho más",
    Service5,
  ],
  [
    "Carteles",
    "Desarrollamos todo tipo de carteles en PVC como tablas de menú entre otros",
    Service6,
  ],
];

export default function ServicesSection() {
  return (
    <Stack as="section" aria-labelledby="services-title" h="100svh" justifyContent="center">
      <Text
        as="h2"
        id="services-title"
        fontSize="48px"
        fontWeight="700"
        lineHeight="60px"
        letterSpacing="-2.5%"
        textAlign="center"
      >
        Servicios a la medida
      </Text>
      <Text as="p" mt="8px" fontSize="18px" textAlign="center">
        Te adelantamos algunos de nuestros servicios que podemos ofrecerte
      </Text>

      <motion.div
        style={{
          display: "grid",
          marginTop: "64px",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "30px 64px",
        }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
        initial="hidden"
        whileInView="show"
      >
        {services.map(([title, description, image], index) => (
          <motion.article
            key={title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <Image alt="" src={image.src} mx="auto" />
            <Text
              as="h3"
              mt="24px"
              fontSize="30px"
              fontWeight="700"
              textAlign="center"
            >
              {title}
            </Text>
            <Text as="p" mt="8px" textAlign="center">
              {description}
            </Text>
          </motion.article>
        ))}
      </motion.div>
    </Stack>
  );
}
