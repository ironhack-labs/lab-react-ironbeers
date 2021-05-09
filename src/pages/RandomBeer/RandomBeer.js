import React, { Component } from 'react'
import BeersService from './../../services/beers.service'
import SCRandomBeer from './RandomBeer.styled'
import Navbar from '../../components/Navbar/Navbar'
import BeerDetails from '../../components/BeerDetails/BeerDetails'

export default class RandomBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomBeer: {}
        }
        this.beersService = new BeersService();
    }

    getRandomBeer = () => {
        this.beersService.getRandomBeer()
            .then(response => {
                this.setState({ randomBeer: response.data });
            })
            .catch(err => console.error(err))
    }

    componentDidMount() {
        this.getRandomBeer();
    }

    displayRandomBeer() {
        const { randomBeer } = this.state;
        return (

            <BeerDetails {...randomBeer} />
        )
    }


    render() {
        return (
            <div>
                <Navbar />
                <SCRandomBeer>
                    {
                        this.displayRandomBeer()
                    }
                </SCRandomBeer>
            </div>
        )
    }
}
