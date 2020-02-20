import axios from 'axios'
import React, { Component } from 'react'
import BeerComponent from '../components/BeerComponent'

export default class OneBeer extends Component {

    state = {
        beer: [],
        APIurl: "https://ih-beers-api2.herokuapp.com/beers/"
    }

    componentDidMount() {
        axios.get(`${this.state.APIurl}${this.props.match.params.id}`)
        .then(APIRes => {
            this.setState({beer:APIRes.data})
        })
        .catch(APIErr=>console.log(APIErr))
    }

    render() {
        return (
            <div>
                <h1>Beer</h1>
                <div className="beer-item">
                    <BeerComponent beer={this.state.beer}/> 
                </div>
            </div>
        )
    }
}