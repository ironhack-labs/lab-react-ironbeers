import React, { Component } from 'react'
import BeerService from "../../services/BeerServices"

import "./MainBeerList.css"

import NavBar from "../Ui/Navbar"
import MainBeerItem from "./BeerListItem"
import SearchBar from "./Searchbar"

import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class BeerList extends Component {
    constructor (){
        super ()
        this.state = {
            beers: undefined,
            beersFiltered: undefined
        }
        this.BeerService = new BeerService()
    }
    componentDidMount = () => this.updateBeerList()

    updateBeerList = () => {
        this.BeerService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data, beersFiltered: response.data }))
            .catch(err => console.log(err))
    }
    filterProducts = word => {
        console.log(word)
        const beersCopy = [...this.state.beers]
        const beersFiltered = beersCopy.filter(elm => elm.name.toLowerCase().includes(word.toLowerCase()))
        this.setState({ beersFiltered })
    }

    render() {
        const beerItems = !this.state.beersFiltered ? <div className="spinner-container"><Spinner animation="border" /></div> :
            this.state.beersFiltered.map(beer => <MainBeerItem key={beer._id} {...beer}/>)
        return (
            <>
                <NavBar />
                <Container as="main" className="main-beers" fluid>
                    <SearchBar filterProducts={this.filterProducts}/>
                    <Row>
                        {beerItems}
                    </Row>
                </Container>
            
            </>
        )
    }
}

export default BeerList