import {
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import MapImage from "@/assets/map.png";

import GPSIcon from "@/assets/icon_gps.svg";
import PhoneIcon from "@/assets/icon_phone.svg";
import MailIcon from "@/assets/icon_mail.svg";

const contacts = [
  [GPSIcon.src, "Estamos en", "Calle O e/ Lindero y Ocujes Casino Deportivo"],
  [PhoneIcon.src, "Llámenos A", "+53 5847 73 11"],
  [MailIcon.src, "Escríbanos A", "service@noxcreation.dev"],
];

export default function ContactSection() {
  return (
    <Grid
      as="section"
      aria-labelledby="contacts-title"
      templateColumns={{ lg: "1fr 1fr" }}
      templateRows={{ base: "1fr 3fr", lg: undefined }}
    >
      <GridItem position="relative">
        <Image
          alt=""
          src={MapImage.src}
          position="absolute"
          h="full"
          w="full"
          objectFit="cover"
        />
      </GridItem>
      <GridItem as={Stack} alignItems="start" px="50px" py="20px">
        <Heading
          as="h2"
          id="contacts-title"
          mt="20px"
          fontSize={{ base: "36px", lg: "50px" }}
          fontWeight="700"
          lineHeight={{ lg: "60px" }}
          letterSpacing="-2.5%"
          textAlign="center"
        >
          Contacto
        </Heading>
        <Text as="p" mt="8px" fontSize="18px">
          Escriba los siguientes datos con la infromación que nos quiera hacer
          llegar.
        </Text>

        <Stack as="form" w="full" action="/">
          <Grid mt="40px" w="full" templateColumns="1fr 1fr" gap="20px">
            <GridItem
              as={Input}
              placeholder="Nombre"
              colSpan={{ base: 2, lg: undefined }}
            />
            <GridItem
              as={Input}
              placeholder="Apellidos"
              colSpan={{ base: 2, lg: undefined }}
            />
            <GridItem as={Input} placeholder="Correo" colSpan={2} />
            <GridItem as={Input} placeholder="Teléfono" colSpan={2} />
            <GridItem
              as={Textarea}
              placeholder="Escriba un breve texto"
              resize="none"
              colSpan={2}
            />
          </Grid>

          <Button
            type="submit"
            py="24px"
            px="24px"
            mt="20px"
            ml="auto"
            w={{base: "full", lg:"fit-content"}}
            lineHeight="24px"
            borderRadius="100vw"
            _hover={{
              bgColor: "hsl(108, 72%, 57%)",
            }}
            _active={{
              bgColor: "hsl(108, 72%, 57%)",
            }}
            bgColor="hsl(148, 90%, 40%)"
            color="white"
            shadow="0px 10px 50px hsl(148, 90%, 0%, 20%)"
          >
            Enviar
          </Button>
        </Stack>

        <Grid
          templateColumns={{lg:"1fr 1fr 1fr"}}
          alignItems="center"
          justifyItems={{lg:"center"}}
          gap="10px"
          mt="20px"
        >
          {contacts.map(([image, label, value]) => (
            <GridItem
              key={value}
              as={Grid}
              templateColumns="auto 1fr"
              gap="2px"
              h="fit-content"
            >
              <GridItem as={Image} alt="" src={image} alignSelf="center" rowSpan={2} w="44px" />
              <GridItem
                as="h3"
                color="#0AC05E"
                fontSize="15px"
                fontWeight="500"
              >
                {label}
              </GridItem>
              <GridItem color="#3F3F3F" fontSize="12px">
                {value}
              </GridItem>
            </GridItem>
          ))}
        </Grid>
      </GridItem>
    </Grid>
  );
}
