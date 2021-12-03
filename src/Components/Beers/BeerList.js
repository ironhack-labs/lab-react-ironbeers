import React from 'react';
import BeerCard from './BeerCard';
import { Row, Col } from 'react-bootstrap';
import './ListBeer.css';
import './BeerCard.css';

function BeerList(props) {
  const beers = props.beers;
  return (
    <Row className="CardList">
      {beers.map((beer) => {
        return (
          <Col key={beer._id} className="CardBeer">
            <BeerCard details={beer}></BeerCard>
          </Col>
        );
      })}
    </Row>
  );
}

export default BeerList;
