import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function BeerDetail(props) {
  const { beer } = props;
  return (
    <Box size="md" border="1px" borderColor="gray.300" p={2} key={beer._id}>
      <Flex alignItems="center" flexDirection="column" gap={2} textAlign="left">
        <Box>
          <Image
            boxSize="300px"
            objectFit="contain"
            src={beer.image_url}
            alt="beer"
          />
        </Box>
        <Box>
          <Flex align="center" justifyContent="space-between">
            <Heading as="h1" fontSize="3xl">{beer.name} </Heading>
            <Text fontSize="5xl" color="gray.300">{beer.attenuation_level}</Text>
          </Flex>
          <Flex mb={2} justify="space-between">
            <Heading as="h4" fontSize="lg">
              {beer.tagline}
            </Heading>
            <Text fontWeight="bold">{beer.first_brewed}</Text>
          </Flex>
          <Text>{beer.description}</Text>
          <Text color="gray.600" mt={2} fontWeight="bold" >{beer.contributed_by}</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default BeerDetail;
