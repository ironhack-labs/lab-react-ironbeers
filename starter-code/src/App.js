import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
// import './App.css';
import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import BeerDetail from "./pages/BeerDetail";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Login from './pages/Login'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/beers" component={AllBeers}/>
                    <Route path="/random-beer" component={RandomBeer}/>
                    <Route path="/new-beer" component={NewBeer}/> 
                    <Route path="/beers/:beerId" component={BeerDetail}/>
                    <Route path="/auth/signup" component={Signup}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/auth/login" component={Login}/>
                </Switch>
            </div>
        );
    }
}

export default App;
