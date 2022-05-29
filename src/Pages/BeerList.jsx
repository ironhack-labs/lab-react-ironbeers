import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import SearchBeers from "../components/SearchBeers";
import { Container, Image, Box, Flex, SimpleGrid, Heading } from "@chakra-ui/react";
import Card from "../components/Card";

function BeerList() {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const { id } = useParams();

  const getAllBeers = async () => {
    try {
      let response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
      setFilteredBeers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  const filterBeer = (searchTerm) => {
    let filteredBeers = beers.filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBeers(filteredBeers);
  };

  return (
    <Container>
      <SearchBeers filterBeer={filterBeer} />
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={2}>
        {filteredBeers.map((beer) => {
          return (
            <Card key={beer._id} beer={beer}/>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}

export default BeerList;
