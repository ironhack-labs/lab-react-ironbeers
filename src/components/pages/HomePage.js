import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import beersImg from './../../assets/beers.png';
import newBeerImg from './../../assets/new-beer.png';
import randomBeer from './../../assets/random-beer.png';

function HomePage() {
  return (
    <Container fluid="true">
      <Row className="g-0 gy-4">
        <Col sm="12">
          <Link
            to="/beers"
            style={{ textDecoration: 'none', color: 'darkgray' }}
          >
            <Image src={beersImg} style={{ width: '100%', display: 'block' }} />
            <Container fluid="true" style={{ padding: '15px' }}>
              <h3>All Beers</h3>
              <p>
                La cerveza (del latín cerevisĭa) es una bebida alcohólica, no
                destilada, de sabor amargo, que se fabrica con granos de cebada
                germinados u otros cereales cuyo almidón se fermenta en agua con
                levadura.
              </p>
            </Container>
          </Link>
        </Col>

        <hr />

        <Col sm="12">
          <Link
            to="/random-beer"
            style={{ textDecoration: 'none', color: 'darkgray' }}
          >
            <Image
              src={randomBeer}
              style={{ width: '100%', display: 'block' }}
            />
            <Container fluid="true" style={{ padding: '15px' }}>
              <h3>Random Beer</h3>
              <p>
                La cerveza (del latín cerevisĭa) es una bebida alcohólica, no
                destilada, de sabor amargo, que se fabrica con granos de cebada
                germinados u otros cereales cuyo almidón se fermenta en agua con
                levadura.
              </p>
            </Container>
          </Link>
        </Col>

        <hr />

        <Col sm="12">
          <Link
            to="/new-beer"
            style={{ textDecoration: 'none', color: 'darkgray' }}
          >
            <img
              src={newBeerImg}
              style={{ width: '100%', display: 'block' }}
              alt="new beer"
            />
            <Container fluid="true" style={{ padding: '15px' }}>
              <h3>New Beer</h3>
              <p>
                La cerveza (del latín cerevisĭa) es una bebida alcohólica, no
                destilada, de sabor amargo, que se fabrica con granos de cebada
                germinados u otros cereales cuyo almidón se fermenta en agua con
                levadura.
              </p>
            </Container>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
