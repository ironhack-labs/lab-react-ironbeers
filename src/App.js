import React from 'react';
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import { Switch, Route, } from 'react-router-dom';
import ListBeers from './components/pages/ListBeers/ListBeers';
import SingleBeer from './components/pages/SingleBeer/SingleBeer'


function App() {
  return (

    <>
      {/* <Navigation /> */}
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        {<Route exact path="/beers" render={() => <ListBeers/>} />}
        {<Route path="/beers/:id" render={() => <SingleBeer />} />}
        {/* { <Route exact path="/random-beer" render={() => <RandomBeer/>} /> } */}
        {/* { <Route path="/new-beer" render={() => <NewBeer />} /> } */} */
      </Switch>
      {/* <Footer /> */}
    </>
  );

}

export default App;
