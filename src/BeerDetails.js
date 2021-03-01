import React, { Component } from 'react';
import axios from 'axios';

export default class BeerDetails extends Component {

    state = {
        beer: null
    }

    componentDidMount() {
        const id = this.props.match.params.beerId;
        axios.get(`/api/beers/${id}`)
        .then(response => {
            console.log(response);
            this.setState({
                beer: response.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        if (this.state.beer === null) {
            return <h3>Loading...</h3>
        }
        
        return (
            <h3>
                { this.state.beer.name }
            </h3>
        )
        
    }
}
