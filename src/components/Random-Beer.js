import React, { Component } from 'react'
import BeersApi from '../services/beers-api'
import Nav from '../components/Header'
import { Link } from 'react-router-dom'

class RandomBeer extends Component {
    constructor() {
        super()
        this.state = {
            beers: [],
        }
        this.services = new BeersApi()
    }
    componentDidMount() {
        this.services.getRandom()
            .then(beers => this.setState({ beers: beers }))
    }

    render() {
        const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = this.state.beers
        return (
            <div >
                <Nav />
                <img src={image_url} alt={name} />
                <h1>{name}</h1>
                <p>{tagline}</p>
                <p>{first_brewed}</p>
                <p>{attenuation_level}</p>
                <p>{description}</p>
                <p>{contributed_by}</p>
                <Link to={'/'} >Volver</Link>
            </div >
        )
    }



}


export default RandomBeer
