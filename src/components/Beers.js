import React, { Component } from 'react'
import BeersService from '../service/BeersService'
import Container from 'react-bootstrap/Container'
import BeerCard from './BeerCards'

class BeersList extends Component {

    constructor() {
        super()
        this.state = {
            beers: []

        }
        this.BeersServices = new BeersService()
    }
    componentDidMount = () => this.getAllBeers()

    getAllBeers = () => {
        this.BeersServices.getAllBeers()
        .then(allbeers => this.setState({beers: allbeers}))
        .catch(err => console.log(err))
    }

    render() {

        console.log(this.state.beers);

        return (

            <Container className="mt-5">

                <h1>Beers list</h1>


                <ul className="list-unstyled">
                    {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                </ul>


            </Container>
            
        )
    }
}





export default BeersList