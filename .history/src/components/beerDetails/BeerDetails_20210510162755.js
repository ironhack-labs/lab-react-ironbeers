import React, { Component } from 'react'
import BeerService from '../../services/beers.services';
import BeerServices from '../../services/beers.services';

export default class BeerDetails extends Component {
    constructor (props) {
        super(props);
        this.state = {
            beer: {}
        }
        this.beerService = new BeerServices();
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
