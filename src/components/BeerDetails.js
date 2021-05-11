import axios from 'axios';
import React, { Component } from 'react'

export default class BeerDetails extends Component {

    state= {
        beerId: this.props.match.params.id,
        beer: ''
    }

    componentDidMount = () => {

        // if (this.props.match.params.id) {
        //     this.setState({
        //         beerId: this.props.match.params.id,
        //     })
        // } else {
        //     this.setState({
        //         beerId: 'random'
        //     })
        // }

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.state.beerId}`)
        .then(beer => {
            console.log(`https://ih-beers-api2.herokuapp.com/beers/${this.state.beerId}`);
            
            console.log(beer.data);
            this.setState({
                beer: beer.data,
            })
        })
        .catch(err => console.log(err))

    }

    render() {
        
        const beer = this.state.beer;

        return (
            <div className="beerDetailsDiv">
               {beer.name && <h1>{beer.name}</h1>}
                <img src={beer.image_url} style={{width: '20%'}} />
                {beer.tagline && <p>{beer.tagline}</p>}
                {beer.first_brewed && <p>First brewed in {beer.first_brewed}</p>}
                {beer.attenuation_level && <p>Attenuation level: {beer.attenuation_level}</p>}
                {beer.description && <p>{beer.description}</p>}
                {beer.contributed_by && <p>Contributed by {beer.contributed_by}</p>}
            </div>
        )
    }
}
