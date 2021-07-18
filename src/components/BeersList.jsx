import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Container,
} from '@material-ui/core';
import './BeersList.css';

function BeersList(props) {
    return (
        props.beers.map((beer, index) => {
            return (
              <Container key={index} maxWidth="sm">
                <Card className="card-container">
                  <CardActionArea>
                    <Link className="home-link" to={`/beers/${beer._id}`}>
                      <CardMedia
                        className="beer-image"
                        image={beer.image_url}
                      />
                      <CardContent className="card-content">
                        <p>
                          Name:
                          <Typography gutterBottom variant="h5" component="h5">
                            <b>{beer.name}</b>
                          </Typography>
                        </p>
                        <p>
                          Tagline:
                          <Typography gutterBottom variant="h6" component="h6">
                            {beer.tagline}
                          </Typography>
                        </p>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                </Card>
              </Container>
            );
        })
    )
}

export default BeersList
