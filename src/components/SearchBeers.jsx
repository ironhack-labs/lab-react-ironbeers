import { Box,Input,FormLabel } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function SearchBeers(props) {
  const [search, setSearch] = useState("");
  const { filterBeer } = props;

  const handleChange = (e) => {
    setSearch(e.target.value);
    filterBeer(search);
  };

  return (
    <Box p={4} >
      <FormLabel htmlFor="search">Search Beers:</FormLabel>
      <Input type="text" name="search" size='md' value={search} onChange={handleChange} />
    </Box>
  );
}

export default SearchBeers;
