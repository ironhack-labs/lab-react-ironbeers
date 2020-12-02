import React, { useEffect, useState } from 'react';
import { Row, Col, Spin } from 'antd';
import BeerCard from '../components/BeerCard';

const RandomBeer = () => {
  const [beer, setBeer] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => response.json())
      .then((data) => setBeer(data))
      .then(() => setLoading(false));
  }, []);

  return loading ? (
    <Spin size="large" />
  ) : (
    <Row justify="center">
      <Col key={beer._id} span={{ sm: 24, lg: 12 }}>
        <BeerCard beer={beer}></BeerCard>
      </Col>
    </Row>
  );
};

export default RandomBeer;
