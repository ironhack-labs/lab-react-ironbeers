import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'


const home = () => {
  return (
    <Container className="container">
      <Link to="/beers">
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://media-cdn.tripadvisor.com/media/photo-s/05/e6/a9/6d/cerveceria-modelo.jpg"
          />
          <Card.Body>
            <Card.Title>All Beers</Card.Title>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </Card.Body>
        </Card>
      </Link>
      <Link to="/random-beer">
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://vamosainvertir.com/wp-content/uploads/2019/09/guia-abrir-una-cerveceria.jpg"
          />
          <Card.Body>
            <Card.Title>Random Beer</Card.Title>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </Card.Body>
        </Card>
      </Link>
      <Link Link to="/">
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://www.sehacecaminoalandar.com/wp-content/uploads/Cerveceria-de-Gante-zapato.jpg"
          />
          <Card.Body>
            <Card.Title>Add New Beer</Card.Title>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </Card.Body>
        </Card>
      </Link>
    </Container>
  );
};

export default home;
