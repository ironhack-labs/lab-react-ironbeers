import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../../layout/Header/Header'
import BeerServices from '../../../services/beer.services'

export default class BeersPage extends React.Component {

    constructor(){

        super()

        this.state = {
            beers: null
        }

    this.beerService = new BeerServices();

    }

    componentDidMount(){
        this.beerService.getBeers()
        .then(res => {
            console.log(res.data)
            this.setState({
                ...this.state,
                beers: res.data
            })
        })
    }
    
    displayBeers = () => {
        return(
            this.state.beers ?
                this.state.beers.map(beer => {
                    return (
                        <Row>
                            <Col>
                                <img className='img-home' src={beer.image_url} alt='s'></img>
                            </Col>
                            <Col>
                                <h2>{beer.name}</h2>
                                <p>{beer.tagline}</p>
                                <p>{beer.contributed_by}</p>
                            </Col>
                        </Row>
                    )
                }) : 
                <p>Cargando</p>
        )

    }

    render(){
        
        return (
            <Container>
                <Header/>
                {this.displayBeers()}
            </Container>
            )
        }
}
