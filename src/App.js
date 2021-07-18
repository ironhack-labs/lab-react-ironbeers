import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import BeersList from './components/BeersList';
import RandomBeer from './components/RandomBeer';
import AddBeer from './components/AddBeer';
import BeerDetails from './components/BeerDetails';
import { Button, Container, Typography } from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/Home';

function App(props) {

  const [beers, updateBeers] = useState([]);

  useEffect(() => {(
    async () => {
      try {
        let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
        updateBeers(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    props.history.push('/');
  }, [beers]);

  const handleAddBeer = async (event) => {
    event.preventDefault();

    let newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      attenuation_level: event.target.attenuation_level.value,
      contributed_by: event.target.contributed_by.value
    }

    try {
      let response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer);

      updateBeers([response.data, ...beers]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Container maxWidth="sm" id="home-container">
          <Typography id="header-brand" component="h1" variant="h1">IronBeers</Typography>
          <Link to="/">
              <Button variant="contained" color="primary" size="large"><HomeRoundedIcon/></Button>
          </Link>
      </Container>

      <Switch>        
        <Route exact path={'/'} render={() => {
          return <HomePage/>
        }}/>
        <Route exact path={'/beers'} render={() => {
          return <BeersList beers={beers}/>
        }}/>
        <Route path={'/beers/:id'} render={(routerProps) => {
          return <BeerDetails {...routerProps} beers={beers}/>
        }}/>
        <Route path={'/random-beer'} render={() => {
          return <RandomBeer/>
        }}/>
        <Route path={'/new-beer'} render={() => {
          return <AddBeer onAddBeer={handleAddBeer}/>
        }}/>
      </Switch>
    </Container>
  );
}

export default withRouter(App);
