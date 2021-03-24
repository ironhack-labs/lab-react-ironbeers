import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class RandomBeer extends React.Component {

state = {
    randomBeer: [],
}

componentDidMount () {
    this.getRandomBeer()
}

getRandomBeer = async () => {
    try {
   let beerData =  await  axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            this.setState({
            randomBeer: beerData.data
        })
    } catch (error) {
        console.log(error);
    }
}
 
render() {
    return (
      <div>
        <header>
          <Link to="/AllBeers">Back</Link> <br />
          <Link to="/">HomePage</Link>
        </header>
        <h1>RANDOM BEER</h1>
        <div>
          <img width="5%" src={this.state.randomBeer.image_url} alt="" />
          <br />
          <p>Name: {this.state.randomBeer.name}</p>
          <p>Tagline: {this.state.randomBeer.tagline}</p>
          <p>Brewed: {this.state.randomBeer.first_brewed}</p>
          <p>Attenuation level: {this.state.randomBeer.attenuation_level}</p>
          <p>Description: {this.state.randomBeer.description}</p>
          <p>Contrinuted by: {this.state.randomBeer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default RandomBeer;