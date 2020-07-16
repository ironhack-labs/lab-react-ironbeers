import React, { Component } from 'react'
import BeerService from "../../services/BeerServices"

import Spinner from 'react-bootstrap/Spinner'

import NavBar from "../Ui/Navbar"

class DetailedBeer extends Component {
    constructor() {
        super()
        this.state = {
            beer: undefined
        }
        this.BeerService = new BeerService()
    }
    componentDidMount = () => this.updateBeer()

    updateBeer = () => this.props.match ? this.getBeerInfo("getBeerById", this.props.match.params.beerId)
    : this.getBeerInfo("getRandomBeer")
    
    getBeerInfo(method, param="") {
        this.BeerService
            [method](param)
            .then(response => {
                this.setState({ beer: response.data })
            })
            .catch(err => console.log(err))
    }

    render() {
        const beer = !this.state.beer ? <Spinner animation="border" /> :
            (<>
                <img src={this.state.beer.image_url} alt={this.state.beer.name}/>
                <h3>{this.state.beer.name}</h3>
                <h4>{this.state.beer.attenuation_level}</h4>
                <small>{this.state.beer.tagline}</small>
                <small>{this.state.beer.first_brewed}</small>
                <p>{this.state.beer.description}</p>
                <small>{this.state.beer.contributed_by}</small>

            </>
            )
        return (
            <>
                <main>
                    <NavBar />
                {beer}
            </main>
            </>
        )
    }
}

export default DetailedBeer