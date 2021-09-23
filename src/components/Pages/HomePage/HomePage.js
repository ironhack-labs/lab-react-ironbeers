import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import beers from './../../../assets/beers.png';
import randomBeer from './../../../assets/random-beer.png';
import newBeer from './../../../assets/new-beer.png';

export default function HomePage() {
    return (
      <Container>
        <Row>
          <Col>
            <Link
              className="text-dark"
              style={{ textDecoration: 'none' }}
              to="/beers"
            >
              <img src={beers} alt="All Beers" style={{ width: '100%' }} />

              <h2 style={{ fontWeight: '400' }}>All Beers</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
                dictum arcu ut dignissim varius.
              </p>
            </Link>
            <Link
              className="text-dark"
              style={{ textDecoration: 'none' }}
              to="/random-beer"
            >
              <img
                src={randomBeer}
                alt="Random Beer"
                style={{ width: '100%' }}
              />

              <h2 style={{ fontWeight: '400' }}>Random Beer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
                dictum arcu ut dignissim varius.
              </p>
            </Link>
            <Link
              className="text-dark"
              style={{ textDecoration: 'none' }}
              to="/new-beer"
            >
              <img src={newBeer} alt="New Beer" style={{ width: '100%' }} />

              <h2 style={{ fontWeight: '400' }}>New Beer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
                dictum arcu ut dignissim varius.
              </p>
            </Link>
          </Col>
        </Row>
      </Container>
    );
}
