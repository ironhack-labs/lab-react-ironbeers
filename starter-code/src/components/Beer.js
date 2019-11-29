import React, { Component } from 'react'
import axios from 'axios'

export default class Beer extends Component {
    
    state = {
        beer: null
    }
    
    
    componentDidMount() {
        if (this.props.match.params.beerId) {
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
            console.log(response);
            this.setState({
                beer: response.data.find(beer => {
                   return beer._id === this.props.match.params.beerId // matches App.js component route
                })
            })

    })
.catch(err => {
    console.log(err);
})
        } else {
            axios
            .get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => {
                console.log(response);
                this.setState({
                    beer: response.data
                

                })
    
        })
    .catch(err => {
        console.log(err);
    })
        }
    }
    
    
    render() {

        if (this.state.beer === null) {
            return <div />
        }

        console.log(this.state.beer)
        const beer = this.state.beer
        return (
            <div>
                <div>
                <div>
                    <img src={beer.image_url} alt='' />
                </div>
                <h1>{beer.name}</h1>
                <h1>{beer.attenuation_level}</h1>
                <h2>{beer.tagline}</h2>
                <p>{beer.first_brewed}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </div>
            </div>
        )
    }
}
