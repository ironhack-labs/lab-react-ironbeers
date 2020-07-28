import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';
import Axios from 'axios';
import BeerDetails from './BeerDetails';

const BeerDetailsPage = (props) => {
  const initialState = {
    id: props.match.params.beerId,
    beerDetails: {},
  };
  const [beer, setBeer] = useState(initialState);

  const getBeerDetails = () => {
    Axios.get('https://ih-beers-api2.herokuapp.com/beers/' + beer.id).then(
      (res) => {
        setBeer({ beerDetails: res.data });
      }
    );
  };

  useEffect(() => getBeerDetails());

  const {
    image_url,
    name,
    tagline,
    attenuation_level,
    first_brewed,
    description,
    contributed_by,
  } = beer.beerDetails;

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

export default BeerDetailsPage;
