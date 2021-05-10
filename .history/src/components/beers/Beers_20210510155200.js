import React, { Component } from 'react';
import BeerServices from '../../services/beers.services';
import BeerElement from '../beerElement/BeerElement';

const beerList = [...BeerServices];

export default class Beers extends Component {
    constructor (props) {
        super (props);

        this.state = {
            beers: []
        }

        this.beerService = new BeerServices();
    }

    componentDidMount() {
        this.beerService.getAll()
        .then((response) => {
            console.log(response.data)
            this.setState({ beers: response.data })
        })
        .catch(error => console.error(error))
    }

    displayBeers

    render() {
        return (
            <div>
               
            </div>
        )
    }
}
