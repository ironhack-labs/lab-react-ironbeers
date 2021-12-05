import React from 'react';
import { Card, Col } from 'antd';
import './BeerView.css';

const BeerView = (props) => {
  const beer = props.beer;
  return (
    <div className="BeerView">
      <Col>
        <Card style={{ width: 230, height: 300, margin: 10 }}>
          <img src={beer.image_url} height={60} alt="beer" />
          <div className="box">
            <h3>{beer.name}</h3>
            <span>{beer.attenuation_level}</span>
          </div>

          <div className="box">
            <h5>{beer.tagline}</h5>
            <span>{beer.first_brewed}</span>
          </div>

          <p>{beer.description}</p>
          <p>Created by: {beer.contributed_by}</p>
        </Card>
      </Col>
    </div>
  );
};

export default BeerView;
