import React, { Component } from 'react';
import Card from './HomeCard'
import BeerServices from '../../services/beer.services'


class Home extends Component {

    constructor() {
        super()
        this.state = {}
        this.services = new BeerServices
    }
    render() {
        return (
            <>
                <Card title='All Beers' image='../../../images/beers.png' url='/beers' />
                <Card title='Random Beer' image='../../../images/random-beer.png' url='/random' />
                <Card title='All Beers' image='../../../images/new-beer.png' url='/beers' />
            </>
        );
    }
}

export default Home;
