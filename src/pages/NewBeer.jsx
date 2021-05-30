import React, { Component } from 'react';
import FormBeer from '../components/FormBeer'

class NewBeer extends Component {

  addBeer = (beer) => {
    const newBeer = [...this.state.beers, beer]

    this.setState({
      pokemons: newBeer,
    });
  }

  render() {
    return (
      <div>
          <h1>Welcome on new Beer</h1>
          <FormBeer handleNewBeer={this.addBeer}/>
      </div>
      );
  }
}

export default NewBeer;
