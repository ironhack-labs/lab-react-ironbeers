import React, { Component } from 'react';
import './App.css';
import beers from './data/beers';
import Header from './components/Header';
import Card from './components/Card';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beers: [...beers]
    };
  }
  render() {
      const beerCards = this.state.beers
        .map(beer => (
          <Card beers={beer} key={beer.name}/>
      ));
      return (
        <div className="App">
          <Header/>
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column">
                  {beerCards}
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  }

export default App;