import React, { Component } from 'react';
import {
  getAllBeers,
  getRandomBeer,
  addNewBeer,
} from '../services/IronBeersAPI';
import ListBeers from './ListBeers';
import BeerDetails from './BeerDetails';
import NewBeer from './NewBeer';

import { Link, Switch, Route, Redirect } from 'react-router-dom';

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

    if (this.state.link === '/new-beer') {
      return <Redirect to="/" />;
    }
  };

  getNewBeer = (data) => {
    addNewBeer(data)
      .then((addResp) => {
        this.fetchBeers();
      })
      .catch((error) => console.log(error));
  };

  /** */
  getLinks = () => {
    // All beers link
    const allBeers = (
      <Link to="/all-beers" onClick={() => this.updateDispLink('/all-beers')}>
        <div>
          <img src="/images/beers.png" className="img-fluid" alt=" " />
          <div className="text-left">
            <h2>All Beers</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </Link>
    );
    // random beer link
    const randBeer = (
      <Link
        to="/random-beer"
        onClick={() => this.updateDispLink('/random-beer')}
      >
        <div>
          <img src="/images/random-beer.png" className="img-fluid" alt="" />
          <div className="text-left">
            <h2> Random Beer </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </Link>
    );
    // new beer
    const newBeer = (
      <Link to="/new" onClick={() => this.updateDispLink('/new-beer')}>
        <div>
          <img src="/images/new-beer.png" className="img-fluid" alt="" />
          <div className="text-left">
            <h2> New Beer </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </Link>
    );

    return (
      <ul className="list-group">
        <li className="list-group-item"> {allBeers} </li>
        <li className="list-group-item"> {randBeer}</li>
        <li className="list-group-item"> {newBeer} </li>
      </ul>
    );
  };

  createRoutes = () => {
    return (
      <Switch>
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
          render={(props) => <ListBeers {...props} beers={this.state.beers} />}
        />
        <Route exact path="/" Component={Home} />
      </Switch>
    );
  };

  /** */
  render = () => {
    console.log('render current link : ', this.state.link);

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
