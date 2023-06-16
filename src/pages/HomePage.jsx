import { Card, CardBody, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import beerImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";

function HomePage() {
  return (
    <>
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Card w={"80%"} m={4}>
          <Link to={`/beers`}>
            <CardBody>
              <Image src={beerImg} alt="Beers" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">All Beers</Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ultricies turpis. Proin sit amet
                  diam id nulla blandit efficitur. Vivamus ut justo velit. Etiam tristique purus vel orci aliquam
                  aliquam. Etiam vehicula rhoncus metus, vel semper felis iaculis congue. Maecenas sem turpis, bibendum
                  nec mi vitae, vulputate laoreet quam.
                </Text>
              </Stack>
            </CardBody>
          </Link>
        </Card>

        <Card w={"80%"} m={4}>
          <Link to={"/new-beer"}>
            <CardBody>
              <Image src={newBeerImg} alt="Beers" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">New Beer</Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ultricies turpis. Proin sit amet
                  diam id nulla blandit efficitur. Vivamus ut justo velit. Etiam tristique purus vel orci aliquam
                  aliquam. Etiam vehicula rhoncus metus, vel semper felis iaculis congue. Maecenas sem turpis, bibendum
                  nec mi vitae, vulputate laoreet quam.
                </Text>
              </Stack>
            </CardBody>
          </Link>
        </Card>

        <Card w={"80%"} m={4}>
          <Link to={"/random-beer"}>
            <CardBody>
              <Image src={randomBeerImg} alt="Beers" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">Random Beer</Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ultricies turpis. Proin sit amet
                  diam id nulla blandit efficitur. Vivamus ut justo velit. Etiam tristique purus vel orci aliquam
                  aliquam. Etiam vehicula rhoncus metus, vel semper felis iaculis congue. Maecenas sem turpis, bibendum
                  nec mi vitae, vulputate laoreet quam.
                </Text>
              </Stack>
            </CardBody>
          </Link>
        </Card>
      </Flex>
    </>
  );
}

export default HomePage;
