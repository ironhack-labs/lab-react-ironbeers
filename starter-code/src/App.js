import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './Components/Home';
import BeerList from './Components/BeerList';
import BeerDetail from './Components/BeerDetail';
import { Switch, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/beers" component={BeerList}></Route>
          <Route exact path='/beers/:id' render={(props) => <BeerDetail {...props} random={false} />}></Route>
          <Route exact path='/random-beer' render={(props) => <BeerDetail {...props} random={true} />}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
