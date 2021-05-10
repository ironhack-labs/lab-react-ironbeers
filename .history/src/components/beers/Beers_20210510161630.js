import React, { Component } from 'react';
import BeerServices from '../../services/beers.services';
import BeerElement from '../beerElement/BeerElement';

export default class Beers extends Component {
    constructor (props) {
        super (props);

        this.state = {
            beers: []
        }

        this.beerService = new BeerServices();
    }

    refreshState() {
        this.beerService.getAll()
        .then((response) => {
            console.log(response.data)
            this.setState({ beers: response.data })
        })
        .catch(error => console.error(error))
    }
    
    componentDidMount() {
        this.refreshState();
    }

    displayBeers() {
        return this.state.beers.map(beer => {
            console.log(beer)
            return <BeerElement key={beer._id} {...beer} />
        })
    }

    render() {
        return (
            <div>
               {this.displayBeers()}
            </div>
        )
    }
}
