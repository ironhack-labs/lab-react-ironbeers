import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import NavBar from './components/navBar';
import MainPage from './components/MainPage';
import BeerList from './components/BeerList';
import BeerDetail from './components/BeerDetail';
import BeerForm from './components/BeerForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div>
          <Switch>
            <Route exact path="/home" component={MainPage}/>
            <Route exact path="/beers" component={BeerList}/>
            <Route path="/beers/:id" component={BeerDetail}/>
            <Route path="/random" component={BeerDetail}/>
            <Route path="/new" component={BeerForm}/>
      
            <Redirect to="/home"/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
