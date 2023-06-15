import { Box, Button, Flex, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useState } from "react";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/new";

function NewBeer() {
  const [data, setData] = useState({});
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {};

  return (
    <>
      <Navbar />
      <Flex justifyContent={"center"}>
        <Box w={"80%"} as="form" onSubmit={handleSubmit}>
          <FormControl mb={2}>
            <FormLabel>Name</FormLabel>
            <Input type="text" name={"name"} value={data.name} onChange={handleChange} />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Tagline</FormLabel>
            <Input type="text" name={"tagline"} value={data.tagline} onChange={handleChange} />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Description</FormLabel>
            <Textarea type="text" name={"description"} value={data.description} onChange={handleChange} />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>First Brewed</FormLabel>
            <Input type="text" name={"first_brewed"} value={data.first_brewed} onChange={handleChange} />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Brewers Tips</FormLabel>
            <Input type="text" name={"brewers_tips"} value={data.brewers_tips} onChange={handleChange} />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Attenuation Level</FormLabel>
            <Input type="number" name={"attenuation_level"} value={data.attenuation_level} onChange={handleChange} />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Contributed by</FormLabel>
            <Input type="text" name={"contributed_by"} value={data.contributed_by} onChange={handleChange} />
          </FormControl>
          <Button mt={4} colorScheme="blue" type="submit">
            Enviar
          </Button>
        </Box>
      </Flex>
    </>
  );
}

export default NewBeer;
