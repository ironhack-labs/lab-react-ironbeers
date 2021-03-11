
import React, { Component } from 'react';
import beersService from '../../services/beers-service';

class BeerDetail extends Component {

    state = {
        beer: {}
    }


    componentDidMount () {
        beersService.singleBeer()        
            .then(beer => this.setState({ beer }))/*
            
            .catch(error => console.log(error))
            
    }
        render() {

            console.log(this.state.beer)
            return (
                <div>
                    {this.state.beer.name}
                </div>
            );
        }
    }

export default BeerDetail;*/