import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import AllBeerPic from '../assets/beers.png';
import RandBeerPic from '../assets/random-beer.png';
import NewBeerPic from '../assets/new-beer.png';

import './Home.css';

export default function Home() {
  return (
    <Container fluid={true} className="App">
      <h1 style={{ fontSize: '4em' }}>Iron Beers</h1>

      <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Col xs="10">
          <div
            style={{
              backgroundImage: `url(${AllBeerPic})`,
              backgroundSize: 'cover',
              padding: '2em',
            }}
          >
            <Link to="/all-beers">
              <button
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  border: '0',
                }}
              >
                <h2>All Beers</h2>
              </button>
            </Link>

            <p
              style={{
                color: 'black',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                border: '0',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              neque ad odio, amet quae labore officia numquam iusto eveniet
              quaerat, necessitatibus ratione tempore omnis iste, sint ex facere
              aspernatur ab!
            </p>
          </div>
        </Col>
      </Row>

      <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Col xs="10">
          <div
            style={{
              backgroundImage: `url(${RandBeerPic})`,
              backgroundSize: 'cover',
              padding: '2em',
            }}
          >
            <Link to="/random-beer">
              <button
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  border: '0',
                }}
              >
                <h2>Random Beer</h2>
              </button>
            </Link>

            <p
              style={{
                color: 'black',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                border: '0',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              neque ad odio, amet quae labore officia numquam iusto eveniet
              quaerat, necessitatibus ratione tempore omnis iste, sint ex facere
              aspernatur ab!
            </p>
          </div>
        </Col>
      </Row>

      <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Col xs="10">
          <div
            style={{
              backgroundImage: `url(${NewBeerPic})`,
              backgroundSize: 'cover',
              padding: '2em',
            }}
          >
            <Link to="/new-beer">
              <button
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  border: '0',
                }}
              >
                <h2>New Beer</h2>
              </button>
            </Link>

            <p
              style={{
                color: 'black',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                border: '0',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              neque ad odio, amet quae labore officia numquam iusto eveniet
              quaerat, necessitatibus ratione tempore omnis iste, sint ex facere
              aspernatur ab!
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
