import React, { Component } from 'react'
import BeersServices from './../../../services/beers.services'
import './beerDetails.css'

class BeerDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beer: {}
        }
        this.services = new BeersServices()
    }

    getBeerDetails = () => {
        this.services.getBeerDetails(this.props.match.params.id)
            .then(response => this.setState({
                beer: response
            }))
            .catch(err => console.log(err))
    }

    getRandomBeer = () => {
        this.services.getRandomBeer()
            .then(response => this.setState({
                beer: response
            }))
            .catch(err => console.log(err))
    }

    componentDidMount = () => this.props.match.url === "/random-beer" ? this.getRandomBeer() : this.getBeerDetails()

    render() {
        return (
            <div className="container">
                <div className="beer-details">
                    <div className="img-container">
                        <img src={this.state.beer.image_url} alt={this.state.beer.name} />
                    </div>
                    <div className="beer-data">
                        <div className="data-container">
                            <p className="title">{this.state.beer.name}</p>
                            <p className="attenuation">{this.state.beer.attenuation_level}</p>
                        </div>
                        <div className="data-container">
                            <p className="tagline">{this.state.beer.tagline}</p>
                            <p className="first-brewed">{this.state.beer.first_brewed}</p>
                        </div>
                        <p className="description">{this.state.beer.description}</p>
                        <p className="contributed-by">{this.state.beer.contributed_by}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BeerDetails

