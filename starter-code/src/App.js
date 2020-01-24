import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import Beers from './components/beers';
import RandomBeer from './components/randombeer';
import OneBeer from './components/onebeer';
import NewBeer from './components/newbeer';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
class App extends Component {

  state = {
    name: null,  
    firstbrewerd: null,
    brewerstips: null,
    attenuationlevel: null,
    contibutedby: null,
    tagline: null,
    description: null,
    beer: false
  };

  changeState = (name, value) => {
    this.setState({
      [name]: value
    })
  };

  addBeer = () => {
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
      name: this.state.name,  
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewerd: this.state.firstbrewerd,
      brewers_tips: this.state.brewerstips,
      attenuation_level: this.state.attenuationlevel,
      contibuted_by: this.state.contibutedby
    }
    ).then(response => {console.log(response) })
    .catch(error => { console.log(error)})
  };

  searchBeer = (value) => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
    .then(response => { this.setState({beer: response.data}) })
    .catch(error => { console.log(error) });
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => { this.setState({beer: response.data}) })
    .catch(error => { console.log(error) });
    };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/beers' render={ () => <Beers beer={this.state.beer} search={this.searchBeer}/> }/>
          <Route path='/randombeer' component={ RandomBeer }/>
          <Route path='/onebeer/:id' component={ OneBeer }/>
          <Route path='/newbeer' render={ () => <NewBeer name={this.changeState} button={this.addBeer}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
