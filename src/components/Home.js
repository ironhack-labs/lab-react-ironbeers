import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import beers from '../assets/beers.png';
import new_beer from '../assets/new-beer.png';
import random_beer from '../assets/random-beer.png'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));
  
function Home() {

    const classes = useStyles();
    return (
        <div>
            My Home page
            <div className={classes.root}>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        <div className="img-wrapper">
                            <img src={beers} alt="beers" />
                        </div> 
                        <Link to={`/beers`}>All beers</Link>
                        
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        <div className="img-wrapper">
                            <img src={new_beer} alt="beers" />
                        </div>
                        <Link to={`/new`}>New beer</Link>
                        
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        <div className="img-wrapper">
                            <img src={random_beer} alt="beers" />
                        </div>
                        <Link to={`/random`}>Random beer</Link>
                        
                        </Paper>
                    </Grid>

                </Grid>
            </div>
        </div>
    )

}



export default Home;