import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeView from './views/Home';
import BeerView from './views/Beers';
import RandomBeerView from './views/RandomBeer';
import NewBeerView from './views/NewBeer';
// import Navigation from './components/Navigation';
import { list } from './services/iron-beer-api';
import SingleBeerView from './views/SingleBeer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerList: []
    };
  }

  componentDidMount() {
    list()
      .then(beerList => {
        this.setState({
          beerList
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const beerList = this.state.beerList.slice(0, 50);

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route
              path="/beers"
              render={props => <BeerView {...props} beerList={beerList} />}
            />
            <Route path="/beer/:id" component={SingleBeerView} />
            />
            <Route
              path="/random-beer"
              render={props => (
                <RandomBeerView {...props} beerList={beerList} />
              )}
              // component={Navigation}
            />
            <Route
              path="/new-beer"
              render={props => <NewBeerView {...props} beerList={beerList} />}
              // component={Navigation}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
