import React, { Component } from 'react'
import BeerService from './../../services/beer.service'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './beers.css'



class AllBeers extends Component {
    constructor() {
        super()
        this.state = {
            beers: []
        }
        this.BeerService = new BeerService()
    }


    getBeers = () => {
        this.BeerService.getBeers().then(beers => {
            this.setState({
                beers: beers.data
            })


        }).catch(error => console.log(error))

    }


    componentDidMount() {
        this.getBeers()
    }



    render() {
        return (

            <Container>
                <Row style={{ justifyContent: 'center', marginBottom: '100px' }}>
                    {this.state.beers.map(beer => {
                        return (
                            <>
                                <Col md={3} className={'cards'}>
                                    <img src={beer.image_url} alt={beer.name} style={{ display: 'block', marginLeft: 'auto' }} />
                                </Col>

                                <Col md={3} className={'cards'}>
                                    <h4>{beer.name}</h4>
                                    <p>{beer.tagline}</p>
                                    <p>{beer.contributed_by}</p>
                                    <Link to={`/beers/${beer._id}`}>details</Link>
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </Container>

        )
    }
}

export default AllBeers