import React, { Component } from 'react'
import axios from 'axios';
import IdBeer from './IdBeer.js'

class DetailBeer extends Component {
    state = {
        simpleBeer: {}
    }
    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`)
            .then(response => {
                this.setState({
                    simpleBeer: response.data
                })
            })
    }
    render() {
        return (
            <IdBeer {...this.state.simpleBeer}></IdBeer>
        )
    }
}

export default DetailBeer