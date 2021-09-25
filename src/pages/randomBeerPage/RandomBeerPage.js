import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Card } from 'react-bootstrap';
import NavBar from '../../components/navbar/NavBar';

import './RandomBeerPage.css';

function RandomBeerPage() {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => setBeer(response.data))
      .catch((e) => console.log(e.message));
  }, []);

  const cleanText = (text) => {
    if (text && text.indexOf('<') > 0) return text.slice(0, text.indexOf('<'));
    else return 'Unknown';
  };
  return (
    <>
      <NavBar />
      <section
        id="random-beer"
        className="d-flex align-items-center justify-content-center"
      >
        <Card className="beer-card mt-sm-5">
          <div className="beer-img-container p-5">
            <Card.Img src={beer.image_url} className="beer-img" />
          </div>
          <Card.Body>
            <Card.Title>{beer.name}</Card.Title>
            <Card.Subtitle className="mb-2 ">{beer.tagline}</Card.Subtitle>
            <Card.Text>
              <span>First brewed: {beer.first_brewed}</span>
              <br />
              <span>Attenuation level: {beer.attenuation_level}</span>
            </Card.Text>

            <Card.Text className="description">
              <span>{beer.description}</span>
            </Card.Text>
            <Card.Text>Created by: {cleanText(beer.contributed_by)}</Card.Text>
          </Card.Body>
        </Card>
      </section>
    </>
  );
}

export default RandomBeerPage;
