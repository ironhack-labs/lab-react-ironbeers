import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Details extends Component {
    state = {
        beer: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`/beers/${id}`)
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
            return <h3>Loading</h3>
        }
        return (
            <h3>
                beer Details
                <p>{this.state.beer.name}</p>
            </h3>
        )
    }
}
