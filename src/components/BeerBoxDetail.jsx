import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function BeerBoxDetail({ beer }) {
  return (
    <Box width={"600px"}>
      <Center>
        <Image objectFit={"scale-down"} boxSize={"150px"} m={2} src={beer.image_url} alt="Beer" />
      </Center>
      <Flex justifyContent={"space-between"}>
        <Heading size="lg">{beer.name}</Heading>
        <Text>{beer.attenuation_level}</Text>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Heading size="lg">{beer.tagline}</Heading>
        <Text>{beer.first_brewed}</Text>
      </Flex>
      <Text>{beer.description}</Text>
      <Text>{beer.contributed_by}</Text>
    </Box>
  );
}
