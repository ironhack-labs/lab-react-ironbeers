import React from 'react';
import './App.css';
import HomePage from './pages/homePage/HomePage';
import AllBeersPage from './pages/allBeersPage/AllBeersPage';
import CreateBeerPage from './pages/createBeerPage/CreateBeerPage';
import RandomBeerPage from './pages/randomBeerPage/RandomBeerPage';
import SingleBeer from './components/singleBeer/SingleBeer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/beers" component={AllBeersPage} />
            <Route exact path="/random-beer" component={RandomBeerPage} />
            <Route exact path="/new-beer" component={CreateBeerPage} />
            <Route exact path="/beers/:id" component={SingleBeer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
