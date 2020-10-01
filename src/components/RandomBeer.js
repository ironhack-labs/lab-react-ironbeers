import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import Container from 'react-bootstrap/Container'

import './RandomBeer.css'

import beersService from '../services/beers.service'





class RandomBeer extends Component {
    constructor() {
        super()
        this.state = {}
        this.beersService = new beersService()
    }

    componentDidMount = () => this.loadBeers()

    loadBeers = () => {
        this.beersService
            .getRandomBeer()
            .then(response => {
                console.log()

                this.setState(response.data[Math.floor(Math.random() * response.data.length)])
            })
            .catch(err => console.log('Error:', err))
    }



    render() {
        return (
            <>
                <Container>
                    <main>
                        <h1>RandomBeer</h1>
                        <hr />

                        <article>
                            <img src={this.state.image_url} alt={this.state.name} />
                            <p>{this.state.name}</p>
                            <p>{this.state.description}</p>
                            <p>{this.state.tagline}</p>
                            <p>{this.state.first_brewed}</p>
                            <p>{this.state.attenuation_level}</p>
                            <p>{this.state.contributed_by}</p>

                        </article>
                        <Link to="/" className="btn btn-info btn-sm">Volver al inicio</Link>
                    </main>
                </Container>
            </>
        )
    }
}

export default RandomBeer