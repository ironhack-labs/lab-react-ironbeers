import React from 'react';

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'



const Home = () => {
  

  return (
    <div>
      <Link to={`/beers`}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>All Beers</Card.Title>
          </Card.Body>
        </Card>
      </Link>
      <Link to={`/random-beer`}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Random Beers</Card.Title>
          </Card.Body>
        </Card>
      </Link>
      <Link to={`/new-beer`}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>New Beer</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
 }

 export default Home