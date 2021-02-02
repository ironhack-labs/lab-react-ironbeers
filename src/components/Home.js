import React from 'react';
import {
  Link,
} from "react-router-dom";
import allBeersImg from '../assets/all-beers.jpg';
import randomBeerImg from '../assets/random-beer.jpg';
import newBeerImg from '../assets/new-beer.jpg';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: "100vw",
  },
  media: {
    height: 350,
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={allBeersImg} 
            title="all beers"              
          />
          <CardContent>
            <Link to="/beers">
              <Typography gutterBottom variant="h5" component="h2">
                All beers
              </Typography>
            </Link>
            <Typography variant="body2" color="textSecondary" component="p">
              Here you can see the listing of all the beers.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={randomBeerImg} 
            title="random beer"              
          />
          <CardContent>
            <Link to="/random-beer">
              <Typography gutterBottom variant="h5" component="h2">
              Random Beer
              </Typography>
            </Link>
            <Typography variant="body2" color="textSecondary" component="p">
              Click here and the app will select one random beer for you
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>   

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={newBeerImg} 
            title="new beer"              
          />
          <CardContent>
            <Link to="/new-beer">
              <Typography gutterBottom variant="h5" component="h2">
              New Beer
              </Typography>
            </Link>
            <Typography variant="body2" color="textSecondary" component="p">
              Not seeing your beer ? Add a new one
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>          
    </>
  )
}
