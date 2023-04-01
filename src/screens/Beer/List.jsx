import React, { useEffect, useState } from "react";
import { BeerItem } from "../../components/Beers/BeerItem";
import FormControl from "../../components/misc/FormControl/FormControl";
import Input from "../../components/misc/Input/Input";
import { Navbar } from "../../components/misc/Navbar/Navbar";
import { listBeers, searchBeer } from "../../services/BeersService";

export const List = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search) {
      listBeers()
        .then((allBeers) => {
          setBeers(allBeers);
        })
        .catch((err) => console.error(err));
    }
  }, [beers, search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchBeer(search)
      .then((result) => {
        setBeers(result);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Navbar />
      <div>
        <FormControl text="Search Beer" htmlFor="search">
          <Input id="search" name="search" onChange={handleSearch} />
        </FormControl>
      </div>
      <div>
        {beers.map((beer) => (
          <BeerItem {...beer} key={beer._id} />
        ))}
      </div>
    </div>
  );
};
