import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BeersApi from '../services/beers-api'
import Nav from '../components/Header'



class BeerDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { beers: {} }
        this.services = new BeersApi()

    }

    componentDidMount() {
        this.services.getOneBeer(this.props.match.params.id)
            .then(beer => this.setState({ beers: beer }))
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
                <Link to={'/beers'} >Volver</Link>
            </div >
        )
    }
}

export default BeerDetails