import React, { Component } from 'react'
import axios from 'axios'
const API = 'https://ih-beers-api2.herokuapp.com/beers'

export default class BeerDetails extends Component {

    constructor (props) {
        super(props);
        this.state = {
            beer: []
        }
    }

    componentDidMount () {
        axios.get(API)
        .then(res => 
            this.setState({
                beer: res.data
            }))
        .catch(err => console.log(err))
    }

    findBeer = (id) => {
       return this.state.beer.find(beer => {
        return beer._id === id
        })
        // return this.state.beer._id === id
    }

    render() {
        const {id} = this.props.match.params
        const beer = this.findBeer(id)

        if(!beer) return <></>
        return (
            <div>
                <h1>{beer.name}</h1>
                
            </div>
        )
    }
}
