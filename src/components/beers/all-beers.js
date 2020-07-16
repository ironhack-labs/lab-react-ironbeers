import React, { Component } from 'react';


import beerService from '../service/service'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'



class AllBeers extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined,
        }
        this.beerService = new beerService()
    }



    componentDidMount = () => this.updateBeerList()

    updateBeerList = () => {
        this.beerService
            .getBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }



    render() {
        console.log(this.state.beers)
        return (
            <>
                {this.state.beers(contact => <p>contact.name</p>)}


            </>
        )
    }
}

export default AllBeers;