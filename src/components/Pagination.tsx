import { Button, Flex, Grid, Image } from "@chakra-ui/react";
import LeftArrow from "@/assets/left_arrow.svg";
import RightArrow from "@/assets/right_arrow.svg";

export type PaginationProps = {
  maxCount: number;
  currentPage: number;
  onPaginationChange: (pagination: number) => void;
};

export default function Pagination({
  maxCount,
  currentPage,
  onPaginationChange,
}: PaginationProps) {
  return (
    <Grid
      templateColumns="auto 1fr auto"
      pt="21px"
      mt="64px"
      borderTop="1px solid #BCBCBC"
    >
      <Button
        variant="ghost"
        borderRadius="100vw"
        py="24px"
        px="24px"
        color="#515151"
        onClick={() => {
          if (currentPage > 0) onPaginationChange(currentPage - 1);
        }}
      >
        <Image alt="" src={LeftArrow.src} mr="8px" />
        Anteriores
      </Button>

      <Flex justifyContent="center" gap="4px">
        {[...Array(maxCount)].map((val, index) => (
          <Button
            key={index}
            variant="ghost"
            bg={currentPage === index ? "#0AC05E1A" : undefined}
            color={currentPage === index ? "#0AC05E" : "#7B7B7B"}
          >
            {index + 1}
          </Button>
        ))}
      </Flex>

      <Button
        variant="ghost"
        borderRadius="100vw"
        py="24px"
        px="24px"
        color="#515151"
        onClick={() => {
          if (currentPage < maxCount - 1) onPaginationChange(currentPage + 1);
        }}
      >
        Siguientes
        <Image alt="" src={RightArrow.src} ml="8px" />
      </Button>
    </Grid>
  );
}
