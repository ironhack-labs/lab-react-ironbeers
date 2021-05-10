import React, { Component } from 'react'
import axios from "axios";

class RandomBeer extends Component {
  state = {
    randomBeer: [],
  };

  // getRandom = () => {
  //   const min = 0;
  //   const max = this.state.allContacts.length;
  //   let i = Math.floor(Math.random() * (max - min) + min);
  //   const copyContacts = [...this.state.contacts];
  //     copyContacts.unshift(this.state.allContacts[i]);
  //   console.log(this.state.allContacts[i]);
  //   this.setState({ contacts: copyContacts })
  //   }

  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((randomBeer) => {
        console.log(randomBeer.data);
        this.setState({ randomBeer: randomBeer.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    console.log('rendered');
    return (
      <div>
           <div>
        <img src={this.state.randomBeer.image_url} alt=""/>
        <div>
        <h2>{this.state.randomBeer.name} </h2>
        <p>{this.state.randomBeer.tagline}</p>
        <p>{this.state.randomBeer.attenuation_level}</p>
        <p>{this.state.randomBeer.description}</p>
        <p>{this.state.randomBeer.contributed_by}</p>
        <h3>first Brewed Date: {this.state.randomBeer.first_brewed}</h3>
        </div>
      </div>
      </div>
    )
  }
}
export default RandomBeer; 