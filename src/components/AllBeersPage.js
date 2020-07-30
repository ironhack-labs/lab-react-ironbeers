import React, { useState, useEffect, useCallback } from 'react';
import NavigationBar from './NavigationBar';
import Axios from 'axios';
import BeerCard from './BeerCard';
import { Container, Row, Col, Form } from 'react-bootstrap';

const AllBeersPage = () => {
  const initialState = {
    beers: [],
    isLoading: true,
    searchQuery: '',
  };
  const [beers, setBeers] = useState(initialState);

  const getBeers = useCallback(() => {
    Axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      setBeers({ ...beers, beers: res.data, isLoading: false });
    });
  }, [beers]);

  useEffect(getBeers, []);

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    Axios.get(
      'https://ih-beers-api2.herokuapp.com/beers/search?q=' + searchQuery
    ).then((res) => {
      setBeers({
        ...beers,
        beers: res.data,
        searchQuery: searchQuery,
      });
    });
  };

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
      <Container className="mt-3">
        <Row>
          <Col lg={12}>
            <Form.Control
              type="text"
              name="searchQuery"
              onChange={handleSearch}
              value={beers.searchQuery}
              placeholder="Search beers..."
            />
            <div className="beers-list---wrapper">{beersList}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AllBeersPage;
