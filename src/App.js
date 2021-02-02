import React from 'react';
import { BrowserRouter as Router, Link, Switch, withRouter, Route } from 'react-router-dom'
import Header from './components/Header';
import HomeMenu from './components/HomeMenu';
import AllBeers from './components/AllBeers';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="container">

        {
          props.location.pathname === '/' ?
            null :
            <Header />
        }
      
        <Switch>
        <Route exact path="/" component={HomeMenu}/>
          <Route path="/beers" component={AllBeers}/>
          {/* <Route path="/:id" component={BeerDetails}/> */}
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);