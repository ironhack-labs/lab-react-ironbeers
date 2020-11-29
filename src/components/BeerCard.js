import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'antd';

export default function BeerCard({ beer }) {
  return (
    <Col key={beer._id} xs={8} sm={8} md={12}>
      <Link to={`/beer/${beer._id}`}>
        <Card
          hoverable
          style={{
            height: '15rem',
            boxSizing: 'border-box',
            margin: '10px auto',
          }}
        >
          <img
            style={{ width: '30px', height: 'auto' }}
            src={beer.image_url}
            alt="beer"
          />
          <p>{beer.name}</p>
        </Card>
      </Link>
    </Col>
  );
}
