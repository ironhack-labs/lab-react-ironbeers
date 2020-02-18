import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link,Route, Switch } from 'react-router-dom';
import AllBeers from "./Components/AllBeers"
import RandomBeer from "./Components/RandomBeer"
import NewBeer from "./Components/NewBeer"
import Home from "./Components/Home"

class App extends Component {


  render() {
    return (
      <div className="App container">


        <Switch>
          <Route exact path="/beers"          render={(props) =>   <AllBeers     {...props} />} />
          <Route exact path="/random-beer"    render={(props) =>   <RandomBeer   {...props} />} />
          <Route exact path="/new-beer"       render={(props) =>   <NewBeer      {...props} />} />
          <Route       path="/"               render={(props) =>   <Home      {...props} />} />
        </Switch>


        {/* <Route path="/new-beer/:id" render={(props) => <NewBeer      {...props} countries={this.state} />} /> */}
        

      </div>
    );
  }
}

export default App;
