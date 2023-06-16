import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Center, Spinner, Text } from "@chakra-ui/react";
import BeerBoxDetail from "../components/BeerBoxDetail";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeer() {
  const [isLoading, setIsLoading] = useState(true);
  const [beer, setBeer] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(API_URL);
      setBeer(res.data);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Center>
          <Spinner m={4} />
        </Center>
      ) : beer ? (
        <Center>
          <BeerBoxDetail beer={beer} />
        </Center>
      ) : (
        <Text fontSize={32} textAlign={"center"}>
          La cerveza aleatoria no existe 🙈
        </Text>
      )}
    </>
  );
}

export default RandomBeer;
