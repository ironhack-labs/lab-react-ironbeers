import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Home from './components/Home';
import BeerList from './components/BeerList';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer'
import Error from './components/Error'

class App extends Component {
  state = {
    beers: [],
    filteredBeers: []
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      this.setState({
        beers: res.data,
        filteredBeers: res.data
      });
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = event.currentTarget;

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: name.value,
        tagline: tagline.value,
        description: description.value,
        first_brewed: first_brewed.value,
        brewers_tips: brewers_tips.value,
        attenuation_level: attenuation_level.value,
        contributed_by: contributed_by.value,
      })
      .then((res) => {
        let newBeer = res.data;
        let cloneBeers = JSON.parse(JSON.stringify(this.state.beers));
        cloneBeers.unshift(newBeer);
        this.setState(
          {
            beers: cloneBeers,
          },
          () => {
            this.props.history.push('/beers');
          }
        );
      });
  };

  handleSearch = (event) => {
    let searchName = event.currentTarget.value;
    let cloneBeers = this.state.beers.filter((beer) => {
      return beer.name.toLowerCase().includes(searchName.toLowerCase())
    })
    this.setState({
      filteredBeers: cloneBeers
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/beers"
          render={() => {
            return <BeerList beers={this.state.filteredBeers} handleSearch={this.handleSearch}/>;
          }}
        />
        <Route
          path="/beers/:id"
          render={(routeProps) => {
            return <BeerDetails {...routeProps} />;
          }}
        />
        <Route
          path="/random-beer"
          render={(routeProps) => {
            return <RandomBeer />;
          }}
        />
        <Route
          path="/new-beer"
          render={(routeProps) => {
            return <NewBeer onSubmit={this.handleSubmit} {...routeProps} />;
          }}
        />
          <Route path="*" component={Error} />
      </Switch>
    );
  }
}

export default withRouter(App);