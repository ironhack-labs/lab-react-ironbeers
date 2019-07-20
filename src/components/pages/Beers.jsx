import React, { useEffect, useState } from "react";

import axios from "axios";

import { Container } from "reactstrap";

import Beer from "../Beer";
import HomeHeader from "../HomeHeader";

export default function Beers() {
  const [beers, setBeers] = useState([]);

  console.log("emptyBeers:", beers);

  useEffect(() => {
    axios.get("https://ih-beer-api.herokuapp.com/beers").then(response => {
      let myBeers = response.data.slice(6, 15);
      setBeers(myBeers);
    });
  }, []);

  console.log(beers);

  return (
    <div className="Beers">
      <Container>
        <HomeHeader />
        {beers.length === 0 && <h1>Fetching Beers...GluckGluckGluck</h1>}
        {beers.map((beer, i) => (
          <Beer
            key={i}
            name={beer.name}
            picUrl={beer.image_url}
            tagline={beer.tagline}
            contributor={beer.contributed_by}
            beer = {beer}
          />
        ))}
      </Container>
    </div>
  );
}
