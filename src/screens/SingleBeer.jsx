import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, Spin, Typography, Space } from 'antd';
import BeerCard from '../components/BeerCard';
const { Title, Text } = Typography;
const SingleBeer = () => {
  const { beerId } = useParams();
  const [beer, setBeer] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers/' + beerId)
      .then((response) => response.json())
      .then((data) => setBeer(data))
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    console.log(beer);
  }, [beer]);

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

export default SingleBeer;
