import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import AllBeers from './components/AllBeers';
import MyNav from './components/MyNav';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import MyCards from './components/MyCards';
import axios from 'axios';
import BeerDetails from './components/BeerDetails';
import Search from './components/Search';
import './App.css';

class App extends Component {
  state = {
    beers: [],
  };

  async componentDidMount() {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers`
      );
      console.log(response.data);
      this.setState({
        beers: response.data,
      });
    } catch (err) {
      console.log('Beers fetch failed', err);
    }
  }

  handleAddBeer = (event) => {
    event.preventDefault();
    console.log(event.target);

    let newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      attenuation_level: +event.target.attenuation_level.value,
      contributed_by: event.target.contributed_by.value,
    };
    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
      .then((response) => {
        this.setState(
          {
            beers: [response.data, ...this.state.beers],
          },
          () => {
            this.props.history.push('/');
          }
        );
      })
      .catch(() => {
        console.log('Creating beer failed');
      });
  };

  handleSearch = (event) => {
    let searchedBeer = event.target.value;
    axios
      .post(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchedBeer}`,
        searchedBeer
      )
      .then((response) => {
        this.setState({
          beers: searchedBeer,
        });
      })
      .catch(() => {
        console.log('Search beer failed');
      });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path={'/'}
            render={() => {
              return <MyCards />;
            }}
          />
          <Route
            path={'/add-beer'}
            render={() => {
              return (
                <>
                  <MyNav />
                  <NewBeer onAdd={this.handleAddBeer} />
                </>
              );
            }}
          />
          <Route
            path={'/random-beer'}
            render={() => {
              return (
                <>
                  <MyNav />
                  <RandomBeer beers={this.state.beers} />
                </>
              );
            }}
          />
          <Route
            exact
            path={'/all-beers'}
            render={() => {
              return (
                <>
                  <MyNav />
                  <Search onSearch={this.handleSearch} />
                  <AllBeers beers={this.state.beers} />
                </>
              );
            }}
          />
          <Route
            exact
            path={`/all-beers/:beerId`}
            render={(routeProps) => {
              return (
                <>
                  <MyNav />
                  <BeerDetails {...routeProps} onAdd={this.handleAddBeer} />
                </>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
