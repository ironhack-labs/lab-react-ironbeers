import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HomeBar from '../components/HomeBar';
import { CardGroup, Row, Col } from 'react-bootstrap';
import BeerCard from '../components/BeerCard';

export default function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((beers) => {
      return setBeers(beers.data);
    });
  });
  return (
    <div>
      <HomeBar />
      <CardGroup>
        <Row xs={1} md={2} lg={4} xl={4} xxl={5} className="g-4">
          {beers.map((beer) => {
            return (
              <Col key={beer._id}>
                <BeerCard beer={beer} />
              </Col>
            );
          })}
        </Row>
      </CardGroup>
    </div>
  );
}
