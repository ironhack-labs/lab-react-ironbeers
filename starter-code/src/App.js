import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link, Switch} from "react-router-dom"
import './App.css';
import Home from "./Home"
import AllBeers from "./AllBeers"
import SingleBeer from "./SingleBeer"
import RandomBeer from "./RandomBeer"
import NewBeer from "./NewBeer"
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";



class Header extends Component{
  render(){
    return (
      <nav style={{backgroundColor: "rgb(0,196,252)", height: "6vh", display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <Link style={{color: "white"}} to={"/"}><img src="" alt=""/><Icon size={32} icon={home} /></Link>
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
