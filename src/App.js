import React from 'react';
import {Route, Switch} from 'react-router-dom'
import HomeMenu from './components/HomeMenu';
import Header from './components/Header';
import BeersList from './components/BeersList'
import BeerDetails from './components/BeerDetails'
import NewBeer from './components/NewBeer'
import {withRouter} from 'react-router'
import './App.css';

const renderHeader = props => props.location.pathname === '/' ? null : <Header />

function App(props) {
  return (
    <div className="App">
      <div className="container">
        { renderHeader(props) }
        <Switch>
          <Route exact path="/" component={HomeMenu}/>
          <Route exact path="/beers" component={BeersList}/>
          <Route path="/new-beer" render={props => {
            return <NewBeer {...props} />
          }}/>
          <Route path="/random-beer" render={props => {
            return <BeerDetails {...props}/>
          }}/>
          <Route path="/beers/:id" render={props => {
            return <BeerDetails {...props}/>
          }}/>
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
