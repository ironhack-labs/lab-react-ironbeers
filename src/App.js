import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import NewBeer from './components/NewBeer';
import BeersList from './components/BeersList';
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer';



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => {
        this.setState({
          beers: res.data
        })
      })
  }
  
  render() {
    return (
    <div className="App">
      <Switch>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/beers" render={() => <BeersList />} />
          <Route path="/single-beer/:id" render={(props) => <SingleBeer  {...props} beers={this.state.beers} />} />
          <Route path="/random-beer" render={() => <RandomBeer beers={this.state.beers} />} />
          <Route path="/new-beer" render={() => <NewBeer beers={this.state.beers} />} />
        </Switch>

    </div>
  );
  }
  
}

export default App;
