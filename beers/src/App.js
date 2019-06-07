import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { listBeers as ListBeers } from './components/ListBeers';

class App extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    

    return (
      <main>
        <Link to='/beers'>
        <section className="allBeers">
          <img src="/img/beers.png"/>
          <h1>All Beers</h1>
          <p>blablablablablablablablablablablablablablablablablablablablablablablabla</p>
        </section>
        </Link>
        <section className="randomBeer">
          <img src="/img/random-beer.png"/>
          <h1>Random Beers</h1>
          <p>blablablablablablablablablablablablablablablablablablablablablablablabla</p>
        </section>
        <section className="newBeer">
          <img src="/img/random-beer.png"/>
          <h1>New Beer</h1>
          <p>blablablablablablablablablablablablablablablablablablablablablablablabla</p>
        </section>
      <Switch>
          <Route path='/beers' exact component={ListBeers} />
      </Switch>
      </main>
    );
  }
}

export default App;
