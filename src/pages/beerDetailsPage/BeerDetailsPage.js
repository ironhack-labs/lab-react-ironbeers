import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Card } from 'react-bootstrap';
import NavBar from '../../components/navbar/NavBar';

import './BeerDetailsPage.css';

function BeerDetailsPage() {
  const [beer, setBeer] = useState({});

  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => setBeer(response.data))
      .catch((e) => console.log(e.message));
  }, [beerId]);

  const cleanText = (text) => {
    if (text && text.indexOf('<') > 0) return text.slice(0, text.indexOf('<'));
    else return 'Unknown';
  };
  return (
    <>
      <NavBar />
      <section
        id="beer-details"
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
              <p>{beer.description}</p>
            </Card.Text>
            <Card.Text>Created by: {cleanText(beer.contributed_by)}</Card.Text>
          </Card.Body>
        </Card>
      </section>
    </>
  );
}

export default BeerDetailsPage;
