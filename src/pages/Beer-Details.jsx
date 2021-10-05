import axios from 'axios'
import React, { Component } from 'react'

export default class BeerDetails extends Component {

    state = {
        beer: {}
    }

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`).then((result) => {
            this.setState({
                beer: result.data,
                loading: false
            })

        })
    }


    render() {
        return (
            <div>
                <img src={this.state.beer.image_url} />
                <h3> {this.state.beer.name}</h3>
                <p>{this.state.beer.tagline}</p>
                <p>{this.state.beer.contributed_by}</p>
            </div>
        )
    }
}
