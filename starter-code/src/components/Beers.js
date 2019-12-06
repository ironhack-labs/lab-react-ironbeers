import React from 'react'
import Service from '../service/beers.service'
import { Container, Row, Button, Modal } from 'react-bootstrap'
import BeersCard from './BeersCard'


class BeersList extends React.Component {

    constructor() {
        super()
        this._service = new Service()
        this.state = {
            beers: []

        }
    }

    componentDidMount = () => this.updateBeersList()

    updateBeersList = () => {
        this._service.getAllBeers()
            .then(allBeersFromDB => this.setState({ beers: allBeersFromDB.data }))
            .catch(err => console.log("Error", err))
    }

    render() {
        return (
            <section>
                <Container>
                    <h1>Todas nuestras cervezas</h1>
                    <Row>
                        {this.state.beers.map(beers => <BeersCard key={beers._id} {...beers} />)}
                    </Row>
                </Container>
            </section>
        )
    }
}

export default BeersList
