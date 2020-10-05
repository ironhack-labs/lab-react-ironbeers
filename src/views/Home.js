import React, { Component } from 'react';
import {
  getAllBeers,
  getRandomBeer,
  addNewBeer,
  searchBeers,
} from '../services/IronBeersAPI';
import ListBeers from './ListBeers';
import BeerDetails from './BeerDetails';
import NewBeer from './NewBeer';

import { Link, Switch, Route } from 'react-router-dom';

class Home extends Component {
  /** */
  state = {
    beers: [],
    link: '/',
    randBeer: {},
  };

  /** */
  componentDidMount = () => {
    console.log(' home componentDidMount');
    this.fetchBeers();
  };

  /** */
  fetchBeers = () => {
    getAllBeers()
      .then((beers) => {
        this.setState({ beers });
      })
      .catch((error) => console.log(error));
  };

  /** */
  fetchRandomBeer = () => {
    getRandomBeer()
      .then((randBeer) => this.setState({ randBeer: randBeer }))
      .catch((error) => console.log(error));
  };

  updateDispLink = (link) => {
    if (link === '/random-beer') {
      this.fetchRandomBeer();
    }
    this.setState({ link });
  };

  componentDidUpdate = (prevState) => {
    console.log(' home componentDidUpdate');

    // if (this.state.link === '/new-beer') {
    //   return <Redirect to="/" />;
    // }
  };

  getNewBeer = (data) => {
    addNewBeer(data)
      .then((addResp) => {
        this.fetchBeers();
      })
      .catch((error) => console.log(error));
  };
  //  onClick={() => this.updateDispLink('/all-beers')}
  /** */
  getLinks = () => {
    // All beers link
    const allBeers = (
      <div>
        <img src="/images/beers.png" className="img-fluid" alt=" " />
        <div className="text-left">
          <Link
            to="/all-beers"
            onClick={() => this.updateDispLink('/all-beers')}
          >
            <h2>All Beers</h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    );
    // random beer link
    const randBeer = (
      <div>
        <img src="/images/random-beer.png" className="img-fluid" alt="" />
        <div className="text-left">
          <Link
            to="/random-beer"
            onClick={() => this.updateDispLink('/random-beer')}
          >
            <h2> Random Beer </h2>{' '}
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    );
    // new beer
    const newBeer = (
      <div>
        <img src="/images/new-beer.png" className="img-fluid" alt="" />
        <div className="text-left">
          <Link to="/new" onClick={() => this.updateDispLink('/new')}>
            <h2> New Beer </h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    );

    return (
      <ul className="list-group">
        <li className="list-group-item"> {allBeers} </li>
        <li className="list-group-item"> {randBeer}</li>
        <li className="list-group-item"> {newBeer} </li>
      </ul>
    );
  };

  searchBeer = (srchKey) => {
    console.log(' search beers of home ', srchKey);
    searchBeers(srchKey)
      .then((srchResp) => {
        this.setState({ beers: srchResp });
      })
      .catch((error) => console.log(error));
  };

  createRoutes = () => {
    return (
      <Switch>
        <Route exact path="/" Component={Home} />

        <Route
          exact
          path="/new"
          render={(props) => <NewBeer {...props} addBeer={this.getNewBeer} />}
        />

        <Route
          exact
          path="/random-beer"
          render={(props) => (
            <BeerDetails
              {...props}
              randBeer={this.state.randBeer}
              isRand={true}
            />
          )}
        />

        <Route
          exact
          path="/beers/:id"
          render={(props) => (
            <BeerDetails {...props} beers={this.state.beers} isRand={false} />
          )}
        />
        <Route
          exact
          path="/all-beers"
          render={(props) => (
            <ListBeers
              {...props}
              searchBeer={this.searchBeer}
              beers={this.state.beers}
            />
          )}
        />
      </Switch>
    );
  };

  /** */
  render = () => {
    return (
      <div className="App">
        {this.state.link.trim() === '/' ? this.getLinks() : null}

        {this.createRoutes()}
      </div>
    );
  };
} // EOF Home Component

export default Home;

/**
 <a href="/all-beers">
          <img src="/images/beers.png" className="img-fluid" />
        </a> */
