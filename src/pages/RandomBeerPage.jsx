import React, { useState, useEffect } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { getRandomBeer } from "../services/BeerService"
import { Link, useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Home() {

    const [beer, setBeer] = useState({})
    useEffect(() => {
        getRandomBeer().then(beer => { setBeer(beer) })
    }, [])

    return (
        <Container>
            <Grid container spacing={2} pt={4}>
                <Grid item xs={4}>
                    {beer.name ? <Card sx={{ maxWidth: 345 }}>
                        <Link to={`/beers/${beer._id}`} style={{ textDecoration: "none" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={beer.image_url}
                                    alt="img"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {beer.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {beer.tagline}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {beer.contributed_by}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                    </Card> :
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                    }
                </Grid>
            </Grid>
        </Container>
    );
}