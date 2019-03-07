import React, { Component } from 'react';

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
            <h1>Beers</h1>

        )
    }
}
