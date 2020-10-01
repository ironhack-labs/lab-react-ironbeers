import React, { Component } from 'react'
import BeerDetailCard from '../cards/BeerDetailCard'

 
class BeerDetails extends Component {
    constructor() {
        super()
        this.state = {
            beer: []
        }
    }
 

    //Mount the component fro the api and update the state with all the beers data
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
                
                <BeerDetailCard data={this.state.beer} />
                
            </>
        )
    }
    }
export default BeerDetails