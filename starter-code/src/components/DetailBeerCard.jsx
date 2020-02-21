import React, { Component } from 'react';
import {getBeer} from '../services/beerService';
import BeerCard from '../components/BeerCard';
export default class DetailBeerCard extends Component {

    state={
        beer: {}
    }

    async componentDidMount(){
        const{beerId} = this.props;
        const beer= await getBeer(beerId)
        this.setState({beer})

    }

    render() {
        return (
            <> 
                <BeerCard 
                    name =  {this.state.beer.name}
                    img = {this.state.beer.image_url}
                    contributed_by = {this.state.beer.contributed_by}
                    tagline = {this.state.beer.tagline}
                />
            </>
        )
    }
}
