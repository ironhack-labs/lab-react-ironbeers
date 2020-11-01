import React, { useState, useEffect } from 'react';
import { Container, Image, Label, Grid, Item } from 'semantic-ui-react';
import axios from 'axios';

import './styles/SingleBeer.css';

const SingleBeer = ({ routerProps }) => {
  const [beer, setBeer] = useState({});
  useEffect(() => {
    let beerId = routerProps.match.params.beerId;

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data);
      });
  }, []);

  return (
    <div>
      <Container
        text
        style={{
          marginTop: '3em',
          marginBottom: '3em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Image
          src={beer.image_url}
          style={{ marginTop: '2em', width: '150px' }}
        />
        <Item.Group>
          <Item>
            <Container text>
              <Grid divided="vertically">
                <Grid relaxed stackable>
                  <Grid.Row>
                    <Grid.Column width={10}>
                      <Item.Content>
                        <Item.Header as="h1">{beer.name}</Item.Header>
                        <Item.Meta>{beer.tagline}</Item.Meta>
                      </Item.Content>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <p>
                        Attenuation Level:{' '}
                        <b style={{ fontSize: '30px', color: 'grey' }}>
                          {beer.attenuation_level}
                        </b>
                      </p>
                      <p>
                        First Brewed: <b>{beer.first_brewed}</b>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Container text textAlign="left">
                    <p>{beer.description}</p>

                    <Item.Extra>
                      <Label>{beer.contributed_by}</Label>
                    </Item.Extra>
                  </Container>
                </Grid>
              </Grid>
            </Container>
          </Item>
        </Item.Group>
      </Container>
    </div>
  );
};

export default SingleBeer;
