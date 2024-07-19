import {
  Avatar,
  Box,
  Heading,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import TeamMember1 from "@/assets/team_member_1.png";
import TeamMember2 from "@/assets/team_member_2.png";
import TeamMember3 from "@/assets/team_member_3.png";
import TeamMember4 from "@/assets/team_member_4.png";
import TeamMember5 from "@/assets/team_member_5.png";
import TeamMember6 from "@/assets/team_member_6.png";

const team = [
  ["Josué Carballo", TeamMember1.src, "Ing.", "Desarrollador"],
  ["Bertha Andrianis", TeamMember2.src, "Lic.", "Diseñadora / Ilustradora"],
  ["Lázaro Jesús", TeamMember3.src, "Ing.", "Desarrollador"],
  ["Leonardo Fabián", TeamMember4.src, "Ing.", "Desarrollador"],
  ["Claudia Rizo", TeamMember5.src, "Ing.", "Community Manager"],
  ["Mary Isabel", TeamMember6.src, "Lic.", "Creativity Manager"],
];

export default function TeamSection() {
  return (
    <Box as="section" aria-labelledby="team-title" py="96px" >
      <Heading
        as="h2"
        id="team-title"
        fontSize={{ base: "36px", lg: "50px" }}
        fontWeight="700"
        lineHeight={{ lg: "60px" }}
        letterSpacing="-2.5%"
        textAlign="center"
      >
        El equipo creativo detrás de la puerta
      </Heading>

      <Wrap justify="center" pt="50px">
        {team.map(([name, image, title, role]) => (
          <WrapItem as={Stack} key={name} mt="50px" alignItems="center" gap="0px" w={{base: "150px", lg: "250px"}}>
            <Avatar name={name} src={image} h="100px" w="100px" />
            <Heading as="h3" mt="10px" maxW={{base: "13ch", lg: "auto"}} fontSize="18px" fontWeight="600" lineHeight="28px" textAlign="center">
              {title + " " + name}
            </Heading>
            <Text fontSize="15px" lineHeight="28px" textAlign="center">{role}</Text>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}
