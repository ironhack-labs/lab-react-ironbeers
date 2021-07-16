import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import BeersService from './../../services/beers.service'
import BeerCard from './BeerCard'

class RandomBeer extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined
        }
        this.BeersService = new BeersService()
    }

    loadBeers = () => {
        this.BeersService
            .getRandomBeer()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadBeers()
    }


    render() {

        return (

            !this.state.beers
                ?
                <h3>CARGANDO...</h3>
                :
                (<>
                    <Link to="/">Home</Link>

                    {/* <Button onClick={() => this.setState({ modal: true })} variant="dark" style={{ marginBottom: '20px' }}>Crear nueva montaña</Button> */}

                    <div>
                        <BeerCard beers={this.state.beers} />
                    </div>
                    {/* <CoasterForm refreshCoasters={this.loadBeers} closeModal={() => this.setState({ modal: false })} /> */}

                </>
                )
        )
    }
}

export default RandomBeer