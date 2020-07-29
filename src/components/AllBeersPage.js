import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import Axios from 'axios';
import BeerCard from './BeerCard';
import { Container, Row, Col } from 'react-bootstrap';

const AllBeersPage = () => {
  const initialState = {
    beers: [],
    isLoading: true,
  };
  const [beers, setBeers] = useState(initialState);

  const getBeers = () => {
    Axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      setBeers({ beers: res.data, isLoading: false });
    });
  };

  useEffect(() => getBeers(), []);

  const beersList = beers.beers.map((beer) => (
    <BeerCard
      key={beer._id}
      id={beer._id}
      image={beer.image_url}
      name={beer.name}
      tagline={beer.tagline}
      contributor={beer.contributed_by}
    />
  ));

  if (beers.isLoading) {
    return (
      <div>
        <NavigationBar />
        <Container className="text-center mt-5">
          <Row>
            <Col lg={12}>
              <h1>The list of beers is loading</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <NavigationBar />
      <div className="beers-list---wrapper">{beersList}</div>
    </div>
  );
};

export default AllBeersPage;
