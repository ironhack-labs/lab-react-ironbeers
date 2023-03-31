import React, { useEffect, useState } from "react";
import { BeerItem } from "../../components/Beers/BeerItem";
import { Navbar } from "../../components/misc/Navbar/Navbar";
import { listBeers } from "../../services/BeersService";

export const List = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    listBeers()
      .then((allBeers) => {
        setBeers(allBeers);
      })
      .catch((err) => console.error(err));
  }, [beers]);
  return (
    <div>
      <Navbar />
      <div>
        {beers.map((beer) => (
          <BeerItem {...beer} key={beer._id} />
        ))}
      </div>
    </div>
  );
};
