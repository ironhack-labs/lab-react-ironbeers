import React, { Component } from 'react';
import BeerInfo from './BeerInfo';
import axios from 'axios';

class SingleBeer extends Component {
    state = {
        beer: {}
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(beer => {
            this.setState(
                {beer: beer.data}
            )
        })
    }

    render(){
        return(
            <div>
                <BeerInfo
                 image_url={this.state.beer.image_url}
                 name={this.state.beer.name}
                 tagline={this.state.beer.tagline}
                 first_brewed={this.state.beer.first_brewed}
                 attenuation_level={this.state.beer.attenuation_level}
                 description={this.state.beer.description}
                 contributed_by={this.state.beer.contributed_by}
                 />
            </div>
        )
    }
}

export default SingleBeer;