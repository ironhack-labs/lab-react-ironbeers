import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Container
} from '@material-ui/core';
import './HomePage.css';

function HomePage() {
    return (
        <Container maxWidth="sm">            
            <Card className="card-container">
                <CardActionArea>
                    <Link className="home-link" to="/beers">
                        <CardMedia className="card-image" id="beers"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                All Beers
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Take a look at our amazing beers!!!
                            </Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
            <Card className="card-container">
                <CardActionArea>
                    <Link className="home-link" to="/random-beer">
                        <CardMedia className="card-image" id="random-beer"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Random Beer
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Pick a random beer from our database!!!
                            </Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
            <Card className="card-container">
                <CardActionArea>
                    <Link className="home-link" to="/new-beer">
                        <CardMedia className="card-image" id="new-beer"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                New Beer
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Create your best beer and add to our database!!!
                            </Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
        </Container>
    );
}

export default HomePage;
