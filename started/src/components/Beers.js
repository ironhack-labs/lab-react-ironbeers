import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/misc/Header';

// import { beersList } from '../services/BeersServices';

export default class Beers extends Component {
    state = {
        beers: [],
        error: false
    }

    // componentDidMount = () => {
    //     beersList()
    //         .then(
    //             response => this.setState({ beers: response.data }),
    //             error => this.setState({ error: true })

    //         );
    // }

    render () {
        return(
            <div>
            <Header></Header>
            <h1>Beers</h1>
            </div>
        )
    }
}
