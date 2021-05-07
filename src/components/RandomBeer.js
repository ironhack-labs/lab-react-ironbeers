import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'


export default class RandomBeer extends Component {
    state = {
        beer: {}
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                console.log('response data: ', response.data)
                const max = response.data.length
                const beer = response.data[Math.floor(Math.random() * max)]
                this.setState({
                    beer: beer
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const beer = this.state.beer;

        return (
            <div>   
                <Header />
                <div className="beer-details">
                    <img src={beer.image_url} alt="" />
                    <h1>{beer.name}</h1>
                    <h2>{beer.tagline}</h2>
                    <h2>{beer.attenuation_level}</h2>
                    <h2>{beer.first_brewed}</h2>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </div>               
            </div>
        )
    }
}