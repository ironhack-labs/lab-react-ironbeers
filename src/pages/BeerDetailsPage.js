import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Image, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import HomeBar from '../components/HomeBar';

export default function BeerDetailsPage(props) {
  const [beer, setBeer] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((foundBeer) => {
        console.log(foundBeer);
        setBeer(foundBeer.data);
      });
  }, [id]);

  console.log(beer);

  return (
    <>
      <HomeBar />
      <Container>
        <Row>
          <h1>Beer Details</h1>
        </Row>
        <Row sm={1} md={2} lg={2}>
          <Col sm="6">
            <Image src={beer.image_url} alt={beer.name} fluid />
          </Col>
          <Col sm="6">
            <p>
              <b>Name: </b>
              {beer.name}
            </p>
            <p>
              <b>Tagline:</b>
              {beer.tagline}
            </p>
            <p>
              <b>First brewed: </b>
              {beer.first_brewed}
            </p>
            <p>
              <b>Attenuation level: </b>
              {beer.attenuation_level}
            </p>
            <p>
              <b>Description: </b>
              {beer.description}
            </p>
            <p>
              <b>Contributed by: </b>
              {beer.contributed_by}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
