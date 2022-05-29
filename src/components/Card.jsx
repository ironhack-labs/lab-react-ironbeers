import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
    const {beer} = props
  return (
    <Box size="md" border="1px" borderColor="gray.300" p={2} key={beer._id}>
    <Flex alignItems="center" gap={2} textAlign="left" >
      <Box>
        <Image
          boxSize="100px"
          objectFit="contain"
          src={beer.image_url}
          alt="beer"
        />
      </Box>
      <Box>
        <Link to={`/beers/${beer._id}`}>
          <Heading fontSize="lg">{beer.name} </Heading>
        </Link>
        <Heading as="h4" fontSize="md">{beer.tagline}</Heading>
        <p>{beer.contributed_by}</p>
      </Box>
    </Flex>
  </Box>
  )
}

export default Card