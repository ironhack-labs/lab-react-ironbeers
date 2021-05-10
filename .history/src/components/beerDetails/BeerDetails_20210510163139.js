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
        this.beerService.getOne(this.props.match.params.id)
        .then(({ response }) => {
            this.setState({ beer: response.data});
        })
        .catch(error => console.error(error));
    }

    componentDidMount() {
        this.refreshState();
    }

    render() {
        return (
            <div>
               <Beer 
            </div>
        )
    }
}
