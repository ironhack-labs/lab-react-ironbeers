import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import { Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';
import BeerDetails from './BeerDetails';

const RandomBeerPage = () => {
  const initialState = {
    randomBeerDetails: {},
  };
  const [randomBeer, setRandomBeer] = useState(initialState);

  const getRandomBeerDetails = () => {
    Axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then((res) =>
      setRandomBeer({ randomBeerDetails: res.data })
    );
  };

  useEffect(() => getRandomBeerDetails(), []);

  const {
    image_url,
    name,
    tagline,
    attenuation_level,
    first_brewed,
    description,
    contributed_by,
  } = randomBeer.randomBeerDetails;

  return (
    <div>
      <NavigationBar />
      <Container className="mt-5">
        <Row>
          <Col lg={12}>
            <BeerDetails
              image_url={image_url}
              name={name}
              tagline={tagline}
              attenuation_level={attenuation_level}
              first_brewed={first_brewed}
              description={description}
              contributed_by={contributed_by}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RandomBeerPage;
