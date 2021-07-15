import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BeerItem({ beer }) {
  return (
    <Col sm={12} style={{ maxHeight: '200px' }}>
      <Container
        fluid={true}
        style={{
          height: '200px',
          backgroundColor: 'rgb(245, 245, 245)',
          padding: '20px 10px',
          borderRadius: '3px',
        }}
      >
        <Link
          to={`/beers/${beer._id}`}
          style={{ height: '100%' }}
          className="link-dark"
        >
          <Row style={{ height: '100%' }}>
            <Col sm={3} style={{ height: '100%' }}>
              <Image
                src={beer.image_url}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </Col>

            <Col sm={9}>
              <h3>{beer.name}</h3>
              <p style={{ fontWeight: 500, color: 'darkgray' }}>
                {beer.tagline}
              </p>
              <p style={{ fontStyle: 'italic', color: 'darkgray' }}>
                {beer.contributed_by}
              </p>
            </Col>
          </Row>
        </Link>
      </Container>
    </Col>
  );
}

export default BeerItem;
