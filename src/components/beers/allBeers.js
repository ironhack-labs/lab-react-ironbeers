import React, { Component } from 'react'
import BeerService from './../../service/beer-service'
import CardBeer from './cardBeer'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'



class Allbeers extends Component {
    constructor() {
        super()
        this.state = {
            beers: []
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
        return (
            <>
                <Container>
                    <Row>
                        {this.state.beers.map((elm, idx) => <CardBeer {...elm} key={elm._id}/>)}
                    </Row>
                </Container>
            </>
        )
    }
}

export default Allbeers