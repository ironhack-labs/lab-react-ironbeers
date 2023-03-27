import React, { useEffect, useState } from "react";
import { Navbar } from "../components/misc/Navbar/Navbar";
import { listBeers } from "../services/BeersService";

export const List = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    listBeers()
      .then((beers) => {
        console.log(beers);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <Navbar />
      <h1>List of Beers</h1>
    </div>
  );
};
