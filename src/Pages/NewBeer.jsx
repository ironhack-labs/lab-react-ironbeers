import axios from "axios";
import { Box, FormControl, FormLabel, Input, InputGroup, VStack, Container, Button } from "@chakra-ui/react";

import React, { useState, useEffect } from "react";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleTagline = (e) => {
    setTagline(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleBrewersTips = (e) => {
    setBrewersTips(e.target.value);
  };
  const handleAttenuationLevel = (e) => {
    setAttenuationLevel(e.target.value);
  };
  const handleContributedBy = (e) => {
    setContributedBy(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      tagline,
      description,
      brewersTips,
      attenuationLevel,
      contributedBy,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then(() => {
        setName("");
        setTagline("");
        setDescription("");
        setContributedBy("");
        setBrewersTips("");
        setAttenuationLevel(0);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container mt={4} as="form" onSubmit={handleSubmit}>
      <VStack>
        <FormControl>
          <FormLabel htmlFor="name">Name:</FormLabel>
          <Input
            variant="outline"
            onChange={handleName}
            type="text"
            name="name"
            value={name}
          ></Input>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="tagline">Tagline:</FormLabel>
          <Input
            onChange={handleTagline}
            type="text"
            name="tagline"
            value={tagline}
          ></Input>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="description">Description:</FormLabel>
          <Input
            onChange={handleDescription}
            type="text"
            name="description"
            value={description}
          ></Input>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="brewers_tips">Crewers Tps:</FormLabel>
          <Input
            onChange={handleBrewersTips}
            type="text"
            name="brewers_tips"
            value={brewersTips}
          ></Input>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="attenuation_level ">Attenuation Level :</FormLabel>
          <Input
            onChange={handleAttenuationLevel}
            type="number"
            name="attenuation_level "
            value={attenuationLevel}
          ></Input>
        </FormControl>
        <FormControl>
          <FormLabel  htmlFor="contributed_by">Contributed by:</FormLabel>
          <Input
            onChange={handleContributedBy}
            type="text"
            name="contributed_by"
            value={contributedBy}
          ></Input>
        </FormControl>
      </VStack>
        <Box mt={6}>
        <Button colorScheme="teal"type="submit">Create new beer</Button>
        </Box>
    </Container>
  );
}

export default NewBeer;
