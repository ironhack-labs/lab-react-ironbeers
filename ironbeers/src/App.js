import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Home from './Home'
import AllBeers from './AllBeers'
import BeerDetail from './BeerDetail'
import Header from './Header'
import { withRouter } from "react-router";
import './App.css';


function App(props) {
  return (
    <div className="App">
      {props.location.pathname !== "/" && <Header />}
      {props.location.pathname === "/" && <h1>IronBeers</h1>}

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/beers" exact component={AllBeers} />
        <Route path="/beer-detail/:id" exact component={BeerDetail} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </div>
  );
}

// Export an App component that has access to `props.location`, `props.history` and `props.match`
export default withRouter(App);
