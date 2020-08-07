import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OptionCard = ({ link, image, title, description, cta }) => {
  return (
    <div className="home-card">
      <Link to={link}>
        <Card>
          <Card.Body>
            <div className="card-cover">
              <Card.Img variant="top" src={image} alt="" />
            </div>
            <div className="card-copies">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default OptionCard;