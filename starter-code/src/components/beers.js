import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BeerDetail from './beerDetail';

export default class beers extends Component {
    constructor() {
        super();
        this.state = {
            beers: []
        };
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                this.setState({ beers: response.data })
            })
    }


    render() {
        return (
            <div>
                <header>
                    <Link to="/"> <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="home" /> </Link>
                </header>
                <div>
                    {this.state.beers.map(one => { return <BeerDetail key={one._id} {...one}/> }) }
                </div>
            </div>
        )
    }
}
