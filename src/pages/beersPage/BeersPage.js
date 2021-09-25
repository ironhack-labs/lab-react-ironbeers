import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from 'react-bootstrap';

import NavBar from '../../components/navbar/NavBar';
import BeerCard from '../../components/beerCard/BeerCard';

function BeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => setBeers(response.data))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <>
      <NavBar />
      <Container className="d-flex flex-row flex-wrap p-0" fluid>
        {beers.map((beer) => (
          <BeerCard key={beer._id} beer={beer} />
        ))}
      </Container>
    </>
  );
}

export default BeersPage;
