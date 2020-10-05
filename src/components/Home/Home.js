import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import AllBeers from '../AllBeers/AllBeers';
import './Home.css';

function Home() {
  return (
    <div className="">
      <BrowserRouter>
        <div className="container-fluid">
          <Link to="/allbeers">
            <img className="img-fluid img-home" src="../beers.png" />
            <h2>All beers</h2>
          </Link>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="container-fluid">
          <img className="img-fluid img-home" src="../random-beer.png" />
          <h2>Random beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </div>
        <div className="container-fluid">
          <img className="img-fluid img-home" src="../new-beer.png" />
          <h2>New beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/allbeers" exact component={AllBeers}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Home;
