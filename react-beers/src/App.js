import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import NavBar from './components/misc/NavBar';
import Home from './components/Home';
import BeerForm from './components/BeerForm';
import BeerItem from './components/BeerItem';
import BeerList from './components/BeerList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <div className="section">
          <div className="container"> */}
            <Switch >
              <Route exact path='/home' component={Home}/>
              <Route exact path='/beers' component={BeerList}/>
              <Route exact path='/random-beer' component={BeerItem}/>
              <Route exact path='/new-beer' component={BeerForm}/>

              <Redirect to='/home'/>
            </Switch>
          {/* </div>
        </div> */}
      </div>
    );
  }
}

export default App;
