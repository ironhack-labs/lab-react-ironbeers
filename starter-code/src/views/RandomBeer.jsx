import axios from 'axios'
import React, { Component } from 'react'
import BeerComponent from '../components/BeerComponent'

export default class RandomBeer extends Component {

    state = {
        beer: [],
        APIurl: "https://ih-beers-api2.herokuapp.com/beers/random"
    }

    componentDidMount() {
        axios.get(this.state.APIurl)
        .then(APIRes => {
            this.setState({beer:APIRes.data})
        })
        .catch(APIErr=>console.log(APIErr))
    }

    render() {
        return (
            <div className="beers-header">
                <h2>Beer</h2>
                <div className="beer-item">
                    <BeerComponent beer={this.state.beer}/> 
                </div>
            </div>
        )
    }
}