import React from 'react'

import { Link } from 'react-router-dom'

import './index.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


const Home = () => {
    return (
      <div>
        <Link to="/beers">
          <Col md={4}>
            <Card className="beer-card">
              <Card.Img variant="top" src="../../../images/allbeers.jpg" />
              <Card.Body>
                <Card.Title>
                  <h3>All Beers</h3>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                  molestias repellat id illo enim autem at doloribus corrupti
                  nemo. Numquam maiores doloribus officia velit recusandae
                  placeat, veniam reiciendis vel minus.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Link>
        <Link to="/random-beers">
          <Col md={4}>
            <Card className="beer-card">
              <Card.Img variant="top" src="../../../images/randombeer.jpg" />
              <Card.Body>
                <Card.Title>
                  <h3>Random Beer</h3>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                  molestias repellat id illo enim autem at doloribus corrupti
                  nemo. Numquam maiores doloribus officia velit recusandae
                  placeat, veniam reiciendis vel minus.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Link>
        <Link to="/new-beer">
          <Col md={4}>
            <Card className="beer-card">
              <Card.Img variant="top" src="../../../images/newbeer.jpg" />
              <Card.Body>
                <Card.Title>
                  <h3>New Beer</h3>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                  molestias repellat id illo enim autem at doloribus corrupti
                  nemo. Numquam maiores doloribus officia velit recusandae
                  placeat, veniam reiciendis vel minus.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Link>
      </div>
    );
}

export default Home
