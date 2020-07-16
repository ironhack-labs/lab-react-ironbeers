import React from 'react';

import { Link } from 'react-router-dom';


import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const BeerCard = ({ _id, image_url, name, tagline, contributed_by}) => {
  return (
    <Col md={4}>
      <section className="beer-list">
        <Image src={image_url} rounded />
        <div>
          <Link to={`/beer/${_id}`}><h3>{name}</h3></Link> 
          <h4>{tagline}</h4>
          <hr/>
          <h5>{contributed_by}</h5>         
        </div>
      </section>
    </Col>
  );
};

export default BeerCard;
