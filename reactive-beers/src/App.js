import React, { Component } from 'react';
import './App.css';
//import CardMenu from './components/CardMenu';
import { Switch, Route } from  "react-router-dom"
import BeersList from './components/BeersList';
import Home from './components/Home';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';

class App extends Component {
  
  //listCards = () => infoCardsMenu.map((card, i) => <CardMenu key={i} {...card } />)
  
  render() {
    return (
      <div className="App">
        
        {/* <div className="container">
          {this.listCards()}
        </div> */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beers" component={BeersList}/>
          <Route exact path="/beers/:beerId" component={SingleBeer}/>
          <Route path="/random-beer" component={RandomBeer}/>
          <Route path="/new-beer" />
          <Route path="search?q={query}" />
        </Switch>
      </div>
    );
  }

}

export default App;
