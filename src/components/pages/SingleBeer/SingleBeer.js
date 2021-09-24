import React, { Component } from 'react'


import BeersService from '../../../services/beers.service';

export default class BeerDetails extends Component {
    constructor() {
        super();

        this.state = {
            beer: null
        }

        this.BeersService = new BeersService();
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        this.BeersService.getOneBeer(id)
            .then(res => {
                this.setState({
                    ...this.state,
                    beer: res.data.beer
                })
            })
            .catch(err => console.error(err))

    }

    render() {

        return (
            <div>
                {this.state.beer ?
                    <div>
                        <img src={this.state.beer.image_url} alt={this.state.beer.name} />
                        <hr />
                        <h1>Beer: {this.state.beer.name}</h1>
                        <h3>Description: {this.state.beer.description}</h3>


                        <p>tagline: {this.state.beer.tagline}</p>
                        <p>first brewed: {this.state.beer.first_brewed}</p>
                        <p>attenuation level: {this.state.beer.attenuation_level}</p>
                        <p>contributed by: {this.state.beer.contributed_by}</p>

                    </div>

                    :
                    <h3>Cargando...</h3>
                }
            </div>
        )
    }
}