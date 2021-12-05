import React from 'react';
import Header from './Header/Header';
import SingleBeer from './SingleBeer/SingleBeer';
import { useState, useEffect } from 'react';
import { Card, Col, Button, Row } from 'antd';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

function Beers() {
  const [beersList, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      console.log('Info recibida', response.data);
      setBeers(response.data);
    });
  }, []);

  return (
    <Row style={{ width: '100%', justifyContent: 'center' }}>
      <Header />
      {beersList.map((beer) => (
        <div key={beer._id} className="card">
          <Col>
            <Card style={{ width: 230, height: 300, margin: 10 }}>
              <img src={beer.image_url} height={60} alt="beer" />
              <h3>{beer.name}</h3>
              <h5>{beer.tagline}</h5>
              <p>Created by: {beer.contributed_by}</p>
              <Button type="primary">
                <Link to={`/beers/${beer._id}`}>More Info</Link>
              </Button>
            </Card>
          </Col>
        </div>
      ))}
    </Row>
  );
}

export default Beers;

