import React, { Component } from 'react'
import BeerDetail from './BeerDetail'

class BeerDetails extends Component {
    constructor() {
        super()
        this.state = {
            beer: []
        }
    }

    componentDidMount() {
        const beerId = this.props.match.params.id
        
        const apiUrl = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => this.setState({beer: data}))
    }    

    render() {
 
        return (
            <>
                <BeerDetail data={this.state.beer} /> 
            </>
        )
    }
    }
export default BeerDetails