import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { getBeers } from "../services/BeerService"
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Home() {

    const [beers, setBeers] = React.useState([])
    React.useEffect(() => {
        getBeers().then(beers => setBeers(beers))
    }, [])

    return (
        <Container>
            <Grid container spacing={2} pt={4}>
                {beers.length ?
                    beers.map(({ _id, image_url, name, tagline, contributed_by }) => (
                        <Grid item xs={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <Link to={`/beers/${_id}`} style={{ textDecoration: "none" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={image_url}
                                            alt="img"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {tagline}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {contributed_by}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Link>
                            </Card>
                        </Grid>
                    )) :
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                }
            </Grid>
        </Container>
    );
}