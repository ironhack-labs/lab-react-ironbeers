import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import SingleBeerDetails from "./pages/SingleBeerDetails";
import AddBeer from "./pages/AddBeer";
import NotFound from "./pages/NotFound";
import apiHandler from "./apiHandler";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faHome } from "@fortawesome/free-solid-svg-icons";
const api = new apiHandler();
library.add(fab, faCheckSquare, faHome);

class App extends Component {
  state = {
    beers: []
  };

  fetchBeers = () => {
    api
      .fetchBeers("/")
      .then(result => {
        this.setState({
          beers: result.data
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleSearch = e => {
    api
      .searchBeers(e.target.value)
      .then(result => {
        // console.log(result.data);
        this.setState({
          beers: result.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.fetchBeers();
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/beers" render={routeProps => <AllBeers {...routeProps} beers={this.state.beers} handleSearch={this.handleSearch} />}></Route>
          <Route exact path="/random" render={routeProps => <SingleBeerDetails {...routeProps} endpoint="/random" key={Math.random()} />}></Route>
          <Route path="/beers/:id" component={SingleBeerDetails}></Route>
          <Route exact path="/add" component={AddBeer}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
