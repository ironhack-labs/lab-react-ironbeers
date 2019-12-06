import React from 'react'
import Service from '../services/Beers.service'

import { Container, Row, Col, Modal } from 'react-bootstrap'

import BeerCard from './Beer-card'

class BeerRandom extends React.Component {

    constructor() {
        super()
        this._service = new Service()
        this.state = {
            beers: {},

        }
    }

    componentDidMount = () => this.updateBeerList()

    updateBeerList = () => {
        this._service.getRandomBeer()
            .then(randomBeerFromDB => this.setState({ beers: randomBeerFromDB.data }))
            .catch(err => console.log("Error", err))
    }



    render() {
        return (


            <section>

                <Container>

                    <h1>Random Beer</h1>

                    <Row>
                        <Col className="coaster-card" md={4}>
                            <img src={ this.state.beers.image_url} alt={this.state.beers.name} />
                            <h3>{this.state.beers.name}</h3>
                            <p>{this.state.beers.tagline}</p>
                            <small>Brewed: {this.state.beers.first_brewed}</small>
            
                        </Col >
                    </Row>
                </Container>



            </section>

        )
    }
}


export default BeerRandom