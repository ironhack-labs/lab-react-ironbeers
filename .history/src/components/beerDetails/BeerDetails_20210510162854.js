import React, { Component } from 'react'
import BeerServices from '../../services/beers.services';

export default class BeerDetails extends Component {
    constructor (props) {
        super(props);
        this.state = {
            beer: {}
        }
        this.beerService = new BeerServices();
    }

    refreshState(){
        this.beerService.getOne(this.props.)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
