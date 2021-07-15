import React from 'react';
import { Container, Row } from 'react-bootstrap';
import BeerItem from './BeerItem';

const BeerList = ({ list }) => {
  return (
    <Container>
      <Row className="g-0 gy-4">
        {list.map((el) => (
          <BeerItem key={el._id} beer={el} />
        ))}
      </Row>
    </Container>
  );
};

export default BeerList;
