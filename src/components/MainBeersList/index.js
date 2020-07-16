import React, { Component } from 'react'
import BeerService from "../../services/BeerServices"

import NavBar from "../Ui/Navbar"
import MainBeerItem from "./BeerListItem"

import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class BeerList extends Component {
    constructor (){
        super ()
        this.state = {
            beers: undefined
        }
        this.BeerService = new BeerService()
    }
    componentDidMount = () => this.updateBeerList()

    updateBeerList = () => {
        this.BeerService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }
    render() {
        const beerItems = !this.state.beers ? <Spinner animation="border" /> :
            this.state.beers.map(beer => <MainBeerItem key={beer._id} {...beer}/>)
        return (
            <>
                <NavBar />
                <Container fluid>
                    <Row>
                        {beerItems}
                    </Row>
                </Container>
            
            </>
        )
    }
}

export default BeerList