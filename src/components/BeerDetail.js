import React, { Component } from 'react';
import axios from 'axios';

class BeerDetail extends Component {
state = {
    beer: {}
}

componentDidMount = () => {
    let id = this.props.match.params.id
    axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((response) => {
            console.log(response.data)
            this.setState({beer: response.data})
        })
    }

  render() {
    const beer = this.state.beer;
    return (
        <div>
            <p><img className="beerImage" src={beer.image_url} alt={beer.name}/></p>
            <h2>{beer.name}</h2> 
            <h2>{beer.attenuation_level}</h2>
            <h3>{beer.tagline}</h3>
            <h3>First Brewed: {beer.first_brewed}</h3>
            <p><em>{beer.description}</em></p>
            <p><b>Created by:</b> {beer.contributed_by}</p>     
        </div>
    );
  }
}

export default BeerDetail;