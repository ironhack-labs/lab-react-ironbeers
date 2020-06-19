import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import axios from 'axios';

import Header from './components/Header';
import Home from './components/Home';
import ListBeers from './components/ListBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Beer from './components/Beer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    beers: [],
    filteredBeers: []
  };

  componentDidMount() {
    
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      console.log('mounted')
      this.setState({
        beers: res.data,
      }, () => {
        console.log(this.state.beers)
      });
    });
  }

  handleAdd = (event) => {
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

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((res) => {
        console.log('created')
        this.setState({
          beers: [...this.state.beers, res.data],
        }, () => {
            this.props.history.push("/")
        })
      })
  }

  handleFilter = (event) => {
    event.preventDefault();
    console.log(event.target.value)

    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${event.target.value}`)
      .then((res) => {
        console.log(res.data)
        this.setState({
          filteredBeers: res.data
        })
      })
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/beers"
            render={() => {
              return <ListBeers beers={!this.state.filteredBeers ? this.state.beers : this.state.filteredBeers} onFilter={this.handleFilter} />;
            }}
          />
          <Route
            exact
            path="/beers/:beerId"
            render={(routeProps) => {
              return <Beer {...routeProps} />;
            }}
          />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" render={() => {
            return <NewBeer onAdd={this.handleAdd} />
          }} />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
