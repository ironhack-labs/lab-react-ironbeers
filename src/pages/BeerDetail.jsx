import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Center, Spinner, Text } from "@chakra-ui/react";
import BeerBoxDetail from "../components/BeerBoxDetail";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

export default function BeerDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [beer, setBeer] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${API_URL}/${id}`);
      setBeer(res.data);
      setLoading(false);
    };
    getData();
  }, [id]);
  return (
    <>
      <Navbar />
      {loading ? (
        <Center>
          <Spinner m={4} />
        </Center>
      ) : beer ? (
        <Center>
          <BeerBoxDetail beer={beer} />
        </Center>
      ) : (
        <Text fontSize={32} textAlign={"center"}>
          La cerveza elegida no existe 🙈
        </Text>
      )}
    </>
  );
}
