import React, { Component } from 'react'

import Navbar from '../Navbar'
import BeerDetailCard from '../cards/BeerDetailCard'

class RandomBeer extends Component {
    constructor() {
        super()
        this.state = {
            allBeers: []
        }
    }


    //Mount the component fro the api and update the state with all the beers data
    componentDidMount() {

        const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers'
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => this.setState({ allBeers: data }))
        
      
    }

    randBeer = () => {
        let randNum = Math.floor(Math.random() * this.state.allBeers.length)
        let randBeer = this.state.allBeers[randNum]
        return randBeer
        
    }
    

    render() {
        const randomBeer = this.randBeer()
        
        return (
            <>
                <Navbar />
                {/* <BeerDetailCard data={randomBeer} /> */}
                

            </>
        )
    }
}
export default RandomBeer