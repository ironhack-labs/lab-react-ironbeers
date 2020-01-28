import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import BeersList from '../BeersList/BeersList';
import SingleBeer from '../SingleBeer/SingleBeer';
import NewBeerForm from '../NewBeerForm/NewBeerForm';
import Home from '../Home/Home';
import './App.css';
import axios from 'axios';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      singleBeer: {},
      queryString: '',
    };
    this.getRandomBeer = this.getRandomBeer.bind(this);
    this.getSingleBeerById = this.getSingleBeerById.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.searchBeer = this.searchBeer.bind(this)
  }

  componentDidMount = async () => {
    try {
      const beerList = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      this.setState({
        beers: beerList.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // função copiada do repo da giurop @ github
  handleFormSubmit(data) {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = data;

    const IronBeers = axios.create({
      baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
    });

    IronBeers.post('/new', {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    })
      .then((message) => console.log(message))
      .catch((err) => console.log('Error getting the beers', err));
  }

  getRandomBeer() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        console.log('random beer ok: ', response.data);
        this.setState({
          singleBeer: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async getSingleBeerById(id) {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      this.setState({
        singleBeer: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // função copiada parcialmente do repo da giurop @ github
  searchBeer(string) {
    const IronBeers = axios.create({
      baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
    });

    IronBeers.get(`/search?q=${string}`)
      .then((allSearchedBeers) => {
        let searchedBeers = allSearchedBeers.data;
        this.setState({
          beers: searchedBeers,
          queryString: string,
        });
      })
      .catch((err) => console.log('Error getting the beers', err));
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Home getRandomBeer={this.getRandomBeer} {...props} />;
            }}
          />
          <Route
            exact
            path="/beers"
            render={(props) => {
              return (
                <BeersList
                  beersList={this.state.beers}
                  queryString={this.state.queryString}
                  getSingleBeer={this.getSingleBeerById}
                  searchBeers={this.searchBeer}
                  {...props}
                />
              );
            }}
          />
          <Route
            exact
            path="/beers/:id"
            render={(props) => {
              return (
                <SingleBeer singleBeer={this.state.singleBeer} {...props} />
              );
            }}
          />
          <Route
            exact
            path="/random-beer"
            render={(props) => {
              return (
                <SingleBeer singleBeer={this.state.singleBeer} {...props} />
              );
            }}
          />
          <Route
            exact
            path="/new-beer"
            render={(props) => {
              return (
                <NewBeerForm
                  handleFormSubmit={this.handleFormSubmit}
                  {...props}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
