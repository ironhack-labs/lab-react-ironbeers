import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Beers from "./components/Beers/Beers";
import RandomBeer from "././components/RandomBeer/RandomBeer";
import getBeers from "./services/getBeers";
import NewBeer from "././components/NewBeer/NewBeer";
import SingleBeer from "./components/SingleBeer/SingleBeer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

library.add (
  faHome
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeers: []
    }
  }

  async componentDidMount() {
    try {
      const allBeers = await getBeers()
      this.setState({
        allBeers: allBeers
      })
    }
    catch(err) {
      console.log(err);
      throw(err);
    }
  }

  render() {
    return (
      <div className="App col-12">
        <Switch>
        <Route path="/beers/:id" component = {SingleBeer} />
        <Route path="/beers" render={() => <Beers beers={this.state.allBeers}/> } />
        <Route path="/randomBeer" render={() => <RandomBeer/>} />
        <Route path="/newBeer" render={() => <NewBeer/>} />
        <Route path="/" render={() => <Home/>} />
      </Switch>
      </div>
    );
  }
}

export default App;
