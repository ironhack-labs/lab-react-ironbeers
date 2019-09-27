import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Typography, Button } from 'antd'

const { Title, Text } = Typography

function BeerCard({ beer }) {
  return (
    <Card title={beer.name} style={{ width: '250px', margin: '2rem' }} cover={<img src={beer.image_url} alt={beer.name} height="370px" />}>
      <Title level={4}>{beer.tagline}</Title>
      <Text strong>Contributed by: <span><Text type="secondary">{beer.contributed_by}</Text></span> </Text>
      <Link to={`/beers/${beer._id}`}>
        <Button>View Beer Details</Button>
      </Link>
    </Card>
  );
}

export default BeerCard; 