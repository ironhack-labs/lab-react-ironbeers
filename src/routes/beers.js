import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import beerService from '../services/beerService';
import BeerCard from '../components/BeerCard/BeerCard';


export default class Beers extends React.Component {
    constructor() {
        super()
        this.state = {
            beers: []
        }
        this.beerService = new beerService();
        this.getBeers();
    }

    getBeers = () => {
        this.beerService.getBeers()
            .then(beersData => {
                this.setState({...this.state, beers: beersData})
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="container">
                < NavBar />
                {this.state.beers.map((e, idx) => <BeerCard key={idx} {...e} />)}
            </div>
        )
    }
}
