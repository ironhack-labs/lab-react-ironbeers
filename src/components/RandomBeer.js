import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Image, Label, Grid, Item } from 'semantic-ui-react';

import './styles/SingleBeer.css'

const RandomBeer = () => {
  const [random, setRandom] = useState({});
  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        setRandom(response.data);
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
          src={random.image_url}
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
                        <Item.Header as="h1">{random.name}</Item.Header>
                        <Item.Meta>{random.tagline}</Item.Meta>
                      </Item.Content>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <p>
                        Attenuation Level:{' '}
                        <b style={{ fontSize: '30px', color: 'grey' }}>
                          {random.attenuation_level}
                        </b>
                      </p>
                      <p>
                        First Brewed: <b>{random.first_brewed}</b>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Container text textAlign="left">
                    <p>{random.description}</p>

                    <Item.Extra>
                      <Label>{random.contributed_by}</Label>
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

export default RandomBeer;
