import './App.css';
import React, { Component } from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import BeerList from './components/BeerList';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import MyCarousel from './components/MyCarousel';

class App extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      this.setState({
        beers: response.data,
      });
    });
  }

  handleAdd = (event) => {
    event.preventDefault();
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = event.target;

    let newBeer = {
      name: name.value,
      tagline: tagline.value,
      description: description.value,
      first_brewed: first_brewed.value,
      brewers_tips: brewers_tips.value,
      attenuation_level: attenuation_level.value,
      contributed_by: contributed_by.value,
    };

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then((response) => {
        this.setState(
          {
            beers: [response.data, ...this.state.beers],
          },
          this.props.history.push('/beers')
        );
      });
  };

  handleSearch = (event) => {
    event.preventDefault();
    let query = event.target.value;
    console.log(query);
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <MyCarousel />
                </div>
              );
            }}
          />
          <Route
            path="/beers"
            render={() => {
              return (
                <div>
                  <div>
                    <input
                      onChange={this.handleSearch}
                      placeholder="Search for a beer"
                    ></input>{' '}
                  </div>
                  <BeerList beers={this.state.beers} />
                </div>
              );
            }}
          />

          <Route
            path="/beer/:beerId"
            render={() => {
              return <BeerDetail />;
            }}
          />

          <Route
            path="/random-beer"
            render={() => {
              return <RandomBeer />;
            }}
          />
        </Switch>

        <Route
          path="/new-beer"
          render={(routeProps) => {
            return <NewBeer onAdd={this.handleAdd} {...routeProps} />;
          }}
        />
      </div>
    );
  }
}

export default withRouter(App);
