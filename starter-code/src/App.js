
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Allbeers from "./Allbeers";
import Randombeer from "./Randombeer";
import Newbeer from "./Newbeer";
import "./App.css";
import axios from "axios";

class App extends Component {

  /*   Así lo hago con Axios
  state = {
    beers: []
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(response => {
        this.setState({beers: response.data})
    })
  }  */

  //Así lo hago con Fetch
  state = {
    data: null,
  };

  componentDidMount() {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/allbeers" component={Allbeers} />
          <Route exact path="/randombeer" component={Randombeer} />
          <Route exact path="/newbeer" component={Newbeer} />
        </Switch>
      </div>
    );
  }
}
export default App;



  
  
  

  
  
