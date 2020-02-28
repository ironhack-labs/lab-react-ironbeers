import React, { Component } from 'react';
import './App.css';
import { Switch, Route , Link} from "react-router-dom";
import Beers from "./beers/Beers"
import Ramdom from "./beers/Ramdom"
import New from "./beers/New"
import Menu from './beers/Menu';
import Id from './beers/Id';


import axios from 'axios';


class App extends Component {

  state={
    allBeers:[]
}
    componentDidMount(){
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(allBeers =>  this.setState({allBeers: allBeers.data}),
        )}


  render() {
    return (
      <div className="App">
<Switch>
            <Route
              exact
              path="/"
              render={() => {
                // let allMovies = this.state.movies
                return <Menu></Menu>;
              }}
            />
             <Route
              exact
              path="/random-beer"
              render={() => {
                // let allMovies = this.state.movies
                return <Ramdom></Ramdom>;
              }}
            />
              <Route
              exact
              path="/beers"
              render={() => {
                return <Beers beers={this.state.allBeers}></Beers>;
              }}
            />
             <Route
              exact
              path="/new-beer"
              render={() => {
                // let allMovies = this.state.movies
                return <New></New>;
              }}
            />
            <Route
              exact
              path="/beer/:id"
              render={() => {
                // let allMovies = this.state.movies
                return <Id beers={this.state.allBeers}></Id>;
                
              }}
            />
 </Switch>
      </div>
    );
  }
}

export default App;
