import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import Container from 'react-bootstrap/Container'

import Button from 'react-bootstrap/Button'


import beersService from '../services/beers.service'

import './BeersList.css'




class BeersList extends Component {
    constructor() {
        super()
        this.state = {
            beers: [],

        }
        this.beersService = new beersService()
    }

    componentDidMount = () => this.loadBeers()

    loadBeers = () => {
        this.beersService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log('Error:', err))
    }



    render() {
        return (
            <>
                <Container>
                    <main>
                        <h1>Listado de Cervezas</h1>
                       <hr/>

                        {this.state.beers.map((elm, idx) => <figure key={idx}>


                            <img src={elm.image_url} alt={elm.name} />
                            <p>{elm.name}</p>
                            <p style={{ color: 'grey' }}>{elm.tagline}</p>
                            <p style={{fontWeight:'bold'}}>Created By:{elm.contributed_by}</p>

                        <Link to={`/beers/${elm._id}`}>
                        <Button variant="info" size="sm" block>Detalles</Button>
                        <hr/>
                        </Link>
                        </figure>
                        )}

                    </main>
                </Container>


            </>
        )
    }
}

export default BeersList