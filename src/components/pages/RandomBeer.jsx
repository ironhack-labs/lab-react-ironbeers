
import React, { useEffect, useState } from "react";

import axios from "axios";

import { Container } from "reactstrap";

import HomeHeader from "../HomeHeader";
import BeerDetail from "../BeerDetail";

export default function RandomBeer() {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beer-api.herokuapp.com/beers").then(response => {
      let myBeers = response.data.slice(6, 15);
      let randomIndex = Math.floor(Math.random() * myBeers.length);
      setBeer(myBeers[randomIndex]);
    });
  }, []);

  console.log(beer);

  return (
    <div>
    <Container>
      <HomeHeader />
      <BeerDetail beer={beer} />
      </Container>
    </div>
  );
}
