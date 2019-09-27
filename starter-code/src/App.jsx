import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeView from "./views/Home";
import BeerView from "./views/Beer";
import NewBeerView from "./views/NewBeer";
import RandomBeerView from "./views/RandomBeer";
import EachBeerView from "./views/EachBeer";
import { list } from "./services/beerapi";

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
    return (
      <div className="App">
        <BrowserRouter>
          <Switch></Switch>
          <Route path="/" exact component={HomeView} />
          <Route
            path="/all"
            render={props => (
              <BeerView {...props} beerList={this.state.beerList} />
            )}
          />
          {/* <Route path="/single/:id" component={EachBeerView} /> */}
          <Route path="/:id" render={props => <EachBeerView {...props} />} />
          <Route path="/random" component={RandomBeerView} />
          <Route path="/new" component={NewBeerView} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
