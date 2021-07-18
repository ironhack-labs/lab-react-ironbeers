import React, { useState, useEffect } from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
  CircularProgress,
} from '@material-ui/core';
import axios from 'axios';

function RandomBeer() {
  const [beerDetails, updateDetails] = useState(null);

  useEffect(() => {(
    async () => {
      let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');

      updateDetails(response.data);
    })();
  }, [])

  return (
    <div>
      {
        !beerDetails ? (
          <Container className="container" maxWidth="sm">
            <CircularProgress id="loading" variant="primary" />
          </Container>
        ) : (
          <Container maxWidth="sm">
            <Card className="card-container">
              <CardActionArea>
                <CardMedia className="beer-image" image={beerDetails.image_url} />
                <CardContent className="card-content">
                  <p>
                    Name:
                    <Typography gutterBottom variant="h5" component="h5">
                      <b>{beerDetails.name}</b>
                    </Typography>
                  </p>
                  <p>
                    Tagline:
                    <Typography gutterBottom variant="h6" component="h6">
                      {beerDetails.tagline}
                    </Typography>
                  </p>
                  <p>
                    First Brewed:
                    <Typography gutterBottom variant="h6" component="h6">
                      {beerDetails.first_brewed}
                    </Typography>
                  </p>
                  <p>
                    Attenuation Level:
                    <Typography gutterBottom variant="h6" component="h6">
                      {beerDetails.attenuation_level}
                    </Typography>
                  </p>
                  <p>
                    Description:
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {beerDetails.description}
                    </Typography>
                  </p>
                  <p>
                    Contributed By:
                    <Typography gutterBottom variant="h6" component="h6">
                      {beerDetails.contributed_by}
                    </Typography>
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Container>
        )
      }
    </div>
  );
}

export default RandomBeer;
