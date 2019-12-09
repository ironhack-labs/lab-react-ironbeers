import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import axios from "axios";

//import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Allbeers from "./views/Allbeers";
import Newbeer from "./views/Newbeer";
import Randombeer from "./views/Randombeer";
import Singlebeer from "./views/Singlebeer";
//import Axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  /*   componentDidMount() {
    axios.get(
      "https://ih-beers-api2.herokuapp.com/beers".then(response => {
        this.setState({ beers: response.data });
      })
    );
  } */

  render() {
    const HomeWithRouter = withRouter(Home);
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route path='/randombeer' component={Randombeer} />
            <Route path='/new-beer' component={Newbeer} />
            <Route path='/beers/:id' component={Singlebeer} />
            <Route path='/beers' component={Allbeers} />
            <Route path='/' component={HomeWithRouter} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
