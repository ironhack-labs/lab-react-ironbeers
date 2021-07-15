import React, { Component } from 'react';
import BeersService from './../../services/beer.services'


class BeersList extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined,
        }
        this.beersService = new BeersService()
        // console.log(this.beersService)
    }


    componentDidMount() {

        const { beer_id } = this.props.match.params
        console.log(beer_id)

        this.beersService
            .getBeerDetails(beer_id)
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }


    render() {

        return (
            <div>
            {!this.state.beers
                ?
                <h3>Cargando</h3>
                :
                <div>                
                    <h1>{this.state.beers.name}</h1>
                    <img src={this.state.beers.image_url} />
                </div>
            }
            </div>



        )
    }
}


export default BeersList