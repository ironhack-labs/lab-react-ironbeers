import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap'
import BeersService from '../../../services/beers.service'

export default class Random extends Component {
    constructor() {
        super()

        this.state = {
            beer: null
        }
        this.beersService = new BeersService()
    }


    componentDidMount() {
        this.refreshBeer()
    }


    displayBeer = () => {
        return (
            <div className="row justify-content-center m-3">
                <div className="col-6 justify-content-center text-center mb-5">
                    <img src={this.state.beer.image_url} alt="this.state.beer.name" height="300px" />
                </div>
                <div className="col-8 mb-3">
                    <h1>{this.state.beer.name}</h1>
                </div>
                <div className="col text-end mb-3">
                    <h1 className="text-secondary">
                        {this.state.beer.attenuation_level}
                    </h1>
                </div>
                <div className="col-6 mb-3">
                    <h5 className="text-secondary">
                        {this.state.beer.tagline}
                    </h5>
                </div>
                <div className="col text-end mb-3">
                    <h6>
                        {this.state.beer.first_brewed}
                    </h6>
                </div>
                <p>
                    {this.state.beer.description}
                </p>
                <small>
                    {this.state.beer.contributed_by}
                </small>
            </div>
        )
    }


    refreshBeer = () => {
        this.beersService.getRandomBeer()
            .then(res => {
                this.setState({
                    ...this.state,
                    beer: res.data
                })
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            this.state.beer
                ?
                <div className="container mt-5">
                    {this.displayBeer()}
                </div>
                :
                <div className="row justify-content-center">
                    <Spinner animation="grow" />
                </div>
        )
    }
}
