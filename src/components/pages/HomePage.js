import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Container fluid="true">
      <Row className="g-0 gy-4">
        <Col sm="12">
          <Link
            to="/beers"
            style={{ textDecoration: 'none', color: 'darkgray' }}
          >
            <Image
              src="https://media-cdn.tripadvisor.com/media/photo-s/1b/78/81/ac/jabeerwocky-craft-beer.jpg"
              style={{ width: '100%', display: 'block' }}
            />
            <Container style={{ margin: '10px 10px' }}>
              <h2>All Beers</h2>
              <p>
                La cerveza (del latín cerevisĭa) es una bebida alcohólica, no
                destilada, de sabor amargo, que se fabrica con granos de cebada
                germinados u otros cereales cuyo almidón se fermenta en agua con
                levadura.
              </p>
            </Container>
          </Link>
        </Col>

        <Col sm="12">
          <Link
            to="/random-beer"
            style={{ textDecoration: 'none', color: 'darkgray' }}
          >
            <Image
              src="https://www.loscervecistas.es/wp-content/uploads/2020/01/beer-somelier-2.jpg"
              style={{ width: '100%', display: 'block' }}
            />
            <Container style={{ margin: '10px 10px' }}>
              <h2>Random Beer</h2>
              <p>
                La cerveza (del latín cerevisĭa) es una bebida alcohólica, no
                destilada, de sabor amargo, que se fabrica con granos de cebada
                germinados u otros cereales cuyo almidón se fermenta en agua con
                levadura.
              </p>
            </Container>
          </Link>
        </Col>

        <Col sm="12">
          <Link
            to="/new-beer"
            style={{ textDecoration: 'none', color: 'darkgray' }}
          >
            <Image
              src="https://prod-discovery.edx-cdn.org/media/course/image/8a140470-bc70-4f7f-a9aa-df0284469b0b-8fd792a7b326.small.jpeg"
              style={{ width: '100%', display: 'block' }}
            />
            <Container style={{ margin: '10px 10px' }}>
              <h2>New Beer</h2>
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
