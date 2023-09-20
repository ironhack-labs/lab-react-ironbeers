import axios from "axios";
import React, { useEffect, useState } from "react";
import BeerCard from "../components/BeerCard";

function BeersPage() {
  const [beers, setBeers] = useState([]);

  const getBeers = () => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((result) => {
        setBeers(result.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div>
      <div className="beers-list">
        {beers
          ? beers.map((beer) => <BeerCard key={beer._id} beer={beer} />)
          : null}
      </div>
    </div>
  );
}

export default BeersPage;
