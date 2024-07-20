"use client";
import RelatedPostsSection from "@/components/sections/RelatedPostsSection";
import getPost from "@/test/mocks/get-post.mock";
import { PostInfo } from "@/types/postInfo";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Skeleton,
  Spinner,
  Tag,
  Text,
} from "@chakra-ui/react";
import Error from "next/error";
import { useEffect, useRef, useState } from "react";

export default function PostPage({ params }: { params: { slug: string } }) {
  const [data, setData] = useState<PostInfo | undefined>(undefined);
  const [relatedData, setRelatedData] = useState<PostInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getPost(params.slug).then((posts) => {
      setIsLoading(false);
      setData(posts);
    });
  }, [params.slug]);

  useEffect(() => {});

  if (isLoading) {
    return (
      <Box pt="118px" maxWidth="1248px" px="16px" mx="auto" h="200svh">
        <Grid templateRows={{ base: "2fr 1fr", lg: "25fr 10fr" }}>
          <GridItem as={Skeleton} isLoaded={!isLoading} />
          <GridItem pt="32px">
            <Skeleton
              fontSize="14px"
              h="1.2em"
              w="16ch"
              isLoaded={!isLoading}
            />
            <Skeleton
              mt="12px"
              fontSize="24px"
              h="28px"
              w="25ch"
              isLoaded={!isLoading}
            />
            <Flex mt="32px" gap="8px">
              <Skeleton h="24px" w="6ch" rounded="full" isLoaded={!isLoading} />
              <Skeleton
                h="24px"
                w="10ch"
                rounded="full"
                isLoaded={!isLoading}
              />
              <Skeleton h="24px" w="8ch" rounded="full" isLoaded={!isLoading} />
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    );
  }

  if (data === undefined) {
    return (
      <Error withDarkMode={false} statusCode={404} title="Post no existente" />
      // <Heading h="100svh" w="fit-content" mx="auto" pt="40svh">
      //   El post con id:{params.slug} no existe
      // </Heading>
    );
  }

  return (
    <Box as="main" pt="118px">
      <Grid
        as="article"
        maxWidth="1248px"
        px="16px"
        mx="auto"
        templateRows={{ base: "2fr 1fr", lg: "25fr 10fr" }}
        gap="0px 0px"
      >
        <GridItem position="relative" overflow="hidden">
          <Image
            position="absolute"
            objectFit="cover"
            bg="#F1F1F1"
            h="full"
            w="full"
            alt=""
            src={data.image}
          />
        </GridItem>
        <GridItem pt="32px">
          <Text
            fontSize="14px"
            fontWeight="600"
            color="#526D64"
          >{`${data.author} • ${data.date}`}</Text>
          <Heading
            as="h1"
            mt="12px"
            fontSize="24px"
            fontWeight="600"
            lineHeight="32px"
          >
            {data.title}
          </Heading>

          <Flex mt="24px" gap="8px" flexWrap="wrap">
            {data.tags.map((tag) => (
              <Tag key={tag} rounded="full" bg="#0AC05E1A" color="#0AC05E">
                {tag}
              </Tag>
            ))}
          </Flex>
        </GridItem>
      </Grid>

      <Text
        maxWidth="1248px"
        mt="40px"
        px="16px"
        mx="auto"
        lineHeight="24px"
        color="#7B7B7B"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
        deleniti ex cum ipsum unde ullam amet sapiente? Ducimus atque dolorem
        dolor porro! Beatae, ut officiis. Magnam dolores reiciendis quisquam
        porro est voluptas, ex possimus, tempore natus repudiandae libero
        deserunt consectetur, dicta ipsum explicabo nemo similique! Placeat,
        nulla quod atque soluta non unde ipsum et, harum velit nihil nam ullam
        inventore deserunt fugit veniam minima accusantium necessitatibus,
        facilis repudiandae autem magnam! Voluptatibus necessitatibus autem
        quibusdam, alias distinctio praesentium itaque amet! Vero aut odio nihil
        iste praesentium ducimus? Nemo doloribus laboriosam praesentium. Eaque
        rerum quidem quasi eligendi sapiente molestias iste consectetur quae
        consequatur voluptate velit facilis, quod nostrum itaque, error
        perspiciatis accusantium debitis voluptas fugit doloremque enim ducimus!
        Voluptas soluta modi sit ab at itaque possimus architecto, saepe
        expedita nesciunt recusandae optio aliquam commodi maxime placeat
        excepturi dolorum! Quam similique iure quis beatae, voluptatem,
        architecto molestiae error exercitationem facilis tempore quibusdam
        molestias aliquam, officia incidunt impedit optio illum in omnis ex
        nostrum iusto quos! Quasi, fuga similique. Perspiciatis libero ad
        temporibus sequi, quidem nostrum possimus est, laborum dignissimos
        dolorum alias enim! Recusandae ea ipsam, consequuntur maxime impedit
        voluptas minima non modi expedita nesciunt, quis aspernatur similique
        fuga repellendus consequatur molestias ex quod reprehenderit! Dolorem
        molestias aliquid fuga dolores, velit recusandae incidunt sequi neque
        praesentium? Eligendi repudiandae ab cum fugiat inventore soluta
        mollitia quisquam voluptate vero praesentium? Minima illo mollitia
        explicabo temporibus autem quod, eveniet a ipsa exercitationem neque
        alias ratione iste. Nostrum ab repellat velit accusantium nesciunt eos
        corporis amet quae magnam ratione. Qui optio rem culpa incidunt magnam
        aliquid explicabo quidem iusto at aut accusantium, dolor omnis itaque
        voluptatum nam perferendis dolorum iure recusandae libero reprehenderit
        atque quo officiis rerum. Officiis, in laboriosam. Minima adipisci atque
        dicta recusandae quae perferendis ducimus fugit voluptatem saepe quaerat
        officiis, magnam quos eligendi voluptate autem, consectetur similique.
        Id suscipit esse obcaecati at accusamus quidem labore magnam placeat
        reiciendis nostrum? Commodi libero harum at aperiam repellat. Aperiam
        rem suscipit praesentium optio labore porro ullam quas quis voluptatum
        voluptas repudiandae, assumenda, reprehenderit cum? Repellendus delectus
        hic voluptas aut magnam, dolores magni beatae ipsum nisi laboriosam
        minus distinctio illo repudiandae ducimus corporis error dicta neque
        similique quasi praesentium? Non porro eius temporibus debitis quisquam
        officia nihil ipsam dolorum illo, repellendus cupiditate numquam
        inventore? Nam tempora quod, facilis iure reiciendis ab numquam
        aspernatur reprehenderit corporis praesentium enim blanditiis vitae
        minus, deserunt fugiat, magnam quas illum officiis quam libero. Enim,
        dolores soluta. Optio voluptatibus corporis officia adipisci, doloribus
        eligendi ipsum voluptatum maxime dolor! Enim ea dolores dolorem animi
        iure id odit? Minus non libero id similique voluptatem exercitationem
        temporibus corrupti corporis culpa quod alias iusto expedita molestias,
        itaque neque consectetur officia sequi praesentium! Corporis eveniet id
        temporibus, aspernatur ex officia quas tempora aliquid facilis
        perspiciatis consequuntur iste hic illum pariatur aut. Aspernatur
        repellendus consequuntur hic labore dicta aut optio reiciendis!
        Accusamus perferendis deleniti unde doloremque dolores nobis ullam enim.
        Ex laboriosam distinctio voluptatem incidunt atque deserunt id
        similique. Tenetur repudiandae perspiciatis debitis voluptates est qui
        vel explicabo eveniet suscipit assumenda!
      </Text>

      <RelatedPostsSection />
    </Box>
  );
}
