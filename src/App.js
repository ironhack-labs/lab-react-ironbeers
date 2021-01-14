import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AllBeers from './components/AllBeers'
import Home from './components/Home'
import SingleBeer from './components/SingleBeer'
import OneBeer from './components/OneBeer'
import AddBeer from './components/AddBeer'
class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/beers' component={AllBeers}></Route>
          {/* Route is setting props.match.params.theID for us in the component */}
          <Route exact path='/random' component={SingleBeer}></Route>
          <Route path='/beers/:_id' component={OneBeer}></Route>
          <Route exact path='/new' component={AddBeer}></Route>
        </Switch>
      </div>
    );
  }
}


export default App;
