import React, { useEffect, useState } from "react";
import Beer from "./Beer";

const AllBeers = () => {
  const [beers, updateBeers] = useState([]);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then(res => res.json())
      .then(json => updateBeers(json));
  }, []);

  return beers.map((beer, i) => (
    <Beer
      key={i}
      image={beer.image_url}
      name={beer.name}
      tagline={beer.tagline}
      id={beer._id}
      contributedBy={beer.contributedBy}
    />
  ));
};

export default AllBeers;
