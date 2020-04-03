import React, { Component } from 'react';
import './App.css';
import Homepage from "./components/Homepage"
import BeersList from "./components/pages/BeersList"
import SingleBeer from "./components/pages/SingleBeer"
import Signup from "./components/pages/Signup"
import Profile from "./components/pages/Profile"
import Login from "./components/pages/Login"
import Logout from "./components/pages/Logout"
import NewBeer from "./components/pages/NewBeer"
import {Route} from "react-router-dom";
import 'bulma/css/bulma.css';
import Navbar from "./components/Navbar"


class App extends Component {
  
  render() {
    return (
     <div className="App">
      <Navbar/>
      <div className="App">
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/beers" component={BeersList}></Route>
          <Route exact path="/beers/new" component={NewBeer}></Route>
          <Route exact path="/beers/detail/:beerId" component={SingleBeer}></Route>
          <Route exact path="/auth/signup" component={Signup} />
          <Route exact path="/user/profile" component={Profile} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/logout" component={Logout} />
      </div>
      </div>
    );
  }
}

export default App;

//npm install axios react-router-dom query string bulma font-awesome bulma-helpers node-sass qs dotenv --s