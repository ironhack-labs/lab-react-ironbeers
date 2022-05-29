import React from "react";
import { Link as RouterLink } from "react-router-dom";
import beerlistImage from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";
import { Box, Container, Text, Link } from "@chakra-ui/react";

function HomePage() {
  return (
    <main>
      <Box>
        <img src={beerlistImage} alt="Beers" width="1400" />
        <Box py={4} px={6} textAlign="left">
          <Link as={RouterLink} fontSize="lg" textTransform="uppercase" fontWeight="bold" to="/beers">All Beers</Link>
          <Text>
            Ooh, are those your $250 dollar sandals? lemme use that as my litter
            box meeeeouw, for purr like an angel. Present belly, scratch hand
            when stroked stand with legs in litter box, but poop outside for my
            slave human didn't give me any food so i pooped on the floor, favor
            packaging over toy scream for no reason at 4 am, but ears back wide
            eyed.
          </Text>
        </Box>
      </Box>
      <Box>
        <img src={randomBeerImg} alt="Random Beers" width="1400" />
        <Box py={4} px={6} textAlign="left">
          <Link as={RouterLink} fontSize="lg" textTransform="uppercase" fontWeight="bold" to="/random-beer">Random Beer</Link>
          <Text>
            Ooh, are those your $250 dollar sandals? lemme use that as my litter
            box meeeeouw, for purr like an angel. Present belly, scratch hand
            when stroked stand with legs in litter box, but poop outside for my
            slave human didn't give me any food so i pooped on the floor, favor
            packaging over toy scream for no reason at 4 am, but ears back wide
            eyed.
          </Text>
        </Box>
      </Box>
      <Box>
        <img src={newBeerImg} alt="Create new Beers" width="1400" />
        <Box py={4} px={6} textAlign="left">
          <Link as={RouterLink} fontSize="lg" textTransform="uppercase" fontWeight="bold" to="/new-beer">Create New Beer</Link>
          <Text>
            Ooh, are those your $250 dollar sandals? lemme use that as my litter
            box meeeeouw, for purr like an angel. Present belly, scratch hand
            when stroked stand with legs in litter box, but poop outside for my
            slave human didn't give me any food so i pooped on the floor, favor
            packaging over toy scream for no reason at 4 am, but ears back wide
            eyed.
          </Text>
        </Box>
      </Box>
    </main>
  );
}

export default HomePage;
