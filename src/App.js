import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ListBeers from './components/ListBeers';
import NewBeer from './components/NewBeer';
import RandomBeers from './components/RandomBeers';
import { getAllBeers } from './services/api-client';
import SingleBeer from './components/SingleBeer';

class App extends React.Component {

  state = {
    beers: []
  }

  // componentDidMount() {
  //   getAllBeers()
  //     .then(beers => {
  //       this.setState({
  //         beers : beers
  //       })
  //       console.log(beers)
  //     })
    
      
  // }

  render() {

   

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={ListBeers} />
          <Route exact path='/beers/:id' component={SingleBeer} />
          <Route exact path='/random-beer' component={RandomBeers} />
          <Route exact path='/new-beer' component={NewBeer} />
        </Switch>
      </div>
    );
  }

}

export default App;
