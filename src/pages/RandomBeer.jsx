import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";
import randomBeerImg from "../assets/random-beer.png";
import Navbar from "../components/Navbar";

function RandomBeer() {
  return (
    <>
      <Navbar />
      <Card>
        <CardBody>
          <Image src={randomBeerImg} alt="Beers" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">Random Beer</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ultricies turpis. Proin sit amet
              diam id nulla blandit efficitur. Vivamus ut justo velit. Etiam tristique purus vel orci aliquam aliquam.
              Etiam vehicula rhoncus metus, vel semper felis iaculis congue. Maecenas sem turpis, bibendum nec mi vitae,
              vulputate laoreet quam.
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default RandomBeer;
