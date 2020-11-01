import React, { Component } from 'react'
import axios from "axios"
import BeerInfo from './BeerInfo';

export default class BeerDetails extends Component {
    state = {
        beer: {}
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get("https://ih-beers-api2.herokuapp.com/beers/" + id)
        .then((response) => {
            this.setState({
                beer: response.data
            })
        })
    }

    render() {
        const {beer} = this.state;

        return (
            <div>
                <BeerInfo beer={beer} />
            </div>
        )
    }
}
