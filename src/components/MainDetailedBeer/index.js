import React, { Component } from 'react'
import BeerService from "../../services/BeerServices"

import "./MainDetailedBeer.css"

import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import NavBar from "../Ui/Navbar"

class DetailedBeer extends Component {
    constructor() {
        super()
        this.state = {
            beer: undefined
        }
        this.BeerService = new BeerService()
    }
    componentDidMount = () => this.updateBeer()

    updateBeer = () => this.props.match ? this.getBeerInfo("getBeerById", this.props.match.params.beerId)
    : this.getBeerInfo("getRandomBeer")
    
    getBeerInfo(method, param="") {
        this.BeerService
            [method](param)
            .then(response => {
                this.setState({ beer: response.data })
            })
            .catch(err => console.log(err))
    }

    render() {
        const beer = !this.state.beer ? <div className="spinner-container"><Spinner animation="border" /></div> :
            (<>
                <Col sm="12" className="column">
                    <img className="detail-beer-image" src={this.state.beer.image_url} alt={this.state.beer.name} />
                </Col>
                <Col sm="12" className="separate-elements column">
                    <h3>{this.state.beer.name}</h3>
                    <h4 className="light-grey">{this.state.beer.attenuation_level}</h4>
                </Col>
                <Col sm="12" className="separate-elements column">
                    <p className="light-grey">{this.state.beer.tagline}</p>
                    <p className="bold">{this.state.beer.first_brewed}</p>
                </Col>
                <Col sm="12" className="column">
                    <p>{this.state.beer.description}</p>
                    <small>{this.state.beer.contributed_by}</small>
                </Col>
            </>
            )
        return (
            <>
                <NavBar />
                <Container as="main">
                    <Row>
                        {beer}
                    </Row>
                </Container>
            </>
        )
    }
}

export default DetailedBeer