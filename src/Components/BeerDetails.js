import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class BeerDetails extends React.Component {

state = {
    singleBeer: [],
}

componentDidMount () {
    this.getOneBeer(this.props.match.params.id)
}

getOneBeer = async (id) => {
    try {
   let beerData =  await  axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            this.setState({
            singleBeer: beerData.data
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
        <h1>Beer Details</h1>
        <div>
          <img width="5%" src={this.state.singleBeer.image_url} alt="" />
          <br />
          <p>Name: {this.state.singleBeer.name}</p>
          <p>Tagline: {this.state.singleBeer.tagline}</p>
          <p>Brewed: {this.state.singleBeer.first_brewed}</p>
          <p>Attenuation level: {this.state.singleBeer.attenuation_level}</p>
          <p>Description: {this.state.singleBeer.description}</p>
          <p>Contrinuted by: {this.state.singleBeer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default BeerDetails;