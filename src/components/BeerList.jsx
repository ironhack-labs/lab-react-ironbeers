import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardBody, Center, Flex, Heading, Image, Spinner, Text } from "@chakra-ui/react";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

export default function BeerList() {
  const [isLoading, setIsLoading] = useState(true);
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(API_URL);
      setBeers(res.data);
      setIsLoading(false);
    };
    getData();
  }, []);

  const renderBeers = () => {
    return beers.map((beer) => (
      <div key={beer._id}>
        <Link to={`/beers/${beer._id}`}>
          <Card w={"700px"} mt={2} direction={{ base: "column", sm: "row" }} overflow="hidden" variant="outline">
            <Image objectFit={"scale-down"} boxSize={"150px"} m={2} src={beer.image_url} alt="Beer" />
            <CardBody>
              <Heading size="lg">{beer.name}</Heading>
              <Heading size="md">{beer.tagline}</Heading>
              <Text>
                <Text as="b">Create by: </Text>
                {beer.contributed_by}
              </Text>
            </CardBody>
          </Card>
        </Link>
      </div>
    ));
  };

  return (
    <>
      {isLoading ? (
        <Center>
          <Spinner m={6} />{" "}
        </Center>
      ) : beers.length ? (
        <Flex flexDirection={"column"} alignItems={"center"}>
          {renderBeers()}
        </Flex>
      ) : (
        <p>No hay cerves, sólo vermuth</p>
      )}
    </>
  );
}
