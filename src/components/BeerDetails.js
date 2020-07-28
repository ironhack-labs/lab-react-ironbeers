import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';
import Axios from 'axios';

const BeerDetails = (props) => {
  const initialState = {
    id: props.match.params.beerId,
    beerDetails: {},
  };
  const [beer, setBeer] = useState(initialState);

  const getBeerDetails = () => {
    Axios.get('https://ih-beers-api2.herokuapp.com/beers/' + beer.id).then(
      (res) => {
        console.log(res.data);
        setBeer({ beerDetails: res.data });
      }
    );
  };

  useEffect(() => getBeerDetails());

  return (
    <div>
      <NavigationBar />
      <Container className="mt-5">
        <Row>
          <Col lg={12}>
            <div className="beer-details---wrapper">
              <img
                src={beer.beerDetails.image_url}
                alt={beer.beerDetails.name}
              />
              <div className="d-flex align-items-center">
                <div className="beer-details---col">
                  <h1>{beer.beerDetails.name}</h1>
                  <p className="beer-details---tagline">
                    {beer.beerDetails.tagline}
                  </p>
                </div>
                <div className="beer-details---col text-right">
                  <p className="beer-details---attenuation-level">
                    {beer.beerDetails.attenuation_level}
                  </p>
                  <p className="beer-details---first-brewed">
                    {beer.beerDetails.first_brewed}
                  </p>
                </div>
              </div>
              <p className="beer-details---description">
                {beer.beerDetails.description}
              </p>
              <p className="beer-details---contributor">
                {beer.beerDetails.contributed_by}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BeerDetails;
