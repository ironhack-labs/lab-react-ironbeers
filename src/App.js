import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import BeersDetail from './components/BeersDetail';
import axios from 'axios';

class App extends Component {

  state = {
    beers: []
  }

  async componentDidMount() {
    try {
        let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        console.log(response.data, 'hello')
        this.setState({
        beers: response.data
      })
    }
    catch(error) {
      console.log('Failed to fetch beers ', error)
    }
  } 

  handleAddBeer = (event) => {
    event.preventDefault();
    let newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      firstBrewed: event.target.firstBrewed.value,
      brewwerTips: event.target.brewerTips.value,
      attenuationLevel: event.target.attenuationLevel.value,
      contributedBy: event.target.contributedBy.value,
    }
    axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
    .then((response) => {
      this.setState({
        beers: [response.data, ...this.state.beers]
      }, () => {
        this.props.history.push('/')
      })
    })
    .catch((error) => {
      console.log('Adding beer failed ', error)
    })
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path={'/'} render={() => {
            return <Home />
          }} />
          <Route exact path ={'/beers'} render={() => {
            return <Beers beers={this.state.beers}/>
          }} /> 
          <Route path={'/beers/:beerId'} render={(routeProps) => {
            return <BeersDetail {...routeProps} />
          }} />
          <Route path={'/random-beer'} render={() => {
            return <RandomBeer />
          }} />
          <Route path={'/new-beer'} render={() => {
            return <NewBeer onAdd={this.handleAddBeer}/>
          }} />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
