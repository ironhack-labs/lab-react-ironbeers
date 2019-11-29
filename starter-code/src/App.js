import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link, Switch} from "react-router-dom"
import './App.css';
import Home from "./Home"
import AllBeers from "./AllBeers"
import SingleBeer from "./SingleBeer"
import RandomBeer from "./RandomBeer"
import NewBeer from "./NewBeer"


class Header extends Component{
  render(){
    return (
      <nav style={{backgroundColor: "blue", height: "3vh"}}>
        <Link to={"/"}><img src="" alt=""/>Link</Link>
      </nav>
    )
  }
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path={"/"} component={Home} />
        <Route path={"/beers"} component={Header} />
        <Route exact path={"/beers"} component={AllBeers} />
        <Switch>
          <Route exact path={"/beers/random"} component={RandomBeer} />
          <Route exact path={"/beers/new"} component={NewBeer} />
          <Route exact path={"/beers/:id"} component={SingleBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
